'use strict';

var _regeneratorRuntime = require('@babel/runtime/regenerator');
var _asyncToGenerator = require('@babel/runtime/helpers/asyncToGenerator');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var React = require('react');
var PropTypes = require('prop-types');
var md = require('react-icons/md');
var Grid = require('@material-ui/core/Grid');
var Slider = require('@material-ui/core/Slider');
var IconButton = require('@material-ui/core/IconButton');
var Typography = require('@material-ui/core/Typography');
var Tooltip = require('@material-ui/core/Tooltip');
var Menu = require('@material-ui/core/Menu');
var MenuItem = require('@material-ui/core/MenuItem');
var core = require('@material-ui/core');
var CircularProgress = require('@material-ui/core/CircularProgress');
var styles = require('@material-ui/core/styles');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);
var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var Grid__default = /*#__PURE__*/_interopDefaultLegacy(Grid);
var Slider__default = /*#__PURE__*/_interopDefaultLegacy(Slider);
var IconButton__default = /*#__PURE__*/_interopDefaultLegacy(IconButton);
var Typography__default = /*#__PURE__*/_interopDefaultLegacy(Typography);
var Tooltip__default = /*#__PURE__*/_interopDefaultLegacy(Tooltip);
var Menu__default = /*#__PURE__*/_interopDefaultLegacy(Menu);
var MenuItem__default = /*#__PURE__*/_interopDefaultLegacy(MenuItem);
var CircularProgress__default = /*#__PURE__*/_interopDefaultLegacy(CircularProgress);

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css = "/* \r\nCopyright Beingana Jim Junior, 2021 and all the contributors. License Cn be found in the LICENCE file\r\n*/\n.react-audio-covering-div_EJIJIJijajijshi_2428242cf_22 {\n  background-color: #f5f5f5;\n  border: 1px solid rgba(23, 47, 112, 0.384);\n  width: 100%;\n  padding: 0.2rem 0rem;\n  border-radius: 7px;\n  color: #003cff;\n  position: relative;\n}\n\n.playing-animation {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.playing-animation .first {\n  width: 3px;\n  -webkit-transform: scaleY(0.4);\n          transform: scaleY(0.4);\n  height: 20px;\n  background-color: #006eff;\n  border-radius: 5px;\n  margin: 1px;\n  -webkit-animation: playing 1s infinite;\n          animation: playing 1s infinite;\n}\n\n.playing-animation .middle {\n  margin: 1px;\n  width: 3px;\n  height: 20px;\n  background-color: #006eff;\n  -webkit-animation: playing1 1s infinite;\n          animation: playing1 1s infinite;\n  border-radius: 20px;\n}\n\n@-webkit-keyframes playing {\n  0% {\n    -webkit-transform: scaleY(0.1);\n            transform: scaleY(0.1);\n  }\n  50% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n  100% {\n    -webkit-transform: scaleY(0.1);\n            transform: scaleY(0.1);\n  }\n}\n\n@keyframes playing {\n  0% {\n    -webkit-transform: scaleY(0.1);\n            transform: scaleY(0.1);\n  }\n  50% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n  100% {\n    -webkit-transform: scaleY(0.1);\n            transform: scaleY(0.1);\n  }\n}\n\n@-webkit-keyframes playing1 {\n  0% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n  50% {\n    -webkit-transform: scaleY(0.1);\n            transform: scaleY(0.1);\n  }\n  100% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n}\n\n@keyframes playing1 {\n  0% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n  50% {\n    -webkit-transform: scaleY(0.1);\n            transform: scaleY(0.1);\n  }\n  100% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n}\n\n.audio-display-controls {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n}\n\n.audio-display-controls div {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n}\n\n.hundred {\n  width: -webkit-fill-available;\n  width: -moz-available;\n  width: stretch;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.time-stamps-audio_12242334_A_wjsh {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 0.7rem;\n  color: #003cff;\n}\n\n.time-stamps-audio_12242334_A_wjsh .fullstime {\n  margin-left: auto;\n  padding-right: 5px;\n}\n\n.time-stamps-audio_12242334_A_wjsh .current {\n  padding-left: 5px;\n}\n\n.progress-audio-react_dkijs_23443sxjsjAJajAJ3 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 2px;\n  margin-bottom: 5px;\n  cursor: pointer;\n  background-color: white;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n\n.progress-audio-react_dkijs_23443sxjsjAJajAJ3 .finnished {\n  background-color: #006eff;\n  height: 100%;\n  width: 50%;\n}\n\n.progress-audio-react_dkijs_23443sxjsjAJajAJ3 .point {\n  width: 0px;\n  height: 0px;\n  border-radius: 50%;\n  background-color: aqua;\n}\n\n.progress-audio-react_dkijs_23443sxjsjAJajAJ3 .point:hover {\n  background-color: #006eff;\n}\n\n.progress-audio-react_dkijs_23443sxjsjAJajAJ3:focus {\n  background-color: yellow;\n}\n\n.progress-audio-react_dkijs_23443sxjsjAJajAJ3:hover {\n  height: 5px;\n}\n\n.progress-audio-react_dkijs_23443sxjsjAJajAJ3:hover .point {\n  width: 1px;\n  height: 10px;\n}\n\n.audio-react-p1 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.react-audio-play svg,\n.react-audio-rewind svg,\n.react-audio-foward svg,\n.react-audio-controls svg,\n.react-audio-fixed svg {\n  cursor: pointer;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  font-size: 1.3rem;\n}\n\n.react-audio-controls {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.react-audio-controls .finnished {\n  background-color: #003cff;\n  height: 100%;\n}\n\n.react-audio-controls .volume-add {\n  opacity: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  -webkit-transform: scaleX(0);\n          transform: scaleX(0);\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  color: white;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\n.react-audio-controls .volume-div {\n  width: 0px;\n  height: 3px;\n  margin: auto;\n  background: white;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  border-radius: 5px;\n}\n\n.react-audio-controls:hover .volume-add {\n  opacity: 1;\n  -webkit-transform: scaleX(1);\n          transform: scaleX(1);\n}\n\n.react-audio-controls:hover .volume-div {\n  width: 80px;\n}\n\n.react-audio-covering-div_EJI {\n  position: fixed;\n  border-radius: 50px;\n  -webkit-box-shadow: rgba(0, 0, 0, 0.493) 1px 1px 30px;\n          box-shadow: rgba(0, 0, 0, 0.493) 1px 1px 30px;\n  top: 10px;\n  right: 10px;\n  background-color: #f5f5f5;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #006eff;\n  z-index: 1000;\n}\n\n.react-audio-covering-div_EJI .hundred {\n  display: none;\n}\n\n.react-audio-covering-div_EJI .playing-animation {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.react-audio-covering-div_EJI .playing-animation .first {\n  width: 3px;\n  -webkit-transform: scaleY(0.4);\n          transform: scaleY(0.4);\n  height: 20px;\n  background-color: blue;\n  border-radius: 5px;\n  margin: 1px;\n  -webkit-animation: playing 1s infinite;\n          animation: playing 1s infinite;\n}\n\n.react-audio-covering-div_EJI .playing-animation .middle {\n  margin: 1px;\n  width: 3px;\n  height: 20px;\n  background-color: blue;\n  -webkit-animation: playing1 1s infinite;\n          animation: playing1 1s infinite;\n  border-radius: 20px;\n}\n\n.react-audio-covering-div_EJI .react-audio-play,\n.react-audio-covering-div_EJI .react-audio-fixed {\n  margin: 10px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.miniplayermode_2ueyhud87928_wuh {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  text-align: center;\n  color: aqua;\n  font-size: 1.1rem;\n  font-weight: bold;\n  right: 0px;\n  bottom: 0px;\n  z-index: 3;\n  text-shadow: #c0bfbf 1px 1px 5px;\n  background-color: rgba(0, 0, 0, 0.397);\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n  padding-top: 15px;\n}";
n(css,{});

