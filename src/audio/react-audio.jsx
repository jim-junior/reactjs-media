/* 
Copyright Beingana Jim Junior, 2021 and all the contributors. License Cn be found in the LICENCE file
*/

import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import './audio.css'
import * as icons from 'react-icons/md'

export const ReactAudio = (props) => {
    const audio = useRef(null)
    const [playing, setplaying] = useState(false)
    const vdiv = useRef(null)
    const div = useRef(null)
    const [width, setwidth] = useState(0)
    const [small, setsmall] = useState(false)
    const [vwidth, setvwidth] = useState(0)
    const [mute, setmute] = useState(false)
    const [ct, setcurrenttime] = useState('00:00')


    function va(e) {
        const x = e.nativeEvent.layerX
        const { offsetWidth } = vdiv.current

        let time = (x / offsetWidth) * 1
        audio.current.volume = time

        let perc = (x / offsetWidth) * 100
        setvwidth(perc)
    }


    function onSeek(e) {
        const x = e.nativeEvent.layerX
        const { offsetWidth } = div.current
        const { duration } = audio.current

        let time = (x / offsetWidth) * duration
        audio.current.currentTime = time

        let perc = (x / offsetWidth) * 100
        setwidth(perc)
        if (props.onSeek) {
            props.onSeek()
        }

    }
    function TimeUpdate(e) {
        const { currentTime } = audio.current
        setcurrenttime(calcTime(currentTime))
    }
    async function Mute(e) {
        await setmute(!mute)
        if (audio.current.volume > 0) {
            audio.current.volume = 0
            setvwidth(0)
        } else {
            audio.current.volume = 1
            setvwidth(100)
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

    function timeChanging(e) {
        const { currentTime, duration } = audio.current
        const w = (currentTime / duration) * 100
        setwidth(w)
        if (props.onTimeUpdate) {
            props.onTimeUpdate(e, currentTime, w)
        }


    }

    function play() {
        audio.current.play()
        setplaying(true)
        if (props.onPlay) {
            props.onPlay()
        }
    }
    function pause() {
        audio.current.pause()
        setplaying(false)
        if (props.onPause) {
            props.onPause()
        }
    }
    function foward(e) {
        let x = 0.025 * audio.current.duration
        audio.current.currentTime += x
        if (props.onFoward) {
            props.onFoward()
        }

    }
    function rewind(e) {
        let x = 0.05 * audio.current.currentTime
        audio.current.currentTime -= x
        if (props.onRewind) {
            props.onRewind()
        }

    }
    return (
        <div >
            <section className={`react-audio-covering-div_EJIJIJijajijshi_2428242cf_22 ${props.className}`}>
                <audio ref={audio} autoPlay={props.autoPlay ? true : false} onPlay={() => { setplaying(true) }} onPause={() => { setplaying(false) }} onTimeUpdate={(e) => {
                    TimeUpdate(e)
                    timeChanging(e)
                }}>
                    <source src={props.src} type="audio/mpeg"></source>
                </audio>



                <div className="audio-react-p1">



                    <div className="hundred">
                        <div className="progress-audio-react_dkijs_23443sxjsjAJajAJ3" ref={div} onClick={onSeek} >
                            <div className="finnished" style={{ width: `${width}%` }} ></div>
                            <div className="point"></div>
                        </div>
                    </div>
                    <div className="playing-animation">
                        <div className="first" style={playing ? {} : { animation: 'none' }}></div>
                        <div className="middle" style={playing ? {} : { animation: 'none' }}></div>
                        <div className="first" style={playing ? {} : { animation: 'none' }}></div>
                    </div>
                </div>
                <div className="time-stamps-audio_12242334_A_wjsh">
                    <div className="current">{ct}</div>
                    <div className="fullstime">{audio.current ? calcTime(audio.current.duration) : <></>}</div>
                </div>
                <div className="audio-display-controls">
                    <div className="react-audio-play">
                        {playing ?
                            <icons.MdPause onClick={pause} /> : <icons.MdPlayArrow onClick={play} />}
                    </div>
                    <div className="react-audio-rewind">
                        <icons.MdFastRewind onClick={rewind} />
                    </div>
                    <div className="react-audio-foward">
                        <icons.MdFastForward onClick={foward} />
                    </div>
                    <div className="react-audio-controls"><div className="volume-add">

                        <div className="volume-div" ref={vdiv} onClick={va} >
                            <div className="finnished" style={audio.current ? { width: `${(audio.current.volume / 1) * 100}%` } : { width: 0 }}></div>
                            <div className="point"></div>
                        </div></div>{audio.current ? <>
                            {
                                audio.current.volume === 0 ?
                                    <icons.MdVolumeOff onClick={Mute} /> :
                                    <>
                                        {audio.current.volume < 0.3 ? <><icons.MdVolumeMute onClick={Mute} /></> :
                                            <>{audio.current.volume < 0.7 ? <><icons.MdVolumeDown onClick={Mute} /></> :
                                                <icons.MdVolumeUp onClick={Mute} />}</>
                                        }</>
                            }</> : <></>}
                    </div>
                    <div className="react-audio-fixed">
                        <icons.MdCallMade onClick={() => { setsmall(!small) }} />
                    </div>

                </div>
                {small ?
                    <div className='miniplayermode_2ueyhud87928_wuh'>
                        <span>Playing In Mini-Player mode.</span>
                    </div> : <></>}
            </section>
            {small ?
                <aside className={`react-audio-covering-div_EJI ${props.className}`}>
                    <div className="react-audio-play">
                        {playing ?
                            <icons.MdPauseCircleFilled onClick={pause} /> : <icons.MdPlayCircleFilled onClick={play} />}
                    </div>
                    <div className="playing-animation" >
                        <div className="first" style={playing ? {} : { animation: 'none' }}></div>
                        <div className="middle" style={playing ? {} : { animation: 'none' }}></div>
                        <div className="first" style={playing ? {} : { animation: 'none' }}></div>
                    </div>
                    <div className="react-audio-fixed">
                        <icons.MdCallReceived onClick={() => { setsmall(!small) }} />
                    </div>
                </aside> : <></>}
        </div>
    )
}


ReactAudio.propTypes = {
    src: PropTypes.string.isRequired,
    poster: PropTypes.string,
    autoPlay: PropTypes.bool,
    className: PropTypes.string,
    onFoward: PropTypes.func,
    onRewind: PropTypes.func,
    onSeek: PropTypes.func,
    onMute: PropTypes.func,
    onTimeUpdate: PropTypes.func,
    onPlay: PropTypes.func,
    onPause: PropTypes.func
}