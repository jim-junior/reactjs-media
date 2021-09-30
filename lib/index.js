'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _regeneratorRuntime = _interopDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator = _interopDefault(require('@babel/runtime/helpers/asyncToGenerator'));
var _slicedToArray = _interopDefault(require('@babel/runtime/helpers/slicedToArray'));
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var md = require('react-icons/md');
var Grid = _interopDefault(require('@material-ui/core/Grid'));
var Slider = _interopDefault(require('@material-ui/core/Slider'));
var IconButton = _interopDefault(require('@material-ui/core/IconButton'));
var Typography = _interopDefault(require('@material-ui/core/Typography'));
var Tooltip = _interopDefault(require('@material-ui/core/Tooltip'));
var Menu = _interopDefault(require('@material-ui/core/Menu'));
var MenuItem = _interopDefault(require('@material-ui/core/MenuItem'));
var core = require('@material-ui/core');
var _extends = _interopDefault(require('@babel/runtime/helpers/extends'));
var Icons = require('react-icons/all');
var styles = require('@material-ui/core/styles');

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css = "/* \r\nCopyright Beingana Jim Junior, 2021 and all the contributors. License Cn be found in the LICENCE file\r\n*/\n.react-audio-covering-div_EJIJIJijajijshi_2428242cf_22 {\n  background-color: #f5f5f5;\n  border: 1px solid rgba(23, 47, 112, 0.384);\n  width: 100%;\n  padding: 0.2rem 0rem;\n  border-radius: 7px;\n  color: #003cff;\n  position: relative;\n}\n\n.playing-animation {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.playing-animation .first {\n  width: 3px;\n  -webkit-transform: scaleY(0.4);\n          transform: scaleY(0.4);\n  height: 20px;\n  background-color: #006eff;\n  border-radius: 5px;\n  margin: 1px;\n  -webkit-animation: playing 1s infinite;\n          animation: playing 1s infinite;\n}\n\n.playing-animation .middle {\n  margin: 1px;\n  width: 3px;\n  height: 20px;\n  background-color: #006eff;\n  -webkit-animation: playing1 1s infinite;\n          animation: playing1 1s infinite;\n  border-radius: 20px;\n}\n\n@-webkit-keyframes playing {\n  0% {\n    -webkit-transform: scaleY(0.1);\n            transform: scaleY(0.1);\n  }\n  50% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n  100% {\n    -webkit-transform: scaleY(0.1);\n            transform: scaleY(0.1);\n  }\n}\n\n@keyframes playing {\n  0% {\n    -webkit-transform: scaleY(0.1);\n            transform: scaleY(0.1);\n  }\n  50% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n  100% {\n    -webkit-transform: scaleY(0.1);\n            transform: scaleY(0.1);\n  }\n}\n\n@-webkit-keyframes playing1 {\n  0% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n  50% {\n    -webkit-transform: scaleY(0.1);\n            transform: scaleY(0.1);\n  }\n  100% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n}\n\n@keyframes playing1 {\n  0% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n  50% {\n    -webkit-transform: scaleY(0.1);\n            transform: scaleY(0.1);\n  }\n  100% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n}\n\n.audio-display-controls {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n}\n\n.audio-display-controls div {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n}\n\n.hundred {\n  width: -webkit-fill-available;\n  width: -moz-available;\n  width: stretch;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.time-stamps-audio_12242334_A_wjsh {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 0.7rem;\n  color: #003cff;\n}\n\n.time-stamps-audio_12242334_A_wjsh .fullstime {\n  margin-left: auto;\n  padding-right: 5px;\n}\n\n.time-stamps-audio_12242334_A_wjsh .current {\n  padding-left: 5px;\n}\n\n.progress-audio-react_dkijs_23443sxjsjAJajAJ3 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 2px;\n  margin-bottom: 5px;\n  cursor: pointer;\n  background-color: white;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n\n.progress-audio-react_dkijs_23443sxjsjAJajAJ3 .finnished {\n  background-color: #006eff;\n  height: 100%;\n  width: 50%;\n}\n\n.progress-audio-react_dkijs_23443sxjsjAJajAJ3 .point {\n  width: 0px;\n  height: 0px;\n  border-radius: 50%;\n  background-color: aqua;\n}\n\n.progress-audio-react_dkijs_23443sxjsjAJajAJ3 .point:hover {\n  background-color: #006eff;\n}\n\n.progress-audio-react_dkijs_23443sxjsjAJajAJ3:focus {\n  background-color: yellow;\n}\n\n.progress-audio-react_dkijs_23443sxjsjAJajAJ3:hover {\n  height: 5px;\n}\n\n.progress-audio-react_dkijs_23443sxjsjAJajAJ3:hover .point {\n  width: 1px;\n  height: 10px;\n}\n\n.audio-react-p1 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.react-audio-play svg,\n.react-audio-rewind svg,\n.react-audio-foward svg,\n.react-audio-controls svg,\n.react-audio-fixed svg {\n  cursor: pointer;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  font-size: 1.3rem;\n}\n\n.react-audio-controls {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.react-audio-controls .finnished {\n  background-color: #003cff;\n  height: 100%;\n}\n\n.react-audio-controls .volume-add {\n  opacity: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  -webkit-transform: scaleX(0);\n          transform: scaleX(0);\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  color: white;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\n.react-audio-controls .volume-div {\n  width: 0px;\n  height: 3px;\n  margin: auto;\n  background: white;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  border-radius: 5px;\n}\n\n.react-audio-controls:hover .volume-add {\n  opacity: 1;\n  -webkit-transform: scaleX(1);\n          transform: scaleX(1);\n}\n\n.react-audio-controls:hover .volume-div {\n  width: 80px;\n}\n\n.react-audio-covering-div_EJI {\n  position: fixed;\n  border-radius: 50px;\n  -webkit-box-shadow: rgba(0, 0, 0, 0.493) 1px 1px 30px;\n          box-shadow: rgba(0, 0, 0, 0.493) 1px 1px 30px;\n  top: 10px;\n  right: 10px;\n  background-color: #f5f5f5;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #006eff;\n  z-index: 1000;\n}\n\n.react-audio-covering-div_EJI .hundred {\n  display: none;\n}\n\n.react-audio-covering-div_EJI .playing-animation {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.react-audio-covering-div_EJI .playing-animation .first {\n  width: 3px;\n  -webkit-transform: scaleY(0.4);\n          transform: scaleY(0.4);\n  height: 20px;\n  background-color: blue;\n  border-radius: 5px;\n  margin: 1px;\n  -webkit-animation: playing 1s infinite;\n          animation: playing 1s infinite;\n}\n\n.react-audio-covering-div_EJI .playing-animation .middle {\n  margin: 1px;\n  width: 3px;\n  height: 20px;\n  background-color: blue;\n  -webkit-animation: playing1 1s infinite;\n          animation: playing1 1s infinite;\n  border-radius: 20px;\n}\n\n.react-audio-covering-div_EJI .react-audio-play,\n.react-audio-covering-div_EJI .react-audio-fixed {\n  margin: 10px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.miniplayermode_2ueyhud87928_wuh {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  text-align: center;\n  color: aqua;\n  font-size: 1.1rem;\n  font-weight: bold;\n  right: 0px;\n  bottom: 0px;\n  z-index: 3;\n  text-shadow: #c0bfbf 1px 1px 5px;\n  background-color: rgba(0, 0, 0, 0.397);\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n  padding-top: 15px;\n}";
n(css,{});

