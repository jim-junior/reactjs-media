import React, {
  useEffect,
  useRef,
  forwardRef,
  useContext,
  createContext,
  Context,
  useState,
} from "react";
import { FaPlay, FaPause } from "react-icons/fa";

type VideoProps = {
  controls?: boolean;
  src: string;
  height: string | number;
  width: string | number;
};

type VideoCTX = Context<{
  videoRef: React.RefObject<HTMLVideoElement>;
}>;

const VideoContext = createContext({
  videoRef: { current: null },
}) as VideoCTX;

const VideoProvider = ({ children }: { children: React.ReactNode }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <VideoContext.Provider
      value={{
        videoRef,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

type VideoElementProps = {
  controls?: boolean;
  src: string;
};

const VideoElement = ({ controls = true, src }: VideoElementProps) => {
  const { videoRef } = useContext(VideoContext);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = src;
      videoRef.current.preload = "metadata";
    }
  }, []);

  return (
    <video
      ref={videoRef}
      width="100%"
      height="100%"
      controls={controls}
    ></video>
  );
};

const Video = ({ controls = true, src, height, width }: VideoProps) => {
  return (
    <VideoProvider>
      <div
        style={{
          maxHeight: height,
          maxWidth: width,
        }}
      >
        <VideoElement src={src} controls={false} />
        {controls && <VideoControls />}
      </div>
    </VideoProvider>
  );
};

const VideoControls = () => {
  const { videoRef } = useContext(VideoContext);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      id="video-overlay"
      className="w-full h-full absolute top-0 left-0"
    ></div>
  );
};

export default Video;
