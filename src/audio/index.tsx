import React, { useRef, useState, useEffect, useCallback } from "react";
import { AudioProps, AudioState } from "./types";

export const Audio: React.FC<AudioProps> = ({
  src,
  controls = true,
  customControls = false,
  autoplay = false,
  loop = false,
  volume = 1,
  playbackRate = 1,
  onPlay,
  onPause,
  onEnd,
  onError,
  onVolumeChange,
  onSeek,
  className,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [state, setState] = useState<AudioState>({
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume,
    playbackRate,
    isMuted: false,
    isLoading: true,
    error: null,
  });

  // Initialize audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.playbackRate = playbackRate;
      audioRef.current.loop = loop;

      if (autoplay) {
        audioRef.current.play().catch((error) => {
          setState((prev) => ({ ...prev, error }));
          if (onError) onError(error);
        });
      }
    }
  }, []);

  // Handle play/pause
  const togglePlay = useCallback(async () => {
    if (!audioRef.current) return;

    try {
      if (state.isPlaying) {
        await audioRef.current.pause();
        if (onPause) onPause();
      } else {
        await audioRef.current.play();
        if (onPlay) onPlay();
      }
      setState((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
    } catch (error) {
      setState((prev) => ({ ...prev, error }));
      if (onError) onError(error);
    }
  }, [state.isPlaying, onPlay, onPause, onError]);

  // Handle seeking
  const handleSeek = useCallback(
    (time: number) => {
      if (!audioRef.current) return;

      audioRef.current.currentTime = time;
      setState((prev) => ({ ...prev, currentTime: time }));
      if (onSeek) onSeek(time);
    },
    [onSeek]
  );

  // Handle volume change
  const handleVolumeChange = useCallback(
    (newVolume: number) => {
      if (!audioRef.current) return;

      audioRef.current.volume = newVolume;
      setState((prev) => ({ ...prev, volume: newVolume }));
      if (onVolumeChange) onVolumeChange(newVolume);
    },
    [onVolumeChange]
  );

  // Handle playback rate change
  const handlePlaybackRateChange = useCallback((rate: number) => {
    if (!audioRef.current) return;

    audioRef.current.playbackRate = rate;
    setState((prev) => ({ ...prev, playbackRate: rate }));
  }, []);

  // Time update listener
  useEffect(() => {
    const handleTimeUpdate = () => {
      if (!audioRef.current) return;

      setState((prev) => ({
        ...prev,
        currentTime: audioRef.current!.currentTime,
        duration: audioRef.current!.duration,
      }));
    };

    audioRef.current?.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audioRef.current?.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!audioRef.current) return;

      switch (event.code) {
        case "Space":
          event.preventDefault();
          togglePlay();
          break;
        case "ArrowUp":
          event.preventDefault();
          handleVolumeChange(Math.min(state.volume + 0.1, 1));
          break;
        case "ArrowDown":
          event.preventDefault();
          handleVolumeChange(Math.max(state.volume - 0.1, 0));
          break;
        case "ArrowLeft":
          event.preventDefault();
          handleSeek(Math.max(state.currentTime - 5, 0));
          break;
        case "ArrowRight":
          event.preventDefault();
          handleSeek(Math.min(state.currentTime + 5, state.duration));
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [
    state.volume,
    state.currentTime,
    state.duration,
    togglePlay,
    handleVolumeChange,
    handleSeek,
  ]);

  // Custom controls rendering
  const renderCustomControls = () => (
    <div className="audio-controls" role="group" aria-label="Audio controls">
      <button
        onClick={togglePlay}
        aria-label={state.isPlaying ? "Pause" : "Play"}
        className="control-button"
      >
        {state.isPlaying ? "⏸️" : "▶️"}
      </button>

      <input
        type="range"
        min={0}
        max={state.duration}
        value={state.currentTime}
        onChange={(e) => handleSeek(Number(e.target.value))}
        aria-label="Seek"
        className="seek-slider"
      />

      <div className="volume-control">
        <button
          onClick={() =>
            setState((prev) => ({ ...prev, isMuted: !prev.isMuted }))
          }
          aria-label={state.isMuted ? "Unmute" : "Mute"}
          className="control-button"
        >
          {state.isMuted ? "🔇" : "🔊"}
        </button>
        <input
          type="range"
          min={0}
          max={1}
          step={0.1}
          value={state.volume}
          onChange={(e) => handleVolumeChange(Number(e.target.value))}
          aria-label="Volume"
          className="volume-slider"
        />
      </div>

      <select
        value={state.playbackRate}
        onChange={(e) => handlePlaybackRateChange(Number(e.target.value))}
        aria-label="Playback speed"
        className="playback-rate"
      >
        <option value={0.5}>0.5x</option>
        <option value={1}>1x</option>
        <option value={1.5}>1.5x</option>
        <option value={2}>2x</option>
      </select>

      <span className="time-display" role="timer">
        {formatTime(state.currentTime)} / {formatTime(state.duration)}
      </span>
    </div>
  );

  return (
    <div className={`audio-wrapper ${className || ""}`}>
      <audio
        ref={audioRef}
        src={src}
        controls={controls && !customControls}
        loop={loop}
        onEnded={onEnd}
        onError={(e: any) => {
          const error = new Error("Audio playback error");
          setState((prev) => ({ ...prev, error }));
          if (onError) onError(error);
        }}
        {...(!controls && { "aria-hidden": true })}
      />
      {customControls && renderCustomControls()}
    </div>
  );
};

// Utility function for formatting time
const formatTime = (seconds: number): string => {
  if (isNaN(seconds)) return "0:00";

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

export default Audio;
