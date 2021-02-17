/* 
Copyright Beingana Jim Junior, 2021 and all the contributors. License Cn be found in the LICENCE file
*/

import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import './audio.css'
import {
    MdPause, MdPlayArrow, MdFastRewind, MdFastForward, MdVolumeUp, MdVolumeDown, MdVolumeMute, MdVolumeOff, MdCallMade,
    MdPauseCircleFilled,
    MdPlayCircleFilled,
    MdCallReceived,
    MdFileDownload,
    MdSettings
} from 'react-icons/md'
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


export const ReactAudio = (props) => {
    const audio = useRef(null)
    const [playing, setplaying] = useState(false)
    const div = useRef(null)
    const [width, setwidth] = useState(0)
    const [small, setsmall] = useState(false)
    // eslint-disable-next-line no-unused-vars
    const [vwidth, setvwidth] = useState(0)
    const [mute, setmute] = useState(false)
    const [ct, setcurrenttime] = useState('00:00')
    const [anchorEl, setAnchorEl] = React.useState(null);

    const OpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const CloseMenu = () => {
        setAnchorEl(null);
    };


    function va(e, n) {

        let time = (n / 100) * 1
        audio.current.volume = time

        setvwidth(n)
    }


    function onSeek(e, newValue) {
        const { duration } = audio.current

        let time = (newValue / 100) * duration
        audio.current.currentTime = time

        setwidth(newValue)
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
                        <Grid container spacing={2}>
                            <Grid item>
                                <Typography variant="caption" color="textSecondary" component="span">
                                    {ct}
                                </Typography>

                            </Grid>
                            <Grid item xs>
                                <Slider style={props.primaryColor ? { color: props.primaryColor } : {}} value={width} onChange={onSeek} aria-labelledby="continuous-slider" />
                            </Grid>
                            <Grid item>
                                <Typography variant="caption" color="textSecondary" component="span">
                                    {audio.current ? calcTime(audio.current.duration) : <>00:00</>}
                                </Typography>

                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="audio-display-controls">
                    <div className="react-audio-play">
                        {playing ?
                            <IconButton style={props.primaryColor ? { color: props.primaryColor } : {}} onClick={pause} color="primary" aria-label="upload picture" component="span">
                                <MdPause />
                            </IconButton>
                            : <IconButton style={props.primaryColor ? { color: props.primaryColor } : {}} onClick={play} color="primary" aria-label="upload picture" component="span">
                                <MdPlayArrow />
                            </IconButton>}
                    </div>
                    <div className="react-audio-rewind">
                        <IconButton style={props.primaryColor ? { color: props.primaryColor } : {}} onClick={rewind} color="primary" aria-label="upload picture" component="span">
                            <MdFastRewind />
                        </IconButton>

                    </div>
                    <div className="react-audio-foward">
                        <IconButton style={props.primaryColor ? { color: props.primaryColor } : {}} onClick={foward} color="primary" aria-label="upload picture" component="span">
                            <MdFastForward />
                        </IconButton>

                    </div>
                    <div className="react-audio-controls"><div className="volume-add">

                        <Slider style={props.primaryColor ? { color: props.primaryColor } : {}} value={audio.current ? (audio.current.volume / 1) * 100 : 0} onChange={va} aria-labelledby="continuous-slider" />
                    </div>
                        {audio.current ? <>
                            <IconButton color="primary" style={props.primaryColor ? { color: props.primaryColor } : {}} onClick={Mute} aria-label="upload picture" component="span">

                                {
                                    audio.current.volume === 0 ?
                                        <MdVolumeOff /> :
                                        <>
                                            {audio.current.volume < 0.3 ? <><MdVolumeMute /></> :
                                                <>{audio.current.volume < 0.7 ? <><MdVolumeDown /></> :
                                                    <MdVolumeUp />}</>
                                            }</>
                                }</IconButton></> : <>
                                <IconButton color="primary" style={props.primaryColor ? { color: props.primaryColor } : {}} onClick={Mute} aria-label="upload picture" component="span">
                                    <MdVolumeUp />
                                </IconButton>
                            </>}
                    </div>
                    <div className="react-audio-fixed">
                        <IconButton aria-controls="audio-menu" aria-haspopup="true" onClick={OpenMenu} color="primary" style={props.primaryColor ? { color: props.primaryColor } : {}} aria-label="settings" component="span">
                            <MdSettings />
                        </IconButton>
                        <Menu
                            id="audio-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={CloseMenu}
                        ><Tooltip title="Mini player" aria-label="add" placement="left" >
                                <MenuItem onClick={() => { setsmall(!small); CloseMenu() }}>
                                    <IconButton color="primary" style={props.primaryColor ? { color: props.primaryColor } : {}} onClick={() => { setsmall(!small) }} aria-label="upload picture" component="span">
                                        <MdCallMade />
                                    </IconButton></MenuItem></Tooltip>
                            {props.download ? <Tooltip title="Download" aria-label="add" placement="left" ><MenuItem onClick={() => { CloseMenu() }}><a download='audio' href={props.src}  >
                                <IconButton color="primary" style={props.primaryColor ? { color: props.primaryColor } : {}} aria-label="upload picture" component="span"><MdFileDownload /></IconButton>
                            </a></MenuItem></Tooltip> : <></>}
                        </Menu>
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
                        {playing ? <><IconButton color="primary" style={props.primaryColor ? { color: props.primaryColor } : {}} onClick={pause} aria-label="upload picture" component="span">
                            <MdPauseCircleFilled />
                        </IconButton></>
                            : <IconButton color="primary" style={props.primaryColor ? { color: props.primaryColor } : {}} onClick={play} aria-label="upload picture" component="span">
                                <MdPlayCircleFilled />
                            </IconButton>
                        }
                    </div>
                    <div className="playing-animation" >
                        <div className="first" style={playing ? {} : { animation: 'none' }}></div>
                        <div className="middle" style={playing ? {} : { animation: 'none' }}></div>
                        <div className="first" style={playing ? {} : { animation: 'none' }}></div>
                    </div>
                    <div className="react-audio-fixed">
                        <IconButton color="primary" style={props.primaryColor ? { color: props.primaryColor } : {}} onClick={() => { setsmall(!small) }} aria-label="upload picture" component="span">
                            <MdCallReceived />
                        </IconButton>
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