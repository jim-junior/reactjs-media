import React from "react";
import { createRoot } from "react-dom/client";
import Video from "./video";

const App = () => {
  return (
    <Video
      src={"https://cdn.pixabay.com/video/2023/09/24/182082-867762198_tiny.mp4"}
      controls={true}
      height={500}
      width={800}
      poster={
        "https://hips.hearstapps.com/hmg-prod/images/ripley-pa-108-011822-01629-r-661067043d66f.jpg?resize=980:*"
      }
    />
  );
};

export default App;

const rootElement = document.getElementById("app");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
