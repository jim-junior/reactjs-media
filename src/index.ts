import { useControls } from "./video/hooks/useControls";
import Video, { VideoProvider } from "./video";
import { VideoContext } from "./video/context";
import { VideoControls, VideoPoster } from "./video/controls";
import { VideoElement } from "./video/element";
import Audio from "./audio";
import Img from "./image";

export * from "./video/types";
export * from "./audio/types";
export {
  Video,
  VideoContext,
  VideoControls,
  VideoElement,
  VideoProvider,
  VideoPoster,
  useControls,
  Audio,
  Img,
};
