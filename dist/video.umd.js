(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@babel/runtime/regenerator'), require('@babel/runtime/helpers/asyncToGenerator'), require('@babel/runtime/helpers/slicedToArray'), require('react'), require('react-icons/md'), require('react-icons/ai'), require('prop-types')) :
  typeof define === 'function' && define.amd ? define(['exports', '@babel/runtime/regenerator', '@babel/runtime/helpers/asyncToGenerator', '@babel/runtime/helpers/slicedToArray', 'react', 'react-icons/md', 'react-icons/ai', 'prop-types'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.reactjsvideo = {}, global._regeneratorRuntime, global._asyncToGenerator, global._slicedToArray, global.React, global.md, global.ai, global.PropTypes));
}(this, (function (exports, _regeneratorRuntime, _asyncToGenerator, _slicedToArray, React, md, ai, PropTypes) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);
  var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
  var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

  var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

  var css = ".one {\n  width: 100%;\n  height: 100%;\n  color: blue;\n  background: black;\n  position: relative;\n}\n\n.one:hover .video-react-lower-bar {\n  opacity: 1;\n}\n\n.progress-video-react {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 2px;\n  width: 100%;\n  margin-bottom: 5px;\n  cursor: pointer;\n  background-color: aliceblue;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n\n.progress-video-react .finnished {\n  background-color: #006eff;\n  height: 100%;\n}\n\n.progress-video-react .point {\n  width: 0px;\n  height: 0px;\n  border-radius: 50%;\n  background-color: aqua;\n}\n\n.progress-video-react .point:hover {\n  background-color: #006eff;\n}\n\n.progress-video-react:focus {\n  background-color: yellow;\n}\n\n.progress-video-react:hover {\n  height: 5px;\n}\n\n.progress-video-react:hover .point {\n  width: 1px;\n  height: 10px;\n}\n\n.video-react-loading {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: rgba(255, 255, 255, 0.089);\n  border: white 2px solid;\n  border-top: blue 2px solid;\n  width: 50px;\n  top: 33.33%;\n  left: 43.33%;\n  -webkit-animation: loading 1s infinite;\n          animation: loading 1s infinite;\n  position: absolute;\n  /* margin: auto;\r\n\tmargin-top: auto;\r\n\tmargin-bottom: auto; */\n}\n\n@-webkit-keyframes loading {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes loading {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.video-react-lower-bar {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  margin: 0.5rem 0.3rem;\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), color-stop(rgba(0, 0, 0, 0.404)), color-stop(rgba(0, 0, 0, 0.589)), to(rgba(0, 0, 0, 0.863)));\n  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.404), rgba(0, 0, 0, 0.589), rgba(0, 0, 0, 0.863));\n  -webkit-transition: all 0.5s ease-out;\n  transition: all 0.5s ease-out;\n  opacity: 0;\n}\n\n.one > video {\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n\n.video-react-controls > div {\n  width: 45%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n  padding-top: 5px;\n}\n\n.video-react-controls > div svg {\n  margin-top: auto !important;\n  width: 100% !important;\n  height: -webkit-fit-content !important;\n  height: -moz-fit-content !important;\n  height: fit-content !important;\n  margin-bottom: auto !important;\n}\n\n.video-react-controls {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n}\n\n.time-stamps {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 0.7rem;\n  color: white;\n  text-shadow: black 1px 1px 1px;\n}\n\n.time-stamps .fullstime {\n  margin-left: auto;\n  padding-right: 5px;\n}\n\n.time-stamps .current {\n  padding-left: 5px;\n}\n\n.video-react-more {\n  position: relative;\n}\n\n.video-react-play,\n.video-react-pause,\n.video-react-volume,\n.video-react-fullscreen,\n.video-react-rewind,\n.video-react-forward,\n.video-react-more {\n  border: rgba(209, 208, 208, 0) 1px solid;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer;\n  color: white;\n}\n\n.video-react-play:hover,\n.video-react-pause:hover,\n.video-react-volume:hover,\n.video-react-fullscreen:hover,\n.video-react-rewind:hover,\n.video-react-forward:hover,\n.video-react-more:hover {\n  border-top: rgba(209, 208, 208, 0.267) 1px solid;\n  border-bottom: rgba(209, 208, 208, 0.267) 1px solid;\n  background-color: rgba(128, 128, 128, 0.089);\n  color: aqua;\n}\n\nspan.icon {\n  padding: 5px;\n  width: 30px;\n}\n\n.video-react-menu {\n  background-color: white;\n  width: 200px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  bottom: 101%;\n  padding: 0.3rem 5px;\n  font-size: 1rem;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n  opacity: 0;\n  border-radius: 5px;\n  right: 0px;\n  position: absolute;\n  color: black;\n}\n\n.list- {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.list-:hover {\n  background: whitesmoke;\n}\n\n.video-react-volume {\n  position: relative;\n}\n\n.video-react-volume .finnished {\n  background-color: aqua;\n  height: 100%;\n}\n\n.video-react-volume .volume-add {\n  position: absolute;\n  top: -2px;\n  opacity: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  color: white;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\n.video-react-volume .volume-div {\n  width: 80px;\n  height: 2px;\n  background: white;\n  border-radius: 5px;\n}\n\n.video-react-volume:hover .volume-add {\n  opacity: 1;\n}";
  n(css,{});

  var ReactVideo = function ReactVideo(props) {
    var _useState = React.useState(false),
        _useState2 = _slicedToArray__default['default'](_useState, 2),
        playing = _useState2[0],
        setplaying = _useState2[1];

    var video = React.useRef(null);
    var div = React.useRef(null);
    var vdiv = React.useRef(null);

    var _useState3 = React.useState('00:00'),
        _useState4 = _slicedToArray__default['default'](_useState3, 2),
        total = _useState4[0],
        settotlat = _useState4[1];

    var _useState5 = React.useState(0),
        _useState6 = _slicedToArray__default['default'](_useState5, 2),
        state = _useState6[0],
        setstate = _useState6[1];

    var _useState7 = React.useState(0),
        _useState8 = _slicedToArray__default['default'](_useState7, 2),
        width = _useState8[0],
        setwidth = _useState8[1];

    var _useState9 = React.useState(0),
        _useState10 = _slicedToArray__default['default'](_useState9, 2),
        vwidth = _useState10[0],
        setvwidth = _useState10[1];

    var _useState11 = React.useState(false),
        _useState12 = _slicedToArray__default['default'](_useState11, 2),
        mute = _useState12[0],
        setmute = _useState12[1];

    var _useState13 = React.useState(false),
        _useState14 = _slicedToArray__default['default'](_useState13, 2),
        more = _useState14[0],
        setmore = _useState14[1];

    var _useState15 = React.useState('00:00'),
        _useState16 = _slicedToArray__default['default'](_useState15, 2),
        ct = _useState16[0],
        setcurrenttime = _useState16[1];

    React.useEffect(function () {
      function work() {
        return _work.apply(this, arguments);
      }

      function _work() {
        _work = _asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee() {
          var _yield$video$current, duration;

          return _regeneratorRuntime__default['default'].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return video.current;

                case 2:
                  _yield$video$current = _context.sent;
                  duration = _yield$video$current.duration;

                  if (isNaN(duration)) {
                    setTimeout(function () {
                      setstate('');
                    }, 5000);
                    setTimeout(function () {
                      setstate('');
                    }, 5000);
                  }

                  settotlat(calcTime(duration));

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return _work.apply(this, arguments);
      }

      work();
    }, [state]);

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

    function TimeUpdate(e) {
      var currentTime = video.current.currentTime;
      setcurrenttime(calcTime(currentTime));
    }

    function Mute(_x) {
      return _Mute.apply(this, arguments);
    }

    function _Mute() {
      _Mute = _asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee2(e) {
        return _regeneratorRuntime__default['default'].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
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
                return _context2.stop();
            }
          }
        }, _callee2);
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

      if (h < 0) {
        h = "";
      } else if (h < 10) {
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

      if (total === '00:00') {
        setstate('');
      }

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
      video.current.requestFullscreen();

      if (props.onEnterFullScreen) {
        props.onEnterFullScreen(e);
      }
    };

    return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("section", {
      className: "one"
    }, /*#__PURE__*/React__default['default'].createElement("video", {
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
    }, /*#__PURE__*/React__default['default'].createElement("source", {
      src: props.src,
      type: "video/mp4"
    })), video.current ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, video.current.seeking ? /*#__PURE__*/React__default['default'].createElement("div", {
      className: "video-react-loading"
    }) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null)) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "video-react-lower-bar"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "hundred"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "progress-video-react",
      ref: div,
      onClick: onSeek
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "finnished",
      style: {
        width: "".concat(width, "%")
      }
    }), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "point"
    }))), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "time-stamps"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "current"
    }, ct), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "fullstime"
    }, total)), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "video-react-controls"
    }, playing ? /*#__PURE__*/React__default['default'].createElement("div", {
      className: "video-react-pause",
      onClick: pause
    }, /*#__PURE__*/React__default['default'].createElement(md.MdPause, null)) : /*#__PURE__*/React__default['default'].createElement("div", {
      className: "video-react-play",
      onClick: play
    }, /*#__PURE__*/React__default['default'].createElement(md.MdPlayArrow, null)), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "video-react-rewind",
      onClick: rewind
    }, /*#__PURE__*/React__default['default'].createElement(md.MdFastRewind, null)), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "video-react-forward",
      onClick: foward
    }, /*#__PURE__*/React__default['default'].createElement(md.MdFastForward, null)), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "video-react-pro"
    }), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "video-react-pro"
    }), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "video-react-volume"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "volume-add"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "volume-div",
      ref: vdiv,
      onClick: va
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "finnished",
      style: {
        width: "".concat(vwidth, "%")
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
    })))) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null)), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "video-react-fullscreen",
      onClick: enterFullScreen
    }, /*#__PURE__*/React__default['default'].createElement(ai.AiOutlineFullscreen, null)), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "video-react-more"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      style: more ? {
        transform: 'scale(1)',
        opacity: 1
      } : {},
      className: "video-react-menu"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "list-",
      onClick: pp
    }, /*#__PURE__*/React__default['default'].createElement("span", {
      className: "icon"
    }, /*#__PURE__*/React__default['default'].createElement(md.MdBrandingWatermark, null)), /*#__PURE__*/React__default['default'].createElement("span", {
      className: "text"
    }, "Picture In Picture")), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "list-"
    }, /*#__PURE__*/React__default['default'].createElement("span", {
      className: "icon"
    }, "16X"), /*#__PURE__*/React__default['default'].createElement("span", {
      className: "text"
    }, "Playback Speed")), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "list-"
    }, /*#__PURE__*/React__default['default'].createElement("span", {
      className: "icon"
    }), /*#__PURE__*/React__default['default'].createElement("span", {
      className: "text"
    }))), /*#__PURE__*/React__default['default'].createElement(ai.AiOutlineEllipsis, {
      onClick: mm
    }))))));
  };
  ReactVideo.propTypes = {
    src: PropTypes__default['default'].string.isRequired,
    poster: PropTypes__default['default'].string,
    autoPlay: PropTypes__default['default'].bool,
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

  exports.ReactVideo = ReactVideo;

  Object.defineProperty(exports, '__esModule', { value: true });

})));