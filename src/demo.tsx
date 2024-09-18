import React from "react";
import { createRoot } from "react-dom/client";
import { Video, VideoPlayerRef } from "./index";

const App = () => {
  const ref = React.useRef<VideoPlayerRef | null>(null);
  const [src, setSrc] = React.useState<string | MediaStream | null>(null);
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
    </div>
  );
};

export default App;

const rootElement = document.getElementById("app");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
