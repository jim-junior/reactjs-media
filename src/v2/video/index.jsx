/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import './index.css'
import { ControlsBar, Style, VideoComponent, ContextMenu, VolumeAdjust, Poster, PlaybackSpeedAdjust } from './components.jsx'
import ContextProvider from './context.js'



/**
 * ## Video component
 * This is the video component for `reactjs-media`. It creates a video tag with more functionality that the normal video element in the browser.
 * ### Usage 
 * To use this component you have to import it from the package
 * ```
 * import {Video} from 'reactjs-media';
 * 
 * const Mycomponent =(props) => {
 *      return (
 *          <div>
 *               <Video
 *                   src="/path/to/video" // this is the source of the video
 *                   primaryColor="red" // theme
 *                   autoPlay
 *                />
 *          </div>
 *      )
 * }
 * ```
 */
const Video = (props) => {
    const vide = useRef(null)
    const section = useRef(null)
    const [contextmenu, setcontextmenu] = useState(false)
    const [CMposition, setCMposition] = useState({
        left: 0,
        top: 0
    })
    const [video, setvideo] = useState({})
    const [render, setr] = useState({})
    useEffect(() => {
        setvideo(vide)
    }, [render])


    function dispContextMenu(e) {
        e.preventDefault()
        setCMposition({
            left: e.pageX,
            top: e.pageY
        })
        setcontextmenu(true)
    }


    return (
        <ContextProvider {...props}
            setcontextmenu={setcontextmenu}
            contextmenu={contextmenu}
            section={section}
            video={video}
            CMposition={CMposition}
        >
            <Style primaryColor={props.primaryColor} />
            <section ref={section} className="video-cover" onContextMenu={dispContextMenu}>
                <VideoComponent ref={vide} {...props} />
                <ControlsBar {...props} video={video} />
                <VolumeAdjust video={video} />
                <PlaybackSpeedAdjust />
                <Poster poster={props.poster} />
                <ContextMenu {...props} />
            </section>
        </ContextProvider>
    )
}



Video.propTypes = {
    src: PropTypes.string.isRequired,
    type: PropTypes.string,
    poster: PropTypes.string,
    primaryColor: PropTypes.string,
    autoPlay: PropTypes.bool,
    className: PropTypes.string,
    onFoward: PropTypes.func,
    onSeek: PropTypes.func,
    onRequestPictureInPicture: PropTypes.func,
    onTimeUpdate: PropTypes.func,
    onPlay: PropTypes.func,
    onPause: PropTypes.func,
    onEnterFullScreen: PropTypes.func
}





export default Video



