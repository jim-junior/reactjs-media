/* eslint-disable no-unused-vars */
import React, { forwardRef, useRef, useEffect, useState, useContext } from 'react'
import * as Icons from 'react-icons/all'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import IconButton from '@material-ui/core/IconButton';
import { VideoContext } from './context.js';
import { EvaluateTime } from './utils';
//import { VideoContext } from './context';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';







export const VideoComponent = forwardRef((props, ref) => {
    const { setPlaying, setCurrentTime, setDuration, evaluatePercentage } = useContext(VideoContext)
    const { src } = props
    return (
        <>
            <video onPlay={(e) => {
                setPlaying(true)
                setDuration(EvaluateTime(ref.current.duration))
                if (props.onPlay) {
                    props.onPlay(e)
                }
            }}
                onPause={(e) => {
                    setPlaying(false)
                    if (props.onPause) {
                        props.onPause(e)
                    }
                }}
                ref={ref}
                className="video-component"
                autoPlay={props.autoPlay ? true : false}
                controlsList="nodownload"
                onTimeUpdate={(e) => {
                    setCurrentTime(EvaluateTime(ref.current.currentTime))
                    evaluatePercentage(ref.current.currentTime, ref.current.duration)
                    if (props.onTimeUpdate) {
                        props.onTimeUpdate(e, ref.current.currentTime, ref.current.duration)
                    }
                }} >
                <source src={src} type={props.type ? props.type : "video/mp4"} />
            </video>
        </>
    )
})


export const ControlsBar = (props) => {
    return (
        <>
            <div className="controlsbar">
                <div className="controlscover">
                    <Progress {...props} />
                    <LowerControls {...props} />
                </div>
            </div>
        </>
    )
}

export const Progress = (props) => {
    const div = useRef(null)
    const { CurrentTime, FinishedPerc, video } = useContext(VideoContext)
    const [ctt, setctt] = useState('00:00')
    const [ofwidth, setofwidth] = useState(0)

    function seek(e) {
        const x = e.nativeEvent.layerX
        const { offsetWidth } = div.current
        const { duration } = video.current

        let time = (x / offsetWidth) * duration
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
        setctt(EvaluateTime(time))
        let xx = x - 13

        let seekwidth = (xx / offsetWidth) * 100
        setofwidth(seekwidth)

        if (props.onSeek) {
            props.onSeek()
        }

    }
    return (
        <>
            <div ref={div} onClick={seek} onMouseMove={(e) => {
                onMove(e)
            }} className="progress tooltip">
                <div className="finnished" style={{ width: `${FinishedPerc}%` }}></div>
                <div className="point"></div>
                <span style={{ left: `${ofwidth}%` }} className="tooltiptext">{ctt}</span>
            </div>
        </>
    )
}

export const LowerControls = (props) => {
    const { Playing, CurrentTime, Duration, section } = useContext(VideoContext)
    const [fullscreen, setfullscreen] = useState(false)

    const { video } = props
    function play(e) {
        video.current.play()
        if (props.onPlay) {
            props.onPlay(e)
        }
    }
    function forward(e) {
        let dur = (5 / 100) * video.current.duration

        video.current.currentTime += dur
    }
    function pause(e) {
        video.current.pause()
    }
    const enterFullScreen = (e) => {
        section.current.requestFullscreen()
        if (props.onEnterFullScreen) {
            props.onEnterFullScreen(e)
        }
        setfullscreen(true)

    }
    const exitFullScreen = (e) => {
        section.current.ownerDocument.exitFullscreen()
        setfullscreen(false)

    }
    return (
        <>
            <div className="controls">
                <div className="play">
                    {Playing ? <Icons.FaPause onClick={pause} /> :
                        <Icons.FaPlay onClick={play} />}
                </div>
                <div className="foward">
                    <Icons.FaForward onClick={forward} />
                </div>
                <div className="timestamps">
                    {CurrentTime} / {Duration}
                </div>
                <div className="settimgs">
                    <div className="fullscreen">
                        {fullscreen === false ? <Icons.RiFullscreenFill onClick={enterFullScreen} /> :
                            <Icons.MdFullscreenExit onClick={exitFullScreen} />}
                    </div>
                    <Settings />
                </div>
            </div>
        </>
    )
}

