/* eslint-disable react/react-in-jsx-scope */
import { useContext, useState, useRef, useEffect } from "react";
import { VideoContext } from "../context";
import styles from "../styles/video.module.scss";

export const VideoProgressBar = () => {
  const { videoRef, seekPreview } = useContext(VideoContext);
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
    <div ref={progressBar} className={styles.videoProgressBar}>
      {seekPreview && isHovering && (
        <SeekingCanvas time={hoverTimeStamp} percentage={hoveringPrecentage} />
      )}
      <div
        className={styles.videoProgressBarFill}
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
    <div className={styles.videoTooltip} style={{ left: `${percentage - 3}%` }}>
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
          // Fix: Error: The play() request was interrupted by a call to pause(). https://goo.gl/LdLk22
          // See: https://github.com/jim-junior/reactjs-media/issues/261
          try {
            await referenceElement.play();
          } catch (error) {
            console.warn("Reference Video Inturrupted");
          }
          try {
            referenceElement.pause();
          } catch (error) {
            // Do Nothing, Just Catch the Error Since the browser automatically pauses the video
          }

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
      className={styles.seekingCanvas}
      height={40}
      width={80}
    ></canvas>
  );
};