var ReactAudio = function ReactAudio(props) {
  var audio = React.useRef(null);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      playing = _useState2[0],
      setplaying = _useState2[1];

  var div = React.useRef(null);

  var _useState3 = React.useState(0),
      _useState4 = _slicedToArray__default['default'](_useState3, 2),
      width = _useState4[0],
      setwidth = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray__default['default'](_useState5, 2),
      small = _useState6[0],
      setsmall = _useState6[1]; // eslint-disable-next-line no-unused-vars


  var _useState7 = React.useState(0),
      _useState8 = _slicedToArray__default['default'](_useState7, 2),
      vwidth = _useState8[0],
      setvwidth = _useState8[1];

  var _useState9 = React.useState(false),
      _useState10 = _slicedToArray__default['default'](_useState9, 2),
      mute = _useState10[0],
      setmute = _useState10[1];

  var _useState11 = React.useState('00:00'),
      _useState12 = _slicedToArray__default['default'](_useState11, 2),
      ct = _useState12[0],
      setcurrenttime = _useState12[1];

  var _React$useState = React__default['default'].useState(null),
      _React$useState2 = _slicedToArray__default['default'](_React$useState, 2),
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
    _Mute = _asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee(e) {
      return _regeneratorRuntime__default['default'].wrap(function _callee$(_context) {
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

  return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("section", {
    className: "react-audio-covering-div_EJIJIJijajijshi_2428242cf_22 ".concat(props.className)
  }, /*#__PURE__*/React__default['default'].createElement("audio", {
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
  }, /*#__PURE__*/React__default['default'].createElement("source", {
    src: props.src,
    type: "audio/mpeg"
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "audio-react-p1"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "hundred"
  }, /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    item: true
  }, /*#__PURE__*/React__default['default'].createElement(Typography__default['default'], {
    variant: "caption",
    color: "textSecondary",
    component: "span"
  }, ct)), /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    item: true,
    xs: true
  }, /*#__PURE__*/React__default['default'].createElement(Slider__default['default'], {
    style: props.primaryColor ? {
      color: props.primaryColor
    } : {},
    value: width,
    onChange: onSeek,
    "aria-labelledby": "continuous-slider"
  })), /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    item: true
  }, /*#__PURE__*/React__default['default'].createElement(Typography__default['default'], {
    variant: "caption",
    color: "textSecondary",
    component: "span"
  }, audio.current ? calcTime(audio.current.duration) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, "00:00")))))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "audio-display-controls"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "react-audio-play"
  }, playing ? /*#__PURE__*/React__default['default'].createElement(IconButton__default['default'], {
    style: props.primaryColor ? {
      color: props.primaryColor
    } : {},
    onClick: pause,
    color: "primary",
    "aria-label": "upload picture",
    component: "span"
  }, /*#__PURE__*/React__default['default'].createElement(md.MdPause, null)) : /*#__PURE__*/React__default['default'].createElement(IconButton__default['default'], {
    style: props.primaryColor ? {
      color: props.primaryColor
    } : {},
    onClick: play,
    color: "primary",
    "aria-label": "upload picture",
    component: "span"
  }, /*#__PURE__*/React__default['default'].createElement(md.MdPlayArrow, null))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "react-audio-rewind"
  }, /*#__PURE__*/React__default['default'].createElement(IconButton__default['default'], {
    style: props.primaryColor ? {
      color: props.primaryColor
    } : {},
    onClick: rewind,
    color: "primary",
    "aria-label": "upload picture",
    component: "span"
  }, /*#__PURE__*/React__default['default'].createElement(md.MdFastRewind, null))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "react-audio-foward"
  }, /*#__PURE__*/React__default['default'].createElement(IconButton__default['default'], {
    style: props.primaryColor ? {
      color: props.primaryColor
    } : {},
    onClick: foward,
    color: "primary",
    "aria-label": "upload picture",
    component: "span"
  }, /*#__PURE__*/React__default['default'].createElement(md.MdFastForward, null))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "react-audio-controls"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "volume-add"
  }, /*#__PURE__*/React__default['default'].createElement(Slider__default['default'], {
    style: props.primaryColor ? {
      color: props.primaryColor
    } : {},
    value: audio.current ? audio.current.volume / 1 * 100 : 0,
    onChange: va,
    "aria-labelledby": "continuous-slider"
  })), audio.current ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(IconButton__default['default'], {
    color: "primary",
    style: props.primaryColor ? {
      color: props.primaryColor
    } : {},
    onClick: Mute,
    "aria-label": "upload picture",
    component: "span"
  }, audio.current.volume === 0 ? /*#__PURE__*/React__default['default'].createElement(md.MdVolumeOff, null) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, audio.current.volume < 0.3 ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(md.MdVolumeMute, null)) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, audio.current.volume < 0.7 ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(md.MdVolumeDown, null)) : /*#__PURE__*/React__default['default'].createElement(md.MdVolumeUp, null))))) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(IconButton__default['default'], {
    color: "primary",
    style: props.primaryColor ? {
      color: props.primaryColor
    } : {},
    onClick: Mute,
    "aria-label": "upload picture",
    component: "span"
  }, /*#__PURE__*/React__default['default'].createElement(md.MdVolumeUp, null)))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "react-audio-fixed"
  }, /*#__PURE__*/React__default['default'].createElement(IconButton__default['default'], {
    "aria-controls": "audio-menu",
    "aria-haspopup": "true",
    onClick: OpenMenu,
    color: "primary",
    style: props.primaryColor ? {
      color: props.primaryColor
    } : {},
    "aria-label": "settings",
    component: "span"
  }, /*#__PURE__*/React__default['default'].createElement(md.MdSettings, null)), /*#__PURE__*/React__default['default'].createElement(Menu__default['default'], {
    id: "audio-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: CloseMenu
  }, /*#__PURE__*/React__default['default'].createElement(Tooltip__default['default'], {
    title: "Mini player",
    "aria-label": "add",
    placement: "left"
  }, /*#__PURE__*/React__default['default'].createElement(MenuItem__default['default'], {
    onClick: function onClick() {
      setsmall(!small);
      CloseMenu();
    }
  }, /*#__PURE__*/React__default['default'].createElement(IconButton__default['default'], {
    color: "primary",
    style: props.primaryColor ? {
      color: props.primaryColor
    } : {},
    onClick: function onClick() {
      setsmall(!small);
    },
    "aria-label": "upload picture",
    component: "span"
  }, /*#__PURE__*/React__default['default'].createElement(md.MdCallMade, null)))), props.download ? /*#__PURE__*/React__default['default'].createElement(Tooltip__default['default'], {
    title: "Download",
    "aria-label": "add",
    placement: "left"
  }, /*#__PURE__*/React__default['default'].createElement(MenuItem__default['default'], {
    onClick: function onClick() {
      CloseMenu();
    }
  }, /*#__PURE__*/React__default['default'].createElement("a", {
    download: "audio",
    href: props.src
  }, /*#__PURE__*/React__default['default'].createElement(IconButton__default['default'], {
    color: "primary",
    style: props.primaryColor ? {
      color: props.primaryColor
    } : {},
    "aria-label": "upload picture",
    component: "span"
  }, /*#__PURE__*/React__default['default'].createElement(md.MdFileDownload, null))))) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null)))), small ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: "miniplayermode_2ueyhud87928_wuh"
  }, /*#__PURE__*/React__default['default'].createElement("span", null, "Playing In Mini-Player mode.")) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null)), small ? /*#__PURE__*/React__default['default'].createElement("aside", {
    className: "react-audio-covering-div_EJI ".concat(props.className)
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "react-audio-play"
  }, playing ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(IconButton__default['default'], {
    color: "primary",
    style: props.primaryColor ? {
      color: props.primaryColor
    } : {},
    onClick: pause,
    "aria-label": "upload picture",
    component: "span"
  }, /*#__PURE__*/React__default['default'].createElement(md.MdPauseCircleFilled, null))) : /*#__PURE__*/React__default['default'].createElement(IconButton__default['default'], {
    color: "primary",
    style: props.primaryColor ? {
      color: props.primaryColor
    } : {},
    onClick: play,
    "aria-label": "upload picture",
    component: "span"
  }, /*#__PURE__*/React__default['default'].createElement(md.MdPlayCircleFilled, null))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "playing-animation"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "first",
    style: playing ? {} : {
      animation: 'none'
    }
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "middle",
    style: playing ? {} : {
      animation: 'none'
    }
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "first",
    style: playing ? {} : {
      animation: 'none'
    }
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "react-audio-fixed"
  }, /*#__PURE__*/React__default['default'].createElement(IconButton__default['default'], {
    color: "primary",
    style: props.primaryColor ? {
      color: props.primaryColor
    } : {},
    onClick: function onClick() {
      setsmall(!small);
    },
    "aria-label": "upload picture",
    component: "span"
  }, /*#__PURE__*/React__default['default'].createElement(md.MdCallReceived, null)))) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null));
};
ReactAudio.propTypes = {
  src: PropTypes__default['default'].string.isRequired,
  poster: PropTypes__default['default'].string,
  autoPlay: PropTypes__default['default'].bool,
  className: PropTypes__default['default'].string,
  onFoward: PropTypes__default['default'].func,
  onRewind: PropTypes__default['default'].func,
  onSeek: PropTypes__default['default'].func,
  onMute: PropTypes__default['default'].func,
  onTimeUpdate: PropTypes__default['default'].func,
  onPlay: PropTypes__default['default'].func,
  onPause: PropTypes__default['default'].func
};