var ReactAudio = function ReactAudio(props) {
  var audio = React.useRef(null);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      playing = _useState2[0],
      setplaying = _useState2[1];

  var div = React.useRef(null);

  var _useState3 = React.useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      width = _useState4[0],
      setwidth = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      small = _useState6[0],
      setsmall = _useState6[1]; // eslint-disable-next-line no-unused-vars


  var _useState7 = React.useState(0),
      _useState8 = _slicedToArray(_useState7, 2),
      vwidth = _useState8[0],
      setvwidth = _useState8[1];

  var _useState9 = React.useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      mute = _useState10[0],
      setmute = _useState10[1];

  var _useState11 = React.useState('00:00'),
      _useState12 = _slicedToArray(_useState11, 2),
      ct = _useState12[0],
      setcurrenttime = _useState12[1];

  var _React$useState = React__default.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var OpenMenu = function OpenMenu(event) {
    setAnchorEl(event.currentTarget);
  };

  var CloseMenu = function CloseMenu() {
    setAnchorEl(null);
  };

  function va(e, n) {
    var time = n / 100 * 1;
    audio.current.volume = time;
    setvwidth(n);
  }

  function onSeek(e, newValue) {
    var duration = audio.current.duration;
    var time = newValue / 100 * duration;
    audio.current.currentTime = time;
    setwidth(newValue);

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

  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("section", {
    className: "react-audio-covering-div_EJIJIJijajijshi_2428242cf_22 ".concat(props.className)
  }, /*#__PURE__*/React__default.createElement("audio", {
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
  }, /*#__PURE__*/React__default.createElement("source", {
    src: props.src,
    type: "audio/mpeg"
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "audio-react-p1"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "hundred"
  }, /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/React__default.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React__default.createElement(Typography, {
    variant: "caption",
    color: "textSecondary",
    component: "span"
  }, ct)), /*#__PURE__*/React__default.createElement(Grid, {
    item: true,
    xs: true
  }, /*#__PURE__*/React__default.createElement(Slider, {
    style: props.primaryColor ? {
      color: props.primaryColor
    } : {},
    value: width,
    onChange: onSeek,
    "aria-labelledby": "continuous-slider"
  })), /*#__PURE__*/React__default.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React__default.createElement(Typography, {
    variant: "caption",
    color: "textSecondary",
    component: "span"
  }, audio.current ? calcTime(audio.current.duration) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, "00:00")))))), /*#__PURE__*/React__default.createElement("div", {
    className: "audio-display-controls"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "react-audio-play"
  }, playing ? /*#__PURE__*/React__default.createElement(IconButton, {
    style: props.primaryColor ? {
      color: props.primaryColor
    } : {},
    onClick: pause,
    color: "primary",
    "aria-label": "upload picture",
    component: "span"
  }, /*#__PURE__*/React__default.createElement(md.MdPause, null)) : /*#__PURE__*/React__default.createElement(IconButton, {
    style: props.primaryColor ? {
      color: props.primaryColor
    } : {},
    onClick: play,
    color: "primary",
    "aria-label": "upload picture",
    component: "span"
  }, /*#__PURE__*/React__default.createElement(md.MdPlayArrow, null))), /*#__PURE__*/React__default.createElement("div", {
    className: "react-audio-rewind"
  }, /*#__PURE__*/React__default.createElement(IconButton, {
    style: props.primaryColor ? {
      color: props.primaryColor
    } : {},
    onClick: rewind,
    color: "primary",
    "aria-label": "upload picture",
    component: "span"
  }, /*#__PURE__*/React__default.createElement(md.MdFastRewind, null))), /*#__PURE__*/React__default.createElement("div", {
    className: "react-audio-foward"
  }, /*#__PURE__*/React__default.createElement(IconButton, {
    style: props.primaryColor ? {
      color: props.primaryColor
    } : {},
    onClick: foward,
    color: "primary",
    "aria-label": "upload picture",
    component: "span"
  }, /*#__PURE__*/React__default.createElement(md.MdFastForward, null))), /*#__PURE__*/React__default.createElement("div", {
    className: "react-audio-controls"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "volume-add"
  }, /*#__PURE__*/React__default.createElement(Slider, {
    style: props.primaryColor ? {
      color: props.primaryColor
    } : {},
    value: audio.current ? audio.current.volume / 1 * 100 : 0,
    onChange: va,
    "aria-labelledby": "continuous-slider"
  })), audio.current ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(IconButton, {
    color: "primary",
    style: props.primaryColor ? {
      color: props.primaryColor
    } : {},
    onClick: Mute,
    "aria-label": "upload picture",
    component: "span"
  }, audio.current.volume === 0 ? /*#__PURE__*/React__default.createElement(md.MdVolumeOff, null) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, audio.current.volume < 0.3 ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(md.MdVolumeMute, null)) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, audio.current.volume < 0.7 ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(md.MdVolumeDown, null)) : /*#__PURE__*/React__default.createElement(md.MdVolumeUp, null))))) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(IconButton, {
    color: "primary",
    style: props.primaryColor ? {
      color: props.primaryColor
    } : {},
    onClick: Mute,
    "aria-label": "upload picture",
    component: "span"
  }, /*#__PURE__*/React__default.createElement(md.MdVolumeUp, null)))), /*#__PURE__*/React__default.createElement("div", {
    className: "react-audio-fixed"
  }, /*#__PURE__*/React__default.createElement(IconButton, {
    "aria-controls": "audio-menu",
    "aria-haspopup": "true",
    onClick: OpenMenu,
    color: "primary",
    style: props.primaryColor ? {
      color: props.primaryColor
    } : {},
    "aria-label": "settings",
    component: "span"
  }, /*#__PURE__*/React__default.createElement(md.MdSettings, null)), /*#__PURE__*/React__default.createElement(Menu, {
    id: "audio-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: CloseMenu
  }, /*#__PURE__*/React__default.createElement(Tooltip, {
    title: "Mini player",
    "aria-label": "add",
    placement: "left"
  }, /*#__PURE__*/React__default.createElement(MenuItem, {
    onClick: function onClick() {
      setsmall(!small);
      CloseMenu();
    }
  }, /*#__PURE__*/React__default.createElement(IconButton, {
    color: "primary",
    style: props.primaryColor ? {
      color: props.primaryColor
    } : {},
    onClick: function onClick() {
      setsmall(!small);
    },
    "aria-label": "upload picture",
    component: "span"
  }, /*#__PURE__*/React__default.createElement(md.MdCallMade, null)))), props.download ? /*#__PURE__*/React__default.createElement(Tooltip, {
    title: "Download",
    "aria-label": "add",
    placement: "left"
  }, /*#__PURE__*/React__default.createElement(MenuItem, {
    onClick: function onClick() {
      CloseMenu();
    }
  }, /*#__PURE__*/React__default.createElement("a", {
    download: "audio",
    href: props.src
  }, /*#__PURE__*/React__default.createElement(IconButton, {
    color: "primary",
    style: props.primaryColor ? {
      color: props.primaryColor
    } : {},
    "aria-label": "upload picture",
    component: "span"
  }, /*#__PURE__*/React__default.createElement(md.MdFileDownload, null))))) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null)))), small ? /*#__PURE__*/React__default.createElement("div", {
    className: "miniplayermode_2ueyhud87928_wuh"
  }, /*#__PURE__*/React__default.createElement("span", null, "Playing In Mini-Player mode.")) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null)), small ? /*#__PURE__*/React__default.createElement("aside", {
    className: "react-audio-covering-div_EJI ".concat(props.className)
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "react-audio-play"
  }, playing ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(IconButton, {
    color: "primary",
    style: props.primaryColor ? {
      color: props.primaryColor
    } : {},
    onClick: pause,
    "aria-label": "upload picture",
    component: "span"
  }, /*#__PURE__*/React__default.createElement(md.MdPauseCircleFilled, null))) : /*#__PURE__*/React__default.createElement(IconButton, {
    color: "primary",
    style: props.primaryColor ? {
      color: props.primaryColor
    } : {},
    onClick: play,
    "aria-label": "upload picture",
    component: "span"
  }, /*#__PURE__*/React__default.createElement(md.MdPlayCircleFilled, null))), /*#__PURE__*/React__default.createElement("div", {
    className: "playing-animation"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "first",
    style: playing ? {} : {
      animation: 'none'
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "middle",
    style: playing ? {} : {
      animation: 'none'
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "first",
    style: playing ? {} : {
      animation: 'none'
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "react-audio-fixed"
  }, /*#__PURE__*/React__default.createElement(IconButton, {
    color: "primary",
    style: props.primaryColor ? {
      color: props.primaryColor
    } : {},
    onClick: function onClick() {
      setsmall(!small);
    },
    "aria-label": "upload picture",
    component: "span"
  }, /*#__PURE__*/React__default.createElement(md.MdCallReceived, null)))) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null));
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

var FacebookPlayer = function FacebookPlayer(props) {
  var div = React.useRef(null); // eslint-disable-next-line no-unused-vars

  var _useState = React.useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setstate = _useState2[1];

  React.useEffect(function () {
    var script = div.current.ownerDocument.createElement("script");
    script.setAttribute('src', "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0");
    script.setAttribute('crossorigin', "anonymous");
    script.setAttribute('nonce', "G8MwWZCX");
    script.setAttribute('async', "true");
    script.setAttribute('defer', "true");
    div.current.ownerDocument.body.insertAdjacentElement('afterBegin', script);
    var fdRoot = div.current.ownerDocument.createElement("div");
    fdRoot.setAttribute('id', "fb-root");
    div.current.ownerDocument.body.insertAdjacentElement('afterBegin', fdRoot);
  }, [state]);
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("div", {
    class: "fb-video",
    ref: div,
    "data-href": props.src,
    "data-width": props.width,
    "data-allowfullscreen": props.allowFullScreen,
    "data-autoplay": props.autoPlay,
    "data-lazy": props.lazy,
    "data-show-text": props.showText,
    "data-show-captions": props.captions
  }));
};
FacebookPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  allowFullScreen: PropTypes.bool,
  autoPlay: PropTypes.bool,
  lazy: PropTypes.bool,
  showText: PropTypes.bool,
  captions: PropTypes.bool
};

