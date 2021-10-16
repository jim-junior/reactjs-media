/*
Copyright Beingana Jim Junior, 2021 and all the contributors. License Cn be found in the LICENCE file
*/

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const YoutubePlayer = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [state, setstate] = useState('')
  const [id, setid] = useState('')
  useEffect(() => {
    getId(props.src)
  }, [state, props.src])

  function getId(url) {
    if (url[8] === 'y') {
      const jj = url.slice(17)
      setid(jj)
    }
    if (url[8] === 'w') {
      const jj = url.slice(32)
      setid(jj)
    }
  }





  return (
    <div className={props.className}>
      <iframe title={props.title} width={props.width} height={props.height} src={`https://www.youtube.com/embed/${id}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={props.allowFullScreen ? true : false}></iframe>
    </div>
  )
}

YoutubePlayer.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  allowFullScreen: PropTypes.bool,
  className: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
}

