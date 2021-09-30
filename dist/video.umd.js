(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@babel/runtime/regenerator'), require('@babel/runtime/helpers/asyncToGenerator'), require('@babel/runtime/helpers/slicedToArray'), require('react'), require('react-icons/md'), require('prop-types'), require('@material-ui/core/Tooltip')) :
  typeof define === 'function' && define.amd ? define(['exports', '@babel/runtime/regenerator', '@babel/runtime/helpers/asyncToGenerator', '@babel/runtime/helpers/slicedToArray', 'react', 'react-icons/md', 'prop-types', '@material-ui/core/Tooltip'], factory) :
  (global = global || self, factory(global.ReactVideo = {}, global._regeneratorRuntime, global._asyncToGenerator, global._slicedToArray, global.React, global.md, global.PropTypes, global.Tooltip));
}(this, (function (exports, _regeneratorRuntime, _asyncToGenerator, _slicedToArray, React, md, PropTypes, Tooltip) { 'use strict';

  _regeneratorRuntime = _regeneratorRuntime && Object.prototype.hasOwnProperty.call(_regeneratorRuntime, 'default') ? _regeneratorRuntime['default'] : _regeneratorRuntime;
  _asyncToGenerator = _asyncToGenerator && Object.prototype.hasOwnProperty.call(_asyncToGenerator, 'default') ? _asyncToGenerator['default'] : _asyncToGenerator;
  _slicedToArray = _slicedToArray && Object.prototype.hasOwnProperty.call(_slicedToArray, 'default') ? _slicedToArray['default'] : _slicedToArray;
  var React__default = 'default' in React ? React['default'] : React;
  PropTypes = PropTypes && Object.prototype.hasOwnProperty.call(PropTypes, 'default') ? PropTypes['default'] : PropTypes;
  Tooltip = Tooltip && Object.prototype.hasOwnProperty.call(Tooltip, 'default') ? Tooltip['default'] : Tooltip;

  var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

  var css = "/* \r\nCopyright Beingana Jim Junior, 2021 and all the contributors. License Cn be found in the LICENCE file\r\n*/\n.one___flkjsjJJNJnn_nANN8hG_YG7GY7g7BH9 {\n  width: 100%;\n  height: 500px;\n  color: #006eff;\n  background: black;\n  position: relative;\n}\n\n.one___flkjsjJJNJnn_nANN8hG_YG7GY7g7BH9:hover .video-react-lower-bar_dhhiahhbhhbhb3767d7637____u {\n  opacity: 1;\n}\n\n.progress-video-react {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 2px;\n  width: 100%;\n  margin-bottom: 5px;\n  cursor: pointer;\n  background-color: rgba(255, 255, 255, 0.664);\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n\n.progress-video-react .finnished {\n  background-color: #006eff;\n  height: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.progress-video-react .point {\n  width: 0px;\n  height: 0px;\n  margin-left: auto;\n  border-radius: 50%;\n  position: absolute;\n  right: -3px;\n  pointer-events: none;\n  background-color: #006eff;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n\n.progress-video-react .point:hover {\n  -webkit-transform: scale(1.5);\n          transform: scale(1.5);\n}\n\n.progress-video-react:focus {\n  background-color: yellow;\n}\n\n.progress-video-react:hover {\n  height: 5px;\n}\n\n.progress-video-react:hover .point {\n  width: 10px;\n  height: 10px;\n}\n\n.video-react-loading {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: rgba(255, 255, 255, 0.089);\n  border: white 2px solid;\n  border-top: blue 2px solid;\n  top: 33.33%;\n  left: 43.33%;\n  -webkit-animation: loading 1s infinite;\n          animation: loading 1s infinite;\n  position: absolute;\n  /* margin: auto;\r\n\tmargin-top: auto;\r\n\tmargin-bottom: auto; */\n}\n\n@-webkit-keyframes loading {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes loading {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.video-react-lower-bar_dhhiahhbhhbhb3767d7637____u {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  margin: 0rem 0.3rem;\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), color-stop(rgba(0, 0, 0, 0.404)), color-stop(rgba(0, 0, 0, 0.589)), to(rgba(0, 0, 0, 0.863)));\n  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.404), rgba(0, 0, 0, 0.589), rgba(0, 0, 0, 0.863));\n  -webkit-transition: all 0.5s ease-out;\n  transition: all 0.5s ease-out;\n  opacity: 0;\n}\n\n.one___flkjsjJJNJnn_nANN8hG_YG7GY7g7BH9 > video {\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n\n.video-react-controls > div {\n  width: 45%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n  padding-top: 5px;\n}\n\n.video-react-controls > div svg {\n  font-size: 1.5rem !important;\n  margin-top: auto !important;\n  width: 100% !important;\n  margin-bottom: auto !important;\n}\n\n.video-react-controls {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n}\n\n.time-stamps {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 0.7rem;\n  color: white;\n  text-shadow: black 1px 1px 1px;\n}\n\n.time-stamps .fullstime {\n  margin-left: auto;\n  padding-right: 5px;\n}\n\n.time-stamps .current {\n  padding-left: 5px;\n}\n\n.video-react-more {\n  position: relative;\n}\n\n.video-react-play,\n.video-react-pause,\n.video-react-volume,\n.video-react-fullscreen,\n.video-react-rewind,\n.video-react-forward,\n.video-react-more {\n  border: rgba(209, 208, 208, 0) 1px solid;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer;\n  color: white;\n}\n\n.video-react-play:hover,\n.video-react-pause:hover,\n.video-react-volume:hover,\n.video-react-fullscreen:hover,\n.video-react-rewind:hover,\n.video-react-forward:hover,\n.video-react-more:hover {\n  border-top: rgba(209, 208, 208, 0.267) 1px solid;\n  border-bottom: rgba(209, 208, 208, 0.267) 1px solid;\n  background-color: rgba(128, 128, 128, 0.089);\n  color: #006eff;\n}\n\nspan.icon {\n  padding: 5px;\n  font-size: 1rem;\n}\n\n.video-react-menu {\n  background-color: rgba(7, 7, 7, 0.671);\n  width: 150px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  bottom: 101%;\n  padding: 0.3rem 5px;\n  font-size: 0.8rem;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n  opacity: 0;\n  border-radius: 5px;\n  right: 0px;\n  position: absolute;\n  color: #b4b3b3;\n  z-index: 3;\n  -webkit-box-shadow: #00000052 1px 1px 15px, #00000052 -1px -1px 15px;\n          box-shadow: #00000052 1px 1px 15px, #00000052 -1px -1px 15px;\n}\n\n.list- {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #b4b3b3;\n  text-decoration: none;\n}\n\n.list- .text {\n  margin-left: 10px;\n}\n\n.list-:hover {\n  background: rgba(128, 128, 128, 0.486);\n  color: white;\n}\n\n.list- span.icon > svg {\n  color: #006eff;\n  font-size: 1.5rem !important;\n  width: 20px !important;\n}\n\n.list-1 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.list-1 span {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.list-1 .icon {\n  color: #006eff;\n  border-radius: 5px;\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n\n.list-1 .icon:hover {\n  background-color: gray;\n  color: white;\n}\n\n.video-react-volume {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.video-react-volume .finnished {\n  background-color: #006eff;\n  height: 100%;\n}\n\n.video-react-volume .volume-add {\n  opacity: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  color: white;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\n.video-react-volume .volume-div {\n  width: 0px;\n  height: 3px;\n  margin: auto;\n  background: white;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  border-radius: 5px;\n}\n\n.video-react-volume:hover .volume-add {\n  opacity: 1;\n}\n\n.video-react-volume:hover .volume-div {\n  width: 80px;\n}\n\n.video-react-error_12ede3ws3 {\n  background-color: red;\n  z-index: 10;\n  border-radius: 5px;\n  position: absolute;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  top: 10px;\n  opacity: 0;\n  margin: auto;\n  font-size: 0.9rem;\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-shadow: black 1px 1px 25px;\n          box-shadow: black 1px 1px 25px;\n  left: 10px;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  padding: 0.1rem;\n}\n\n.video-react-error_12ede3ws3 span {\n  margin: 5px;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.video-react-error_12ede3ws3 .cancel {\n  padding: 0.3rem;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.video-react-error_12ede3ws3 .cancel:hover {\n  background-color: rgba(255, 255, 255, 0.37);\n}\n\n.video-react-error_12ede3ws3 svg {\n  font-size: 1.5rem;\n}\n\n.menu-c {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.menu-contxt {\n  position: relative;\n  margin: 0px;\n}\n\n.video-rect-context {\n  background-color: rgba(0, 0, 0, 0.829);\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: absolute;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  color: white;\n  border-radius: 3px;\n  -webkit-box-shadow: #000000b4 1px 1px 15px, #000000b4 -1px -1px 15px;\n          box-shadow: #000000b4 1px 1px 15px, #000000b4 -1px -1px 15px;\n  padding: 0.5rem;\n}\n\n.video-rect-context ul {\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n}\n\n.video-rect-context ul li {\n  font-size: 0.9rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0.3rem;\n  cursor: pointer;\n  border-radius: 3px;\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n}\n\n.video-rect-context ul li:hover {\n  background-color: rgba(255, 255, 255, 0.199);\n}\n\n.video-rect-context ul li svg {\n  font-size: 1.5rem;\n  padding-right: 0.2rem;\n  color: #e6e4e4;\n}\n\n.poster {\n  position: absolute;\n  z-index: 15;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.poster > div {\n  position: relative;\n  background: black;\n  height: 100%;\n  width: 100%;\n}\n\n.poster > div img {\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n}\n\n.poster > div div {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 1rem 2rem;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  color: white;\n  background: #006eff;\n  border-radius: 25%;\n  cursor: pointer;\n  margin: auto;\n  z-index: 3;\n}\n\n.poster > div div svg {\n  font-size: 3rem;\n}\n\n.poster > div div:hover {\n  background: #2985fd;\n}\n\n.tooltip {\n  position: relative;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: .5rem;\n  background-color: #555;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 5px;\n  position: absolute;\n  z-index: 1;\n  pointer-events: none;\n  bottom: 230%;\n  opacity: 0;\n  -webkit-transition: opacity 1s;\n  transition: opacity 1s;\n}\n\n.tooltip .tooltiptext::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: #555 transparent transparent transparent;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n  opacity: 1;\n}";
  n(css,{});

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

  exports.ReactVideo = ReactVideo;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=video.umd.js.map