var css$1 = ".img_section {\n  position: relative;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.img_section picture {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.img_section:hover .download_btn {\n  opacity: 1;\n}\n\n.blur_overlay {\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n}\n\n.download_btn {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: absolute;\n  opacity: 0;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  top: 3px;\n  right: 3px;\n  background-color: whitesmoke;\n  border-radius: 3px;\n}\n\n.download_btn .download_lnk {\n  color: #302f2f;\n  padding: 0.5px;\n}";
n(css$1,{});

var Image = function Image(props) {
  var img = React.useRef(null);
  return /*#__PURE__*/React__default.createElement("section", {
    className: "img_section",
    style: {
      margin: 'auto'
    }
  }, /*#__PURE__*/React__default.createElement("picture", null, /*#__PURE__*/React__default.createElement("source", {
    media: props.media,
    sizes: props.sizes,
    type: props.type,
    srcSet: props.srcset
  }), /*#__PURE__*/React__default.createElement("img", {
    src: props.src,
    ref: img,
    alt: props.alt,
    className: props.className,
    crossOrigin: props.crossOrigin,
    decoding: props.decoding ? props.decoding : 'async',
    height: props.height,
    width: props.width,
    loading: props.loading ? props.loading : 'lazy',
    referrerPolicy: props.referrerPolicy,
    hspace: props.hspace,
    id: props.id,
    vspace: props.vspace,
    longdesc: props.longdesc,
    align: props.align,
    useMap: props.useMap
  })), /*#__PURE__*/React__default.createElement(core.Tooltip, {
    title: "Download",
    "aria-label": "add"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "download_btn"
  }, props.download ? /*#__PURE__*/React__default.createElement("a", {
    download: props.name ? props.name : 'my image',
    href: props.src,
    className: "download_lnk"
  }, /*#__PURE__*/React__default.createElement(md.MdFileDownload, null)) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null))), img.current ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, img.current.complete ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null) : /*#__PURE__*/React__default.createElement("div", {
    className: "blur_overlay"
  })) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null));
};
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
};

var css$2 = "/* \r\nCopyright Beingana Jim Junior, 2021 and all the contributors. License Cn be found in the LICENCE file\r\n*/\n.one___flkjsjJJNJnn_nANN8hG_YG7GY7g7BH9 {\n  width: 100%;\n  height: 500px;\n  color: #006eff;\n  background: black;\n  position: relative;\n}\n\n.one___flkjsjJJNJnn_nANN8hG_YG7GY7g7BH9:hover .video-react-lower-bar_dhhiahhbhhbhb3767d7637____u {\n  opacity: 1;\n}\n\n.progress-video-react {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 2px;\n  width: 100%;\n  margin-bottom: 5px;\n  cursor: pointer;\n  background-color: rgba(255, 255, 255, 0.664);\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n\n.progress-video-react .finnished {\n  background-color: #006eff;\n  height: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.progress-video-react .point {\n  width: 0px;\n  height: 0px;\n  margin-left: auto;\n  border-radius: 50%;\n  position: absolute;\n  right: -3px;\n  pointer-events: none;\n  background-color: #006eff;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n\n.progress-video-react .point:hover {\n  -webkit-transform: scale(1.5);\n          transform: scale(1.5);\n}\n\n.progress-video-react:focus {\n  background-color: yellow;\n}\n\n.progress-video-react:hover {\n  height: 5px;\n}\n\n.progress-video-react:hover .point {\n  width: 10px;\n  height: 10px;\n}\n\n.video-react-loading {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: rgba(255, 255, 255, 0.089);\n  border: white 2px solid;\n  border-top: blue 2px solid;\n  top: 33.33%;\n  left: 43.33%;\n  -webkit-animation: loading 1s infinite;\n          animation: loading 1s infinite;\n  position: absolute;\n  /* margin: auto;\r\n\tmargin-top: auto;\r\n\tmargin-bottom: auto; */\n}\n\n@-webkit-keyframes loading {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes loading {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.video-react-lower-bar_dhhiahhbhhbhb3767d7637____u {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  margin: 0rem 0.3rem;\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), color-stop(rgba(0, 0, 0, 0.404)), color-stop(rgba(0, 0, 0, 0.589)), to(rgba(0, 0, 0, 0.863)));\n  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.404), rgba(0, 0, 0, 0.589), rgba(0, 0, 0, 0.863));\n  -webkit-transition: all 0.5s ease-out;\n  transition: all 0.5s ease-out;\n  opacity: 0;\n}\n\n.one___flkjsjJJNJnn_nANN8hG_YG7GY7g7BH9 > video {\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n\n.video-react-controls > div {\n  width: 45%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n  padding-top: 5px;\n}\n\n.video-react-controls > div svg {\n  font-size: 1.5rem !important;\n  margin-top: auto !important;\n  width: 100% !important;\n  margin-bottom: auto !important;\n}\n\n.video-react-controls {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n}\n\n.time-stamps {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 0.7rem;\n  color: white;\n  text-shadow: black 1px 1px 1px;\n}\n\n.time-stamps .fullstime {\n  margin-left: auto;\n  padding-right: 5px;\n}\n\n.time-stamps .current {\n  padding-left: 5px;\n}\n\n.video-react-more {\n  position: relative;\n}\n\n.video-react-play,\n.video-react-pause,\n.video-react-volume,\n.video-react-fullscreen,\n.video-react-rewind,\n.video-react-forward,\n.video-react-more {\n  border: rgba(209, 208, 208, 0) 1px solid;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer;\n  color: white;\n}\n\n.video-react-play:hover,\n.video-react-pause:hover,\n.video-react-volume:hover,\n.video-react-fullscreen:hover,\n.video-react-rewind:hover,\n.video-react-forward:hover,\n.video-react-more:hover {\n  border-top: rgba(209, 208, 208, 0.267) 1px solid;\n  border-bottom: rgba(209, 208, 208, 0.267) 1px solid;\n  background-color: rgba(128, 128, 128, 0.089);\n  color: #006eff;\n}\n\nspan.icon {\n  padding: 5px;\n  font-size: 1rem;\n}\n\n.video-react-menu {\n  background-color: rgba(7, 7, 7, 0.671);\n  width: 150px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  bottom: 101%;\n  padding: 0.3rem 5px;\n  font-size: 0.8rem;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n  opacity: 0;\n  border-radius: 5px;\n  right: 0px;\n  position: absolute;\n  color: #b4b3b3;\n  z-index: 3;\n  -webkit-box-shadow: #00000052 1px 1px 15px, #00000052 -1px -1px 15px;\n          box-shadow: #00000052 1px 1px 15px, #00000052 -1px -1px 15px;\n}\n\n.list- {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #b4b3b3;\n  text-decoration: none;\n}\n\n.list- .text {\n  margin-left: 10px;\n}\n\n.list-:hover {\n  background: rgba(128, 128, 128, 0.486);\n  color: white;\n}\n\n.list- span.icon > svg {\n  color: #006eff;\n  font-size: 1.5rem !important;\n  width: 20px !important;\n}\n\n.list-1 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.list-1 span {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.list-1 .icon {\n  color: #006eff;\n  border-radius: 5px;\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n\n.list-1 .icon:hover {\n  background-color: gray;\n  color: white;\n}\n\n.video-react-volume {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.video-react-volume .finnished {\n  background-color: #006eff;\n  height: 100%;\n}\n\n.video-react-volume .volume-add {\n  opacity: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  color: white;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\n.video-react-volume .volume-div {\n  width: 0px;\n  height: 3px;\n  margin: auto;\n  background: white;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  border-radius: 5px;\n}\n\n.video-react-volume:hover .volume-add {\n  opacity: 1;\n}\n\n.video-react-volume:hover .volume-div {\n  width: 80px;\n}\n\n.video-react-error_12ede3ws3 {\n  background-color: red;\n  z-index: 10;\n  border-radius: 5px;\n  position: absolute;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  top: 10px;\n  opacity: 0;\n  margin: auto;\n  font-size: 0.9rem;\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-shadow: black 1px 1px 25px;\n          box-shadow: black 1px 1px 25px;\n  left: 10px;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  padding: 0.1rem;\n}\n\n.video-react-error_12ede3ws3 span {\n  margin: 5px;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.video-react-error_12ede3ws3 .cancel {\n  padding: 0.3rem;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.video-react-error_12ede3ws3 .cancel:hover {\n  background-color: rgba(255, 255, 255, 0.37);\n}\n\n.video-react-error_12ede3ws3 svg {\n  font-size: 1.5rem;\n}\n\n.menu-c {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.menu-contxt {\n  position: relative;\n  margin: 0px;\n}\n\n.video-rect-context {\n  background-color: rgba(0, 0, 0, 0.829);\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: absolute;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  color: white;\n  border-radius: 3px;\n  -webkit-box-shadow: #000000b4 1px 1px 15px, #000000b4 -1px -1px 15px;\n          box-shadow: #000000b4 1px 1px 15px, #000000b4 -1px -1px 15px;\n  padding: 0.5rem;\n}\n\n.video-rect-context ul {\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n}\n\n.video-rect-context ul li {\n  font-size: 0.9rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0.3rem;\n  cursor: pointer;\n  border-radius: 3px;\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n}\n\n.video-rect-context ul li:hover {\n  background-color: rgba(255, 255, 255, 0.199);\n}\n\n.video-rect-context ul li svg {\n  font-size: 1.5rem;\n  padding-right: 0.2rem;\n  color: #e6e4e4;\n}\n\n.poster {\n  position: absolute;\n  z-index: 15;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.poster > div {\n  position: relative;\n  background: black;\n  height: 100%;\n  width: 100%;\n}\n\n.poster > div img {\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n}\n\n.poster > div div {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 1rem 2rem;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  color: white;\n  background: #006eff;\n  border-radius: 25%;\n  cursor: pointer;\n  margin: auto;\n  z-index: 3;\n}\n\n.poster > div div svg {\n  font-size: 3rem;\n}\n\n.poster > div div:hover {\n  background: #2985fd;\n}\n\n.tooltip {\n  position: relative;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: .5rem;\n  background-color: #555;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 5px;\n  position: absolute;\n  z-index: 1;\n  pointer-events: none;\n  bottom: 230%;\n  opacity: 0;\n  -webkit-transition: opacity 1s;\n  transition: opacity 1s;\n}\n\n.tooltip .tooltiptext::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: #555 transparent transparent transparent;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n  opacity: 1;\n}";
n(css$2,{});

