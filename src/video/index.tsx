import {
  useContext,
  useEffect,
  forwardRef,
  useRef,
  MutableRefObject,
} from "react";
import { VideoContext, VideoProvider } from "./context";
import { VideoControls, VideoPoster } from "./controls";
import { VideoElement } from "./element";
import styles from "./styles/video.module.scss";
import { VideoProps, VideoPlayerRef } from "./types";
import { useControls } from "./hooks/useControls";

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
 * @link https://open.cranom.cloud/reactjs-media/video
 */
const Video = forwardRef<any, VideoProps>((props, ref) => {
  return (
    <VideoProvider>
      <VideoRoot {...props} ref={ref}>
        <VideoElement src={props.src} controls={false} />
        {props.controls && <VideoControls />}
        <VideoPoster src={props.poster} />
      </VideoRoot>
    </VideoProvider>
  );
});

const VideoRoot = forwardRef<
  MutableRefObject<VideoPlayerRef | null>,
  VideoProps & { children: React.ReactNode }
>((props, ref) => {
  const { containerRef } = useContext(VideoContext);
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

  // Expose Video Player Controls
  useEffect(() => {
    if (!ref) return;

    // @ts-ignore
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
