import { Context, createContext, useRef } from "react";
import { VideoCTX } from "./types";

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
