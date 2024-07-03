import React, {
  useContext,
  useEffect,
  forwardRef,
  MutableRefObject,
} from "react";
import { VideoContext, VideoCTXProvider } from "./context";
import { VideoControls, VideoPoster } from "./controls";
import { VideoElement } from "./element";
import styles from "./styles/video.module.scss";
import { VideoProps, VideoPlayerRef } from "./types";
import { useControls } from "./hooks/useControls";
import { FaExpand, FaPlay, FaVolumeMute } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { MdPictureInPicture } from "react-icons/md";
import { ContextMenu } from "./components/ContextMenu";

/**
 * A Video Component
 * @param props - VideoProps
 * @returns A Video Component
 * @example
 * ```tsx
 * <Video
 *   src="https://www.example.com/video.mp4"
 *   height={500}
 *   width={800}
 *   poster="https://www.example.com/poster.jpg"
 * />
 * ```
 * @example
 * ```tsx
 * <Video
 *   controls={false}
 *   src="/video.mp4"
 *   height={500}
 *   width={800}
 *   poster="/poster.jpg"
 *   onTimeUpdate={(time) => console.log(time)}
 * />
 * ```
 * @see https://open.cranom.tech/reactjs-media/video-player
 * @link https://open.cranom.tech/reactjs-media/api#video
 */
const Video = forwardRef<VideoPlayerRef, VideoProps>(function Video(
  props,
  ref
) {
  return (
    <VideoProvider
      {...props}
      // @ts-expect-error - ref is a MutableRefObject
      ref={ref}
    >
      <VideoElement src={props.src} controls={false} />
      {props.controls && <VideoControls />}
      <VideoPoster src={props.poster} />
      <ContextMenu />
    </VideoProvider>
  );
});

export const VideoProvider = forwardRef<
  MutableRefObject<VideoPlayerRef | null>,
  VideoProps & { children: React.ReactNode }
>(function VideoProvider(props, ref) {
  return (
    <VideoCTXProvider>
      <VideoRoot {...props} ref={ref}>
        {props.children}
      </VideoRoot>
    </VideoCTXProvider>
  );
});

const VideoRoot = forwardRef<
  MutableRefObject<VideoPlayerRef | null>,
  VideoProps & { children: React.ReactNode }
>(function VideoRoot(props, ref) {
  const {
    containerRef,
    setSeekPreview,
    setContextMenuItems,
    setMenuClientX,
    setMenuClientY,
    setMenuOpen,
    overlayRef,
  } = useContext(VideoContext);
  const {
    play,
    pause,
    togglePlay,
    updatePlaybackRate,
    updateVolume,
    seek,
    toggleFullscreen,
    togglePip,
    toggleMute,
  } = useControls();

  useEffect(() => {
    setSeekPreview(!!props.seekPreview);
  }, [props.seekPreview]);

  // Expose Video Player Controls
  useEffect(() => {
    if (!ref) return;

    // @ts-expect-error - ref is a MutableRefObject
    ref.current = {
      play,
      pause,
      seek,
      volume: updateVolume,
      playbackRate: updatePlaybackRate,
      toggleFullscreen,
      togglePip,
      toggleMute,
      togglePlay,
    };
  }, []);

  // Register Event Listeners
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const video = container.querySelector("video");
    if (!video) return;

    const onTimeUpdate = () => {
      if (props.onTimeUpdate) props.onTimeUpdate(video.currentTime);
    };

    const onPlay = () => {
      if (props.onPlay) props.onPlay();
    };

    const onPause = () => {
      if (props.onPause) props.onPause();
    };

    const onEnded = () => {
      if (props.onEnded) props.onEnded();
    };

    const onVolumeChange = () => {
      if (props.onVolumeChange) props.onVolumeChange(video.volume);
    };

    const onSeeking = () => {
      if (props.onSeeking) props.onSeeking();
    };

    const onSeeked = () => {
      if (props.onSeeked) props.onSeeked();
    };

    const onLoadedMetadata = () => {
      if (props.onLoadedMetadata) props.onLoadedMetadata();
    };

    const onLoadedData = () => {
      if (props.onLoadedData) props.onLoadedData();
    };

    const onCanPlay = () => {
      if (props.onCanPlay) props.onCanPlay();
    };

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("ended", onEnded);
    video.addEventListener("volumechange", onVolumeChange);
    video.addEventListener("seeking", onSeeking);
    video.addEventListener("seeked", onSeeked);
    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("loadeddata", onLoadedData);
    video.addEventListener("canplay", onCanPlay);

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("volumechange", onVolumeChange);
      video.removeEventListener("seeking", onSeeking);
      video.removeEventListener("seeked", onSeeked);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("loadeddata", onLoadedData);
      video.removeEventListener("canplay", onCanPlay);
    };
  }, []);

  const CONTEXT_MENU_ITEMS = [
    {
      label: "Play",
      onClick: play,
      icon: <FaPlay />,
    },
    {
      label: "Pause",
      onClick: pause,
      icon: <FaPause />,
    },
    {
      label: "Toggle Fullscreen",
      onClick: toggleFullscreen,
      icon: <FaExpand />,
    },
    {
      label: "Toggle Picture in Picture",
      onClick: togglePip,
      icon: <MdPictureInPicture />,
    },
    {
      label: "Toggle Mute",
      onClick: toggleMute,
      icon: <FaVolumeMute />,
    },
  ];

  // set context menu items
  useEffect(() => {
    if (props.contextMenu) {
      if (props.contextMenuItems) {
        setContextMenuItems(props.contextMenuItems);
      } else {
        setContextMenuItems(CONTEXT_MENU_ITEMS);
      }
      // register context menu event listener
      overlayRef.current?.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        setMenuClientX(e.clientX);
        setMenuClientY(e.clientY);
        setMenuOpen(true);
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.videoRoot}
      style={{
        maxHeight: props.height,
        maxWidth: props.width,
      }}
    >
      {props.children}
    </div>
  );
});

export default Video;
