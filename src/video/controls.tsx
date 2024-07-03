import React, { useContext, useEffect, useState } from "react";
import { FaPlay, FaPause, FaExpand } from "react-icons/fa";
import { VideoContext } from "./context";
import { MdSettings } from "react-icons/md";
import { FaFastForward } from "react-icons/fa";
import { useControls } from "./hooks/useControls";
import { MdFullscreenExit } from "react-icons/md";
import {
  RiPictureInPicture2Line,
  RiPictureInPictureExitFill,
} from "react-icons/ri";
import styles from "./styles/video.module.scss";
import { VideoTime } from "./components/VideoTime";
import { VideoVolumeControlBar } from "./components/VolumeControl";
import { VideoProgressBar } from "./components/ProgressBar";

export const VideoControls = () => {
  const { overlayRef } = useContext(VideoContext);

  return (
    <div className={styles.videoOverlay} ref={overlayRef}>
      <VideoLoader />
      <VideoControlsContainer />
    </div>
  );
};

const VideoLoader = () => {
  const { videoRef } = useContext(VideoContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      const handleLoadedData = () => {
        setIsLoading(false);
      };

      videoRef.current.addEventListener("loadeddata", handleLoadedData);

      return () => {
        videoRef.current?.removeEventListener("loadeddata", handleLoadedData);
      };
    }
  }, [videoRef.current]);

  useEffect(() => {
    if (videoRef.current) {
      const handleCanPlay = () => {
        setIsLoading(false);
      };

      videoRef.current.addEventListener("canplay", handleCanPlay);

      return () => {
        videoRef.current?.removeEventListener("canplay", handleCanPlay);
      };
    }
  }, [videoRef.current]);

  // check if video is still loading
  useEffect(() => {
    if (videoRef.current) {
      const handleWaiting = () => {
        setIsLoading(true);
      };

      videoRef.current.addEventListener("waiting", handleWaiting);

      return () => {
        videoRef.current?.removeEventListener("waiting", handleWaiting);
      };
    }
  }, [videoRef.current]);

  if (!isLoading) {
    return null;
  }
  return (
    <div className={styles.videoLoader}>
      <div className={styles.videoLoaderSpinner}></div>
    </div>
  );
};

const VideoControlsContainer = () => {
  const { containerRef } = useContext(VideoContext);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let timeout: any;
      if (isInteracting) {
        timeout = setTimeout(() => {
          setIsInteracting(false);
        }, 5000);
      }

      const handleMouseEnter = () => {
        setIsInteracting(true);
      };

      const handleMouseLeave = () => {
        setIsInteracting(false);
      };

      const handleMouseMove = () => {
        setIsInteracting(true);

        if (timeout) {
          clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
          setIsInteracting(false);
        }, 5000);
      };

      containerRef.current.addEventListener("mouseenter", handleMouseEnter);
      containerRef.current.addEventListener("mouseleave", handleMouseLeave);
      containerRef.current.addEventListener("mousemove", handleMouseMove);

      return () => {
        containerRef.current?.removeEventListener(
          "mouseenter",
          handleMouseEnter
        );
        containerRef.current?.removeEventListener(
          "mouseleave",
          handleMouseLeave
        );
        containerRef.current?.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [containerRef.current]);

  return (
    <div
      className={styles.videoControlsContainer}
      style={{ display: isInteracting ? "flex" : "none" }}
    >
      <VideoTime />
      <VideoProgressBar />
      <VideoControlsBar />
    </div>
  );
};

export const VideoPoster = ({ src }: { src: string }) => {
  const { videoRef } = useContext(VideoContext);
  const { play } = useControls();
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.poster = src;
    }
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      const handlePlay = () => {
        setIsPlaying(true);
      };

      videoRef.current.addEventListener("play", handlePlay);

      return () => {
        videoRef.current?.removeEventListener("play", handlePlay);
      };
    }
  }, [videoRef.current]);

  if (isPlaying) {
    return null;
  }

  return (
    <div
      className={styles.videoPoster}
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <button className={styles.videoPosterPlayButton} onClick={play}>
        <FaPlay />
      </button>
    </div>
  );
};

const VideoControlsBar = () => {
  return (
    <div className={styles.videoControlsBar}>
      <div className={styles.videoControlsBarLeft}>
        <VideoPlayPauseButton />
        <VideoFastForwardButton />
        <VideoVolumeControlBar />
      </div>
      <div className={styles.videoControlsBarRight}>
        <PictureInPictureButton />
        <VideoFullScreenButton />
        <VideoSettingsButton />
      </div>
    </div>
  );
};

const VideoFastForwardButton = () => {
  const { forward } = useControls();

  return (
    <button className={styles.videoControlsButton} onClick={forward}>
      <FaFastForward />
    </button>
  );
};

const VideoSettingsButton = () => {
  return (
    <button className={styles.videoControlsButton}>
      <MdSettings />
    </button>
  );
};

const VideoFullScreenButton = () => {
  //const { containerRef } = useContext(VideoContext);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const { toggleFullscreen } = useControls();

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  return (
    <button className={styles.videoControlsButton} onClick={toggleFullscreen}>
      {isFullScreen ? <MdFullscreenExit /> : <FaExpand />}
    </button>
  );
};

const PictureInPictureButton = () => {
  const { videoRef } = useContext(VideoContext);
  const [isPip, setIsPip] = useState(false);
  const { togglePip } = useControls();

  useEffect(() => {
    if (videoRef.current) {
      const handleEnterPip = () => {
        setIsPip(true);
      };

      const handleLeavePip = () => {
        setIsPip(false);
      };

      videoRef.current.addEventListener(
        "enterpictureinpicture",
        handleEnterPip
      );
      videoRef.current.addEventListener(
        "leavepictureinpicture",
        handleLeavePip
      );

      return () => {
        videoRef.current?.removeEventListener(
          "enterpictureinpicture",
          handleEnterPip
        );
        videoRef.current?.removeEventListener(
          "leavepictureinpicture",
          handleLeavePip
        );
      };
    }
  }, [videoRef.current]);

  return (
    <button className={styles.videoControlsButton} onClick={togglePip}>
      {isPip ? <RiPictureInPictureExitFill /> : <RiPictureInPicture2Line />}
    </button>
  );
};

const VideoPlayPauseButton = () => {
  const { togglePlay } = useControls();
  const { videoRef } = useContext(VideoContext);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === " ") {
        togglePlay();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      const handlePlay = () => {
        setIsPlaying(true);
      };

      const handlePause = () => {
        setIsPlaying(false);
      };

      videoRef.current.addEventListener("play", handlePlay);
      videoRef.current.addEventListener("pause", handlePause);

      return () => {
        videoRef.current?.removeEventListener("play", handlePlay);
        videoRef.current?.removeEventListener("pause", handlePause);
      };
    }
  }, [videoRef.current]);
  return (
    <button className={styles.videoControlsButton}>
      {isPlaying ? (
        <FaPause onClick={togglePlay} />
      ) : (
        <FaPlay onClick={togglePlay} />
      )}
    </button>
  );
};
