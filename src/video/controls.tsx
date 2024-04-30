import { useContext, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { VideoContext } from "./context";
import "./styles/video.scss";
import { MdSettings } from "react-icons/md";
import { FaFastForward } from "react-icons/fa";
import { BsFillRewindFill } from "react-icons/bs";
import { FaVolumeLow } from "react-icons/fa6";

export const VideoControls = () => {
  const { videoRef } = useContext(VideoContext);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="video-overlay">
      <VideoLoader />
      <VideoControlsContainer />
    </div>
  );
};

const VideoLoader = () => {
  return (
    <div className="video-loader">
      <div className="video-loader__spinner"></div>
    </div>
  );
};

const VideoControlsContainer = () => {
  return (
    <div className="video-controls-container">
      <VideoProgressBar percentage={60} />
      <VideoControlsBar />
    </div>
  );
};

const VideoProgressBar = ({ percentage }: { percentage: number }) => {
  return (
    <div className="video-progress-bar">
      <div
        className="video-progress-bar__fill"
        style={{ width: `${percentage}%` }}
      ></div>
      <VideoToolTip text="00:30" percentage={percentage} />
    </div>
  );
};

const VideoToolTip = ({
  text,
  percentage,
}: {
  text: string;
  percentage: number;
}) => {
  return (
    <div className="video-tooltip" style={{ left: `${percentage - 5}%` }}>
      {text}
    </div>
  );
};

export const VideoPoster = ({ src }: { src: string }) => {
  return (
    <div
      className="video-poster"
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <button className="video-poster__play-button">
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
        <VideoTime />
      </div>
      <div className="video-controls-bar__right">
        <VideoRewindButton />
        <VideoFastForwardButton />
        <VideoVolumeButton />
        <VideoSettingsButton />
      </div>
    </div>
  );
};

const VideoPlayButton = () => {
  return (
    <button className="video-controls-button">
      <FaPlay />
    </button>
  );
};

const VideoRewindButton = () => {
  return (
    <button className="video-controls-button">
      <BsFillRewindFill />
    </button>
  );
};

const VideoFastForwardButton = () => {
  return (
    <button className="video-controls-button">
      <FaFastForward />
    </button>
  );
};

const VideoVolumeButton = () => {
  return (
    <button className="video-controls-button">
      <FaVolumeLow />
    </button>
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
  return <div className="video-time">00:00</div>;
};

const VideoPlayPauseButton = () => {
  return (
    <button className="video-controls-button">
      <FaPause />
    </button>
  );
};