var FacebookPlayer = function FacebookPlayer(props) {
  var div = React.useRef(null); // eslint-disable-next-line no-unused-vars

  var _useState = React.useState(''),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
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
  return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("div", {
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
  src: PropTypes__default['default'].string.isRequired,
  width: PropTypes__default['default'].number,
  allowFullScreen: PropTypes__default['default'].bool,
  autoPlay: PropTypes__default['default'].bool,
  lazy: PropTypes__default['default'].bool,
  showText: PropTypes__default['default'].bool,
  captions: PropTypes__default['default'].bool
};

var css$1 = ".img_section {\n  position: relative;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.img_section picture {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.img_section:hover .download_btn {\n  opacity: 1;\n}\n\n.blur_overlay {\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n}\n\n.download_btn {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: absolute;\n  opacity: 0;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  top: 3px;\n  right: 3px;\n  background-color: whitesmoke;\n  border-radius: 3px;\n}\n\n.download_btn .download_lnk {\n  color: #302f2f;\n  padding: 0.5px;\n}";
n(css$1,{});

var Image = function Image(props) {
  var img = React.useRef(null);
  return /*#__PURE__*/React__default['default'].createElement("section", {
    className: "img_section",
    style: {
      margin: 'auto'
    }
  }, /*#__PURE__*/React__default['default'].createElement("picture", null, /*#__PURE__*/React__default['default'].createElement("source", {
    media: props.media,
    sizes: props.sizes,
    type: props.type,
    srcSet: props.srcset
  }), /*#__PURE__*/React__default['default'].createElement("img", {
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
  })), /*#__PURE__*/React__default['default'].createElement(core.Tooltip, {
    title: "Download",
    "aria-label": "add"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "download_btn"
  }, props.download ? /*#__PURE__*/React__default['default'].createElement("a", {
    download: props.name ? props.name : 'my image',
    href: props.src,
    className: "download_lnk"
  }, /*#__PURE__*/React__default['default'].createElement(md.MdFileDownload, null)) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null))), img.current ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, img.current.complete ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null) : /*#__PURE__*/React__default['default'].createElement("div", {
    className: "blur_overlay"
  })) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null));
};
Image.propTypes = {
  src: PropTypes__default['default'].string,
  alt: PropTypes__default['default'].string,
  madia: PropTypes__default['default'].string,
  className: PropTypes__default['default'].string,
  type: PropTypes__default['default'].string,
  id: PropTypes__default['default'].string,
  crossOrigin: PropTypes__default['default'].string,
  decoding: PropTypes__default['default'].string,
  height: PropTypes__default['default'].number,
  srcset: PropTypes__default['default'].array,
  loading: PropTypes__default['default'].string,
  referrerPolicy: PropTypes__default['default'].string,
  hspace: PropTypes__default['default'].string,
  vspace: PropTypes__default['default'].string,
  longDesc: PropTypes__default['default'].string,
  align: PropTypes__default['default'].string,
  style: PropTypes__default['default'].object,
  useMap: PropTypes__default['default'].string
};

