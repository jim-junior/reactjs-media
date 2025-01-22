import React from "react";
import { createRoot } from "react-dom/client";
import { Video, VideoPlayerRef } from "./index";
import Audio from "./audio";
import Img from "./image";

const App = () => {
  const ref = React.useRef<VideoPlayerRef | null>(null);
  const [src, setSrc] = React.useState<string | MediaStream | null>(
    "/video.mkv"
  );
  const constraints = (window.constraints = {
    audio: false,
    video: true,
  });

  async function init(e) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      setSrc(stream);
      e.target.disabled = true;
    } catch (e) {
      // pass
    }
  }
  return (
    <div>
      <Video
        src={src}
        controls={true}
        height={500}
        width={800}
        contextMenu
        seekPreview
        ref={ref}
        onTimeUpdate={(time) => console.log(time)}
      />
      <button onClick={init}>Start Camera</button>

      <br />
      <br />
      <br />

      <Audio customControls src="/audio.wav" />

      <Img
        src="https://www.epsglobal.com/Media-Library/EPSGlobal/Blog/kubernets2.jpg"
        alt="dj"
        height={400}
        width={400}
        zoomable
      />
    </div>
  );
};

export default App;

const rootElement = document.getElementById("app");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
