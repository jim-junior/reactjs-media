import _regeneratorRuntime from '@babel/runtime/regenerator';
import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import React, { useState, useRef, useEffect } from 'react';
import { MdPause, MdPlayArrow, MdFastRewind, MdFastForward, MdVolumeOff, MdVolumeMute, MdVolumeDown, MdVolumeUp, MdFullscreenExit, MdFullscreen, MdFileDownload, MdPictureInPictureAlt, MdRemove, MdAdd, MdSettings, MdErrorOutline, MdClose, MdFlipToBack, MdLoop } from 'react-icons/md';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css = "/* \r\nCopyright Beingana Jim Junior, 2021 and all the contributors. License Cn be found in the LICENCE file\r\n*/\n.one___flkjsjJJNJnn_nANN8hG_YG7GY7g7BH9 {\n  width: 100%;\n  height: 500px;\n  color: #006eff;\n  background: black;\n  position: relative;\n}\n\n.one___flkjsjJJNJnn_nANN8hG_YG7GY7g7BH9:hover .video-react-lower-bar_dhhiahhbhhbhb3767d7637____u {\n  opacity: 1;\n}\n\n.progress-video-react {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 2px;\n  width: 100%;\n  margin-bottom: 5px;\n  cursor: pointer;\n  background-color: aliceblue;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n\n.progress-video-react .finnished {\n  background-color: #006eff;\n  height: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.progress-video-react .point {\n  width: 0px;\n  height: 0px;\n  margin-left: auto;\n  border-radius: 50%;\n  position: absolute;\n  right: -3px;\n  pointer-events: none;\n  border-radius: 50%;\n  background-color: #006eff;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n\n.progress-video-react .point:hover {\n  -webkit-transform: scale(1.5);\n          transform: scale(1.5);\n}\n\n.progress-video-react:focus {\n  background-color: yellow;\n}\n\n.progress-video-react:hover {\n  height: 5px;\n}\n\n.progress-video-react:hover .point {\n  width: 10px;\n  height: 10px;\n}\n\n.video-react-loading {\n  width: 40px;\n  height: 40px;\n  width: 50px;\n  top: 43.33%;\n  left: 43.33%;\n  position: absolute;\n}\n\n@-webkit-keyframes loading {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes loading {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.video-react-lower-bar_dhhiahhbhhbhb3767d7637____u {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  margin: 0rem;\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), color-stop(rgba(0, 0, 0, 0.404)), color-stop(rgba(0, 0, 0, 0.589)), to(rgba(0, 0, 0, 0.863)));\n  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.404), rgba(0, 0, 0, 0.589), rgba(0, 0, 0, 0.863));\n  -webkit-transition: all 0.5s ease-out;\n  transition: all 0.5s ease-out;\n  opacity: 0;\n}\n\n.one___flkjsjJJNJnn_nANN8hG_YG7GY7g7BH9 > video {\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n\n.video-react-controls > div {\n  width: 45%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n  padding-top: 5px;\n}\n\n.video-react-controls > div svg {\n  font-size: 1.5rem !important;\n  margin-top: auto !important;\n  width: 100% !important;\n  margin-bottom: auto !important;\n}\n\n.video-react-controls {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n}\n\n.time-stamps {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 0.7rem;\n  color: white;\n  text-shadow: black 1px 1px 1px;\n}\n\n.time-stamps .fullstime {\n  margin-left: auto;\n  padding-right: 5px;\n}\n\n.time-stamps .current {\n  padding-left: 5px;\n}\n\n.video-react-more {\n  position: relative;\n}\n\n.video-react-play,\n.video-react-pause,\n.video-react-volume,\n.video-react-fullscreen,\n.video-react-rewind,\n.video-react-forward,\n.video-react-more {\n  border: rgba(209, 208, 208, 0) 1px solid;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer;\n  color: white;\n}\n\n.video-react-play:hover,\n.video-react-pause:hover,\n.video-react-volume:hover,\n.video-react-fullscreen:hover,\n.video-react-rewind:hover,\n.video-react-forward:hover,\n.video-react-more:hover {\n  border-top: rgba(209, 208, 208, 0.267) 1px solid;\n  border-bottom: rgba(209, 208, 208, 0.267) 1px solid;\n  background-color: rgba(128, 128, 128, 0.089);\n  color: #006eff;\n}\n\nspan.icon {\n  padding: 5px;\n  font-size: 1rem;\n}\n\n.video-react-menu {\n  background-color: rgba(3, 3, 3, 0.781);\n  width: 150px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  bottom: 101%;\n  padding: 0.3rem 5px;\n  font-size: 0.8rem;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n  opacity: 0;\n  border-radius: 5px;\n  right: 0px;\n  position: absolute;\n  color: #ffffff;\n  z-index: 3;\n  -webkit-box-shadow: #00000052 1px 1px 15px, #00000052 -1px -1px 15px;\n          box-shadow: #00000052 1px 1px 15px, #00000052 -1px -1px 15px;\n}\n\n.list- {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #ffffff;\n  text-decoration: none;\n}\n\n.list- .text {\n  margin-left: 10px;\n}\n\n.list-:hover {\n  background: #8080806c;\n  color: white;\n}\n\n.list- span.icon > svg {\n  color: #006eff;\n  font-size: 1.5rem !important;\n  width: 20px !important;\n}\n\n.list-1 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.list-1 span {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.list-1 .icon {\n  color: #006eff;\n  border-radius: 5px;\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n\n.list-1 .icon:hover {\n  background-color: #8080806c;\n  color: white;\n}\n\n.video-react-volume {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.video-react-volume .finnished {\n  background-color: #006eff;\n  height: 100%;\n}\n\n.video-react-volume .volume-add {\n  opacity: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  color: white;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\n.video-react-volume .volume-div {\n  width: 0px;\n  height: 3px;\n  margin: auto;\n  background: white;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  border-radius: 5px;\n}\n\n.video-react-volume:hover .volume-add {\n  opacity: 1;\n}\n\n.video-react-volume:hover .volume-div {\n  width: 80px;\n}\n\n.video-react-error_12ede3ws3 {\n  background-color: red;\n  z-index: 10;\n  border-radius: 5px;\n  position: absolute;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  top: 10px;\n  opacity: 0;\n  margin: auto;\n  font-size: 0.9rem;\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-shadow: black 1px 1px 25px;\n          box-shadow: black 1px 1px 25px;\n  left: 10px;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  padding: 0.1rem;\n}\n\n.video-react-error_12ede3ws3 span {\n  margin: 5px;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.video-react-error_12ede3ws3 .cancel {\n  padding: 0.3rem;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.video-react-error_12ede3ws3 .cancel:hover {\n  background-color: rgba(255, 255, 255, 0.37);\n}\n\n.video-react-error_12ede3ws3 svg {\n  font-size: 1.5rem;\n}\n\n.menu-c {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.menu-contxt {\n  position: relative;\n  margin: 0px;\n}\n\n.video-rect-context {\n  background-color: rgba(0, 0, 0, 0.829);\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: absolute;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  color: white;\n  border-radius: 3px;\n  -webkit-box-shadow: #000000b4 1px 1px 15px, #000000b4 -1px -1px 15px;\n          box-shadow: #000000b4 1px 1px 15px, #000000b4 -1px -1px 15px;\n  padding: 0.5rem;\n}\n\n.video-rect-context ul {\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n}\n\n.video-rect-context ul li {\n  font-size: 0.9rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0.3rem;\n  cursor: pointer;\n  border-radius: 3px;\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n}\n\n.video-rect-context ul li:hover {\n  background-color: rgba(255, 255, 255, 0.199);\n}\n\n.video-rect-context ul li svg {\n  font-size: 1.5rem;\n  padding-right: 0.2rem;\n  color: #e6e4e4;\n}\n\n.poster {\n  position: absolute;\n  z-index: 15;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.poster > div {\n  position: relative;\n  background: black;\n  height: 100%;\n  width: 100%;\n}\n\n.poster > div img {\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n}\n\n.poster > div div {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 0.5rem 1rem;\n  position: absolute;\n  left: 45%;\n  top: 45%;\n  color: white;\n  background: #006eff;\n  border-radius: 25%;\n  cursor: pointer;\n  margin: auto;\n  z-index: 3;\n}\n\n.poster > div div svg {\n  font-size: 3rem;\n}\n\n.poster > div div:hover {\n  background: #2985fd;\n}";
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

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      seterror = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      y = _useState6[0],
      sety = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      x = _useState8[0],
      setx = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 1),
      climb = _useState10[0];

  var _useState11 = useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      on = _useState12[0],
      seton = _useState12[1];

  var _useState13 = useState(true),
      _useState14 = _slicedToArray(_useState13, 2),
      loaded = _useState14[0],
      setloaded = _useState14[1];

  var _useState15 = useState(false),
      _useState16 = _slicedToArray(_useState15, 2),
      fulls = _useState16[0],
      setfulls = _useState16[1];

  var _useState17 = useState(false),
      _useState18 = _slicedToArray(_useState17, 2),
      mute = _useState18[0],
      setmute = _useState18[1];

  var _useState19 = useState(false),
      _useState20 = _slicedToArray(_useState19, 2),
      more = _useState20[0],
      setmore = _useState20[1];

  var _useState21 = useState('00:00'),
      _useState22 = _slicedToArray(_useState21, 2),
      ct = _useState22[0],
      setcurrenttime = _useState22[1];

  useEffect(function () {}, [climb]);
  var TimeSlider = withStyles({
    root: {
      color: '#3880ff',
      height: 2,
      padding: '15px 0'
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 12px)',
      top: -22,
      '& *': {
        background: 'transparent',
        color: '#000'
      }
    },
    track: {
      height: 2,
      '&:hover .thumb': {
        transform: 'scale(0)'
      }
    },
    rail: {
      height: 2,
      opacity: 0.5,
      backgroundColor: '#bfbfbf'
    },
    mark: {
      backgroundColor: '#bfbfbf',
      height: 8,
      width: 1,
      marginTop: -3
    },
    markActive: {
      opacity: 1,
      backgroundColor: 'currentColor'
    }
  })(Slider);

  var mm = function mm() {
    setmore(!more);
  };

  function va(e) {
    var x = e.nativeEvent.layerX;
    var offsetWidth = vdiv.current.offsetWidth;
    var time = x / offsetWidth * 1;
    video.current.volume = time;
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

  function onSeek(e, newValue) {
    var duration = video.current.duration;
    var time = newValue / 100 * duration;
    video.current.currentTime = time;

    if (props.onSeek) {
      props.onSeek();
    }
  }

  function addp() {
    if (video.current.playbackRate < 16) {
      video.current.playbackRate += 1;
    }
  }

  function minusp() {
    if (video.current.playbackRate > 0) {
      video.current.playbackRate -= 1;
    }
  }

  function TimeUpdate(e) {
    var _video$current = video.current,
        currentTime = _video$current.currentTime,
        duration = _video$current.duration;
    setcurrenttime(calcTime(currentTime));

    if (props.onTimeUpdate) {
      props.onTimeUpdate(e, currentTime, duration);
    }
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
              } else {
                video.current.volume = 1;
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

  function setClipboard(text) {
    navigator.clipboard.writeText(text).then(function () {}, function () {
      // eslint-disable-next-line no-restricted-globals
      alert('failed to copy url');
    });
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

  function contextMenu(e) {
    var _e$nativeEvent = e.nativeEvent,
        clientY = _e$nativeEvent.clientY,
        clientX = _e$nativeEvent.clientX;
    setx(clientX);
    sety(clientY);
    seton(true);
  }

  var enterFullScreen = function enterFullScreen(e) {
    sect.current.requestFullscreen();

    if (props.onEnterFullScreen) {
      props.onEnterFullScreen(e);
    }

    setfulls(true);
  };

  var exitFullScreen = function exitFullScreen() {
    sect.current.ownerDocument.exitFullscreen();
    setfulls(false);
  };

  function handleClose() {
    seton(false);
  }

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("style", {
    jsx: "true"
  }, "\n                    .video-react-pause:hover,\n                    .video-react-play:hover,\n                    .video-react-volume:hover,\n                    .video-react-rewind:hover,\n                    .video-react-more:hover,\n                    .video-react-fullscreen:hover,\n                    .video-react-forward:hover {\n                        color: ".concat(props.primaryColor, ";\n                    }\n                    .finnished {\n                        background-color: ").concat(props.primaryColor, " !important;\n                    }\n                    .point {\n                        background-color: ").concat(props.primaryColor, " !important;\n                    }\n                ")), /*#__PURE__*/React.createElement("section", {
    onContextMenu: function onContextMenu(e) {
      e.preventDefault();
      contextMenu(e);
    },
    onBlur: function onBlur() {
      handleClose();
    },
    className: "one___flkjsjJJNJnn_nANN8hG_YG7GY7g7BH9 ".concat(props.className),
    ref: sect
  }, /*#__PURE__*/React.createElement("video", {
    onError: function onError() {
      seterror(true);
    },
    ref: video,
    autoPlay: props.autoPlay ? true : false,
    onPause: function onPause() {
      setplaying(false);
    },
    onPlay: function onPlay() {
      setplaying(true);
    },
    className: "video-react",
    onTimeUpdate: function onTimeUpdate(e) {
      TimeUpdate(e);
    },
    controlsList: "nodownload"
  }, /*#__PURE__*/React.createElement("source", {
    src: props.src,
    type: props.type ? props.type : "video/mp4"
  })), video.current ? /*#__PURE__*/React.createElement(React.Fragment, null, video.current.seeking ? /*#__PURE__*/React.createElement("div", {
    className: "video-react-loading"
  }, /*#__PURE__*/React.createElement(CircularProgress, {
    style: {
      color: props.primaryColor
    }
  })) : /*#__PURE__*/React.createElement(React.Fragment, null), " ") : /*#__PURE__*/React.createElement(React.Fragment, null), /*#__PURE__*/React.createElement("div", {
    className: "video-react-lower-bar_dhhiahhbhhbhb3767d7637____u"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hundred"
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: true
  }, /*#__PURE__*/React.createElement(TimeSlider, {
    style: props.primaryColor ? {
      color: props.primaryColor
    } : {},
    value: video.current ? video.current.currentTime / video.current.duration * 100 : 0,
    onChange: onSeek,
    "aria-labelledby": "continuous-slider"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "video-react-controls"
  }, playing ? /*#__PURE__*/React.createElement(Tooltip, {
    title: "Pause",
    "aria-label": "add",
    placement: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "video-react-pause",
    onClick: pause
  }, /*#__PURE__*/React.createElement(MdPause, null))) : /*#__PURE__*/React.createElement(Tooltip, {
    title: "Play",
    "aria-label": "add",
    placement: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "video-react-play",
    onClick: play
  }, /*#__PURE__*/React.createElement(MdPlayArrow, null))), /*#__PURE__*/React.createElement(Tooltip, {
    title: "Rewind",
    "aria-label": "add",
    placement: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "video-react-rewind",
    onClick: rewind
  }, /*#__PURE__*/React.createElement(MdFastRewind, null))), /*#__PURE__*/React.createElement(Tooltip, {
    title: "Forward",
    "aria-label": "add",
    placement: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "video-react-forward",
    onClick: foward
  }, /*#__PURE__*/React.createElement(MdFastForward, null))), /*#__PURE__*/React.createElement("div", {
    className: "video-react-pro"
  }, /*#__PURE__*/React.createElement(Typography, {
    style: {
      color: 'grey'
    },
    variant: "caption",
    component: "span"
  }, ct)), /*#__PURE__*/React.createElement("div", {
    className: "video-react-pro"
  }, /*#__PURE__*/React.createElement(Typography, {
    style: {
      color: 'grey'
    },
    variant: "caption",
    component: "span"
  }, video.current ? calcTime(video.current.duration) : /*#__PURE__*/React.createElement(React.Fragment, null, "00:00"))), /*#__PURE__*/React.createElement(Tooltip, {
    title: "Volume",
    "aria-label": "add",
    placement: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "video-react-volume"
  }, /*#__PURE__*/React.createElement("div", {
    className: "volume-add"
  }, /*#__PURE__*/React.createElement("div", {
    className: "volume-div",
    ref: vdiv,
    onClick: va
  }, /*#__PURE__*/React.createElement("div", {
    className: "finnished",
    style: video.current ? {
      width: "".concat(video.current.volume / 1 * 100, "%")
    } : {
      width: 0
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
  })))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MdVolumeUp, null)))), /*#__PURE__*/React.createElement(Tooltip, {
    title: "Fullscreen",
    "aria-label": "add",
    placement: "top"
  }, fulls ? /*#__PURE__*/React.createElement("div", {
    className: "video-react-fullscreen",
    onClick: exitFullScreen
  }, /*#__PURE__*/React.createElement(MdFullscreenExit, null)) : /*#__PURE__*/React.createElement("div", {
    className: "video-react-fullscreen",
    onClick: enterFullScreen
  }, /*#__PURE__*/React.createElement(MdFullscreen, null))), /*#__PURE__*/React.createElement(Tooltip, {
    arrow: true,
    title: "Settings",
    "aria-label": "add",
    placement: "left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "video-react-more"
  }, /*#__PURE__*/React.createElement("div", {
    style: more ? {
      transform: 'scale(1)',
      opacity: 1
    } : {},
    className: "video-react-menu"
  }, props.download ? /*#__PURE__*/React.createElement("a", {
    download: "video",
    href: props.src,
    className: "list-",
    onClick: pp
  }, /*#__PURE__*/React.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(MdFileDownload, null)), /*#__PURE__*/React.createElement("span", {
    className: "text"
  }, "Download")) : /*#__PURE__*/React.createElement(React.Fragment, null), /*#__PURE__*/React.createElement("div", {
    className: "list-",
    onClick: pp
  }, /*#__PURE__*/React.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(MdPictureInPictureAlt, null)), /*#__PURE__*/React.createElement("span", {
    className: "text"
  }, "Picture In Picture")), /*#__PURE__*/React.createElement(Tooltip, {
    arrow: true,
    title: "Playback speed",
    "aria-label": "add",
    placement: "left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "list-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "icon",
    onClick: minusp,
    style: video.current ? video.current.playbackRate === 0 ? {
      cursor: 'not-allowed'
    } : {} : {}
  }, /*#__PURE__*/React.createElement(MdRemove, null)), /*#__PURE__*/React.createElement("span", {
    className: "text"
  }, video.current ? video.current.playbackRate : 1), /*#__PURE__*/React.createElement("span", {
    className: "icon",
    onClick: addp
  }, /*#__PURE__*/React.createElement(MdAdd, null))))), /*#__PURE__*/React.createElement(MdSettings, {
    style: more ? {
      transform: 'rotate(40deg)',
      transition: 'all 0.2s'
    } : {
      transition: 'all 0.2s'
    },
    onContextMenu: function onContextMenu(e) {
      e.preventDefault();
    },
    onClick: mm
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "video-react-error_12ede3ws3",
    style: error ? {
      opacity: 1
    } : {}
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(MdErrorOutline, null)), " ", /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Error:"), " Failed to load Video"), /*#__PURE__*/React.createElement("span", {
    className: "cancel",
    onClick: function onClick() {
      seterror(false);
    }
  }, /*#__PURE__*/React.createElement(MdClose, null))), on ? /*#__PURE__*/React.createElement("div", {
    className: "menu-c",
    onClick: function onClick() {
      handleClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "menu-contxt",
    onClick: function onClick() {
      handleClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "video-rect-context",
    style: {
      top: y,
      left: x
    }
  }, /*#__PURE__*/React.createElement("ul", {
    className: "context-list"
  }, playing ? /*#__PURE__*/React.createElement("li", {
    className: "play",
    onClick: pause
  }, /*#__PURE__*/React.createElement("span", {
    className: "i"
  }, /*#__PURE__*/React.createElement(MdPause, null)), /*#__PURE__*/React.createElement("span", {
    className: "t"
  }, "Pause")) : /*#__PURE__*/React.createElement("li", {
    className: "play",
    onClick: play
  }, /*#__PURE__*/React.createElement("span", {
    className: "i"
  }, /*#__PURE__*/React.createElement(MdPlayArrow, null)), /*#__PURE__*/React.createElement("span", {
    className: "t"
  }, "Play")), /*#__PURE__*/React.createElement("li", {
    onClick: function onClick() {
      setClipboard(video.current ? video.current.currentSrc : '');
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "i"
  }, /*#__PURE__*/React.createElement(MdFlipToBack, null)), /*#__PURE__*/React.createElement("span", {
    className: "t"
  }, "Copy Video Url")), video.current ? /*#__PURE__*/React.createElement(React.Fragment, null, video.current.loop ? /*#__PURE__*/React.createElement("li", {
    onClick: function onClick() {
      video.current.loop = false;
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "i"
  }, /*#__PURE__*/React.createElement(MdLoop, null)), /*#__PURE__*/React.createElement("span", {
    className: "t"
  }, "Stop Loop")) : /*#__PURE__*/React.createElement("li", {
    onClick: function onClick() {
      video.current.loop = true;
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "i"
  }, /*#__PURE__*/React.createElement(MdLoop, null)), /*#__PURE__*/React.createElement("span", {
    className: "t"
  }, "Loop"))) : /*#__PURE__*/React.createElement(React.Fragment, null))))) : /*#__PURE__*/React.createElement(React.Fragment, null), playing === false && loaded === true ? /*#__PURE__*/React.createElement("div", {
    className: "poster"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: props.poster,
    alt: "video poster"
  }), /*#__PURE__*/React.createElement("div", {
    style: props.primaryColor ? {
      background: props.primaryColor
    } : {},
    onClick: function onClick() {
      play();
      setloaded(false);
    }
  }, /*#__PURE__*/React.createElement(MdPlayArrow, null)))) : /*#__PURE__*/React.createElement(React.Fragment, null), props.childern));
};
ReactVideo.propTypes = {
  src: PropTypes.string.isRequired,
  type: PropTypes.string,
  poster: PropTypes.string,
  primaryColor: PropTypes.string,
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
