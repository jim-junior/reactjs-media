/*
Copyright Beingana Jim Junior, 2021 and all the contributors. License Cn be found in the LICENCE file
*/

import React, { useRef, useState } from 'react'
import { MdPause, MdPlayArrow, MdErrorOutline, MdClose, MdFlipToBack, MdLoop } from 'react-icons/md'
import PropTypes from 'prop-types';
import './Video.css'
import Video from './video.jsx';
import { ControlsBar } from './Components.jsx';



export const ReactVideo = (props) => {
  const [playing, setplaying] = useState(false)
  const video = useRef(null)
  const div = useRef(null)
  const sect = useRef(null)
  const vdiv = useRef(null)
  const [error, seterror] = useState(false)
  const [y, sety] = useState(false)
  const [x, setx] = useState(false)
  const [on, seton] = useState(false)
  const [loaded, setloaded] = useState(true)
  const [fulls, setfulls] = useState(false)
  const [mute, setmute] = useState(false)
  const [more, setmore] = useState(false)
  const [ct, setcurrenttime] = useState('00:00')
  const [ctt, setctt] = useState('00:00')
  const [ofwidth, setofwidth] = useState(0)
  const mm = () => {
    setmore(!more)
  }
  function va(e) {
    const x = e.nativeEvent.layerX
    const { offsetWidth } = vdiv.current

    let time = (x / offsetWidth) * 1
    video.current.volume = time

  }
  function foward(e) {
    let x = 0.025 * video.current.duration
    video.current.currentTime += x
    if (props.onFoward) {
      props.onFoward()
    }

  }
  function rewind(e) {
    let x = 0.05 * video.current.currentTime
    video.current.currentTime -= x
    if (props.onRewind) {
      props.onRewind()
    }

  }

  function onSeek(e) {
    const x = e.nativeEvent.layerX
    const { offsetWidth } = div.current
    const { duration } = video.current

    let time = (x / offsetWidth) * duration
    video.current.currentTime = time

    let xx = x - 12

    let seekwidth = (xx / offsetWidth) * 100
    setofwidth(seekwidth)

    if (props.onSeek) {
      props.onSeek()
    }

  }
  function onMove(e) {
    const x = e.nativeEvent.layerX
    const { offsetWidth } = div.current
    const { duration } = video.current

    let time = (x / offsetWidth) * duration
    setctt(calcTime(time))
    let xx = x - 12

    let seekwidth = (xx / offsetWidth) * 100
    setofwidth(seekwidth)

    if (props.onSeek) {
      props.onSeek()
    }

  }
  function addp() {
    if (video.current.playbackRate < 16) {
      video.current.playbackRate += 1
    }
  }
  function minusp() {
    if (video.current.playbackRate > 0) {
      video.current.playbackRate -= 1
    }
  }
  function TimeUpdate(e) {
    const { currentTime, duration } = video.current
    setcurrenttime(calcTime(currentTime))
    if (props.onTimeUpdate) {
      props.onTimeUpdate(e, currentTime, duration)
    }
  }
  async function Mute(e) {
    await setmute(!mute)
    if (video.current.volume > 0) {
      video.current.volume = 0
    } else {
      video.current.volume = 1
    }
    if (props.onMute) {
      props.onMute(mute)
    }

  }

  function calcTime(d) {
    if (isNaN(d)) {
      return '00:00'
    }
    let hours = d / 3600;
    let hh = d % 3600;
    let time = hh / 60;
    let h = Math.floor(hours)
    let f = Math.floor(time)
    let seconds = d % 60
    seconds = Math.floor(seconds)
    if (seconds < 10) {
      seconds = `0${seconds}`
    }
    if (f < 10) {
      f = `0${f}`
    }
    if (h <= 0) {
      h = ``
    } else if (h < 10 && h > 0) {
      h = `0${h}:`
    }

    return `${h}${f}:${seconds}`
  }
  function pp() {
    video.current.requestPictureInPicture()
    if (props.onRequestPictureInPicture) {
      props.onRequestPictureInPicture()
    }
  }

  function setClipboard(text) {
    navigator.clipboard.writeText(text).then(function () {
    }, function () {
      // eslint-disable-next-line no-restricted-globals
      alert('failed to copy url')
    });
  }


  const play = (e) => {
    video.current.play()
    setplaying(true)

    if (props.onPlay) {
      props.onPlay(e)
    }
  }
  const pause = (e) => {
    video.current.pause()
    setplaying(false)
    if (props.onPause) {
      props.onPause(e)
    }

  }
  function contextMenu(e) {
    const { clientY, clientX } = e.nativeEvent
    setx(clientX)
    sety(clientY)
    seton(true)
  }
  const enterFullScreen = (e) => {
    sect.current.requestFullscreen()
    if (props.onEnterFullScreen) {
      props.onEnterFullScreen(e)
    }
    setfulls(true)

  }
  const exitFullScreen = () => {
    sect.current.ownerDocument.exitFullscreen()
    setfulls(false)

  }
  function handleClose() {
    seton(false)
  }
  return (
    <div>
      <style jsx="true">{`
                .video-react-pause:hover,
                .video-react-play:hover,
                .video-react-volume:hover,
                .video-react-rewind:hover,
                .video-react-more:hover,
                .video-react-fullscreen:hover,
                .video-react-forward:hover {
                    color: ${props.primaryColor};
                }
                .finnished {
                    background-color: ${props.primaryColor} !important;
                }
                .point {
                    background-color: ${props.primaryColor} !important;
                }

            `}</style>
      <section onContextMenu={(e) => {
        e.preventDefault()
        contextMenu(e)
      }} onBlur={() => {
        handleClose()
      }} className={`one___flkjsjJJNJnn_nANN8hG_YG7GY7g7BH9 ${props.className}`} ref={sect} >
        <Video onError={() => {
          seterror(true)
        }} ref={{ video: video }} autoPlay={props.autoPlay ? true : false} onPause={() => {
          setplaying(false)
        }} onPlay={() => {
          setplaying(true)
        }} className='video-react' onTimeUpdate={(e) => {
          TimeUpdate(e)
        }} src={props.src} type={props.type ? props.type : "video/mp4"} />
        {video.current ? <>
          {video.current.seeking ?
            <div className="video-react-loading"></div> : <></>}</> : <></>}


        <ControlsBar ref={{ div, vdiv }} video={video} ctt={ctt} onMouseMove={onMove} ofwidth={ofwidth} onSeek={onSeek} ct={ct} calcTime={calcTime} pause={pause} play={play} rewind={rewind} foward={foward} va={va} Mute={Mute} playing={playing} fulls={fulls} exitFullScreen={exitFullScreen} enterFullScreen={enterFullScreen} more={more} pp={pp} minusp={minusp} addp={addp} mm={mm} />

        <div className="video-react-error_12ede3ws3" style={error ? { opacity: 1 } : {}}>
          <span><MdErrorOutline /></span> <span><b>Error:</b> Failed to load Video</span>
          <span className="cancel" onClick={() => {
            seterror(false)
          }}>
            <MdClose />
          </span>
        </div>


        {on ?
          <div className="menu-c" onClick={() => {
            handleClose()
          }}>
            <div className="menu-contxt" onClick={() => {
              handleClose()
            }}>
              <div className="video-rect-context" style={{ top: y, left: x }}>
                <ul className="context-list">
                  {playing ?
                    <li className="play" onClick={pause} ><span className="i"><MdPause /></span><span className="t">Pause</span></li> : <li className="play" onClick={play} ><span className="i"><MdPlayArrow /></span><span className="t">Play</span></li>}
                  <li onClick={() => { setClipboard(video.current ? video.current.currentSrc : '') }}><span className="i"><MdFlipToBack /></span><span className="t" >Copy Video Url</span></li>
                  {video.current ? <>{video.current.loop ? <li onClick={() => {
                    video.current.loop = false
                  }} ><span className="i"><MdLoop /></span><span className="t">Stop Loop</span></li> : <li onClick={() => {
                    video.current.loop = true
                  }} ><span className="i"><MdLoop /></span><span className="t">Loop</span></li>
                  }</> : <></>}
                </ul>
              </div></div></div> : <></>}
        {playing === false && loaded === true ? <div className="poster">
          <div>
            <img src={props.poster} alt="video poster" />
            <div style={props.primaryColor ? { background: props.primaryColor } : {}} onClick={() => {
              play()
              setloaded(false)
            }}><MdPlayArrow /></div>
          </div>
        </div> : <></>}

        {props.childern}


      </section>

    </div>
  )
}
ReactVideo.propTypes = {
  src: PropTypes.string.isRequired,
  type: PropTypes.string,
  poster: PropTypes.string,
  primaryColor: PropTypes.string,
  autoPlay: PropTypes.bool,
  className: PropTypes.string,
  onFoward: PropTypes.func,
  onRewind: PropTypes.func,
  onSeek: PropTypes.func,
  onMute: PropTypes.func,
  onRequestPictureInPicture: PropTypes.func,
  onTimeUpdate: PropTypes.func,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onEnterFullScreen: PropTypes.func
}