var Video = /*#__PURE__*/React__default.forwardRef(function (props, ref) {
  var video = ref.video;
  return /*#__PURE__*/React__default.createElement("video", {
    onError: function onError() {
      props.onError();
    },
    ref: video,
    autoPlay: props.autoPlay ? true : false,
    onPause: function onPause() {
      props.onPause();
    },
    onPlay: function onPlay() {
      props.onPlay();
    },
    className: "video-react",
    onTimeUpdate: function onTimeUpdate(e) {
      props.onTimeUpdate(e);
    },
    controlsList: "nodownload"
  }, /*#__PURE__*/React__default.createElement("source", {
    src: props.src,
    type: props.type ? props.type : "video/mp4"
  }));
});

var ControlsBar = /*#__PURE__*/React__default.forwardRef(function (props, ref) {
  var video = props.video,
      ctt = props.ctt,
      _onMouseMove = props.onMouseMove,
      ofwidth = props.ofwidth,
      onSeek = props.onSeek,
      ct = props.ct,
      calcTime = props.calcTime,
      pause = props.pause,
      play = props.play,
      rewind = props.rewind,
      foward = props.foward,
      va = props.va,
      Mute = props.Mute,
      playing = props.playing,
      fulls = props.fulls,
      exitFullScreen = props.exitFullScreen,
      enterFullScreen = props.enterFullScreen,
      more = props.more,
      pp = props.pp,
      minusp = props.minusp,
      addp = props.addp,
      mm = props.mm;
  var div = ref.div,
      vdiv = ref.vdiv;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "video-react-lower-bar_dhhiahhbhhbhb3767d7637____u"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "hundred tooltip"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "progress-video-react",
    ref: div,
    onMouseMove: function onMouseMove(e) {
      _onMouseMove(e);
    },
    onClick: onSeek
  }, /*#__PURE__*/React__default.createElement("span", {
    style: {
      left: "".concat(ofwidth, "%")
    },
    className: "tooltiptext"
  }, ctt), /*#__PURE__*/React__default.createElement("div", {
    className: "finnished",
    style: video.current ? {
      width: "".concat(video.current.currentTime / video.current.duration * 100, "%"),
      background: props.primaryColor ? props.primaryColor : ''
    } : {
      width: 0
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "point"
  })))), /*#__PURE__*/React__default.createElement("div", {
    className: "time-stamps"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "current"
  }, ct), /*#__PURE__*/React__default.createElement("div", {
    className: "fullstime"
  }, video.current ? calcTime(video.current.duration) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, "--:--"))), /*#__PURE__*/React__default.createElement("div", {
    className: "video-react-controls"
  }, playing ? /*#__PURE__*/React__default.createElement(Tooltip, {
    title: "Pause",
    "aria-label": "add",
    placement: "top"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "video-react-pause",
    onClick: pause
  }, /*#__PURE__*/React__default.createElement(md.MdPause, null))) : /*#__PURE__*/React__default.createElement(Tooltip, {
    title: "Play",
    "aria-label": "add",
    placement: "top"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "video-react-play",
    onClick: play
  }, /*#__PURE__*/React__default.createElement(md.MdPlayArrow, null))), /*#__PURE__*/React__default.createElement(Tooltip, {
    title: "Rewind",
    "aria-label": "add",
    placement: "top"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "video-react-rewind",
    onClick: rewind
  }, /*#__PURE__*/React__default.createElement(md.MdFastRewind, null))), /*#__PURE__*/React__default.createElement(Tooltip, {
    title: "Forward",
    "aria-label": "add",
    placement: "top"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "video-react-forward",
    onClick: foward
  }, /*#__PURE__*/React__default.createElement(md.MdFastForward, null))), /*#__PURE__*/React__default.createElement("div", {
    className: "video-react-pro"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "video-react-pro"
  }), /*#__PURE__*/React__default.createElement(Tooltip, {
    title: "Volume",
    "aria-label": "add",
    placement: "top"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "video-react-volume"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "volume-add"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "volume-div",
    ref: vdiv,
    onClick: va
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "finnished",
    style: video.current ? {
      width: "".concat(video.current.volume / 1 * 100, "%")
    } : {
      width: 0
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "point"
  }))), video.current ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, video.current.volume === 0 ? /*#__PURE__*/React__default.createElement(md.MdVolumeOff, {
    onClick: Mute
  }) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, video.current.volume < 0.3 ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(md.MdVolumeMute, {
    onClick: Mute
  })) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, video.current.volume < 0.7 ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(md.MdVolumeDown, {
    onClick: Mute
  })) : /*#__PURE__*/React__default.createElement(md.MdVolumeUp, {
    onClick: Mute
  })))) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(md.MdVolumeUp, null)))), /*#__PURE__*/React__default.createElement(Tooltip, {
    title: "Fullscreen",
    "aria-label": "add",
    placement: "top"
  }, fulls ? /*#__PURE__*/React__default.createElement("div", {
    className: "video-react-fullscreen",
    onClick: exitFullScreen
  }, /*#__PURE__*/React__default.createElement(md.MdFullscreenExit, null)) : /*#__PURE__*/React__default.createElement("div", {
    className: "video-react-fullscreen",
    onClick: enterFullScreen
  }, /*#__PURE__*/React__default.createElement(md.MdFullscreen, null))), /*#__PURE__*/React__default.createElement(Tooltip, {
    arrow: true,
    title: "Settings",
    "aria-label": "add",
    placement: "left"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "video-react-more"
  }, /*#__PURE__*/React__default.createElement("div", {
    style: more ? {
      transform: 'scale(1)',
      opacity: 1
    } : {},
    className: "video-react-menu"
  }, /*#__PURE__*/React__default.createElement("a", {
    download: "video",
    href: props.src,
    className: "list-",
    onClick: pp
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/React__default.createElement(md.MdFileDownload, null)), /*#__PURE__*/React__default.createElement("span", {
    className: "text"
  }, "Download")), /*#__PURE__*/React__default.createElement("div", {
    className: "list-",
    onClick: pp
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/React__default.createElement(md.MdPictureInPictureAlt, null)), /*#__PURE__*/React__default.createElement("span", {
    className: "text"
  }, "Picture In Picture")), /*#__PURE__*/React__default.createElement(Tooltip, {
    arrow: true,
    title: "Playback speed",
    "aria-label": "add",
    placement: "left"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "list-1"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "icon",
    onClick: minusp,
    style: video.current ? video.current.playbackRate === 0 ? {
      cursor: 'not-allowed'
    } : {} : {}
  }, /*#__PURE__*/React__default.createElement(md.MdRemove, null)), /*#__PURE__*/React__default.createElement("span", {
    className: "text"
  }, video.current ? video.current.playbackRate : 1), /*#__PURE__*/React__default.createElement("span", {
    className: "icon",
    onClick: addp
  }, /*#__PURE__*/React__default.createElement(md.MdAdd, null))))), /*#__PURE__*/React__default.createElement(md.MdSettings, {
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
  })))));
});

