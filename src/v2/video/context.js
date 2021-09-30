import React, { createContext, useState } from 'react'

export let VideoContext = createContext({})

const ContextProvider = (props) => {
    const [volumeadjuston, setvolumeadjuston] = useState(false)
    const [playback, setplayback] = useState(false)
    const [CurrentTime, setCurrentTime] = useState('00:00')
    const [Duration, setDuration] = useState('00:00')
    const [FinishedPerc, setFinishedPerc] = useState(0)
    const [setting, setsetting] = useState(false)
    const [Playing, setPlaying] = useState(false)
    const { src, video, CMposition, setcontextmenu, contextmenu, section } = props
    function evaluatePercentage(current, duration) {
        let perc = (current / duration) * 100
        setFinishedPerc(perc)
    }
    const value = {
        video,
        src,
        setcontextmenu,
        contextmenu,
        CMposition,
        section,
        playback,
        setplayback,
        volumeadjuston,
        setvolumeadjuston,
        CurrentTime,
        setCurrentTime,
        Playing,
        setPlaying,
        Duration,
        evaluatePercentage,
        setFinishedPerc,
        FinishedPerc,
        setDuration,
        setting,
        setsetting
    }
    return (
        <VideoContext.Provider value={value}>
            {props.children}
        </VideoContext.Provider>
    )
}

export default ContextProvider
