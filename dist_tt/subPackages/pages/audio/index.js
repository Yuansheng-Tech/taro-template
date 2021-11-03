(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["subPackages/pages/audio/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/subPackages/pages/audio/index.tsx":
/*!*******************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/subPackages/pages/audio/index.tsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _audioPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audioPlayer */ "./src/subPackages/pages/audio/audioPlayer.tsx");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./src/subPackages/pages/audio/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);




var PaoMao = "http://cdn.hixiaoya.com/paomo.mp3";
var DzqImg = "http://cdn.hixiaoya.com/dzq.jpg";




var AudioPage = function AudioPage(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState2 = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var onPlay = function onPlay(e) {
    console.log('e', e);
    setCurrent(e.detail.current);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["Swiper"], {
    className: "discover-swiper",
    indicatorColor: "#999",
    indicatorActiveColor: "#333",
    vertical: true,
    circular: false,
    indicatorDots: false,
    autoplay: false,
    onChange: onPlay,
    children: [1, 2, 3, 4].map(function (v, k) {
      console.log('current', current, k);
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["SwiperItem"], {
        className: "discover-audio-main",
        children: [current === k && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_audioPlayer__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
          id: 'video' + k,
          className: "discover-audio",
          current: current,
          src: PaoMao,
          title: "泡沫",
          author: "FU",
          poster: "https://file.biji77.com/goods/%E9%85%B8%E5%A5%B6%E8%8A%92%E6%9E%9C%E7%87%95%E9%BA%A6%E7%9B%92%E5%AD%901.jpg",
          autoplay: true
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
          className: "discover-header",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
            className: "discover-loading-line"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
          className: "discover-actions",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
            className: "discover-action discover-user-icon",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
              className: "discover-action-icon",
              children: "\u6211"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
            className: "discover-action discover-like",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
              className: "discover-action-icon",
              children: "\u8D5E"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
              className: "discover-action-number",
              children: "868"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
            className: "discover-action discover-review",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
              className: "discover-action-icon",
              children: "\u8BC4"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
              className: "discover-action-number",
              children: "68"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
            className: "discover-action discover-forward",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
              className: "discover-action-icon",
              children: "\u8F6C"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
              className: "discover-action-number",
              children: "668"
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
          className: "discover-footer",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
            className: "discover-user-name",
            children: "@Foooying"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
            className: "discover-desc",
            children: "\u4E70\u519C\u4EA7\u54C1\uFF0C\u4E0A\u539F\u751F\u4F18\u54C1\u3002"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
            className: "discover-music"
          })]
        })]
      }, v);
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (AudioPage);

/***/ }),

/***/ "./src/subPackages/pages/audio/audioPlayer.tsx":
/*!*****************************************************!*\
  !*** ./src/subPackages/pages/audio/audioPlayer.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.scss */ "./src/subPackages/pages/audio/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ "./src/subPackages/pages/audio/utils.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);













var CDN = 'http://cdn2.ibt.tel/';
var playSrc = CDN + 'wordcamp/stu/icon/play_icon.png';
var pauseSrc = CDN + 'wordcamp/stu/icon/pause_icon.png';
/**
 ### Props
| 参数 | 说明 | 类型 | 默认值 | 是否必须 |
|------|------|------|------|------|
| src | 音频资源的地址  | `string` | 无 | 是 |
| draggable | 是否可以拖动进度条 | `boolean` | true | 否 |
| title | 音频名称 | `string` | 无 | 否 |
| author | 音频作者 | `string` | 无 | 否 |
| autoplay | 是否自动播放 | `boolean` | `false`| 否 |
| poster | 音频海报 | `string` | 无 | 否 |
| onPlay | 当开始/继续播放时触发play事件 | `eventHandle` | 无 | 否 
| onPause | 当暂停播放时触发 pause 事件 | `eventHandle` | 无 | 否
| onEnded | 当播放到末尾时触发 ended 事件 | `eventHandle` | 无 | 否
| onTimeUpdate | 当播放进度改变时触发 timeupdate 事件，detail = {currentTime, duration} | `eventHandle` | 无 | 否
| onError | 当发生错误时触发 error 事件，detail = {errMsg:MediaError.code} | `eventHandle` | 无 | 否
 */

