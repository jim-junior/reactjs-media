import React from "react"
import ReactDOM from "react-dom"
import Video from "../v2/video/index.jsx"
import Audio from "../v2/audio/index.jsx"

const App = () => {
  return <div className="App" style={{ maxWidth: 800, margin: 'auto', marginTop: 30 }}>
    <Audio
      src="audio.mp4"
    />
  </div>
}


ReactDOM.render(<div><App /></div>, document.getElementById("root"))
