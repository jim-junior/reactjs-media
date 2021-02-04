import React, { useRef, useEffect, useState } from 'react'

export const FacebookPlayer = (props) => {
    const div = useRef(null)
    // eslint-disable-next-line no-unused-vars
    const [state, setstate] = useState('')
    useEffect(() => {
        let script = div.current.ownerDocument.createElement("script");
        script.setAttribute('src', "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0")

        script.setAttribute('crossorigin', "anonymous")
        script.setAttribute('nonce', "G8MwWZCX")
        script.setAttribute('async', "true")
        script.setAttribute('defer', "true")
        div.current.ownerDocument.body.insertAdjacentElement('afterBegin', script)


        let fdRoot = div.current.ownerDocument.createElement("div");
        fdRoot.setAttribute('id', "fb-root")
        div.current.ownerDocument.body.insertAdjacentElement('afterBegin', fdRoot)
        // add the text node to the newly created div
    }, [state])
    return (
        <div>
            <div class="fb-video"
                ref={div}
                data-href={props.src}
                data-width={props.width}
                data-allowfullscreen={props.allowFullScreen}
                data-autoplay={props.autoPlay}
                data-lazy={props.lazy}
                data-show-text={props.showText}
                data-show-captions={props.captions}></div>
        </div>
    )
}

