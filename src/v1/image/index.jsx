import React, { useRef } from 'react';
import PropTypes from 'prop-types'
import './Image.css'
import { MdFileDownload } from 'react-icons/md';
import { Tooltip } from '@material-ui/core';

export const Image = (props) => {
    const img = useRef(null)

    return (
        <section className={`img_section`} style={{ margin: 'auto' }}>
            <picture>
                <source media={props.media} sizes={props.sizes} type={props.type} srcSet={props.srcset} />
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
                    longdesc={props.longdesc}
                    align={props.align}
                    useMap={props.useMap}
                />
            </picture>
            <Tooltip title="Download" aria-label="add" >
                <div className="download_btn">
                    {props.download ? <a download={props.name ? props.name : 'my image'} href={props.src} className="download_lnk"><MdFileDownload /></a> : <></>}
                </div>
            </Tooltip>
            {img.current ? <>{img.current.complete ? <></> : <div className="blur_overlay"></div>}</> : <></>}
        </section>
    )
}
Image.propTypes = {
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