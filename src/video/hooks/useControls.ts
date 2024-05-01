import { useContext, useState } from "react";
import { VideoContext } from "../context";

export const useControls = () => {
  const { videoRef } = useContext(VideoContext);

  const play = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const pause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        play();
      } else {
        pause();
      }
    }
  };

  return {
    play,
    pause,
    togglePlay,
  };
};
