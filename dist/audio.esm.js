import _regeneratorRuntime from '@babel/runtime/regenerator';
import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { MdPause, MdPlayArrow, MdFastRewind, MdFastForward, MdVolumeOff, MdVolumeMute, MdVolumeDown, MdVolumeUp, MdCallMade, MdPauseCircleFilled, MdPlayCircleFilled, MdCallReceived } from 'react-icons/md';

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css = ".react-audio-covering-div_EJIJIJijajijshi_2428242cf_22 {\n  background-color: #faf8f8;\n  border: 1px solid #c0bfbf;\n  -webkit-box-shadow: #e0dfdf 1px 1px 5px, #e0dfdf -1px -1px 5px;\n          box-shadow: #e0dfdf 1px 1px 5px, #e0dfdf -1px -1px 5px;\n  width: 100%;\n  height: 55px;\n  padding: 0.2rem 0rem;\n  border-radius: 3px;\n  color: #006eff;\n  position: relative;\n}\n\n.playing-animation {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.playing-animation .first {\n  width: 3px;\n  -webkit-transform: scaleY(0.4);\n          transform: scaleY(0.4);\n  height: 20px;\n  background-color: #006eff;\n  border-radius: 5px;\n  margin: 1px;\n  -webkit-animation: playing 1s infinite;\n          animation: playing 1s infinite;\n}\n\n.playing-animation .middle {\n  margin: 1px;\n  width: 3px;\n  height: 20px;\n  background-color: #006eff;\n  -webkit-animation: playing1 1s infinite;\n          animation: playing1 1s infinite;\n  border-radius: 20px;\n}\n\n@-webkit-keyframes playing {\n  0% {\n    -webkit-transform: scaleY(0.1);\n            transform: scaleY(0.1);\n  }\n  50% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n  100% {\n    -webkit-transform: scaleY(0.1);\n            transform: scaleY(0.1);\n  }\n}\n\n@keyframes playing {\n  0% {\n    -webkit-transform: scaleY(0.1);\n            transform: scaleY(0.1);\n  }\n  50% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n  100% {\n    -webkit-transform: scaleY(0.1);\n            transform: scaleY(0.1);\n  }\n}\n\n@-webkit-keyframes playing1 {\n  0% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n  50% {\n    -webkit-transform: scaleY(0.1);\n            transform: scaleY(0.1);\n  }\n  100% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n}\n\n@keyframes playing1 {\n  0% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n  50% {\n    -webkit-transform: scaleY(0.1);\n            transform: scaleY(0.1);\n  }\n  100% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n}\n\n.audio-display-controls {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n}\n\n.audio-display-controls div {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n}\n\n.hundred {\n  width: -webkit-fill-available;\n  width: stretch;\n  width: -moz-available;\n}\n\n.time-stamps-audio_12242334_A_wjsh {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 0.7rem;\n  color: blue;\n  text-shadow: #006eff 1px 1px 1px;\n}\n\n.time-stamps-audio_12242334_A_wjsh .fullstime {\n  margin-left: auto;\n  padding-right: 5px;\n}\n\n.time-stamps-audio_12242334_A_wjsh .current {\n  padding-left: 5px;\n}\n\n.progress-audio-react_dkijs_23443sxjsjAJajAJ3 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 2px;\n  margin-bottom: 5px;\n  cursor: pointer;\n  background-color: aqua;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n\n.progress-audio-react_dkijs_23443sxjsjAJajAJ3 .finnished {\n  background-color: #006eff;\n  height: 100%;\n  width: 50%;\n}\n\n.progress-audio-react_dkijs_23443sxjsjAJajAJ3 .point {\n  width: 0px;\n  height: 0px;\n  border-radius: 50%;\n  background-color: aqua;\n}\n\n.progress-audio-react_dkijs_23443sxjsjAJajAJ3 .point:hover {\n  background-color: #006eff;\n}\n\n.progress-audio-react_dkijs_23443sxjsjAJajAJ3:focus {\n  background-color: yellow;\n}\n\n.progress-audio-react_dkijs_23443sxjsjAJajAJ3:hover {\n  height: 5px;\n}\n\n.progress-audio-react_dkijs_23443sxjsjAJajAJ3:hover .point {\n  width: 1px;\n  height: 10px;\n}\n\n.audio-react-p1 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.react-audio-play svg,\n.react-audio-rewind svg,\n.react-audio-foward svg,\n.react-audio-controls svg,\n.react-audio-fixed svg {\n  cursor: pointer;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n\n.react-audio-play svg:hover,\n.react-audio-rewind svg:hover,\n.react-audio-foward svg:hover,\n.react-audio-controls svg:hover,\n.react-audio-fixed svg:hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  color: blue;\n}\n\n.react-audio-controls {\n  position: relative;\n}\n\n.react-audio-controls .finnished {\n  background-color: blue;\n  height: 100%;\n}\n\n.react-audio-controls .volume-add {\n  position: absolute;\n  top: -2px;\n  opacity: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  color: white;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\n.react-audio-controls .volume-div {\n  width: 80px;\n  height: 2px;\n  background: aqua;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.react-audio-controls .volume-div:hover {\n  height: 4px;\n}\n\n.react-audio-controls:hover .volume-add {\n  opacity: 1;\n}\n\n.react-audio-covering-div_EJI {\n  position: fixed;\n  border-radius: 50px;\n  -webkit-box-shadow: rgba(0, 0, 0, 0.493) 1px 1px 30px;\n          box-shadow: rgba(0, 0, 0, 0.493) 1px 1px 30px;\n  top: 10px;\n  right: 10px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #006eff;\n  z-index: 1000;\n}\n\n.react-audio-covering-div_EJI .hundred {\n  display: none;\n}\n\n.react-audio-covering-div_EJI .playing-animation {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.react-audio-covering-div_EJI .playing-animation .first {\n  width: 3px;\n  -webkit-transform: scaleY(0.4);\n          transform: scaleY(0.4);\n  height: 20px;\n  background-color: blue;\n  border-radius: 5px;\n  margin: 1px;\n  -webkit-animation: playing 1s infinite;\n          animation: playing 1s infinite;\n}\n\n.react-audio-covering-div_EJI .playing-animation .middle {\n  margin: 1px;\n  width: 3px;\n  height: 20px;\n  background-color: blue;\n  -webkit-animation: playing1 1s infinite;\n          animation: playing1 1s infinite;\n  border-radius: 20px;\n}\n\n.react-audio-covering-div_EJI .react-audio-play,\n.react-audio-covering-div_EJI .react-audio-fixed {\n  margin: 10px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.miniplayermode_2ueyhud87928_wuh {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  text-align: center;\n  color: black;\n  font-size: 1.1rem;\n  font-weight: bold;\n  right: 0px;\n  bottom: 0px;\n  z-index: 3;\n  text-shadow: #c0bfbf 1px 1px 5px;\n  background-color: rgba(0, 0, 0, 0.199);\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n  padding-top: 15px;\n}";
n(css,{});