var ReactVideo = function ReactVideo(props) {
  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      playing = _useState2[0],
      setplaying = _useState2[1];

  var video = React.useRef(null);
  var div = React.useRef(null);
  var sect = React.useRef(null);
  var vdiv = React.useRef(null);

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      seterror = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      y = _useState6[0],
      sety = _useState6[1];

  var _useState7 = React.useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      x = _useState8[0],
      setx = _useState8[1];

  var _useState9 = React.useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      on = _useState10[0],
      seton = _useState10[1];

  var _useState11 = React.useState(true),
      _useState12 = _slicedToArray(_useState11, 2),
      loaded = _useState12[0],
      setloaded = _useState12[1];

  var _useState13 = React.useState(false),
      _useState14 = _slicedToArray(_useState13, 2),
      fulls = _useState14[0],
      setfulls = _useState14[1];

  var _useState15 = React.useState(false),
      _useState16 = _slicedToArray(_useState15, 2),
      mute = _useState16[0],
      setmute = _useState16[1];

  var _useState17 = React.useState(false),
      _useState18 = _slicedToArray(_useState17, 2),
      more = _useState18[0],
      setmore = _useState18[1];

  var _useState19 = React.useState('00:00'),
      _useState20 = _slicedToArray(_useState19, 2),
      ct = _useState20[0],
      setcurrenttime = _useState20[1];

  var _useState21 = React.useState('00:00'),
      _useState22 = _slicedToArray(_useState21, 2),
      ctt = _useState22[0],
      setctt = _useState22[1];

  var _useState23 = React.useState(0),
      _useState24 = _slicedToArray(_useState23, 2),
      ofwidth = _useState24[0],
      setofwidth = _useState24[1];

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

  function onSeek(e) {
    var x = e.nativeEvent.layerX;
    var offsetWidth = div.current.offsetWidth;
    var duration = video.current.duration;
    var time = x / offsetWidth * duration;
    video.current.currentTime = time;
    var xx = x - 12;
    var seekwidth = xx / offsetWidth * 100;
    setofwidth(seekwidth);

    if (props.onSeek) {
      props.onSeek();
    }
  }

  function onMove(e) {
    var x = e.nativeEvent.layerX;
    var offsetWidth = div.current.offsetWidth;
    var duration = video.current.duration;
    var time = x / offsetWidth * duration;
    setctt(calcTime(time));
    var xx = x - 12;
    var seekwidth = xx / offsetWidth * 100;
    setofwidth(seekwidth);

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

  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("style", {
    jsx: "true"
  }, "\n                .video-react-pause:hover,\n                .video-react-play:hover,\n                .video-react-volume:hover,\n                .video-react-rewind:hover,\n                .video-react-more:hover,\n                .video-react-fullscreen:hover,\n                .video-react-forward:hover {\n                    color: ".concat(props.primaryColor, ";\n                }\n                .finnished {\n                    background-color: ").concat(props.primaryColor, " !important;\n                }\n                .point {\n                    background-color: ").concat(props.primaryColor, " !important;\n                }\n                \n            ")), /*#__PURE__*/React__default.createElement("section", {
    onContextMenu: function onContextMenu(e) {
      e.preventDefault();
      contextMenu(e);
    },
    onBlur: function onBlur() {
      handleClose();
    },
    className: "one___flkjsjJJNJnn_nANN8hG_YG7GY7g7BH9 ".concat(props.className),
    ref: sect
  }, /*#__PURE__*/React__default.createElement(Video, {
    onError: function onError() {
      seterror(true);
    },
    ref: {
      video: video
    },
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
    src: props.src,
    type: props.type ? props.type : "video/mp4"
  }), video.current ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, video.current.seeking ? /*#__PURE__*/React__default.createElement("div", {
    className: "video-react-loading"
  }) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null)) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null), /*#__PURE__*/React__default.createElement(ControlsBar, {
    ref: {
      div: div,
      vdiv: vdiv
    },
    video: video,
    ctt: ctt,
    onMouseMove: onMove,
    ofwidth: ofwidth,
    onSeek: onSeek,
    ct: ct,
    calcTime: calcTime,
    pause: pause,
    play: play,
    rewind: rewind,
    foward: foward,
    va: va,
    Mute: Mute,
    playing: playing,
    fulls: fulls,
    exitFullScreen: exitFullScreen,
    enterFullScreen: enterFullScreen,
    more: more,
    pp: pp,
    minusp: minusp,
    addp: addp,
    mm: mm
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "video-react-error_12ede3ws3",
    style: error ? {
      opacity: 1
    } : {}
  }, /*#__PURE__*/React__default.createElement("span", null, /*#__PURE__*/React__default.createElement(md.MdErrorOutline, null)), " ", /*#__PURE__*/React__default.createElement("span", null, /*#__PURE__*/React__default.createElement("b", null, "Error:"), " Failed to load Video"), /*#__PURE__*/React__default.createElement("span", {
    className: "cancel",
    onClick: function onClick() {
      seterror(false);
    }
  }, /*#__PURE__*/React__default.createElement(md.MdClose, null))), on ? /*#__PURE__*/React__default.createElement("div", {
    className: "menu-c",
    onClick: function onClick() {
      handleClose();
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "menu-contxt",
    onClick: function onClick() {
      handleClose();
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "video-rect-context",
    style: {
      top: y,
      left: x
    }
  }, /*#__PURE__*/React__default.createElement("ul", {
    className: "context-list"
  }, playing ? /*#__PURE__*/React__default.createElement("li", {
    className: "play",
    onClick: pause
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "i"
  }, /*#__PURE__*/React__default.createElement(md.MdPause, null)), /*#__PURE__*/React__default.createElement("span", {
    className: "t"
  }, "Pause")) : /*#__PURE__*/React__default.createElement("li", {
    className: "play",
    onClick: play
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "i"
  }, /*#__PURE__*/React__default.createElement(md.MdPlayArrow, null)), /*#__PURE__*/React__default.createElement("span", {
    className: "t"
  }, "Play")), /*#__PURE__*/React__default.createElement("li", {
    onClick: function onClick() {
      setClipboard(video.current ? video.current.currentSrc : '');
    }
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "i"
  }, /*#__PURE__*/React__default.createElement(md.MdFlipToBack, null)), /*#__PURE__*/React__default.createElement("span", {
    className: "t"
  }, "Copy Video Url")), video.current ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, video.current.loop ? /*#__PURE__*/React__default.createElement("li", {
    onClick: function onClick() {
      video.current.loop = false;
    }
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "i"
  }, /*#__PURE__*/React__default.createElement(md.MdLoop, null)), /*#__PURE__*/React__default.createElement("span", {
    className: "t"
  }, "Stop Loop")) : /*#__PURE__*/React__default.createElement("li", {
    onClick: function onClick() {
      video.current.loop = true;
    }
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "i"
  }, /*#__PURE__*/React__default.createElement(md.MdLoop, null)), /*#__PURE__*/React__default.createElement("span", {
    className: "t"
  }, "Loop"))) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null))))) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null), playing === false && loaded === true ? /*#__PURE__*/React__default.createElement("div", {
    className: "poster"
  }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("img", {
    src: props.poster,
    alt: "video poster"
  }), /*#__PURE__*/React__default.createElement("div", {
    style: props.primaryColor ? {
      background: props.primaryColor
    } : {},
    onClick: function onClick() {
      play();
      setloaded(false);
    }
  }, /*#__PURE__*/React__default.createElement(md.MdPlayArrow, null)))) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null), props.childern));
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

