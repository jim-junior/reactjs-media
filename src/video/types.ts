import { Context } from "react";

export interface VideoProps {
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
   * Indicates whether the video should show a preview when seeking
   */
  seekPreview?: boolean;
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
  contextMenu?: boolean;
  contextMenuItems?: Array<ContextMenuItem>;
}

export type ContextMenuItem = {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
};

export interface VideoElementProps {
  controls?: boolean;
  src: string;
}

export type VideoCTX = Context<{
  videoRef: React.RefObject<HTMLVideoElement>;
  containerRef: React.RefObject<HTMLDivElement>;
  overlayRef: React.RefObject<HTMLDivElement>;
  seekPreview: boolean;
  setSeekPreview:
    | React.Dispatch<React.SetStateAction<boolean>>
    | ((boolean: boolean) => void);
  menuClientY: number;
  setMenuClientY: React.Dispatch<React.SetStateAction<number>>;
  menuClientX: number;
  setMenuClientX: React.Dispatch<React.SetStateAction<number>>;
  contextMenuItems?: Array<ContextMenuItem> | [];
  setContextMenuItems: React.Dispatch<
    React.SetStateAction<Array<ContextMenuItem>>
  >;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
  setLoop: (loop: boolean) => void;
};