//自动播放时，图标应该正确响应
var AudioPlayer = /*#__PURE__*/function (_Component) {
  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AudioPlayer, _Component);

  var _super = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AudioPlayer);

  function AudioPlayer(props) {
    var _this;

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AudioPlayer);

    _this = _super.call(this, props);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "innerAudioContext", _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.createInnerAudioContext());

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "state", {
      currentTime: 0,
      //当前播放时间，单位s
      iconSrc: playSrc,
      duration: 0,
      // 默认播放总时长，单位s
      showTime1: '00:00',
      showTime2: '00:00'
    });

    _this.sliderChange = _this.sliderChange.bind(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this));
    _this.changeIconSrc = _this.changeIconSrc.bind(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this));
    return _this;
  }

  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AudioPlayer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$autoplay = _this$props.autoplay,
          autoplay = _this$props$autoplay === void 0 ? false : _this$props$autoplay,
          _this$props$src = _this$props.src,
          src = _this$props$src === void 0 ? '' : _this$props$src;
      console.log('this.props', autoplay);
      this.innerAudioContext.autoplay = autoplay;
      this.innerAudioContext.src = src;

      if (autoplay) {
        this.setState({
          iconSrc: pauseSrc
        });
      } else {
        this.setState({
          iconSrc: playSrc
        });
      }

      var min;
      var sec;
      var duration;
      this.innerAudioContext.onCanplay(function () {
        //延时获取音频真正的duration
        duration = _this2.innerAudioContext.duration; //单位秒

        min = Object(_utils__WEBPACK_IMPORTED_MODULE_10__[/* getMinute */ "a"])(duration);
        sec = Object(_utils__WEBPACK_IMPORTED_MODULE_10__[/* getSecond */ "b"])(duration);

        _this2.setState({
          duration: duration,
          showTime2: "".concat(min, ":").concat(sec)
        }); //刷新时间


        var interval = setInterval(function () {
          duration = _this2.innerAudioContext.duration; //单位秒

          if (duration) {
            min = Object(_utils__WEBPACK_IMPORTED_MODULE_10__[/* getMinute */ "a"])(duration);
            sec = Object(_utils__WEBPACK_IMPORTED_MODULE_10__[/* getSecond */ "b"])(duration);

            _this2.setState({
              duration: duration,
              showTime2: "".concat(min, ":").concat(sec)
            });

            clearInterval(interval);
          }
        }, 150);
      });
      this.innerAudioContext.onTimeUpdate(function () {
        var currentTime = _this2.innerAudioContext.currentTime;
        var duration = _this2.innerAudioContext.duration;
        min = Object(_utils__WEBPACK_IMPORTED_MODULE_10__[/* getMinute */ "a"])(currentTime);
        sec = Object(_utils__WEBPACK_IMPORTED_MODULE_10__[/* getSecond */ "b"])(currentTime);

        _this2.setState({
          showTime1: "".concat(min, ":").concat(sec),
          currentTime: currentTime
        });

        _this2.props.onTimeUpdate && _this2.props.onTimeUpdate({
          currentTime: currentTime,
          duration: duration
        });
      });
      this.innerAudioContext.onPlay(function () {
        console.log('current', _this2.props.current);
        duration = _this2.innerAudioContext.duration; //单位秒

        min = Object(_utils__WEBPACK_IMPORTED_MODULE_10__[/* getMinute */ "a"])(duration);
        sec = Object(_utils__WEBPACK_IMPORTED_MODULE_10__[/* getSecond */ "b"])(duration);

        _this2.setState({
          duration: duration,
          showTime2: "".concat(min, ":").concat(sec)
        });

        _this2.props.onPlay && _this2.props.onPlay();
      });
      this.innerAudioContext.onPause(function () {
        //有时，手机息屏之后会暂停播放音频  修改图标啊
        _this2.setState({
          iconSrc: playSrc
        });

        _this2.props.onPause && _this2.props.onPause();
      });
      this.innerAudioContext.onError(function (res) {
        console.log(res.errMsg);
        console.log(res.errCode);
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showModal({
          title: '出错了',
          content: res.errMsg
        });
        _this2.props.onError && _this2.props.onError(res);
      });
      this.innerAudioContext.onEnded(function () {
        _this2.setState({
          iconSrc: playSrc
        });

        _this2.props.onEnded && _this2.props.onEnded();
      });
      this.innerAudioContext.onStop(function () {
        //修改图标啊
        _this2.setState({
          iconSrc: playSrc
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.innerAudioContext) {
        this.innerAudioContext.destroy();
      }
    } //播放暂停

  }, {
    key: "changeIconSrc",
    value: function changeIconSrc() {
      var iconSrc = this.state.iconSrc;

      if (iconSrc === playSrc) {
        iconSrc = pauseSrc;
        this.innerAudioContext.play();
      } else {
        iconSrc = playSrc;
        this.innerAudioContext.pause();
      }

      this.setState({
        iconSrc: iconSrc
      });
    } //改变进度条

  }, {
    key: "sliderChange",
    value: function sliderChange(event) {
      var min = Object(_utils__WEBPACK_IMPORTED_MODULE_10__[/* getMinute */ "a"])(event.detail.value);
      var sec = Object(_utils__WEBPACK_IMPORTED_MODULE_10__[/* getSecond */ "b"])(event.detail.value);
      this.setState({
        currentTime: event.detail.value,
        showTime1: "".concat(min, ":").concat(sec)
      });
      this.innerAudioContext.seek(event.detail.value);

      if (this.innerAudioContext.paused) {} else {
        this.innerAudioContext.play();
      }
    } // 正在拖动的过程中

  }, {
    key: "sliderChangeIng",
    value: function sliderChangeIng() {}
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          currentTime = _this$state.currentTime,
          showTime2 = _this$state.showTime2,
          showTime1 = _this$state.showTime1,
          duration = _this$state.duration,
          iconSrc = _this$state.iconSrc;
      var _this$props2 = this.props,
          poster = _this$props2.poster,
          title = _this$props2.title,
          author = _this$props2.author,
          draggable = _this$props2.draggable,
          className = _this$props2.className;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__["View"], {
        className: 'co-audio-wrap ' + className,
        children: [poster && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__["View"], {
          className: "poster-wrap",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__["Image"], {
            src: poster,
            className: "poster",
            mode: "widthFix"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__["View"], {
          className: "text-wrap",
          children: [title && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__["View"], {
            className: "audio-draggable",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__["Text"], {
              children: title
            })
          }), author && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__["View"], {
            className: "audio-author",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__["Text"], {
              children: author
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__["View"], {
          className: "player",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__["Image"], {
            src: iconSrc,
            onClick: this.changeIconSrc
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__["View"], {
            className: "slider",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__["Slider"], {
              onChange: this.sliderChange,
              min: 0,
              step: 1,
              max: duration,
              "block-size": 12,
              value: currentTime,
              onChanging: this.sliderChangeIng,
              disabled: !draggable
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__["View"], {
            className: "time",
            children: [showTime1, "/", showTime2]
          })]
        })]
      });
    }
  }]);

  return AudioPlayer;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AudioPlayer, "defaultProps", {
  autoplay: false,
  draggable: true
});

