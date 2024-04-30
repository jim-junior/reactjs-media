import { Context, createContext, useRef } from "react";

type VideoCTX = Context<{
  videoRef: React.RefObject<HTMLVideoElement>;
}>;

export const VideoContext: VideoCTX = createContext({
  videoRef: { current: null },
}) as VideoCTX;

export const VideoProvider = ({ children }: { children: React.ReactNode }) => {
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
