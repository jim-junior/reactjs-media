import { VideoProvider } from "./context";
import { VideoControls, VideoPoster } from "./controls";
import { VideoElement } from "./element";

export type VideoProps = {
  controls?: boolean;
  src: string;
  height: string | number;
  width: string | number;
};

const Video = ({ controls = true, src, height, width }: VideoProps) => {
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
        {/*         <VideoPoster
          src={
            "https://plus.unsplash.com/premium_photo-1708589337299-0fa0a53c4089?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        /> */}
      </div>
    </VideoProvider>
  );
};

export default Video;