var css$2 = "/* \r\nCopyright Beingana Jim Junior, 2021 and all the contributors. License Cn be found in the LICENCE file\r\n*/\n.one___flkjsjJJNJnn_nANN8hG_YG7GY7g7BH9 {\n  width: 100%;\n  height: 500px;\n  color: #006eff;\n  background: black;\n  position: relative;\n}\n\n.one___flkjsjJJNJnn_nANN8hG_YG7GY7g7BH9:hover .video-react-lower-bar_dhhiahhbhhbhb3767d7637____u {\n  opacity: 1;\n}\n\n.progress-video-react {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 2px;\n  width: 100%;\n  margin-bottom: 5px;\n  cursor: pointer;\n  background-color: aliceblue;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n\n.progress-video-react .finnished {\n  background-color: #006eff;\n  height: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.progress-video-react .point {\n  width: 0px;\n  height: 0px;\n  margin-left: auto;\n  border-radius: 50%;\n  position: absolute;\n  right: -3px;\n  pointer-events: none;\n  border-radius: 50%;\n  background-color: #006eff;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n\n.progress-video-react .point:hover {\n  -webkit-transform: scale(1.5);\n          transform: scale(1.5);\n}\n\n.progress-video-react:focus {\n  background-color: yellow;\n}\n\n.progress-video-react:hover {\n  height: 5px;\n}\n\n.progress-video-react:hover .point {\n  width: 10px;\n  height: 10px;\n}\n\n.video-react-loading {\n  width: 40px;\n  height: 40px;\n  width: 50px;\n  top: 43.33%;\n  left: 43.33%;\n  position: absolute;\n}\n\n@-webkit-keyframes loading {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes loading {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.video-react-lower-bar_dhhiahhbhhbhb3767d7637____u {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  margin: 0rem;\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), color-stop(rgba(0, 0, 0, 0.404)), color-stop(rgba(0, 0, 0, 0.589)), to(rgba(0, 0, 0, 0.863)));\n  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.404), rgba(0, 0, 0, 0.589), rgba(0, 0, 0, 0.863));\n  -webkit-transition: all 0.5s ease-out;\n  transition: all 0.5s ease-out;\n  opacity: 0;\n}\n\n.one___flkjsjJJNJnn_nANN8hG_YG7GY7g7BH9 > video {\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n\n.video-react-controls > div {\n  width: 45%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n  padding-top: 5px;\n}\n\n.video-react-controls > div svg {\n  font-size: 1.5rem !important;\n  margin-top: auto !important;\n  width: 100% !important;\n  margin-bottom: auto !important;\n}\n\n.video-react-controls {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n}\n\n.time-stamps {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 0.7rem;\n  color: white;\n  text-shadow: black 1px 1px 1px;\n}\n\n.time-stamps .fullstime {\n  margin-left: auto;\n  padding-right: 5px;\n}\n\n.time-stamps .current {\n  padding-left: 5px;\n}\n\n.video-react-more {\n  position: relative;\n}\n\n.video-react-play,\n.video-react-pause,\n.video-react-volume,\n.video-react-fullscreen,\n.video-react-rewind,\n.video-react-forward,\n.video-react-more {\n  border: rgba(209, 208, 208, 0) 1px solid;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer;\n  color: white;\n}\n\n.video-react-play:hover,\n.video-react-pause:hover,\n.video-react-volume:hover,\n.video-react-fullscreen:hover,\n.video-react-rewind:hover,\n.video-react-forward:hover,\n.video-react-more:hover {\n  border-top: rgba(209, 208, 208, 0.267) 1px solid;\n  border-bottom: rgba(209, 208, 208, 0.267) 1px solid;\n  background-color: rgba(128, 128, 128, 0.089);\n  color: #006eff;\n}\n\nspan.icon {\n  padding: 5px;\n  font-size: 1rem;\n}\n\n.video-react-menu {\n  background-color: rgba(3, 3, 3, 0.781);\n  width: 150px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  bottom: 101%;\n  padding: 0.3rem 5px;\n  font-size: 0.8rem;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n  opacity: 0;\n  border-radius: 5px;\n  right: 0px;\n  position: absolute;\n  color: #ffffff;\n  z-index: 3;\n  -webkit-box-shadow: #00000052 1px 1px 15px, #00000052 -1px -1px 15px;\n          box-shadow: #00000052 1px 1px 15px, #00000052 -1px -1px 15px;\n}\n\n.list- {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #ffffff;\n  text-decoration: none;\n}\n\n.list- .text {\n  margin-left: 10px;\n}\n\n.list-:hover {\n  background: #8080806c;\n  color: white;\n}\n\n.list- span.icon > svg {\n  color: #006eff;\n  font-size: 1.5rem !important;\n  width: 20px !important;\n}\n\n.list-1 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.list-1 span {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.list-1 .icon {\n  color: #006eff;\n  border-radius: 5px;\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n\n.list-1 .icon:hover {\n  background-color: #8080806c;\n  color: white;\n}\n\n.video-react-volume {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.video-react-volume .finnished {\n  background-color: #006eff;\n  height: 100%;\n}\n\n.video-react-volume .volume-add {\n  opacity: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  color: white;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\n.video-react-volume .volume-div {\n  width: 0px;\n  height: 3px;\n  margin: auto;\n  background: white;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  border-radius: 5px;\n}\n\n.video-react-volume:hover .volume-add {\n  opacity: 1;\n}\n\n.video-react-volume:hover .volume-div {\n  width: 80px;\n}\n\n.video-react-error_12ede3ws3 {\n  background-color: red;\n  z-index: 10;\n  border-radius: 5px;\n  position: absolute;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  top: 10px;\n  opacity: 0;\n  margin: auto;\n  font-size: 0.9rem;\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-shadow: black 1px 1px 25px;\n          box-shadow: black 1px 1px 25px;\n  left: 10px;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  padding: 0.1rem;\n}\n\n.video-react-error_12ede3ws3 span {\n  margin: 5px;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.video-react-error_12ede3ws3 .cancel {\n  padding: 0.3rem;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.video-react-error_12ede3ws3 .cancel:hover {\n  background-color: rgba(255, 255, 255, 0.37);\n}\n\n.video-react-error_12ede3ws3 svg {\n  font-size: 1.5rem;\n}\n\n.menu-c {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.menu-contxt {\n  position: relative;\n  margin: 0px;\n}\n\n.video-rect-context {\n  background-color: rgba(0, 0, 0, 0.829);\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: absolute;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  color: white;\n  border-radius: 3px;\n  -webkit-box-shadow: #000000b4 1px 1px 15px, #000000b4 -1px -1px 15px;\n          box-shadow: #000000b4 1px 1px 15px, #000000b4 -1px -1px 15px;\n  padding: 0.5rem;\n}\n\n.video-rect-context ul {\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n}\n\n.video-rect-context ul li {\n  font-size: 0.9rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0.3rem;\n  cursor: pointer;\n  border-radius: 3px;\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n}\n\n.video-rect-context ul li:hover {\n  background-color: rgba(255, 255, 255, 0.199);\n}\n\n.video-rect-context ul li svg {\n  font-size: 1.5rem;\n  padding-right: 0.2rem;\n  color: #e6e4e4;\n}\n\n.poster {\n  position: absolute;\n  z-index: 15;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.poster > div {\n  position: relative;\n  background: black;\n  height: 100%;\n  width: 100%;\n}\n\n.poster > div img {\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n}\n\n.poster > div div {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 0.5rem 1rem;\n  position: absolute;\n  left: 45%;\n  top: 45%;\n  color: white;\n  background: #006eff;\n  border-radius: 25%;\n  cursor: pointer;\n  margin: auto;\n  z-index: 3;\n}\n\n.poster > div div svg {\n  font-size: 3rem;\n}\n\n.poster > div div:hover {\n  background: #2985fd;\n}";
n(css$2,{});

