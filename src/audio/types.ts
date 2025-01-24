export interface AudioProps {
  src: string;
  controls?: boolean;
  customControls?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  volume?: number;
  playbackRate?: number;
  onPlay?: () => void;
  onPause?: () => void;
  onEnd?: () => void;
  onError?: (error: Error) => void;
  onVolumeChange?: (volume: number) => void;
  onSeek?: (time: number) => void;
  className?: string;
}

export interface AudioState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  playbackRate: number;
  isMuted: boolean;
  isLoading: boolean;
  error: Error | null;
}