var css$3 = ".video-component {\n  width: 100%;\n  height: 100%;\n}\n\n.video-cover {\n  position: relative;\n}\n\n.video-cover:hover .controlsbar {\n  opacity: 1;\n}\n\n.controlsbar {\n  opacity: 0;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  color: #fff;\n  background: -webkit-gradient(linear, left bottom, left top, from(black), to(rgba(0, 0, 0, 0.137)));\n  background: linear-gradient(to top, black, rgba(0, 0, 0, 0.137));\n}\n\n.controlscover {\n  margin: 0px 8px;\n}\n\n.tooltip {\n  position: relative;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: .5rem;\n  background-color: #555;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 5px;\n  position: absolute;\n  z-index: 1;\n  pointer-events: none;\n  bottom: 230%;\n  opacity: 0;\n  -webkit-transition: opacity 1s;\n  transition: opacity 1s;\n}\n\n.tooltip .tooltiptext::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: #555 transparent transparent transparent;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n  opacity: 1;\n}\n\n.progress {\n  width: 100%;\n  height: 3px;\n  background-color: #fffefe8e;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  cursor: pointer;\n}\n\n.progress:hover {\n  height: 5px;\n}\n\n.progress:hover .point {\n  display: inline;\n}\n\n.finnished {\n  background-color: red;\n  width: 50%;\n  height: 100%;\n  pointer-events: none;\n}\n\n.point {\n  display: none;\n  height: 10px;\n  width: 10px;\n  background-color: red;\n  border-radius: 50%;\n  pointer-events: none;\n  -webkit-transform: translateX(-5px);\n          transform: translateX(-5px);\n}\n\n.controls {\n  font-size: 1.5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.settimgs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-left: auto;\n}\n\n.timestamps {\n  font-size: .9rem;\n  font-weight: bold;\n}\n\n.play, .foward, .timestamps, .fullscreen, .settings {\n  margin: 8px 10px;\n  cursor: pointer;\n}\n\n.settings {\n  position: relative;\n}\n\n.settingsmenu {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: absolute;\n  bottom: 120%;\n  right: 0px;\n  width: 200px;\n  z-index: 3;\n  background: rgba(0, 0, 0, 0.63);\n}\n\n.item {\n  font-size: .9rem;\n  padding: 5px;\n}\n\n.icon {\n  font-size: 1rem;\n  padding: 5px;\n}\n\n.menutop {\n  background-color: #3a3a3a;\n}\n\n.menuitem {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #fff;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.menuitem:hover {\n  background-color: rgba(85, 85, 85, 0.356);\n}\n\n.volumeadjust {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  background-color: rgba(14, 14, 14, 0.507);\n  left: 0px;\n  right: 0px;\n  z-index: 7;\n}\n\n.postercover {\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n  z-index: 4;\n}\n\n.posterimage {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: #000000a1;\n}\n\n.posterimage img {\n  width: 100%;\n  height: 100%;\n}\n\n.postericon {\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n  background-color: #00000017;\n  z-index: 3;\n}\n\n.picon {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20%;\n  border-radius: 25px;\n  background-color: red;\n  padding: .5rem 1.5rem;\n  cursor: pointer;\n  color: white;\n  font-size: 2rem;\n}\n\n.contextcover {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  z-index: 30;\n  bottom: 0px;\n}\n\n.contextmenu {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 200px;\n  z-index: 3;\n  background: rgba(0, 0, 0, 0.63);\n}";
n(css$3,{});

var VideoContext = /*#__PURE__*/React.createContext({});

var ContextProvider = function ContextProvider(props) {
  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      volumeadjuston = _useState2[0],
      setvolumeadjuston = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      playback = _useState4[0],
      setplayback = _useState4[1];

  var _useState5 = React.useState('00:00'),
      _useState6 = _slicedToArray(_useState5, 2),
      CurrentTime = _useState6[0],
      setCurrentTime = _useState6[1];

  var _useState7 = React.useState('00:00'),
      _useState8 = _slicedToArray(_useState7, 2),
      Duration = _useState8[0],
      setDuration = _useState8[1];

  var _useState9 = React.useState(0),
      _useState10 = _slicedToArray(_useState9, 2),
      FinishedPerc = _useState10[0],
      setFinishedPerc = _useState10[1];

  var _useState11 = React.useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      setting = _useState12[0],
      setsetting = _useState12[1];

  var _useState13 = React.useState(false),
      _useState14 = _slicedToArray(_useState13, 2),
      Playing = _useState14[0],
      setPlaying = _useState14[1];

  var src = props.src,
      video = props.video,
      CMposition = props.CMposition,
      setcontextmenu = props.setcontextmenu,
      contextmenu = props.contextmenu,
      section = props.section;

  function evaluatePercentage(current, duration) {
    var perc = current / duration * 100;
    setFinishedPerc(perc);
  }

  var value = {
    video: video,
    src: src,
    setcontextmenu: setcontextmenu,
    contextmenu: contextmenu,
    CMposition: CMposition,
    section: section,
    playback: playback,
    setplayback: setplayback,
    volumeadjuston: volumeadjuston,
    setvolumeadjuston: setvolumeadjuston,
    CurrentTime: CurrentTime,
    setCurrentTime: setCurrentTime,
    Playing: Playing,
    setPlaying: setPlaying,
    Duration: Duration,
    evaluatePercentage: evaluatePercentage,
    setFinishedPerc: setFinishedPerc,
    FinishedPerc: FinishedPerc,
    setDuration: setDuration,
    setting: setting,
    setsetting: setsetting
  };
  return /*#__PURE__*/React__default.createElement(VideoContext.Provider, {
    value: value
  }, props.children);
};

