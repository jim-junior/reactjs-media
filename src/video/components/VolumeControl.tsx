/* eslint-disable react/react-in-jsx-scope */
import { useContext, useState, useEffect, useRef } from "react";
import { VideoContext } from "../context";
import styles from "../styles/video.module.scss";
import { FaVolumeMute, FaVolumeOff, FaVolumeUp } from "react-icons/fa";
import { FaVolumeLow } from "react-icons/fa6";
import { useControls } from "../hooks/useControls";

export const VideoVolumeControlBar = () => {
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

      const handleMute = () => {
        if (videoRef.current) {
          setIsMuted(videoRef.current.muted);
        }
      };

      videoRef.current.addEventListener("volumechange", handleVolumeChange);
      videoRef.current.addEventListener("muted", handleMute);

      return () => {
        videoRef.current?.removeEventListener(
          "volumechange",
          handleVolumeChange
        );

        videoRef.current?.removeEventListener("muted", handleMute);
      };
    }
  }, [videoRef.current]);

  return (
    <div className={styles.videoVolumeControlContainer}>
      <button className={styles.volumeControlsButton} onClick={handleMute}>
        {renderVolumeIcon()}
      </button>
      <div className={styles.volumeControlsBar} ref={slider}>
        <div
          className={styles.volumeControlsBarFill}
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