var ReactAudio = function ReactAudio(props) {
  var audio = useRef(null);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      playing = _useState2[0],
      setplaying = _useState2[1];

  var vdiv = useRef(null);
  var div = useRef(null);

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      width = _useState4[0],
      setwidth = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      small = _useState6[0],
      setsmall = _useState6[1];

  var _useState7 = useState(0),
      _useState8 = _slicedToArray(_useState7, 2),
      vwidth = _useState8[0],
      setvwidth = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      mute = _useState10[0],
      setmute = _useState10[1];

  var _useState11 = useState('00:00'),
      _useState12 = _slicedToArray(_useState11, 2),
      ct = _useState12[0],
      setcurrenttime = _useState12[1];

  function va(e) {
    var x = e.nativeEvent.layerX;
    var offsetWidth = vdiv.current.offsetWidth;
    var time = x / offsetWidth * 1;
    audio.current.volume = time;
    var perc = x / offsetWidth * 100;
    setvwidth(perc);
  }

  function onSeek(e) {
    var x = e.nativeEvent.layerX;
    var offsetWidth = div.current.offsetWidth;
    var duration = audio.current.duration;
    console.log(offsetWidth);
    console.log(e);
    var time = x / offsetWidth * duration;
    audio.current.currentTime = time;
    var perc = x / offsetWidth * 100;
    setwidth(perc);

    if (props.onSeek) {
      props.onSeek();
    }
  }

  function TimeUpdate(e) {
    var currentTime = audio.current.currentTime;
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
              if (audio.current.volume > 0) {
                audio.current.volume = 0;
                setvwidth(0);
              } else {
                audio.current.volume = 1;
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

  function timeChanging(e) {
    var _audio$current = audio.current,
        currentTime = _audio$current.currentTime,
        duration = _audio$current.duration;
    var w = currentTime / duration * 100;
    setwidth(w);

    if (props.onTimeUpdate) {
      props.onTimeUpdate(e, currentTime, w);
    }
  }

  function play() {
    audio.current.play();
    setplaying(true);

    if (props.onPlay) {
      props.onPlay();
    }
  }

  function pause() {
    audio.current.pause();
    setplaying(false);

    if (props.onPause) {
      props.onPause();
    }
  }

  function foward(e) {
    var x = 0.025 * audio.current.duration;
    audio.current.currentTime += x;

    if (props.onFoward) {
      props.onFoward();
    }
  }

  function rewind(e) {
    var x = 0.05 * audio.current.currentTime;
    audio.current.currentTime -= x;

    if (props.onRewind) {
      props.onRewind();
    }
  }

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "react-audio-covering-div_EJIJIJijajijshi_2428242cf_22 ".concat(props.className)
  }, /*#__PURE__*/React.createElement("audio", {
    ref: audio,
    autoPlay: props.autoPlay ? true : false,
    onPlay: function onPlay() {
      setplaying(true);
    },
    onPause: function onPause() {
      setplaying(false);
    },
    onTimeUpdate: function onTimeUpdate(e) {
      TimeUpdate();
      timeChanging(e);
    }
  }, /*#__PURE__*/React.createElement("source", {
    src: props.src,
    type: "audio/mpeg"
  })), /*#__PURE__*/React.createElement("div", {
    className: "audio-react-p1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hundred"
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress-audio-react_dkijs_23443sxjsjAJajAJ3",
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
    className: "playing-animation"
  }, /*#__PURE__*/React.createElement("div", {
    className: "first",
    style: playing ? {} : {
      animation: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "middle",
    style: playing ? {} : {
      animation: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "first",
    style: playing ? {} : {
      animation: 'none'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "time-stamps-audio_12242334_A_wjsh"
  }, /*#__PURE__*/React.createElement("div", {
    className: "current"
  }, ct), /*#__PURE__*/React.createElement("div", {
    className: "fullstime"
  }, audio.current ? calcTime(audio.current.duration) : /*#__PURE__*/React.createElement(React.Fragment, null))), /*#__PURE__*/React.createElement("div", {
    className: "audio-display-controls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "react-audio-play"
  }, playing ? /*#__PURE__*/React.createElement(MdPause, {
    onClick: pause
  }) : /*#__PURE__*/React.createElement(MdPlayArrow, {
    onClick: play
  })), /*#__PURE__*/React.createElement("div", {
    className: "react-audio-rewind"
  }, /*#__PURE__*/React.createElement(MdFastRewind, {
    onClick: rewind
  })), /*#__PURE__*/React.createElement("div", {
    className: "react-audio-foward"
  }, /*#__PURE__*/React.createElement(MdFastForward, {
    onClick: foward
  })), /*#__PURE__*/React.createElement("div", {
    className: "react-audio-controls"
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
  }))), audio.current ? /*#__PURE__*/React.createElement(React.Fragment, null, audio.current.volume === 0 ? /*#__PURE__*/React.createElement(MdVolumeOff, {
    onClick: Mute
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, audio.current.volume < 0.2 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MdVolumeMute, {
    onClick: Mute
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, audio.current.volume < 0.7 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MdVolumeDown, {
    onClick: Mute
  })) : /*#__PURE__*/React.createElement(MdVolumeUp, {
    onClick: Mute
  })))) : /*#__PURE__*/React.createElement(React.Fragment, null)), /*#__PURE__*/React.createElement("div", {
    className: "react-audio-fixed"
  }, /*#__PURE__*/React.createElement(MdCallMade, {
    onClick: function onClick() {
      setsmall(!small);
    }
  }))), small ? /*#__PURE__*/React.createElement("div", {
    className: "miniplayermode_2ueyhud87928_wuh"
  }, /*#__PURE__*/React.createElement("span", null, "Playing In Mini-Player mode.")) : /*#__PURE__*/React.createElement(React.Fragment, null)), small ? /*#__PURE__*/React.createElement("aside", {
    className: "react-audio-covering-div_EJI ".concat(props.className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "react-audio-play"
  }, playing ? /*#__PURE__*/React.createElement(MdPauseCircleFilled, {
    onClick: pause
  }) : /*#__PURE__*/React.createElement(MdPlayCircleFilled, {
    onClick: play
  })), /*#__PURE__*/React.createElement("div", {
    className: "playing-animation"
  }, /*#__PURE__*/React.createElement("div", {
    className: "first",
    style: playing ? {} : {
      animation: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "middle",
    style: playing ? {} : {
      animation: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "first",
    style: playing ? {} : {
      animation: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "react-audio-fixed"
  }, /*#__PURE__*/React.createElement(MdCallReceived, {
    onClick: function onClick() {
      setsmall(!small);
    }
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null));
};
ReactAudio.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string,
  autoPlay: PropTypes.bool,
  className: PropTypes.string,
  onFoward: PropTypes.func,
  onRewind: PropTypes.func,
  onSeek: PropTypes.func,
  onMute: PropTypes.func,
  onTimeUpdate: PropTypes.func,
  onPlay: PropTypes.func,
  onPause: PropTypes.func
};

export { ReactAudio };
