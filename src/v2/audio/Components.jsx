import React from 'react'
import { FaPause, FaPlay, FaForward, FaVolumeUp } from "react-icons/fa"
import { RiFullscreenFill } from "react-icons/ri"
import { MdFullscreenExit, MdLoop, MdPictureInPicture, MdFlipToBack, MdVolumeDown, MdVolumeUp } from "react-icons/md"
import { GoSettings } from "react-icons/go"
import { IoCloseCircleOutline } from "react-icons/io5"
import { CgClose } from "react-icons/cg"
import { FiDownloadCloud } from "react-icons/fi"
import { GiSpeedometer } from "react-icons/gi"
import { ImLoop } from "react-icons/im"
import { TiMediaRewindOutline, TiMediaFastForwardOutline } from "react-icons/ti"
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';



function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="bottom" title={value}>
      {children}
    </Tooltip>
  );
}

const ProgressBar = withStyles({
  root: {
    color: '#fff',
  },
  thumb: {
    backgroundColor: '#fff',
  },
  active: {},
  rail: {
    backgroundColor: '#fff',
  }
})(Slider);


export const AudioComponent = React.forwardRef((props, ref) => {
  const { src } = props
  return (
    <>
      <audio ref={ref} >
        <source src={src} type={props.type ? props.type : "audio/mp3"} />
      </audio>
    </>
  )
})


export const Cover = () => {
  return (
    <>
      <div className="audio-progress">
        <Progress />
      </div>
      <div className="controls">
        <Controls />
      </div>
    </>
  )
}
export const Progress = () => {
  return (
    <>
      <ProgressBar
        ValueLabelComponent={ValueLabelComponent}
        aria-label="custom thumb label"
        defaultValue={20}
      />
    </>
  )
}



export const Controls = (props) => {
  return (
    <>
      <div className="loop">
        <ImLoop />
      </div>
      <div className="central-controls">
        <div>
          <div className="rewind">
            <TiMediaRewindOutline />
          </div>
          <div className="playpause">
            <FaPause />
          </div>
          <div className="foward">
            <TiMediaFastForwardOutline />
          </div>
        </div>

      </div>
      <div className="settings">
        <GoSettings />
      </div>
    </>
  )
}
