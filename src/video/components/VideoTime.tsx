import { useContext, useState, useEffect } from "react";
import { VideoContext } from "../context";
import styles from "../styles/video.module.scss";

export const VideoTime = () => {
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
    <div className={styles.videoTime}>
      <span className={styles.videoTimeCurrent}>{time}</span>
      <span className={styles.videoTimeDuration}>
        {formatTime(videoRef.current?.duration || 0)}
      </span>
    </div>
  );
};