function EvaluateTime(d) {
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

var VideoComponent = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _useContext = React.useContext(VideoContext),
      setPlaying = _useContext.setPlaying,
      setCurrentTime = _useContext.setCurrentTime,
      setDuration = _useContext.setDuration,
      evaluatePercentage = _useContext.evaluatePercentage;

  var src = props.src;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("video", {
    onPlay: function onPlay(e) {
      setPlaying(true);
      setDuration(EvaluateTime(ref.current.duration));

      if (props.onPlay) {
        props.onPlay(e);
      }
    },
    onPause: function onPause(e) {
      setPlaying(false);

      if (props.onPause) {
        props.onPause(e);
      }
    },
    ref: ref,
    className: "video-component",
    autoPlay: props.autoPlay ? true : false,
    controlsList: "nodownload",
    onTimeUpdate: function onTimeUpdate(e) {
      setCurrentTime(EvaluateTime(ref.current.currentTime));
      evaluatePercentage(ref.current.currentTime, ref.current.duration);

      if (props.onTimeUpdate) {
        props.onTimeUpdate(e, ref.current.currentTime, ref.current.duration);
      }
    }
  }, /*#__PURE__*/React__default.createElement("source", {
    src: src,
    type: props.type ? props.type : "video/mp4"
  })));
});
var ControlsBar$1 = function ControlsBar(props) {
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: "controlsbar"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "controlscover"
  }, /*#__PURE__*/React__default.createElement(Progress, props), /*#__PURE__*/React__default.createElement(LowerControls, props))));
};
var Progress = function Progress(props) {
  var div = React.useRef(null);

  var _useContext2 = React.useContext(VideoContext),
      CurrentTime = _useContext2.CurrentTime,
      FinishedPerc = _useContext2.FinishedPerc,
      video = _useContext2.video;

  var _useState = React.useState('00:00'),
      _useState2 = _slicedToArray(_useState, 2),
      ctt = _useState2[0],
      setctt = _useState2[1];

  var _useState3 = React.useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      ofwidth = _useState4[0],
      setofwidth = _useState4[1];

  function seek(e) {
    var x = e.nativeEvent.layerX;
    var offsetWidth = div.current.offsetWidth;
    var duration = video.current.duration;
    var time = x / offsetWidth * duration;
    video.current.currentTime = time;

    if (props.onSeek) {
      props.onSeek();
    }
  }

  function onMove(e) {
    var x = e.nativeEvent.layerX;
    var offsetWidth = div.current.offsetWidth;
    var duration = video.current.duration;
    var time = x / offsetWidth * duration;
    setctt(EvaluateTime(time));
    var xx = x - 13;
    var seekwidth = xx / offsetWidth * 100;
    setofwidth(seekwidth);

    if (props.onSeek) {
      props.onSeek();
    }
  }

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    ref: div,
    onClick: seek,
    onMouseMove: function onMouseMove(e) {
      onMove(e);
    },
    className: "progress tooltip"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "finnished",
    style: {
      width: "".concat(FinishedPerc, "%")
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "point"
  }), /*#__PURE__*/React__default.createElement("span", {
    style: {
      left: "".concat(ofwidth, "%")
    },
    className: "tooltiptext"
  }, ctt)));
};
var LowerControls = function LowerControls(props) {
  var _useContext3 = React.useContext(VideoContext),
      Playing = _useContext3.Playing,
      CurrentTime = _useContext3.CurrentTime,
      Duration = _useContext3.Duration,
      section = _useContext3.section;

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      fullscreen = _useState6[0],
      setfullscreen = _useState6[1];

  var video = props.video;

  function play(e) {
    video.current.play();

    if (props.onPlay) {
      props.onPlay(e);
    }
  }

  function forward(e) {
    var dur = 5 / 100 * video.current.duration;
    video.current.currentTime += dur;
  }

  function pause(e) {
    video.current.pause();
  }

  var enterFullScreen = function enterFullScreen(e) {
    section.current.requestFullscreen();

    if (props.onEnterFullScreen) {
      props.onEnterFullScreen(e);
    }

    setfullscreen(true);
  };

  var exitFullScreen = function exitFullScreen(e) {
    section.current.ownerDocument.exitFullscreen();
    setfullscreen(false);
  };

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: "controls"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "play"
  }, Playing ? /*#__PURE__*/React__default.createElement(Icons.FaPause, {
    onClick: pause
  }) : /*#__PURE__*/React__default.createElement(Icons.FaPlay, {
    onClick: play
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "foward"
  }, /*#__PURE__*/React__default.createElement(Icons.FaForward, {
    onClick: forward
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "timestamps"
  }, CurrentTime, " / ", Duration), /*#__PURE__*/React__default.createElement("div", {
    className: "settimgs"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "fullscreen"
  }, fullscreen === false ? /*#__PURE__*/React__default.createElement(Icons.RiFullscreenFill, {
    onClick: enterFullScreen
  }) : /*#__PURE__*/React__default.createElement(Icons.MdFullscreenExit, {
    onClick: exitFullScreen
  })), /*#__PURE__*/React__default.createElement(Settings, null))));
};
var Settings = function Settings(props) {
  var _useContext4 = React.useContext(VideoContext),
      setsetting = _useContext4.setsetting,
      setting = _useContext4.setting;

  return /*#__PURE__*/React__default.createElement("div", {
    className: "settings"
  }, /*#__PURE__*/React__default.createElement(Icons.GoSettings, {
    onClick: function onClick(e) {
      setsetting(!setting);
    }
  }), /*#__PURE__*/React__default.createElement(SettingsMenu, props));
};
var SettingsMenu = function SettingsMenu(props) {
  var _useContext5 = React.useContext(VideoContext),
      setting = _useContext5.setting,
      setsetting = _useContext5.setsetting,
      src = _useContext5.src,
      setvolumeadjuston = _useContext5.setvolumeadjuston,
      setplayback = _useContext5.setplayback,
      video = _useContext5.video;

  var _useState7 = React.useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      looping = _useState8[0],
      setlooping = _useState8[1];

  function loop(e) {
    setlooping(!looping);
    video.current.loop = !video.current.loop;
  }

  function PictureInPicture(e) {
    video.current.requestPictureInPicture();

    if (props.onRequestPictureInPicture) {
      props.onRequestPictureInPicture();
    }
  }

  return /*#__PURE__*/React__default.createElement("div", {
    style: setting === false ? {
      display: 'none'
    } : {},
    className: "settingsmenu"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "menutop menuitem"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/React__default.createElement(Icons.IoCloseCircleOutline, {
    onClick: function onClick(e) {
      setsetting(false);
    }
  })), /*#__PURE__*/React__default.createElement("span", {
    className: "item"
  }, "Settings")), /*#__PURE__*/React__default.createElement("a", {
    download: "video",
    href: src,
    className: "menuitem"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/React__default.createElement(Icons.FiDownloadCloud, null)), /*#__PURE__*/React__default.createElement("span", {
    className: "item"
  }, "Download")), /*#__PURE__*/React__default.createElement("div", {
    onClick: loop,
    className: "menuitem"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/React__default.createElement(Icons.MdLoop, null)), looping ? /*#__PURE__*/React__default.createElement("span", {
    className: "item"
  }, "Stop Loop") : /*#__PURE__*/React__default.createElement("span", {
    className: "item"
  }, "Loop")), /*#__PURE__*/React__default.createElement("div", {
    onClick: PictureInPicture,
    className: "menuitem"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/React__default.createElement(Icons.MdPictureInPicture, null)), /*#__PURE__*/React__default.createElement("span", {
    className: "item"
  }, "MiniPlayer")), /*#__PURE__*/React__default.createElement("div", {
    onClick: function onClick(e) {
      setplayback(true);
    },
    className: "menuitem"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/React__default.createElement(Icons.GiSpeedometer, null)), /*#__PURE__*/React__default.createElement("span", {
    className: "item"
  }, "Playback Speed")), /*#__PURE__*/React__default.createElement("div", {
    onClick: function onClick(e) {
      setvolumeadjuston(true);
    },
    className: "menuitem"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/React__default.createElement(Icons.FaVolumeUp, null)), /*#__PURE__*/React__default.createElement("span", {
    className: "item"
  }, "Volume")));
};
var useStyles = styles.makeStyles({
  root: {
    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white',
    textAlign: 'center',
    marginTop: 50,
    background: 'black',
    padding: '1rem',
    borderRadius: 10
  }
});
var VolumeAdjust = function VolumeAdjust(props) {
  var _useContext6 = React.useContext(VideoContext),
      volumeadjuston = _useContext6.volumeadjuston,
      setvolumeadjuston = _useContext6.setvolumeadjuston,
      video = _useContext6.video;

  var classes = useStyles();

  var _React$useState = React__default.useState(100),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var handleChange = function handleChange(event, newValue) {
    var volume = newValue / 100;
    video.current.volume = volume;
    setValue(newValue);
  };

  return /*#__PURE__*/React__default.createElement("div", {
    style: volumeadjuston ? {} : {
      display: 'none'
    },
    className: "volumeadjust"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/React__default.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React__default.createElement(IconButton, {
    onClick: function onClick(e) {
      setvolumeadjuston(false);
    },
    style: {
      color: 'white'
    },
    "aria-label": "delete"
  }, /*#__PURE__*/React__default.createElement(Icons.CgClose, null)))), /*#__PURE__*/React__default.createElement(Typography, {
    id: "continuous-slider",
    gutterBottom: true
  }, "Volume"), /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/React__default.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React__default.createElement(Icons.MdVolumeDown, null)), /*#__PURE__*/React__default.createElement(Grid, {
    item: true,
    xs: true
  }, /*#__PURE__*/React__default.createElement(Slider, {
    value: value,
    onChange: handleChange,
    "aria-labelledby": "continuous-slider"
  })), /*#__PURE__*/React__default.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React__default.createElement(Icons.MdVolumeUp, null)))));
};

