import { useContext, useState } from "react";
import { VideoContext } from "../context";

export const useControls = () => {
  const { videoRef } = useContext(VideoContext);

  const play = async () => {
    if (videoRef.current) {
      await videoRef.current.play();
    }
  };

  const pause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const togglePlay = async () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        await play();
      } else {
        pause();
      }
    }
  };

  const forward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10;
    }
  };

  const rewind = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10;
    }
  };

  const updateVolume = (volume: number) => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  };

  const updatePlaybackRate = (rate: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
    }
  };

  const increasePlaybackRate = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate += 0.25;
    }
  };

  const decreasePlaybackRate = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate -= 0.25;
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  const increaseVolume = () => {
    if (videoRef.current) {
      videoRef.current.volume += 0.1;
    }
  };

  const decreaseVolume = () => {
    if (videoRef.current) {
      videoRef.current.volume -= 0.1;
    }
  };

  return {
    play,
    pause,
    togglePlay,
    forward,
    rewind,
    updateVolume,
    updatePlaybackRate,
    increasePlaybackRate,
    decreasePlaybackRate,
    toggleMute,
    increaseVolume,
    decreaseVolume,
  };
};