export const Settings = (props) => {
    const { setsetting, setting } = useContext(VideoContext)
    return (
        <div className="settings">
            <Icons.GoSettings onClick={(e) => { setsetting(!setting) }} />
            <SettingsMenu {...props} />
        </div>
    )
}

export const SettingsMenu = (props) => {
    const { setting, setsetting, src, setvolumeadjuston, setplayback, video } = useContext(VideoContext)
    const [looping, setlooping] = useState(false)
    function loop(e) {
        setlooping(!looping)
        video.current.loop = !video.current.loop
    }
    function PictureInPicture(e) {
        video.current.requestPictureInPicture()
        if (props.onRequestPictureInPicture) {
            props.onRequestPictureInPicture()
        }
    }
    return (
        <div style={setting === false ? { display: 'none' } : {}} className="settingsmenu">
            <div className="menutop menuitem">
                <span className="icon">
                    <Icons.IoCloseCircleOutline onClick={(e) => { setsetting(false) }} />
                </span>
                <span className="item">Settings</span>
            </div>
            <a download="video" href={src} className="menuitem">
                <span className="icon">
                    <Icons.FiDownloadCloud />
                </span>
                <span className="item">Download</span>
            </a>
            <div onClick={loop} className="menuitem">
                <span className="icon">
                    <Icons.MdLoop />
                </span>
                {looping ? <span className="item">Stop Loop</span> :
                    <span className="item">Loop</span>}
            </div>
            <div onClick={PictureInPicture} className="menuitem">
                <span className="icon">
                    <Icons.MdPictureInPicture />
                </span>
                <span className="item">MiniPlayer</span>
            </div>
            <div onClick={(e) => { setplayback(true) }} className="menuitem">
                <span className="icon">
                    <Icons.GiSpeedometer />
                </span>
                <span className="item">Playback Speed</span>
            </div>
            <div onClick={(e) => { setvolumeadjuston(true) }} className="menuitem">
                <span className="icon">
                    <Icons.FaVolumeUp />
                </span>
                <span className="item">Volume</span>
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    root: {
        width: 200,
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        textAlign: 'center',
        marginTop: 50,
        background: 'black',
        padding: '1rem',
        borderRadius: 10
    },
});

export const VolumeAdjust = (props) => {
    const { volumeadjuston, setvolumeadjuston, video } = useContext(VideoContext)
    const classes = useStyles();
    const [value, setValue] = React.useState(100);

    const handleChange = (event, newValue) => {
        const volume = newValue / 100
        video.current.volume = volume
        setValue(newValue)
    };

    return (
        <div style={volumeadjuston ? {} : { display: 'none' }} className="volumeadjust">
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item>
                        <IconButton onClick={(e) => { setvolumeadjuston(false) }} style={{ color: 'white' }} aria-label="delete">
                            <Icons.CgClose />
                        </IconButton>

                    </Grid>
                </Grid>
                <Typography id="continuous-slider" gutterBottom>
                    Volume
                </Typography>
                <Grid container spacing={2}>
                    <Grid item>
                        <Icons.MdVolumeDown />
                    </Grid>
                    <Grid item xs>
                        <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                    </Grid>
                    <Grid item>
                        <Icons.MdVolumeUp />
                    </Grid>
                </Grid>
            </div>
        </div>

    );
}
function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
};

const iOSBoxShadow =
    '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const marks = [
    {
        value: 0,
    },
    {
        value: 0.5,
    },
    {
        value: 1,
    },
    {
        value: 10,
    },
];

