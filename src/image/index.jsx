import React, { useRef } from 'react';
import PropTypes from 'prop-types'
import './Image.css'

export const Image = (props) => {
    const img = useRef(null)

    return (
        <section className={`img_section`} style={{ backgroundColor: '#9c9c9c9c' }}>
            <picture>
                <source media={props.media} sizes="" type={props.type} srcset="" />
                <img
                    src={props.src}
                    ref={img}
                    alt={props.alt}
                    className={props.className}
                    crossOrigin={props.crossOrigin}
                    decoding={props.decoding ? props.decoding : 'async'}
                    height={props.height}
                    width={props.width}
                    loading={props.loading ? props.loading : 'lazy'}
                    referrerPolicy={props.referrerPolicy}
                    hspace={props.hspace}
                    id={props.id}
                    vspace={props.vspace}
                    longDesc={props.longdesc}
                    align={props.align}
                    useMap={props.useMap}
                />
            </picture>
            {img.current ? <>{img.current.complete ? <></> : <div className="blur_overlay"></div>}</> : <></>}
        </section>
    )
}
Image.protoType = {
    src: PropTypes.string,
    alt: PropTypes.string,
    madia: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    crossOrigin: PropTypes.string,
    decoding: PropTypes.string,
    height: PropTypes.number,
    srcset: PropTypes.array,
    loading: PropTypes.string,
    referrerPolicy: PropTypes.string,
    hspace: PropTypes.string,
    vspace: PropTypes.string,
    longDesc: PropTypes.string,
    align: PropTypes.string,
    style: PropTypes.object,
    useMap: PropTypes.string
}