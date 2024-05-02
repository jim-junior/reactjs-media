import { useContext } from "react";
import { VideoContext, VideoProvider } from "./context";
import { VideoControls, VideoPoster } from "./controls";
import { VideoElement } from "./element";
import styles from "./styles/video.module.scss";

export type VideoProps = {
  controls?: boolean;
  src: string;
  height: string | number;
  width: string | number;
  poster: string;
};

const Video = ({ controls = true, src, height, width, poster }: VideoProps) => {
  return (
    <VideoProvider>
      <VideoRoot height={height} width={width}>
        <VideoElement src={src} controls={false} />
        {controls && <VideoControls />}
        <VideoPoster src={poster} />
      </VideoRoot>
    </VideoProvider>
  );
};

function VideoRoot({
  height,
  width,
  children,
}: {
  height: string | number;
  width: string | number;
  children: React.ReactNode;
}) {
  const { containerRef } = useContext(VideoContext);
  return (
    <div
      ref={containerRef}
      className={styles.videoRoot}
      style={{
        maxHeight: height,
        maxWidth: width,
      }}
    >
      {children}
    </div>
  );
}

export default Video;
