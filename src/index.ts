import { useControls } from "./video/hooks/useControls";
import Video, { VideoProvider } from "./video";
import { VideoContext } from "./video/context";
import { VideoControls, VideoPoster } from "./video/controls";
import { VideoElement } from "./video/element";

export * from "./video/types";
export {
  Video,
  VideoContext,
  VideoControls,
  VideoElement,
  VideoProvider,
  VideoPoster,
  useControls,
};
