import React, { createContext } from 'react';


export const AudioCtx = createContext({})

const ContextComponent = (props) => {
    return (
        <AudioCtx.Provider >
            {props.children}
        </AudioCtx.Provider>
    )
}

export default ContextComponent
