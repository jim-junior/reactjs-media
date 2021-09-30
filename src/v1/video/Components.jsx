import React from 'react'
import { MdPause, MdPlayArrow, MdAdd, MdRemove, MdFastRewind, MdFastForward, MdVolumeUp, MdVolumeDown, MdVolumeMute, MdVolumeOff, MdPictureInPictureAlt, MdFullscreenExit, MdFullscreen, MdSettings, MdFileDownload } from 'react-icons/md'
import './Video.css'
import Tooltip from '@material-ui/core/Tooltip';

export const ControlsBar = React.forwardRef((props, ref) => {
    const { video, ctt, onMouseMove, ofwidth, onSeek, ct, calcTime, pause, play, rewind, foward, va, Mute, playing, fulls,
        exitFullScreen,
        enterFullScreen,
        more,
        pp,
        minusp,
        addp,
        mm } = props
    const { div, vdiv } = ref
    return (
        <div className="video-react-lower-bar_dhhiahhbhhbhb3767d7637____u">

            <div className="hundred tooltip"><div className="progress-video-react" ref={div} onMouseMove={(e) => {
                onMouseMove(e)
            }} onClick={onSeek} >
                <span style={{ left: `${ofwidth}%` }} className="tooltiptext">{ctt}</span>
                <div
                    className="finnished"
                    style={video.current ? { width: `${(video.current.currentTime / video.current.duration) * 100}%`, background: props.primaryColor ? props.primaryColor : '' } : { width: 0 }} >
                    <div className="point"></div>
                </div>

            </div>
            </div>
            <div className="time-stamps">
                <div className="current">{ct}</div>
                <div className="fullstime">
                    {video.current ? calcTime(video.current.duration) : <>--:--</>}
                </div>
            </div>
            <div className="video-react-controls">
                {playing ? <Tooltip title="Pause" aria-label="add" placement="top" >
                    <div className="video-react-pause" onClick={pause}>
                        <MdPause />
                    </div>
                </Tooltip> :
                    <Tooltip title="Play" aria-label="add" placement="top" >
                        <div className="video-react-play" onClick={play}>
                            <MdPlayArrow />
                        </div>
                    </Tooltip>
                }
                <Tooltip title="Rewind" aria-label="add" placement="top" >
                    <div className="video-react-rewind" onClick={rewind}>
                        <MdFastRewind />
                    </div>
                </Tooltip>
                <Tooltip title="Forward" aria-label="add" placement="top" >
                    <div className="video-react-forward" onClick={foward}>
                        <MdFastForward />
                    </div>
                </Tooltip>
                <div className="video-react-pro"></div>
                <div className="video-react-pro"></div>
                <Tooltip title="Volume" aria-label="add" placement="top" >
                    <div className="video-react-volume"><div className="volume-add">

                        <div className="volume-div" ref={vdiv} onClick={va} >
                            <div className="finnished" style={video.current ? { width: `${(video.current.volume / 1) * 100}%` } : { width: 0 }}>

                            </div>
                            <div className="point"></div>
                        </div>
                    </div>
                        {video.current ? <>
                            {
                                video.current.volume === 0 ?
                                    <MdVolumeOff onClick={Mute} /> :
                                    <>
                                        {video.current.volume < 0.3 ? <><MdVolumeMute onClick={Mute} /></> :
                                            <>{video.current.volume < 0.7 ? <><MdVolumeDown onClick={Mute} /></> :
                                                <MdVolumeUp onClick={Mute} />}</>
                                        }</>
                            }</> : <><MdVolumeUp /></>}
                    </div>
                </Tooltip>
                <Tooltip title="Fullscreen" aria-label="add" placement="top" >
                    {fulls ? <div className="video-react-fullscreen" onClick={exitFullScreen}>
                        <MdFullscreenExit />
                    </div> : <div className="video-react-fullscreen" onClick={enterFullScreen}>
                        <MdFullscreen />
                    </div>}
                </Tooltip>

                <Tooltip arrow title="Settings" aria-label="add" placement="left" ><div className="video-react-more" >

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
                        <Tooltip arrow title="Playback speed" aria-label="add" placement="left" ><div className="list-1">
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
                    <MdSettings style={more ? { transform: 'rotate(40deg)', transition: 'all 0.2s' } : { transition: 'all 0.2s' }} onContextMenu={(e) => {
                        e.preventDefault()
                    }} onClick={mm} />
                </div>
                </Tooltip>

            </div>
        </div>
    )
})

export const Loading = () => {
    return (
        <div>

        </div>
    )
}