import _regeneratorRuntime from '@babel/runtime/regenerator';
import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import React, { useState, useRef } from 'react';
import { MdPause, MdPlayArrow, MdFastRewind, MdFastForward, MdVolumeOff, MdVolumeMute, MdVolumeDown, MdVolumeUp, MdPictureInPictureAlt, MdRemove, MdAdd } from 'react-icons/md';
import { AiOutlineFullscreen, AiOutlineEllipsis } from 'react-icons/ai';
import PropTypes from 'prop-types';

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css = ".one___flkjsjJJNJnn_nANN8hG_YG7GY7g7BH9 {\n  width: 100%;\n  height: 100%;\n  color: blue;\n  background: black;\n  position: relative;\n}\n\n.one___flkjsjJJNJnn_nANN8hG_YG7GY7g7BH9:hover .video-react-lower-bar_dhhiahhbhhbhb3767d7637____u {\n  opacity: 1;\n}\n\n.progress-video-react {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 2px;\n  width: 100%;\n  margin-bottom: 5px;\n  cursor: pointer;\n  background-color: aliceblue;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n\n.progress-video-react .finnished {\n  background-color: #006eff;\n  height: 100%;\n}\n\n.progress-video-react .point {\n  width: 0px;\n  height: 0px;\n  border-radius: 50%;\n  background-color: aqua;\n}\n\n.progress-video-react .point:hover {\n  background-color: #006eff;\n}\n\n.progress-video-react:focus {\n  background-color: yellow;\n}\n\n.progress-video-react:hover {\n  height: 5px;\n}\n\n.progress-video-react:hover .point {\n  width: 1px;\n  height: 10px;\n}\n\n.video-react-loading {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: rgba(255, 255, 255, 0.089);\n  border: white 2px solid;\n  border-top: blue 2px solid;\n  width: 50px;\n  top: 33.33%;\n  left: 43.33%;\n  -webkit-animation: loading 1s infinite;\n          animation: loading 1s infinite;\n  position: absolute;\n  /* margin: auto;\r\n\tmargin-top: auto;\r\n\tmargin-bottom: auto; */\n}\n\n@-webkit-keyframes loading {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes loading {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.video-react-lower-bar_dhhiahhbhhbhb3767d7637____u {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  margin: 0.5rem 0.3rem;\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), color-stop(rgba(0, 0, 0, 0.404)), color-stop(rgba(0, 0, 0, 0.589)), to(rgba(0, 0, 0, 0.863)));\n  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.404), rgba(0, 0, 0, 0.589), rgba(0, 0, 0, 0.863));\n  -webkit-transition: all 0.5s ease-out;\n  transition: all 0.5s ease-out;\n  opacity: 0;\n}\n\n.one___flkjsjJJNJnn_nANN8hG_YG7GY7g7BH9 > video {\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n\n.video-react-controls > div {\n  width: 45%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n  padding-top: 5px;\n}\n\n.video-react-controls > div svg {\n  margin-top: auto !important;\n  width: 100% !important;\n  height: -webkit-fit-content !important;\n  height: -moz-fit-content !important;\n  height: fit-content !important;\n  margin-bottom: auto !important;\n}\n\n.video-react-controls {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n}\n\n.time-stamps {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 0.7rem;\n  color: white;\n  text-shadow: black 1px 1px 1px;\n}\n\n.time-stamps .fullstime {\n  margin-left: auto;\n  padding-right: 5px;\n}\n\n.time-stamps .current {\n  padding-left: 5px;\n}\n\n.video-react-more {\n  position: relative;\n}\n\n.video-react-play,\n.video-react-pause,\n.video-react-volume,\n.video-react-fullscreen,\n.video-react-rewind,\n.video-react-forward,\n.video-react-more {\n  border: rgba(209, 208, 208, 0) 1px solid;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer;\n  color: white;\n}\n\n.video-react-play:hover,\n.video-react-pause:hover,\n.video-react-volume:hover,\n.video-react-fullscreen:hover,\n.video-react-rewind:hover,\n.video-react-forward:hover,\n.video-react-more:hover {\n  border-top: rgba(209, 208, 208, 0.267) 1px solid;\n  border-bottom: rgba(209, 208, 208, 0.267) 1px solid;\n  background-color: rgba(128, 128, 128, 0.089);\n  color: aqua;\n}\n\nspan.icon {\n  padding: 5px;\n  font-size: 1rem;\n}\n\n.video-react-menu {\n  background-color: whitesmoke;\n  width: 150px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  bottom: 101%;\n  padding: 0.3rem 5px;\n  font-size: 0.8rem;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n  opacity: 0;\n  border-radius: 5px;\n  right: 0px;\n  position: absolute;\n  color: black;\n  z-index: 3;\n  -webkit-box-shadow: #00000052 1px 1px 15px, #00000052 -1px -1px 15px;\n          box-shadow: #00000052 1px 1px 15px, #00000052 -1px -1px 15px;\n}\n\n.list- {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.list- .text {\n  margin-left: 10px;\n}\n\n.list-:hover {\n  background: gray;\n  color: white;\n}\n\n.list- span.icon > svg {\n  font-size: 1.5rem;\n  width: 20px !important;\n  height: 20px !important;\n}\n\n.list-1 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.list-1 span {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.list-1 .icon {\n  color: #006eff;\n  border-radius: 5px;\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n\n.list-1 .icon:hover {\n  background-color: gray;\n  color: white;\n}\n\n.video-react-volume {\n  position: relative;\n}\n\n.video-react-volume .finnished {\n  background-color: aqua;\n  height: 100%;\n}\n\n.video-react-volume .volume-add {\n  position: absolute;\n  top: -2px;\n  opacity: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  color: white;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\n.video-react-volume .volume-div {\n  width: 80px;\n  height: 2px;\n  background: white;\n  border-radius: 5px;\n}\n\n.video-react-volume:hover .volume-add {\n  opacity: 1;\n}";
n(css,{});

