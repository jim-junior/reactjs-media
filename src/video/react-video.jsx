import React, { useRef, useState } from 'react'
import { MdPause, MdPlayArrow, MdAdd, MdRemove, MdFastRewind, MdFastForward, MdVolumeUp, MdVolumeDown, MdVolumeMute, MdVolumeOff, MdPictureInPictureAlt, MdFullscreenExit, MdFullscreen, MdMoreHoriz, MdErrorOutline, MdClose } from 'react-icons/md'
import PropTypes from 'prop-types';
import './Video.css'




export const ReactVideo = (props) => {
    const [playing, setplaying] = useState(false)
    const video = useRef(null)
    const div = useRef(null)
    const sect = useRef(null)
    const vdiv = useRef(null)
    const [error, seterror] = useState(false)
    const [fulls, setfulls] = useState(false)
    const [mute, setmute] = useState(false)
    const [more, setmore] = useState(false)
    const [ct, setcurrenttime] = useState('00:00')
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
        const { layerY, layerX } = e.nativeEvent
        console.log(layerY, layerX)
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
    return (
        <div>
            <section onContextMenu={(e) => {
                e.preventDefault()
                contextMenu(e)
            }} className={`one___flkjsjJJNJnn_nANN8hG_YG7GY7g7BH9 ${props.className}`} ref={sect} >
                <video onError={() => {
                    seterror(true)
                }} ref={video} autoPlay={props.autoPlay ? true : false} onPause={() => {
                    setplaying(false)
                }} onPlay={() => {
                    setplaying(true)
                }} poster={props.poster} className='video-react' onTimeUpdate={(e) => {
                    TimeUpdate(e)
                }} >
                    <source src={props.src} type="video/mp4" />
                </video>
                {video.current ? <>
                    {video.current.seeking ?
                        <div className="video-react-loading"></div> : <></>}</> : <></>}
                <div className="video-react-lower-bar_dhhiahhbhhbhb3767d7637____u">
                    <div className="hundred"><div className="progress-video-react" ref={div} onClick={onSeek} >
                        <div className="finnished" style={video.current ? { width: `${(video.current.currentTime / video.current.duration) * 100}%` } : { width: 0 }}></div>
                        <div className="point"></div>
                    </div></div>
                    <div className="time-stamps">
                        <div className="current">{ct}</div>
                        <div className="fullstime">{video.current ? calcTime(video.current.duration) : <>--:--</>}</div>
                    </div>
                    <div className="video-react-controls">
                        {playing ? <div className="video-react-pause" onClick={pause}><MdPause /></div> :
                            <div className="video-react-play" onClick={play}><MdPlayArrow /></div>
                        }
                        <div className="video-react-rewind" onClick={rewind}><MdFastRewind /></div>
                        <div className="video-react-forward" onClick={foward}><MdFastForward /></div>
                        <div className="video-react-pro"></div>
                        <div className="video-react-pro"></div>
                        <div className="video-react-volume"><div className="volume-add">

                            <div className="volume-div" ref={vdiv} onClick={va} >
                                <div className="finnished" style={video.current ? { width: `${(video.current.volume / 1) * 100}%` } : { width: 0 }}></div>
                                <div className="point"></div>
                            </div></div>{video.current ? <>
                                {
                                    video.current.volume === 0 ?
                                        <MdVolumeOff onClick={Mute} /> :
                                        <>
                                            {video.current.volume < 0.3 ? <><MdVolumeMute onClick={Mute} /></> :
                                                <>{video.current.volume < 0.7 ? <><MdVolumeDown onClick={Mute} /></> :
                                                    <MdVolumeUp onClick={Mute} />}</>
                                            }</>
                                }</> : <></>}</div>
                        {fulls ? <div className="video-react-fullscreen" onClick={exitFullScreen}><MdFullscreenExit /></div> : <div className="video-react-fullscreen" onClick={enterFullScreen}><MdFullscreen /></div>}
                        <div className="video-react-more" ><div style={more ? {
                            transform: 'scale(1)',
                            opacity: 1
                        } : {}} className="video-react-menu">
                            <div className="list-" onClick={pp} >
                                <span className="icon"><MdPictureInPictureAlt /></span>
                                <span className="text">Picture In Picture</span>
                            </div>
                            <div className="list-1">
                                <span className="icon" onClick={minusp} style={video.current ? video.current.playbackRate === 0 ?
                                    { cursor: 'not-allowed' } : {} : {}
                                }><MdRemove /></span>
                                <span className="text">{video.current ? video.current.playbackRate : 1}</span>
                                <span className="icon" onClick={addp}  ><MdAdd /></span>
                            </div>
                        </div><MdMoreHoriz onContextMenu={(e) => {
                            e.preventDefault()
                        }} onClick={mm} /></div>

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




            </section>
        </div>
    )
}
ReactVideo.propTypes = {
    src: PropTypes.string.isRequired,
    poster: PropTypes.string,
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
/*

<iframe width="727" height="409" src="https://www.youtube.com/embed/CDrieqwSdgI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

*/