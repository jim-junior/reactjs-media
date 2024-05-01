import { VideoProvider } from "./context";
import { VideoControls, VideoPoster } from "./controls";
import { VideoElement } from "./element";

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
      <div
        className="videoRoot"
        style={{
          maxHeight: height,
          maxWidth: width,
        }}
      >
        <VideoElement src={src} controls={false} />
        {controls && <VideoControls />}
        <VideoPoster src={poster} />
      </div>
    </VideoProvider>
  );
};

export default Video;