var ReactVideo = function ReactVideo(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      playing = _useState2[0],
      setplaying = _useState2[1];

  var video = useRef(null);
  var div = useRef(null);
  var sect = useRef(null);
  var vdiv = useRef(null);

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      width = _useState4[0],
      setwidth = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      vwidth = _useState6[0],
      setvwidth = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      mute = _useState8[0],
      setmute = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      more = _useState10[0],
      setmore = _useState10[1];

  var _useState11 = useState('00:00'),
      _useState12 = _slicedToArray(_useState11, 2),
      ct = _useState12[0],
      setcurrenttime = _useState12[1];

  var mm = function mm() {
    setmore(!more);
  };

  function va(e) {
    var x = e.nativeEvent.layerX;
    var offsetWidth = vdiv.current.offsetWidth;
    var time = x / offsetWidth * 1;
    video.current.volume = time;
    var perc = x / offsetWidth * 100;
    setvwidth(perc);
  }

  function foward(e) {
    var x = 0.025 * video.current.duration;
    video.current.currentTime += x;

    if (props.onFoward) {
      props.onFoward();
    }
  }

  function rewind(e) {
    var x = 0.05 * video.current.currentTime;
    video.current.currentTime -= x;

    if (props.onRewind) {
      props.onRewind();
    }
  }

  function onSeek(e) {
    var x = e.nativeEvent.layerX;
    var offsetWidth = div.current.offsetWidth;
    var duration = video.current.duration;
    var time = x / offsetWidth * duration;
    video.current.currentTime = time;
    var perc = x / offsetWidth * 100;
    setwidth(perc);

    if (props.onSeek) {
      props.onSeek();
    }
  }

  function addp() {
    if (video.current.playbackRate <= 16) {
      video.current.playbackRate += 1;
    }
  }

  function minusp() {
    if (video.current.playbackRate > 0) {
      video.current.playbackRate -= 1;
    }
  }

  function TimeUpdate(e) {
    var currentTime = video.current.currentTime;
    setcurrenttime(calcTime(currentTime));
  }

  function Mute(_x) {
    return _Mute.apply(this, arguments);
  }

  function _Mute() {
    _Mute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(e) {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return setmute(!mute);

            case 2:
              if (video.current.volume > 0) {
                video.current.volume = 0;
                setvwidth(0);
              } else {
                video.current.volume = 1;
                setvwidth(100);
              }

              if (props.onMute) {
                props.onMute(mute);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _Mute.apply(this, arguments);
  }

  function calcTime(d) {
    if (isNaN(d)) {
      return '00:00';
    }

    var hours = d / 3600;
    var hh = d % 3600;
    var time = hh / 60;
    var h = Math.floor(hours);
    var f = Math.floor(time);
    var seconds = d % 60;
    seconds = Math.floor(seconds);

    if (seconds < 10) {
      seconds = "0".concat(seconds);
    }

    if (f < 10) {
      f = "0".concat(f);
    }

    if (h <= 0) {
      h = "";
    } else if (h < 10 && h > 0) {
      h = "0".concat(h, ":");
    }

    return "".concat(h).concat(f, ":").concat(seconds);
  }

  function pp() {
    video.current.requestPictureInPicture();

    if (props.onRequestPictureInPicture) {
      props.onRequestPictureInPicture();
    }
  }

  function timeChanging(e) {
    var _video$current = video.current,
        currentTime = _video$current.currentTime,
        duration = _video$current.duration;
    var w = currentTime / duration * 100;
    setwidth(w);

    if (props.onTimeUpdate) {
      props.onTimeUpdate(e, currentTime, w);
    }
  }

  var play = function play(e) {
    video.current.play();
    setplaying(true);

    if (props.onPlay) {
      props.onPlay(e);
    }
  };

  var pause = function pause(e) {
    video.current.pause();
    setplaying(false);

    if (props.onPause) {
      props.onPause(e);
    }
  };

  var enterFullScreen = function enterFullScreen(e) {
    sect.current.requestFullscreen();

    if (props.onEnterFullScreen) {
      props.onEnterFullScreen(e);
    }
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    onContextMenu: function onContextMenu(e) {
      e.preventDefault();
    },
    className: "one___flkjsjJJNJnn_nANN8hG_YG7GY7g7BH9 ".concat(props.className),
    ref: sect
  }, /*#__PURE__*/React.createElement("video", {
    ref: video,
    autoPlay: props.autoPlay ? true : false,
    onPause: function onPause() {
      setplaying(false);
    },
    onPlay: function onPlay() {
      setplaying(true);
    },
    poster: props.poster,
    className: "video-react",
    onTimeUpdate: function onTimeUpdate(e) {
      TimeUpdate();
      timeChanging(e);
    }
  }, /*#__PURE__*/React.createElement("source", {
    src: props.src,
    type: "video/mp4"
  })), video.current ? /*#__PURE__*/React.createElement(React.Fragment, null, video.current.seeking ? /*#__PURE__*/React.createElement("div", {
    className: "video-react-loading"
  }) : /*#__PURE__*/React.createElement(React.Fragment, null)) : /*#__PURE__*/React.createElement(React.Fragment, null), /*#__PURE__*/React.createElement("div", {
    className: "video-react-lower-bar_dhhiahhbhhbhb3767d7637____u"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hundred"
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress-video-react",
    ref: div,
    onClick: onSeek
  }, /*#__PURE__*/React.createElement("div", {
    className: "finnished",
    style: {
      width: "".concat(width, "%")
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "point"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "time-stamps"
  }, /*#__PURE__*/React.createElement("div", {
    className: "current"
  }, ct), /*#__PURE__*/React.createElement("div", {
    className: "fullstime"
  }, video.current ? calcTime(video.current.duration) : /*#__PURE__*/React.createElement(React.Fragment, null))), /*#__PURE__*/React.createElement("div", {
    className: "video-react-controls"
  }, playing ? /*#__PURE__*/React.createElement("div", {
    className: "video-react-pause",
    onClick: pause
  }, /*#__PURE__*/React.createElement(MdPause, null)) : /*#__PURE__*/React.createElement("div", {
    className: "video-react-play",
    onClick: play
  }, /*#__PURE__*/React.createElement(MdPlayArrow, null)), /*#__PURE__*/React.createElement("div", {
    className: "video-react-rewind",
    onClick: rewind
  }, /*#__PURE__*/React.createElement(MdFastRewind, null)), /*#__PURE__*/React.createElement("div", {
    className: "video-react-forward",
    onClick: foward
  }, /*#__PURE__*/React.createElement(MdFastForward, null)), /*#__PURE__*/React.createElement("div", {
    className: "video-react-pro"
  }), /*#__PURE__*/React.createElement("div", {
    className: "video-react-pro"
  }), /*#__PURE__*/React.createElement("div", {
    className: "video-react-volume"
  }, /*#__PURE__*/React.createElement("div", {
    className: "volume-add"
  }, /*#__PURE__*/React.createElement("div", {
    className: "volume-div",
    ref: vdiv,
    onClick: va
  }, /*#__PURE__*/React.createElement("div", {
    className: "finnished",
    style: {
      width: "".concat(vwidth, "%")
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "point"
  }))), video.current ? /*#__PURE__*/React.createElement(React.Fragment, null, video.current.volume === 0 ? /*#__PURE__*/React.createElement(MdVolumeOff, {
    onClick: Mute
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, video.current.volume < 0.3 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MdVolumeMute, {
    onClick: Mute
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, video.current.volume < 0.7 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MdVolumeDown, {
    onClick: Mute
  })) : /*#__PURE__*/React.createElement(MdVolumeUp, {
    onClick: Mute
  })))) : /*#__PURE__*/React.createElement(React.Fragment, null)), /*#__PURE__*/React.createElement("div", {
    className: "video-react-fullscreen",
    onClick: enterFullScreen
  }, /*#__PURE__*/React.createElement(AiOutlineFullscreen, null)), /*#__PURE__*/React.createElement("div", {
    className: "video-react-more"
  }, /*#__PURE__*/React.createElement("div", {
    style: more ? {
      transform: 'scale(1)',
      opacity: 1
    } : {},
    className: "video-react-menu"
  }, /*#__PURE__*/React.createElement("div", {
    className: "list-",
    onClick: pp
  }, /*#__PURE__*/React.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(MdPictureInPictureAlt, null)), /*#__PURE__*/React.createElement("span", {
    className: "text"
  }, "Picture In Picture")), /*#__PURE__*/React.createElement("div", {
    className: "list-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "icon",
    onClick: minusp,
    style: video.current ? video.current.playbackRate === 0 ? {
      cursor: 'not-allowed'
    } : {} : {}
  }, /*#__PURE__*/React.createElement(MdRemove, null)), /*#__PURE__*/React.createElement("span", {
    className: "text"
  }, video.current ? video.current.playbackRate : 0), /*#__PURE__*/React.createElement("span", {
    className: "icon",
    onClick: addp
  }, /*#__PURE__*/React.createElement(MdAdd, null)))), /*#__PURE__*/React.createElement(AiOutlineEllipsis, {
    onContextMenu: function onContextMenu(e) {
      e.preventDefault();
    },
    onClick: mm
  }))))));
};
ReactVideo.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string,
  autoPlay: PropTypes.bool,
  className: PropTypes.string,
  onFoward: PropTypes.func,
  onRewind: PropTypes.func,
  onSeek: PropTypes.func,
  onMute: PropTypes.func,
  onRequestPictureInPicture: PropTypes.func,
  onTimeUpdate: PropTypes.func,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onEnterFullScreen: PropTypes.func
};

export { ReactVideo };
//# sourceMappingURL=video.esm.js.map