function ValueLabelComponent(props) {
  var children = props.children,
      open = props.open,
      value = props.value;
  return /*#__PURE__*/React__default.createElement(Tooltip, {
    open: open,
    enterTouchDelay: 0,
    placement: "top",
    title: value
  }, children);
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired
};
var iOSBoxShadow = '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';
var marks = [{
  value: 0
}, {
  value: 0.5
}, {
  value: 1
}, {
  value: 10
}];
var IOSSlider = styles.withStyles({
  root: {
    color: '#3880ff',
    height: 2,
    padding: '15px 0'
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    '&:focus, &:hover, &$active': {
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow
      }
    }
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 12px)',
    top: -22,
    '& *': {
      background: 'transparent',
      color: '#fff'
    }
  },
  track: {
    height: 2
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
var PlaybackSpeedAdjust = function PlaybackSpeedAdjust(props) {
  var _useContext7 = React.useContext(VideoContext),
      video = _useContext7.video,
      playback = _useContext7.playback,
      setplayback = _useContext7.setplayback;

  var classes = useStyles();

  var _React$useState3 = React__default.useState(100),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      value = _React$useState4[0],
      setValue = _React$useState4[1];

  var handleChange = function handleChange(event, newValue) {
    var volume = newValue;
    video.current.playbackRate = volume;
    setValue(newValue);
  };

  return /*#__PURE__*/React__default.createElement("div", {
    style: playback ? {} : {
      display: 'none'
    },
    className: "volumeadjust"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/React__default.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React__default.createElement(IconButton, {
    onClick: function onClick(e) {
      setplayback(false);
    },
    style: {
      color: 'white'
    },
    "aria-label": "delete"
  }, /*#__PURE__*/React__default.createElement(Icons.CgClose, null)))), /*#__PURE__*/React__default.createElement(Typography, {
    id: "discrete-slider-small-steps",
    gutterBottom: true
  }, "Playback Speed"), /*#__PURE__*/React__default.createElement(IOSSlider, {
    "aria-label": "ios slider",
    onChange: handleChange,
    defaultValue: 1,
    min: 0,
    max: 10,
    marks: marks,
    valueLabelDisplay: "on",
    step: 0.5
  })));
};
var Poster = function Poster(props) {
  var _useContext8 = React.useContext(VideoContext),
      Playing = _useContext8.Playing,
      video = _useContext8.video;

  var _useState9 = React.useState(true),
      _useState10 = _slicedToArray(_useState9, 2),
      onscreen = _useState10[0],
      setonscreen = _useState10[1];

  React.useEffect(function () {
    if (Playing === true) {
      setonscreen(false);
    }
  }, [Playing]);

  function play(e) {
    video.current.play();
  }

  return /*#__PURE__*/React__default.createElement("div", {
    style: onscreen === false ? {
      display: 'none'
    } : {},
    className: "postercover"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "posterimage"
  }, props.poster ? /*#__PURE__*/React__default.createElement("img", {
    src: props.poster,
    alt: "poster"
  }) : "", /*#__PURE__*/React__default.createElement("div", {
    className: "postericon"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "picon"
  }, /*#__PURE__*/React__default.createElement(Icons.FaPlay, {
    onClick: play
  })))));
};
var ContextMenu = function ContextMenu() {
  var _useContext9 = React.useContext(VideoContext),
      contextmenu = _useContext9.contextmenu,
      CMposition = _useContext9.CMposition,
      Playing = _useContext9.Playing,
      setcontextmenu = _useContext9.setcontextmenu,
      src = _useContext9.src,
      setplayback = _useContext9.setplayback,
      video = _useContext9.video;

  var left = CMposition.left,
      top = CMposition.top;

  function PictureInPicture(e) {
    video.current.requestPictureInPicture();
  }

  function play(e) {
    video.current.play();
  }

  function pause(e) {
    video.current.pause();
  }

  function setClipboard() {
    var text = video.current.currentSrc;
    navigator.clipboard.writeText(text).then(function () {}, function () {
      // eslint-disable-next-line no-restricted-globals
      alert('failed to copy url');
    });
  }

  return /*#__PURE__*/React__default.createElement("div", {
    style: contextmenu === false ? {
      display: 'none'
    } : {},
    onClick: function onClick(e) {
      setcontextmenu(!contextmenu);
    },
    className: "contextcover"
  }, /*#__PURE__*/React__default.createElement("div", {
    style: {
      marginTop: top,
      marginLeft: left
    },
    className: "contextmenu"
  }, /*#__PURE__*/React__default.createElement("div", {
    onClick: Playing ? pause : play,
    className: "menuitem"
  }, Playing ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/React__default.createElement(Icons.FaPause, null)), /*#__PURE__*/React__default.createElement("span", {
    className: "item"
  }, "Pause")) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/React__default.createElement(Icons.FaPlay, null)), /*#__PURE__*/React__default.createElement("span", {
    className: "item"
  }, "Play"))), /*#__PURE__*/React__default.createElement("a", {
    download: "video",
    href: src,
    className: "menuitem"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/React__default.createElement(Icons.FiDownloadCloud, null)), /*#__PURE__*/React__default.createElement("span", {
    className: "item"
  }, "Download")), /*#__PURE__*/React__default.createElement("div", {
    onClick: PictureInPicture,
    className: "menuitem"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/React__default.createElement(Icons.MdPictureInPicture, null)), /*#__PURE__*/React__default.createElement("span", {
    className: "item"
  }, "MiniPlayer")), /*#__PURE__*/React__default.createElement("div", {
    onClick: function onClick(e) {
      setplayback(true);
    },
    className: "menuitem"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/React__default.createElement(Icons.GiSpeedometer, null)), /*#__PURE__*/React__default.createElement("span", {
    className: "item"
  }, "Playback Speed")), /*#__PURE__*/React__default.createElement("div", {
    onClick: function onClick(e) {
      setClipboard();
    },
    className: "menuitem"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/React__default.createElement(Icons.MdFlipToBack, null)), /*#__PURE__*/React__default.createElement("span", {
    className: "item"
  }, "Copy Video Adress"))));
};
var Style = function Style(props) {
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("style", {
    jsx: true
  }, "\n        .play:hover, .foward:hover, .timestamps:hover, .fullscreen:hover, .settings:hover {\n            color: ".concat(props.primaryColor, ";\n        }\n        .finnished {\n                    background-color: ").concat(props.primaryColor, " !important;\n                }\n                .point {\n                    background-color: ").concat(props.primaryColor, " !important;\n                }\n        ")));
};

/**
 * ## Video component
 * This is the video component for `reactjs-media`. It creates a video tag with more functionality that the normal video element in the browser.
 * ### Usage 
 * To use this component you have to import it from the package
 * ```
 * import {Video} from 'reactjs-media';
 * 
 * const Mycomponent =(props) => {
 *      return (
 *          <div>
 *               <Video
 *                   src="/path/to/video" // this is the source of the video
 *                   primaryColor="red" // theme
 *                   autoPlay
 *                />
 *          </div>
 *      )
 * }
 * ```
 */

var Video$1 = function Video(props) {
  var vide = React.useRef(null);
  var section = React.useRef(null);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      contextmenu = _useState2[0],
      setcontextmenu = _useState2[1];

  var _useState3 = React.useState({
    left: 0,
    top: 0
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      CMposition = _useState4[0],
      setCMposition = _useState4[1];

  var _useState5 = React.useState({}),
      _useState6 = _slicedToArray(_useState5, 2),
      video = _useState6[0],
      setvideo = _useState6[1];

  var _useState7 = React.useState({}),
      _useState8 = _slicedToArray(_useState7, 2),
      render = _useState8[0],
      setr = _useState8[1];

  React.useEffect(function () {
    setvideo(vide);
  }, [render]);

  function dispContextMenu(e) {
    e.preventDefault();
    setCMposition({
      left: e.pageX,
      top: e.pageY
    });
    setcontextmenu(true);
  }

  return /*#__PURE__*/React__default.createElement(ContextProvider, _extends({}, props, {
    setcontextmenu: setcontextmenu,
    contextmenu: contextmenu,
    section: section,
    video: video,
    CMposition: CMposition
  }), /*#__PURE__*/React__default.createElement(Style, {
    primaryColor: props.primaryColor
  }), /*#__PURE__*/React__default.createElement("section", {
    ref: section,
    className: "video-cover",
    onContextMenu: dispContextMenu
  }, /*#__PURE__*/React__default.createElement(VideoComponent, _extends({
    ref: vide
  }, props)), /*#__PURE__*/React__default.createElement(ControlsBar$1, _extends({}, props, {
    video: video
  })), /*#__PURE__*/React__default.createElement(VolumeAdjust, {
    video: video
  }), /*#__PURE__*/React__default.createElement(PlaybackSpeedAdjust, null), /*#__PURE__*/React__default.createElement(Poster, {
    poster: props.poster
  }), /*#__PURE__*/React__default.createElement(ContextMenu, props)));
};

Video$1.propTypes = {
  src: PropTypes.string.isRequired,
  type: PropTypes.string,
  poster: PropTypes.string,
  primaryColor: PropTypes.string,
  autoPlay: PropTypes.bool,
  className: PropTypes.string,
  onFoward: PropTypes.func,
  onSeek: PropTypes.func,
  onRequestPictureInPicture: PropTypes.func,
  onTimeUpdate: PropTypes.func,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onEnterFullScreen: PropTypes.func
};

var YoutubePlayer = function YoutubePlayer(props) {
  // eslint-disable-next-line no-unused-vars
  var _useState = React.useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setstate = _useState2[1];

  var _useState3 = React.useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      id = _useState4[0],
      setid = _useState4[1];

  React.useEffect(function () {
    getId(props.src);
  }, [state, props.src]);

  function getId(url) {
    if (url[8] === 'y') {
      var jj = url.slice(17);
      setid(jj);
    }

    if (url[8] === 'w') {
      var _jj = url.slice(32);

      setid(_jj);
    }
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: props.className
  }, /*#__PURE__*/React__default.createElement("iframe", {
    title: props.title,
    width: props.width,
    height: props.height,
    src: "https://www.youtube.com/embed/".concat(id),
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: props.allowFullScreen ? true : false
  }));
};
YoutubePlayer.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  allowFullScreen: PropTypes.bool,
  className: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
};

/* eslint-disable import/no-anonymous-default-export */
var index = {
  ReactAudio: ReactAudio,
  ReactVideo: ReactVideo,
  Image: Image,
  YoutubePlayer: YoutubePlayer,
  FacebookPlayer: FacebookPlayer,
  Video: Video$1
};

module.exports = index;
//# sourceMappingURL=index.js.map
