import React from "react";
import { createRoot } from "react-dom/client";
import Video from "./video";

const App = () => {
  return <Video src={"/video.mkv"} controls={true} height={500} width={800} />;
};

export default App;

const rootElement = document.getElementById("app");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
