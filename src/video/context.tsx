import { Context, createContext, useRef } from "react";

type VideoCTX = Context<{
  videoRef: React.RefObject<HTMLVideoElement>;
  containerRef: React.RefObject<HTMLDivElement>;
}>;

export const VideoContext: VideoCTX = createContext({
  videoRef: { current: null },
  containerRef: { current: null },
}) as VideoCTX;

export const VideoProvider = ({ children }: { children: React.ReactNode }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <VideoContext.Provider
      value={{
        videoRef,
        containerRef,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
