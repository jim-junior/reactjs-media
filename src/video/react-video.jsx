/* 
Copyright Beingana Jim Junior, 2021 and all the contributors. License Cn be found in the LICENCE file
*/

import React, { useRef, useState } from 'react'
import { MdPause, MdPlayArrow, MdAdd, MdRemove, MdFastRewind, MdFastForward, MdVolumeUp, MdVolumeDown, MdVolumeMute, MdVolumeOff, MdPictureInPictureAlt, MdFullscreenExit, MdFullscreen, MdErrorOutline, MdClose, MdFlipToBack, MdLoop, MdSettings, MdFileDownload } from 'react-icons/md'
import PropTypes from 'prop-types';
import './Video.css'
import Tooltip from '@material-ui/core/Tooltip';
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const iOSBoxShadow =
    '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';


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
    const TimeSlider = withStyles({
        root: {
            color: '#3880ff',
            height: 2,
            padding: '15px 0',
        },
        active: {},
        valueLabel: {
            left: 'calc(-50% + 12px)',
            top: -22,
            '& *': {
                background: 'transparent',
                color: '#000',
            },
        },
        track: {
            height: 2,
        },
        rail: {
            height: 2,
            opacity: 0.5,
            backgroundColor: '#bfbfbf',
        },
        mark: {
            backgroundColor: '#bfbfbf',
            height: 8,
            width: 1,
            marginTop: -3,
        },
        markActive: {
            opacity: 1,
            backgroundColor: 'currentColor',
        },
    })(Slider);
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

    function onSeek(e, newValue) {
        const { duration } = video.current

        let time = (newValue / 100) * duration
        video.current.currentTime = time

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
                <video onError={() => {
                    seterror(true)
                }} ref={video} autoPlay={props.autoPlay ? true : false} onPause={() => {
                    setplaying(false)
                }} onPlay={() => {
                    setplaying(true)
                }} className='video-react' onTimeUpdate={(e) => {
                    TimeUpdate(e)
                }} controlsList="nodownload" >
                    <source src={props.src} type={props.type ? props.type : "video/mp4"} />
                </video>


                {
                    // Loading indicator
                }
                {video.current ? <>
                    {video.current.seeking ?
                        <div className="video-react-loading">
                            <CircularProgress style={{ color: props.primaryColor }} />
                        </div> : <></>
                    } </> : <></>
                }


                {
                    // Lower bar with controls
                }

                <div className="video-react-lower-bar_dhhiahhbhhbhb3767d7637____u">

                    {
                        // Progress bar
                    }


                    <div className="hundred">
                        <Grid container spacing={2}>
                            <Grid item xs>
                                <TimeSlider style={props.primaryColor ? { color: props.primaryColor } : {}} value={video.current ? (video.current.currentTime / video.current.duration) * 100 : 0} onChange={onSeek} aria-labelledby="continuous-slider" />
                            </Grid>
                        </Grid>

                    </div>


                    {
                        // Controls 
                    }

                    <div className="video-react-controls">

                        {
                            // Play/ Pause button
                        }
                        {playing ? <Tooltip title="Pause" aria-label="add" placement="top" ><div className="video-react-pause" onClick={pause}><MdPause /></div></Tooltip> :
                            <Tooltip title="Play" aria-label="add" placement="top" ><div className="video-react-play" onClick={play}><MdPlayArrow /></div></Tooltip>
                        }

                        {/* Rewind button */}
                        <Tooltip title="Rewind" aria-label="add" placement="top" >
                            <div className="video-react-rewind" onClick={rewind}><MdFastRewind /></div>
                        </Tooltip>

                        {/* forward button */}
                        <Tooltip title="Forward" aria-label="add" placement="top" >
                            <div className="video-react-forward" onClick={foward}><MdFastForward /></div>
                        </Tooltip>

                        <div className="video-react-pro">
                            <Typography style={{ color: 'grey' }} variant="caption" component="span">
                                {ct} \ {video.current ? calcTime(video.current.duration) : <>00:00</>}
                            </Typography>
                        </div>
                        <div className="video-react-pro"></div>

                        {/* Volume controlls */}
                        <Tooltip title="Volume" aria-label="add" placement="top" >
                            <div className="video-react-volume">
                                <div className="volume-add">

                                    <div className="volume-div" ref={vdiv} onClick={va} >
                                        <div className="finnished" style={video.current ? { width: `${(video.current.volume / 1) * 100}%` } : { width: 0 }}></div>
                                        <div className="point"></div>
                                    </div>
                                </div>

                                {video.current ?
                                    <>{video.current.volume === 0 ?
                                        <MdVolumeOff onClick={Mute} /> :
                                        <>
                                            {video.current.volume < 0.3 ? <><MdVolumeMute onClick={Mute} /></> :
                                                <>{video.current.volume < 0.7 ? <><MdVolumeDown onClick={Mute} /></> :
                                                    <MdVolumeUp onClick={Mute} />}</>
                                            }</>
                                    }</> : <><MdVolumeUp /></>}</div></Tooltip>

                        {/* Fullscreen button */}

                        <Tooltip title="Fullscreen" aria-label="add" placement="top" >
                            {fulls ?
                                <div className="video-react-fullscreen" onClick={exitFullScreen}><MdFullscreenExit /></div> : <div className="video-react-fullscreen" onClick={enterFullScreen}><MdFullscreen /></div>}
                        </Tooltip>

                        {/* Settings */}
                        <Tooltip arrow title="Settings" aria-label="add" placement="left" >

                            <div className="video-react-more" >

                                <div style={more ? {
                                    transform: 'scale(1)',
                                    opacity: 1
                                } : {}} className="video-react-menu">
                                    <a download='video' href={props.src} className="list-" onClick={pp} >
                                        <span className="icon"><MdFileDownload /></span>
                                        <span className="text">Download</span>
                                    </a>
                                    <div className="list-" onClick={pp} >
                                        <span className="icon"><MdPictureInPictureAlt /></span>
                                        <span className="text">Picture In Picture</span>
                                    </div>


                                    <Tooltip arrow title="Playback speed" aria-label="add" placement="left" >

                                        <div className="list-1">

                                            <span className="icon" onClick={minusp} style={video.current ? video.current.playbackRate === 0 ?
                                                { cursor: 'not-allowed' } : {} : {}
                                            }>
                                                <MdRemove />
                                            </span>
                                            <span className="text">{video.current ? video.current.playbackRate : 1}</span>
                                            <span className="icon" onClick={addp}  ><MdAdd /></span>
                                        </div>
                                    </Tooltip>
                                </div>

                                <MdSettings style={more ? { transform: 'rotate(40deg)', transition: 'all 0.2s' } : {
                                    transition: 'all 0.2s'
                                }} onContextMenu={(e) => {
                                    e.preventDefault()
                                }} onClick={mm} />
                            </div>
                        </Tooltip>

                    </div>
                </div>

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
                                        <li className="play" onClick={pause} >
                                            <span className="i">
                                                <MdPause />
                                            </span>
                                            <span className="t">Pause</span></li> : <li className="play" onClick={play} >
                                            <span className="i">
                                                <MdPlayArrow />
                                            </span>
                                            <span className="t">Play</span>
                                        </li>}
                                    <li onClick={() => { setClipboard(video.current ? video.current.currentSrc : '') }}>
                                        <span className="i"><MdFlipToBack /></span>
                                        <span className="t" >Copy Video Url</span>
                                    </li>
                                    {video.current ? <>{video.current.loop ?
                                        <li onClick={() => {
                                            video.current.loop = false
                                        }} >
                                            <span className="i"><MdLoop /></span>
                                            <span className="t">Stop Loop</span>
                                        </li> :
                                        <li onClick={() => {
                                            video.current.loop = true
                                        }} >
                                            <span className="i"><MdLoop /></span>
                                            <span className="t">Loop</span>
                                        </li>
                                    }</> : <></>}
                                </ul>
                            </div>
                        </div>
                    </div> : <></>}
                {playing === false && loaded === true ?
                    <div className="poster">
                        <div>
                            <img src={props.poster} alt="video poster" />
                            <div style={props.primaryColor ? { background: props.primaryColor } : {}} onClick={() => {
                                play()
                                setloaded(false)
                            }}>
                                <MdPlayArrow />
                            </div>
                        </div>
                    </div> : <></>}

                {props.childern}


            </section>

        </div >
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
