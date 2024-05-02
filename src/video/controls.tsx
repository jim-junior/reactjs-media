import { useContext, useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { VideoContext } from "./context";
import "./styles/video.scss";
import { MdSettings } from "react-icons/md";
import { FaFastForward } from "react-icons/fa";
import { BsFillRewindFill } from "react-icons/bs";
import { FaVolumeLow } from "react-icons/fa6";
import { useControls } from "./hooks/useControls";
import { FaVolumeMute, FaVolumeUp, FaVolumeOff } from "react-icons/fa";
import { MdOutlineFullscreen, MdFullscreenExit } from "react-icons/md";
import {
  RiPictureInPicture2Line,
  RiPictureInPictureExitFill,
} from "react-icons/ri";

export const VideoControls = () => {
  const { videoRef } = useContext(VideoContext);
  const [isPlaying, setIsPlaying] = useState(false);

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
    <div className="video-overlay">
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
    <div className="video-loader">
      <div className="video-loader__spinner"></div>
    </div>
  );
};

const VideoControlsContainer = () => {
  const { containerRef } = useContext(VideoContext);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
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
      className="video-controls-container"
      style={{ display: isInteracting ? "flex" : "none" }}
    >
      <VideoProgressBar />
      <VideoControlsBar />
    </div>
  );
};

