(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["subPackages/pages/video/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/subPackages/pages/video/index.tsx":
/*!*******************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/subPackages/pages/video/index.tsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./src/subPackages/pages/video/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








var VideoPage = function VideoPage(props) {
  var videoContext = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.createVideoContext('video0');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      paused = _useState2[0],
      setPaused = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    currentTime: 0,
    duration: 0
  }),
      _useState4 = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
      percent = _useState4[0],
      setPercent = _useState4[1];

  var onPlay = function onPlay(e) {
    videoContext = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.createVideoContext('video' + e.detail.current);
    videoContext.play();
    setPaused(false);

    if (e.detail.current > 0) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.createVideoContext('video' + (e.detail.current - 1)).pause();
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.createVideoContext('video' + (e.detail.current + 1)).pause();
    }
  };

  var onPause = function onPause(e) {
    if (paused) {
      videoContext.play();
      setPaused(false);
    } else {
      videoContext.pause();
      setPaused(true);
    }
  };

  var onTimeUpdate = function onTimeUpdate(e) {
    setPercent(e.detail);
  };

  var onProgress = function onProgress(e) {
    var x = e.detail.x;

    var _Taro$getSystemInfoSy = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getSystemInfoSync(),
        screenWidth = _Taro$getSystemInfoSy.screenWidth;

    videoContext.seek(percent.duration * (x / screenWidth));
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
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["SwiperItem"], {
        className: "discover-video-main",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["Video"], {
          id: 'video' + k,
          className: "discover-video",
          src: "https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
          poster: "https://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg",
          initialTime: 0,
          controls: false,
          autoplay: k === 0 ? true : false,
          loop: false,
          muted: false,
          onClick: onPause,
          autoPauseIfNavigate: true,
          autoPauseIfOpenNative: true,
          onTimeUpdate: onTimeUpdate
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
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
            className: "discover-play-line",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
              className: "discover-play-progress",
              percent: Number(percent.currentTime / percent.duration) * 100,
              strokeWidth: 0.5,
              color: "#09BB07",
              activeColor: "#09BB07",
              onClick: onProgress
            })
          })]
        })]
      }, v);
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (VideoPage);

/***/ }),

/***/ "./src/subPackages/pages/video/index.scss":
/*!************************************************!*\
  !*** ./src/subPackages/pages/video/index.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/subPackages/pages/video/index.tsx":
/*!***********************************************!*\
  !*** ./src/subPackages/pages/video/index.tsx ***!
  \***********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/babel-loader/lib!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./src/subPackages/pages/video/index.tsx");


var config = {"navigationStyle":"custom","enableShareAppMessage":true,"enableShareTimeline":true,"navigationBarTitleText":"Discover"};
_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareTimeline = true
_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareAppMessage = true
var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'subPackages/pages/video/index', {root:{cn:[]}}, config || {}))



/***/ })

},[["./src/subPackages/pages/video/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map