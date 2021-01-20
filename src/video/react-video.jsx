import React, { useRef, useState, useEffect } from 'react'
import { MdPause, MdPlayArrow, MdFastRewind, MdFastForward, MdVolumeUp, MdBrandingWatermark, MdVolumeDown, MdVolumeMute, MdVolumeOff } from 'react-icons/md'
import { AiOutlineEllipsis, AiOutlineFullscreen } from 'react-icons/ai'
import PropTypes from 'prop-types';
import './Video.css'




const ReactVideo = (props) => {
    const [playing, setplaying] = useState(false)
    const video = useRef(null)
    const div = useRef(null)
    const vdiv = useRef(null)
    const [total, settotlat] = useState('00:00')
    const [state, setstate] = useState(0)
    const [width, setwidth] = useState(0)
    const [vwidth, setvwidth] = useState(0)
    const [mute, setmute] = useState(false)
    const [more, setmore] = useState(false)
    const [ct, setcurrenttime] = useState('00:00')

    useEffect(() => {
        async function work() {
            const { duration } = await video.current
            if (isNaN(duration)) {
                setTimeout(() => {

                    setstate('')
                }, 5000);
                setTimeout(() => {

                    setstate('')
                }, 5000);
            }
            settotlat(calcTime(duration))

        }
        work()
    }, [state])
    const mm = () => {
        setmore(!more)
    }
    function va(e) {
        const x = e.nativeEvent.layerX
        const { offsetWidth } = vdiv.current

        let time = (x / offsetWidth) * 1
        video.current.volume = time

        let perc = (x / offsetWidth) * 100
        setvwidth(perc)
    }
    function foward(e) {
        let x = 0.025 * video.current.duration
        video.current.currentTime += x
        props.onFoward()
    }
    function rewind(e) {
        let x = 0.05 * video.current.currentTime
        video.current.currentTime -= x
        props.onRewind()
    }

    function onSeek(e) {
        const x = e.nativeEvent.layerX
        const { offsetWidth } = div.current
        const { duration } = video.current

        let time = (x / offsetWidth) * duration
        video.current.currentTime = time

        let perc = (x / offsetWidth) * 100
        setwidth(perc)
        props.onSeek()
    }
    function TimeUpdate(e) {
        const { currentTime } = video.current
        setcurrenttime(calcTime(currentTime))
    }
    async function Mute(e) {
        await setmute(!mute)
        if (video.current.volume > 0) {
            video.current.volume = 0
            setvwidth(0)
        } else {
            video.current.volume = 1
            setvwidth(100)
        }
        props.onMute(mute)
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
        if (h < 0) {
            h = ``
        } else if (h < 10) {
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
    function timeChanging(e) {
        const { currentTime, duration } = video.current
        const w = (currentTime / duration) * 100
        setwidth(w)
        if (total === '00:00') {

            setstate('')

        }
        if (props.onTimeUpdate) {
            props.onTimeUpdate(e, currentTime, w)
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
    const enterFullScreen = (e) => {
        video.current.requestFullscreen()
        if (props.onEnterFullScreen) {
            props.onEnterFullScreen(e)
        }

    }
    return (
        <div>
            <section className="one"  >
                <video ref={video} autoPlay={props.autoPlay ? true : false} onPause={() => {
                    setplaying(false)
                }} onPlay={() => {
                    setplaying(true)
                }} poster={props.poster} className='video-react' onTimeUpdate={(e) => {
                    TimeUpdate(e)
                    timeChanging(e)
                }} >
                    <source src={props.src} type="video/mp4" />
                </video>
                {video.current ? <>
                    {video.current.seeking ?
                        <div className="video-react-loading"></div> : <></>}</> : <></>}
                <div className="video-react-lower-bar">
                    <div className="hundred"><div className="progress-video-react" ref={div} onClick={onSeek} >
                        <div className="finnished" style={{ width: `${width}%` }}></div>
                        <div className="point"></div>
                    </div></div>
                    <div className="time-stamps">
                        <div className="current">{ct}</div>
                        <div className="fullstime">{total}</div>
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
                                <div className="finnished" style={{ width: `${vwidth}%` }}></div>
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
                        <div className="video-react-fullscreen" onClick={enterFullScreen}><AiOutlineFullscreen /></div>
                        <div className="video-react-more"><div style={more ? {
                            transform: 'scale(1)',
                            opacity: 1
                        } : {}} className="video-react-menu">
                            <div className="list-" onClick={pp}>
                                <span className="icon"><MdBrandingWatermark /></span>
                                <span className="text">Picture In Picture</span>
                            </div>
                            <div className="list-">
                                <span className="icon">16X</span>
                                <span className="text">Playback Speed</span>
                            </div>
                            <div className="list-">
                                <span className="icon"></span>
                                <span className="text"></span>
                            </div>
                        </div><AiOutlineEllipsis onClick={mm} /></div>

                    </div>
                </div>

            </section>
        </div>
    )
}
ReactVideo.propTypes = {
    src: PropTypes.string.isRequired,
    poster: PropTypes.string,
    autoPlay: PropTypes.bool,
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
export default ReactVideo;