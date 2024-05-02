import { Context } from "react";

export type VideoProps = {
  /**
   * Indicates whether the video should have controls. If `false`, wont render the controls
   */
  controls?: boolean;
  /**
   * The source of the video
   * @example "https://www.example.com/video.mp4"
   * @example "/video.mp4"
   * @example "video.mp4"
   * @example "video"
   * @example "https://www.example.com/video"
   **/
  src: string;
  height: string | number;
  width: string | number;
  poster: string;
  /**
   * Event Listener for when the video time updates
   * @param time - The current time of the video
   */
  onTimeUpdate?: (time: number) => void;
  /**
   * Event Listener for when the video plays
   */
  onPlay?: () => void;
  /**
   * Event Listener for when the video pauses
   */
  onPause?: () => void;
  /**
   * Event Listener for when the video ends
   */
  onEnded?: () => void;
  /**
   * Event Listener for when the video volume changes
   * @param volume - The current volume of the video
   */
  onVolumeChange?: (volume: number) => void;

  onSeeking?: () => void;
  onSeeked?: () => void;
  onLoadedMetadata?: () => void;
  onLoadedData?: () => void;
  onCanPlay?: () => void;
};

export type VideoElementProps = {
  controls?: boolean;
  src: string;
};

export type VideoCTX = Context<{
  videoRef: React.RefObject<HTMLVideoElement>;
  containerRef: React.RefObject<HTMLDivElement>;
}>;

export type VideoPlayerRef = {
  play: () => void;
  pause: () => void;
  seek: (time: number) => void;
  volume: (volume: number) => void;
  playbackRate: (rate: number) => void;
  toggleFullscreen: () => void;
  togglePip: () => void;
  toggleMute: () => void;
  togglePlay: () => void;
};
