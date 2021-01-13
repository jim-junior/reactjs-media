import React, {useRef, useState, useEffect} from 'react'
import './Video.css'
import * as icons from 'react-icons/md'
import * as icon from 'react-icons/ai'

/* 
    offsetWidth: Is the fullwidth
    clientX: is the clicked width
    
    */


const ReactVideo = () => {
    const [playing, setplaying] = useState(false)
    const video = useRef(null)
    const div = useRef(null)
    const [vc, setvc] = useState({})
    const [total, settotlat] = useState('00:00')
    const [state, setstate] = useState(0)
    const [width, setwidth] = useState(0)
    const [ct, setcurrenttime] = useState('00:00')
    
    useEffect(() => {
        async function work() {
            const { duration} = await video.current
        if (isNaN(duration)) {
            setTimeout(() => {
                
            setstate('')
            }, 5000);
            setTimeout(() => {
                
            setstate('')
            }, 5000);
        }
        setvc(video.current)
        settotlat(calcTime(duration))
        
        }
        work()
    }, [state])
    

    function onSeek(e) {
        const x = e.clientX
        const { offsetWidth } = div.current
        const { duration} =  video.current

        let time = (x / offsetWidth) * duration
        video.current.currentTime = time
        
        let perc = (x / offsetWidth) * 100
        setwidth(perc)
    }
    function TimeUpdate(e) {
        const {currentTime} =  video.current
        setcurrenttime(calcTime(currentTime))
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
    
    function timeChanging() {
        const {currentTime, duration} =  video.current
        const w = (currentTime / duration) * 100
        setwidth(w)
        if (isNaN(duration)) {
                
            setstate('')
            
        }

    }


    const play = (e) => {
        video.current.play()
        setplaying(true)
        console.log(vc.currentTime)
    }
    const pause = (e) => {
        video.current.pause()
        setplaying(false)
    }
    const enterFullScreen = (e) => {
        video.current.requestFullscreen()
    }
    return (
        <div>
        <section className="one">
            <video ref={video} className='video-react' onTimeUpdate={(e) => {
                TimeUpdate(e)
                timeChanging()
            }} >
                <source src="/Crazy.Rich.Asians.2018.720p.WEBRip.x264-%5BYTS.AM%5D.mp4" type="video/mp4"/>
            </video>
            <div className="video-react-lower-bar">
                <div className="progress-video-react" ref={div} onClick={onSeek} >
                    <div className="finnished" style={{width: `${width}%`}}></div>
                    <div className="point"></div>
                </div>
                <div className="time-stamps">
                    <div className="current">{ct}</div>
                    <div className="fullstime">{total}</div>
                </div>
                <div className="video-react-controls">
                    {playing ? <div className="video-react-pause" onClick={pause}><icons.MdPause /></div>: 
                    <div className="video-react-play" onClick={play}><icons.MdPlayArrow /></div>
            }
                    <div className="video-react-pro"></div>
                    <div className="video-react-pro"></div>
                    <div className="video-react-pro"></div>
                    <div className="video-react-pro"></div>
                    <div className="video-react-volume"><div className="volume-add"></div><icons.MdVolumeUp /></div>
                    <div className="video-react-fullscreen" onClick={enterFullScreen}><icon.AiOutlineFullscreen /></div>
                    <div className="video-react-more"><icon.AiOutlineEllipsis /></div>
                    
                </div>
            </div>
            
        </section>
        </div>
    )
}

export default ReactVideo