var ReactVideo = function ReactVideo(props) {
  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      playing = _useState2[0],
      setplaying = _useState2[1];

  var video = React.useRef(null);
  var div = React.useRef(null);
  var sect = React.useRef(null);
  var vdiv = React.useRef(null);

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray__default['default'](_useState3, 2),
      error = _useState4[0],
      seterror = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray__default['default'](_useState5, 2),
      y = _useState6[0],
      sety = _useState6[1];

  var _useState7 = React.useState(false),
      _useState8 = _slicedToArray__default['default'](_useState7, 2),
      x = _useState8[0],
      setx = _useState8[1];

  var _useState9 = React.useState(false),
      _useState10 = _slicedToArray__default['default'](_useState9, 1),
      climb = _useState10[0];

  var _useState11 = React.useState(false),
      _useState12 = _slicedToArray__default['default'](_useState11, 2),
      on = _useState12[0],
      seton = _useState12[1];

  var _useState13 = React.useState(true),
      _useState14 = _slicedToArray__default['default'](_useState13, 2),
      loaded = _useState14[0],
      setloaded = _useState14[1];

  var _useState15 = React.useState(false),
      _useState16 = _slicedToArray__default['default'](_useState15, 2),
      fulls = _useState16[0],
      setfulls = _useState16[1];

  var _useState17 = React.useState(false),
      _useState18 = _slicedToArray__default['default'](_useState17, 2),
      mute = _useState18[0],
      setmute = _useState18[1];

  var _useState19 = React.useState(false),
      _useState20 = _slicedToArray__default['default'](_useState19, 2),
      more = _useState20[0],
      setmore = _useState20[1];

  var _useState21 = React.useState('00:00'),
      _useState22 = _slicedToArray__default['default'](_useState21, 2),
      ct = _useState22[0],
      setcurrenttime = _useState22[1];

  React.useEffect(function () {}, [climb]);
  var TimeSlider = styles.withStyles({
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
  })(Slider__default['default']);

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
    _Mute = _asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee(e) {
      return _regeneratorRuntime__default['default'].wrap(function _callee$(_context) {
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

  return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("style", {
    jsx: "true"
  }, "\n                    .video-react-pause:hover,\n                    .video-react-play:hover,\n                    .video-react-volume:hover,\n                    .video-react-rewind:hover,\n                    .video-react-more:hover,\n                    .video-react-fullscreen:hover,\n                    .video-react-forward:hover {\n                        color: ".concat(props.primaryColor, ";\n                    }\n                    .finnished {\n                        background-color: ").concat(props.primaryColor, " !important;\n                    }\n                    .point {\n                        background-color: ").concat(props.primaryColor, " !important;\n                    }\n                ")), /*#__PURE__*/React__default['default'].createElement("section", {
    onContextMenu: function onContextMenu(e) {
      e.preventDefault();
      contextMenu(e);
    },
    onBlur: function onBlur() {
      handleClose();
    },
    className: "one___flkjsjJJNJnn_nANN8hG_YG7GY7g7BH9 ".concat(props.className),
    ref: sect
  }, /*#__PURE__*/React__default['default'].createElement("video", {
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
  }, /*#__PURE__*/React__default['default'].createElement("source", {
    src: props.src,
    type: props.type ? props.type : "video/mp4"
  })), video.current ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, video.current.seeking ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: "video-react-loading"
  }, /*#__PURE__*/React__default['default'].createElement(CircularProgress__default['default'], {
    style: {
      color: props.primaryColor
    }
  })) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null), " ") : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "video-react-lower-bar_dhhiahhbhhbhb3767d7637____u"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "hundred"
  }, /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    item: true,
    xs: true
  }, /*#__PURE__*/React__default['default'].createElement(TimeSlider, {
    style: props.primaryColor ? {
      color: props.primaryColor
    } : {},
    value: video.current ? video.current.currentTime / video.current.duration * 100 : 0,
    onChange: onSeek,
    "aria-labelledby": "continuous-slider"
  })))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "video-react-controls"
  }, playing ? /*#__PURE__*/React__default['default'].createElement(Tooltip__default['default'], {
    title: "Pause",
    "aria-label": "add",
    placement: "top"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "video-react-pause",
    onClick: pause
  }, /*#__PURE__*/React__default['default'].createElement(md.MdPause, null))) : /*#__PURE__*/React__default['default'].createElement(Tooltip__default['default'], {
    title: "Play",
    "aria-label": "add",
    placement: "top"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "video-react-play",
    onClick: play
  }, /*#__PURE__*/React__default['default'].createElement(md.MdPlayArrow, null))), /*#__PURE__*/React__default['default'].createElement(Tooltip__default['default'], {
    title: "Rewind",
    "aria-label": "add",
    placement: "top"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "video-react-rewind",
    onClick: rewind
  }, /*#__PURE__*/React__default['default'].createElement(md.MdFastRewind, null))), /*#__PURE__*/React__default['default'].createElement(Tooltip__default['default'], {
    title: "Forward",
    "aria-label": "add",
    placement: "top"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "video-react-forward",
    onClick: foward
  }, /*#__PURE__*/React__default['default'].createElement(md.MdFastForward, null))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "video-react-pro"
  }, /*#__PURE__*/React__default['default'].createElement(Typography__default['default'], {
    style: {
      color: 'grey'
    },
    variant: "caption",
    component: "span"
  }, ct)), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "video-react-pro"
  }, /*#__PURE__*/React__default['default'].createElement(Typography__default['default'], {
    style: {
      color: 'grey'
    },
    variant: "caption",
    component: "span"
  }, video.current ? calcTime(video.current.duration) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, "00:00"))), /*#__PURE__*/React__default['default'].createElement(Tooltip__default['default'], {
    title: "Volume",
    "aria-label": "add",
    placement: "top"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "video-react-volume"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "volume-add"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "volume-div",
    ref: vdiv,
    onClick: va
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "finnished",
    style: video.current ? {
      width: "".concat(video.current.volume / 1 * 100, "%")
    } : {
      width: 0
    }
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "point"
  }))), video.current ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, video.current.volume === 0 ? /*#__PURE__*/React__default['default'].createElement(md.MdVolumeOff, {
    onClick: Mute
  }) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, video.current.volume < 0.3 ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(md.MdVolumeMute, {
    onClick: Mute
  })) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, video.current.volume < 0.7 ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(md.MdVolumeDown, {
    onClick: Mute
  })) : /*#__PURE__*/React__default['default'].createElement(md.MdVolumeUp, {
    onClick: Mute
  })))) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(md.MdVolumeUp, null)))), /*#__PURE__*/React__default['default'].createElement(Tooltip__default['default'], {
    title: "Fullscreen",
    "aria-label": "add",
    placement: "top"
  }, fulls ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: "video-react-fullscreen",
    onClick: exitFullScreen
  }, /*#__PURE__*/React__default['default'].createElement(md.MdFullscreenExit, null)) : /*#__PURE__*/React__default['default'].createElement("div", {
    className: "video-react-fullscreen",
    onClick: enterFullScreen
  }, /*#__PURE__*/React__default['default'].createElement(md.MdFullscreen, null))), /*#__PURE__*/React__default['default'].createElement(Tooltip__default['default'], {
    arrow: true,
    title: "Settings",
    "aria-label": "add",
    placement: "left"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "video-react-more"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: more ? {
      transform: 'scale(1)',
      opacity: 1
    } : {},
    className: "video-react-menu"
  }, props.download ? /*#__PURE__*/React__default['default'].createElement("a", {
    download: "video",
    href: props.src,
    className: "list-",
    onClick: pp
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "icon"
  }, /*#__PURE__*/React__default['default'].createElement(md.MdFileDownload, null)), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "text"
  }, "Download")) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "list-",
    onClick: pp
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "icon"
  }, /*#__PURE__*/React__default['default'].createElement(md.MdPictureInPictureAlt, null)), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "text"
  }, "Picture In Picture")), /*#__PURE__*/React__default['default'].createElement(Tooltip__default['default'], {
    arrow: true,
    title: "Playback speed",
    "aria-label": "add",
    placement: "left"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "list-1"
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "icon",
    onClick: minusp,
    style: video.current ? video.current.playbackRate === 0 ? {
      cursor: 'not-allowed'
    } : {} : {}
  }, /*#__PURE__*/React__default['default'].createElement(md.MdRemove, null)), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "text"
  }, video.current ? video.current.playbackRate : 1), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "icon",
    onClick: addp
  }, /*#__PURE__*/React__default['default'].createElement(md.MdAdd, null))))), /*#__PURE__*/React__default['default'].createElement(md.MdSettings, {
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
  }))))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "video-react-error_12ede3ws3",
    style: error ? {
      opacity: 1
    } : {}
  }, /*#__PURE__*/React__default['default'].createElement("span", null, /*#__PURE__*/React__default['default'].createElement(md.MdErrorOutline, null)), " ", /*#__PURE__*/React__default['default'].createElement("span", null, /*#__PURE__*/React__default['default'].createElement("b", null, "Error:"), " Failed to load Video"), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "cancel",
    onClick: function onClick() {
      seterror(false);
    }
  }, /*#__PURE__*/React__default['default'].createElement(md.MdClose, null))), on ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: "menu-c",
    onClick: function onClick() {
      handleClose();
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "menu-contxt",
    onClick: function onClick() {
      handleClose();
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "video-rect-context",
    style: {
      top: y,
      left: x
    }
  }, /*#__PURE__*/React__default['default'].createElement("ul", {
    className: "context-list"
  }, playing ? /*#__PURE__*/React__default['default'].createElement("li", {
    className: "play",
    onClick: pause
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "i"
  }, /*#__PURE__*/React__default['default'].createElement(md.MdPause, null)), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "t"
  }, "Pause")) : /*#__PURE__*/React__default['default'].createElement("li", {
    className: "play",
    onClick: play
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "i"
  }, /*#__PURE__*/React__default['default'].createElement(md.MdPlayArrow, null)), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "t"
  }, "Play")), /*#__PURE__*/React__default['default'].createElement("li", {
    onClick: function onClick() {
      setClipboard(video.current ? video.current.currentSrc : '');
    }
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "i"
  }, /*#__PURE__*/React__default['default'].createElement(md.MdFlipToBack, null)), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "t"
  }, "Copy Video Url")), video.current ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, video.current.loop ? /*#__PURE__*/React__default['default'].createElement("li", {
    onClick: function onClick() {
      video.current.loop = false;
    }
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "i"
  }, /*#__PURE__*/React__default['default'].createElement(md.MdLoop, null)), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "t"
  }, "Stop Loop")) : /*#__PURE__*/React__default['default'].createElement("li", {
    onClick: function onClick() {
      video.current.loop = true;
    }
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "i"
  }, /*#__PURE__*/React__default['default'].createElement(md.MdLoop, null)), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "t"
  }, "Loop"))) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null))))) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null), playing === false && loaded === true ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: "poster"
  }, /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("img", {
    src: props.poster,
    alt: "video poster"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    style: props.primaryColor ? {
      background: props.primaryColor
    } : {},
    onClick: function onClick() {
      play();
      setloaded(false);
    }
  }, /*#__PURE__*/React__default['default'].createElement(md.MdPlayArrow, null)))) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null), props.childern));
};
ReactVideo.propTypes = {
  src: PropTypes__default['default'].string.isRequired,
  type: PropTypes__default['default'].string,
  poster: PropTypes__default['default'].string,
  primaryColor: PropTypes__default['default'].string,
  autoPlay: PropTypes__default['default'].bool,
  className: PropTypes__default['default'].string,
  onFoward: PropTypes__default['default'].func,
  onRewind: PropTypes__default['default'].func,
  onSeek: PropTypes__default['default'].func,
  onMute: PropTypes__default['default'].func,
  onRequestPictureInPicture: PropTypes__default['default'].func,
  onTimeUpdate: PropTypes__default['default'].func,
  onPlay: PropTypes__default['default'].func,
  onPause: PropTypes__default['default'].func,
  onEnterFullScreen: PropTypes__default['default'].func
};

var YoutubePlayer = function YoutubePlayer(props) {
  // eslint-disable-next-line no-unused-vars
  var _useState = React.useState(''),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      state = _useState2[0],
      setstate = _useState2[1];

  var _useState3 = React.useState(''),
      _useState4 = _slicedToArray__default['default'](_useState3, 2),
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

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: props.className
  }, /*#__PURE__*/React__default['default'].createElement("iframe", {
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
  src: PropTypes__default['default'].string.isRequired,
  title: PropTypes__default['default'].string,
  allowFullScreen: PropTypes__default['default'].bool,
  className: PropTypes__default['default'].string,
  height: PropTypes__default['default'].number,
  width: PropTypes__default['default'].number
};

/* eslint-disable import/no-anonymous-default-export */
var index = {
  ReactAudio: ReactAudio,
  ReactVideo: ReactVideo,
  Image: Image,
  YoutubePlayer: YoutubePlayer,
  FacebookPlayer: FacebookPlayer
};

module.exports = index;
//# sourceMappingURL=index.js.map
