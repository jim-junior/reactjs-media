import { useContext, useEffect } from "react";
import { VideoContext } from "./context";

export type VideoElementProps = {
  controls?: boolean;
  src: string;
};

export const VideoElement = ({ controls = true, src }: VideoElementProps) => {
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
      className="video-element"
      width="100%"
      height="100%"
      controls={controls}
    ></video>
  );
};
