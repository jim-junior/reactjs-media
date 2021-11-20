import React from 'react'
import { AudioComponent, Cover } from './Components.jsx'
import './index.css'

const Audio = (props) => {
  const audio = React.useRef(null)
  return (
    <section className="audiocover">
      <AudioComponent ref={audio} {...props} />
      <Cover {...props} />
    </section>
  )
}

export default Audio
