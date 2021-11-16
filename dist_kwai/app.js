require("./runtime");
require("./common");
require("./vendors");
require("./taro");

(ks["webpackJsonp"] = ks["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/app.tsx":
/*!*****************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/app.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_RootStoreProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base/RootStoreProvider */ "./src/base/RootStoreProvider.tsx");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.scss */ "./src/app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function App(props) {
  // Taro.setStorageSync('API_URL', 'http://api.yuansheng.com/api')
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.setStorageSync('API_URL', 'https://api.yuanshengyoupin.com/api'); // Taro.setStorageSync('API_URL', 'http://localhost:3333/api')

  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.setStorageSync('APIKey', 'jdpaSAz4m7yV3zXXwx85ashEUycAL5gCrxO6');
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.setStorageSync('wechatId', '25cfbf8b-a7a6-4215-89a9-0343cff14273'); // Taro.setStorageSync('accessToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI3NDkwNmQ5LTk1ZDgtNGVhZS05MTU5LWRjNzFkMzA1MzhjOCIsInVzZXJuYW1lIjoiZnV5aW4iLCJyb2xlIjoic3VwZXJfYWRtaW5pc3RyYXRvciIsImlhdCI6MTYzMjM2OTMyNCwiZXhwIjoxNjMyOTc0MTI0fQ.ApbDa_CEtlkHCNS30fCToHRYjV7KYtPUo9R48cSXuMk')

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_base_RootStoreProvider__WEBPACK_IMPORTED_MODULE_1__[/* RootStoreProvider */ "a"], {
    children: props.children
  });
}

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_plugin_platform_kwai_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-kwai/dist/runtime */ "./node_modules/@tarojs/plugin-platform-kwai/dist/runtime.js");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_app_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/babel-loader/lib!./app.tsx */ "./node_modules/babel-loader/lib/index.js!./src/app.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/@tarojs/react/dist/react.esm.js");









var config = {"pages":["pages/index/index","pages/help/index","pages/job/detail/2","pages/job/apply/success","pages/job/detail/1","pages/job/detail/3","pages/job/apply","pages/job/detail/4","pages/job/detail/5","pages/job/detail/6"],"subpackages":[{"root":"subPackages","name":"subPackages","pages":["pages/audio/index","pages/html/index","pages/webview/index","pages/video/index"]}],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"","navigationBarTextStyle":"black"},"permission":{"scope.userLocation":{"desc":"你的位置信息将用于小程序位置接口的效果展示"}},"tabBar":{"color":"#cdcdcd","selectedColor":"#1296db","backgroundColor":"#fff","list":[{"text":"梦企传媒","pagePath":"pages/index/index","selectedIconPath":"./assets/images/footer/https:files_home2.png","iconPath":"./assets/images/footer/https:files_home1.png"},{"text":"帮助","pagePath":"pages/help/index","selectedIconPath":"./assets/images/footer/https:files_help2.png","iconPath":"./assets/images/footer/https:files_help1.png"}]}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__["window"].__taroAppConfig = config
var inst = App(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__["createReactApp"])(_node_modules_babel_loader_lib_index_js_app_tsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], react__WEBPACK_IMPORTED_MODULE_4__, react_dom__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], config))

Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["initPxTransform"])({
  designWidth: 750,
  deviceRatio: {"640":1.17,"750":1,"828":0.905}
})


/***/ })

},[["./src/app.tsx","runtime","taro","vendors","common"]]]);;
//# sourceMappingURL=app.js.map