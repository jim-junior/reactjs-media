import React from 'react'

const Video = React.forwardRef((props, ref) => {
    const { video } = ref
    return (
        <video onError={() => {
            props.onError()
        }} ref={video} autoPlay={props.autoPlay ? true : false} onPause={() => {
            props.onPause()
        }} onPlay={() => {
            props.onPlay()
        }} className='video-react' onTimeUpdate={(e) => {
            props.onTimeUpdate(e)
        }} controlsList="nodownload" >
            <source src={props.src} type={props.type ? props.type : "video/mp4"} />
        </video>
    )
})

export default Video
