import React from "react"
import ReactDOM from "react-dom"
import Video from "../v2/video/index.jsx"
import Audio from "../v2/audio/index.jsx"

const App = () => {
  return <div className="App" style={{ maxWidth: 800, margin: 'auto', marginTop: 30 }}>
    <Video 
    src="https://cdn.videvo.net/videvo_files/video/premium/video0224/large_watermarked/MR_Stock%20Footage%20MR%20(1871)_preview.mp4" 
    />
  </div>
}


ReactDOM.render(<div><App /></div>, document.getElementById("root"))
