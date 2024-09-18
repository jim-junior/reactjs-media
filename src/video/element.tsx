import React, { useContext, useEffect } from "react";
import { VideoContext } from "./context";
import styles from "./styles/video.module.scss";
import { VideoElementProps } from "./types";

export const VideoElement = ({ controls = true, src }: VideoElementProps) => {
  const { videoRef } = useContext(VideoContext);

  useEffect(() => {
    if (videoRef.current) {
      if (src) {
        if (typeof src === "string") {
          videoRef.current.src = src;
        } else {
          videoRef.current.autoplay = true;
          videoRef.current.srcObject = src;
        }
      }
      videoRef.current.preload = "metadata";
    }
  }, [videoRef.current, src]);

  return (
    <video
      ref={videoRef}
      className={styles.videoElement}
      width="100%"
      height="100%"
      controls={controls}
    ></video>
  );
};