const VideoProgressBar = () => {
  const { videoRef } = useContext(VideoContext);
  const [videoPercentagePlayed, setVideoPercentagePlayed] = useState(0);
  const progressBar = useRef<HTMLDivElement>(null);
  const [hoveringPrecentage, setHoveringPercentage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverTime, setHoverTime] = useState("00:00");
  const [hoverTimeStamp, setHoverTimeStamp] = useState(0);

  function seek(e: MouseEvent) {
    if (progressBar.current && videoRef.current) {
      const rect = progressBar.current.getBoundingClientRect();
      const percentage = ((e.clientX - rect.left) / rect.width) * 100;
      videoRef.current.currentTime =
        (percentage / 100) * videoRef.current.duration;
    }
  }

  useEffect(() => {
    if (progressBar.current) {
      const handleMouseDown = (e: MouseEvent) => {
        seek(e);
      };

      progressBar.current.addEventListener("mousedown", handleMouseDown);

      return () => {
        progressBar.current?.removeEventListener("mousedown", handleMouseDown);
      };
    }
  }, [progressBar.current]);

  function formatTime(time: number) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`;
    const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
    return `${minutesString}:${secondsString}`;
  }

  useEffect(() => {
    if (progressBar.current) {
      const handleMouseMove = (e: MouseEvent) => {
        if (progressBar.current && videoRef.current) {
          const rect = progressBar.current.getBoundingClientRect();
          const percentage = ((e.clientX - rect.left) / rect.width) * 100;
          setHoveringPercentage(percentage);

          const time = (percentage / 100) * videoRef.current.duration;
          setHoverTimeStamp(time);
          setHoverTime(formatTime(time));
        }
      };

      const handleMouseEnter = () => {
        setIsHovering(true);
      };

      const handleMouseLeave = () => {
        setIsHovering(false);
      };

      progressBar.current.addEventListener("mousemove", handleMouseMove);
      progressBar.current.addEventListener("mouseenter", handleMouseEnter);
      progressBar.current.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        progressBar.current?.removeEventListener("mousemove", handleMouseMove);
        progressBar.current?.removeEventListener(
          "mouseenter",
          handleMouseEnter
        );
        progressBar.current?.removeEventListener(
          "mouseleave",
          handleMouseLeave
        );
      };
    }
  }, [progressBar.current]);

  useEffect(() => {
    if (videoRef.current) {
      const handleTimeUpdate = () => {
        if (videoRef.current) {
          setVideoPercentagePlayed(
            (videoRef.current.currentTime / videoRef.current.duration) * 100
          );
        }
      };

      videoRef.current.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        videoRef.current?.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [videoRef.current]);
  return (
    <div ref={progressBar} className="video-progress-bar">
      {isHovering && (
        <SeekingCanvas time={hoverTimeStamp} percentage={hoveringPrecentage} />
      )}
      <div
        className="video-progress-bar__fill"
        style={{ width: `${videoPercentagePlayed}%` }}
      ></div>
      <VideoToolTip
        text={hoverTime}
        open={isHovering}
        percentage={hoveringPrecentage}
      />
    </div>
  );
};

const VideoToolTip = ({
  text,
  percentage,
  open,
}: {
  text: string;
  percentage: number;
  open: boolean;
}) => {
  if (!open) {
    return null;
  }
  return (
    <div className="video-tooltip" style={{ left: `${percentage - 3}%` }}>
      {text}
    </div>
  );
};

const SeekingCanvas = ({
  time,
  percentage,
}: {
  time: number;
  percentage: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { videoRef } = useContext(VideoContext);
  const [referenceElement, setReferenceElement] =
    useState<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (referenceElement === null && videoRef.current) {
      const element = document.createElement("video");
      element.src = videoRef.current.src;
      element.volume = 0;
      setReferenceElement(element);
    }
  }, [referenceElement, videoRef.current]);

  // get frame at time from reference video and draw it on canvas
  useEffect(() => {
    async function getFrameAtTime(time: number) {
      if (canvasRef.current && referenceElement) {
        const context = canvasRef.current.getContext("2d");
        if (context) {
          referenceElement.currentTime = time;
          await referenceElement.play();
          referenceElement.pause();

          context.drawImage(referenceElement, 0, 0, 80, 40);
        }
      }
    }
    getFrameAtTime(time);
  }, [canvasRef.current, time, referenceElement]);

  return (
    <canvas
      style={{ left: `${percentage - 5}%` }}
      ref={canvasRef}
      className="seeking-canvas"
      height={40}
      width={80}
    ></canvas>
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
      className="video-poster"
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <button className="video-poster__play-button" onClick={play}>
        <FaPlay />
      </button>
    </div>
  );
};

const VideoControlsBar = () => {
  return (
    <div className="video-controls-bar">
      <div className="video-controls-bar__left">
        <VideoPlayPauseButton />
        <VideoFastForwardButton />
        <VideoTime />
        <VideoVolumeControlBar />
      </div>
      <div className="video-controls-bar__right">
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
    <button className="video-controls-button" onClick={forward}>
      <FaFastForward />
    </button>
  );
};

const VideoVolumeControlBar = () => {
  const { updateVolume, toggleMute } = useControls();
  const { videoRef } = useContext(VideoContext);
  const [volume, setVolume] = useState(1);
  const slider = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (slider.current) {
      const handleMouseDown = (e: MouseEvent) => {
        if (slider.current && videoRef.current) {
          const rect = slider.current.getBoundingClientRect();
          const percentage = ((e.clientX - rect.left) / rect.width) * 100;
          updateVolume(percentage / 100);
          setVolume(percentage / 100);
        }
      };

      slider.current.addEventListener("mousedown", handleMouseDown);

      return () => {
        slider.current?.removeEventListener("mousedown", handleMouseDown);
      };
    }
  }, [slider.current]);

  useEffect(() => {
    if (videoRef.current) {
      setVolume(videoRef.current.volume);
    }
  }, [videoRef.current]);

  function renderVolumeIcon() {
    if (isMuted) {
      return <FaVolumeMute />;
    } else if (volume === 0) {
      return <FaVolumeMute />;
    } else if (volume <= 0.3) {
      return <FaVolumeOff />;
    } else if (volume < 0.5) {
      return <FaVolumeLow />;
    } else {
      return <FaVolumeUp />;
    }
  }

  function handleMute() {
    if (isMuted) {
      toggleMute();
      setIsMuted(false);
    } else {
      toggleMute();
      setIsMuted(true);
    }
  }

  useEffect(() => {
    if (videoRef.current) {
      const handleVolumeChange = () => {
        if (videoRef.current) {
          setVolume(videoRef.current.volume);
        }
      };

      videoRef.current.addEventListener("volumechange", handleVolumeChange);

      return () => {
        videoRef.current?.removeEventListener(
          "volumechange",
          handleVolumeChange
        );
      };
    }
  }, [videoRef.current]);

  return (
    <div className="video-volume-control-container">
      <button className="volume-controls-button" onClick={handleMute}>
        {renderVolumeIcon()}
      </button>
      <div className="volume-controls-bar" ref={slider}>
        <div
          className="volume-controls-bar__fill"
          style={{ width: `${volume * 100}%` }}
        ></div>
        <div
          className="volume-controls-bar__handle"
          style={{ left: `${volume * 100 - 3.5}%` }}
        ></div>
      </div>
    </div>
  );
};

const VideoSettingsButton = () => {
  return (
    <button className="video-controls-button">
      <MdSettings />
    </button>
  );
};

const VideoTime = () => {
  const { videoRef } = useContext(VideoContext);
  const [time, setTime] = useState("00:00");

  function formatTime(time: number) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`;
    const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
    return `${minutesString}:${secondsString}`;
  }

  useEffect(() => {
    if (videoRef.current) {
      const handleTimeUpdate = () => {
        if (videoRef.current) {
          setTime(formatTime(videoRef.current.currentTime));
        }
      };

      videoRef.current.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        videoRef.current?.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [videoRef.current]);
  return (
    <div className="video-time">
      {time} / {formatTime(videoRef.current?.duration || 0)}
    </div>
  );
};

const VideoFullScreenButton = () => {
  const { containerRef } = useContext(VideoContext);
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
    <button className="video-controls-button" onClick={toggleFullscreen}>
      {isFullScreen ? <MdFullscreenExit /> : <MdOutlineFullscreen />}
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
    <button className="video-controls-button" onClick={togglePip}>
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
    <button className="video-controls-button">
      {isPlaying ? (
        <FaPause onClick={togglePlay} />
      ) : (
        <FaPlay onClick={togglePlay} />
      )}
    </button>
  );
};
