import React from 'react'
import * as Icons from 'react-icons/all';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';



function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="bottom" title={value}>
            {children}
        </Tooltip>
    );
}

const ProgressBar = withStyles({
    root: {
        color: '#fff',
    },
    thumb: {
        backgroundColor: '#fff',
    },
    active: {},
    rail: {
        backgroundColor: '#fff',
    }
})(Slider);


export const AudioComponent = React.forwardRef((props, ref) => {
    const { src } = props
    return (
        <>
            <audio ref={ref} >
                <source src={src} type={props.type ? props.type : "audio/mp3"} />
            </audio>
        </>
    )
})


export const Cover = () => {
    return (
        <>
            <div className="progress">
                <Progress />
            </div>
            <div className="controls">
                <Controls />
            </div>
        </>
    )
}
export const Progress = () => {
    return (
        <>
            <ProgressBar
                ValueLabelComponent={ValueLabelComponent}
                aria-label="custom thumb label"
                defaultValue={20}
            />
        </>
    )
}



export const Controls = (props) => {
    return (
        <>
            <div className="loop">
                <Icons.ImLoop />
            </div>
            <div className="central-controls">
                <div>
                    <div className="rewind">
                        <Icons.TiMediaRewindOutline />
                    </div>
                    <div className="playpause">
                        <Icons.FaPause />
                    </div>
                    <div className="foward">
                        <Icons.TiMediaFastForwardOutline />
                    </div>
                </div>

            </div>
            <div className="settings">
                <Icons.GoSettings />
            </div>
        </>
    )
}