/* harmony default export */ __webpack_exports__["a"] = (AudioPlayer);

/***/ }),

/***/ "./src/subPackages/pages/audio/index.scss":
/*!************************************************!*\
  !*** ./src/subPackages/pages/audio/index.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/subPackages/pages/audio/index.tsx":
/*!***********************************************!*\
  !*** ./src/subPackages/pages/audio/index.tsx ***!
  \***********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/babel-loader/lib!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./src/subPackages/pages/audio/index.tsx");


var config = {"navigationStyle":"custom","enableShareAppMessage":true,"enableShareTimeline":true,"navigationBarTitleText":"Discover sound"};
_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareTimeline = true
_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareAppMessage = true
var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'subPackages/pages/audio/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/subPackages/pages/audio/utils.ts":
/*!**********************************************!*\
  !*** ./src/subPackages/pages/audio/utils.ts ***!
  \**********************************************/
/*! exports provided: getMinute, getSecond */
/*! exports used: getMinute, getSecond */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getMinute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSecond; });
function getMinute(time) {
  var _min = Math.floor(time / 60);

  var min;

  if (_min < 10) {
    min = "0".concat(_min);
  } else {
    min = "" + _min;
  }

  return min;
}

function getSecond(time) {
  var _sec = Math.floor(time % 60);

  var sec;

  if (_sec < 10) {
    sec = "0".concat(_sec);
  } else {
    sec = "" + _sec;
  }

  return sec;
}



/***/ })

},[["./src/subPackages/pages/audio/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map