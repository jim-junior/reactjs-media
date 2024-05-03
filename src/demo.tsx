import React from "react";
import { createRoot } from "react-dom/client";
import { Video, VideoPlayerRef } from "./index";

const App = () => {
  const ref = React.useRef<VideoPlayerRef | null>(null);
  return (
    <div>
      <Video
        src={"/video.mkv"}
        controls={true}
        height={500}
        width={800}
        contextMenu
        poster={
          "https://hips.hearstapps.com/hmg-prod/images/ripley-pa-108-011822-01629-r-661067043d66f.jpg?resize=980:*"
        }
        ref={ref}
        onTimeUpdate={(time) => console.log(time)}
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