const IOSSlider = withStyles({
    root: {
        color: '#3880ff',
        height: 2,
        padding: '15px 0',
    },
    thumb: {
        height: 28,
        width: 28,
        backgroundColor: '#fff',
        boxShadow: iOSBoxShadow,
        marginTop: -14,
        marginLeft: -14,
        '&:focus, &:hover, &$active': {
            boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                boxShadow: iOSBoxShadow,
            },
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 12px)',
        top: -22,
        '& *': {
            background: 'transparent',
            color: '#fff',
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



export const PlaybackSpeedAdjust = (props) => {
    const { video, playback, setplayback } = useContext(VideoContext)
    const classes = useStyles();
    const [value, setValue] = React.useState(100);

    const handleChange = (event, newValue) => {
        const volume = newValue
        video.current.playbackRate = volume
        setValue(newValue)
    };

    return (
        <div style={playback ? {} : { display: 'none' }} className="volumeadjust">
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item>
                        <IconButton onClick={(e) => { setplayback(false) }} style={{ color: 'white' }} aria-label="delete">
                            <Icons.CgClose />
                        </IconButton>

                    </Grid>
                </Grid>
                <Typography id="discrete-slider-small-steps" gutterBottom>
                    Playback Speed
                </Typography>
                <IOSSlider aria-label="ios slider" onChange={handleChange} defaultValue={1} min={0} max={10} marks={marks} valueLabelDisplay="on" step={0.5} />
            </div>
        </div>

    );
}



export const Poster = (props) => {
    const { Playing, video } = useContext(VideoContext)
    const [onscreen, setonscreen] = useState(true)
    useEffect(() => {
        if (Playing === true) {
            setonscreen(false)
        }
    }, [Playing])
    function play(e) {
        video.current.play()
    }
    return (
        <div style={onscreen === false ? { display: 'none' } : {}} className="postercover">
            <div className="posterimage">
                {props.poster ? <img src={props.poster} alt="poster" /> : ""}
                <div className="postericon">
                    <div className="picon">
                        <Icons.FaPlay onClick={play} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export const ContextMenu = () => {
    const { contextmenu, CMposition, Playing, setcontextmenu, src, setplayback, video } = useContext(VideoContext)
    const { left, top } = CMposition
    function PictureInPicture(e) {
        video.current.requestPictureInPicture()
    }
    function play(e) {
        video.current.play()
    }
    function pause(e) {
        video.current.pause()
    }
    function setClipboard() {
        let text = video.current.currentSrc
        navigator.clipboard.writeText(text).then(function () {
        }, function () {
            // eslint-disable-next-line no-restricted-globals
            alert('failed to copy url')
        });
    }
    return (
        <div style={contextmenu === false ? { display: 'none' } : {}} onClick={(e) => { setcontextmenu(!contextmenu) }} className="contextcover">
            <div style={{ marginTop: top, marginLeft: left }} className="contextmenu">
                <div onClick={Playing ? pause : play} className="menuitem">
                    {Playing ? <>
                        <span className="icon">
                            <Icons.FaPause />
                        </span>
                        <span className="item">Pause</span></> :
                        <>
                            <span className="icon">
                                <Icons.FaPlay />
                            </span>
                            <span className="item">Play</span></>}
                </div>
                <a download="video" href={src} className="menuitem">
                    <span className="icon">
                        <Icons.FiDownloadCloud />
                    </span>
                    <span className="item">Download</span>
                </a>
                <div onClick={PictureInPicture} className="menuitem">
                    <span className="icon">
                        <Icons.MdPictureInPicture />
                    </span>
                    <span className="item">MiniPlayer</span>
                </div>
                <div onClick={(e) => { setplayback(true) }} className="menuitem">
                    <span className="icon">
                        <Icons.GiSpeedometer />
                    </span>
                    <span className="item">Playback Speed</span>
                </div>
                <div onClick={(e) => { setClipboard() }} className="menuitem">
                    <span className="icon">
                        <Icons.MdFlipToBack />
                    </span>
                    <span className="item">Copy Video Adress</span>
                </div>
            </div>
        </div>
    )
}

export const Style = (props) => {
    return (
        <>
            <style jsx>{`
        .play:hover, .foward:hover, .timestamps:hover, .fullscreen:hover, .settings:hover {
            color: ${props.primaryColor};
        }
        .finnished {
                    background-color: ${props.primaryColor} !important;
                }
                .point {
                    background-color: ${props.primaryColor} !important;
                }
        `}</style>
        </>
    )
}
