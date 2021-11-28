(ks["webpackJsonp"] = ks["webpackJsonp"] || []).push([["subPackages/pages/webview/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/subPackages/pages/webview/index.tsx":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/subPackages/pages/webview/index.tsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Index; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.scss */ "./src/subPackages/pages/webview/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);








/**
 * webview
 * DEMO3: /subPackages/pages/webview/index?url=http://memo.com
 */




var Index = /*#__PURE__*/function (_Component) {
  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Index, _Component);

  var _super = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Index);

  function Index(props) {
    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Index);

    return _super.call(this, props);
  }

  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Index, [{
    key: "isHttpUrl",
    value: function isHttpUrl(url) {
      return /^http(s?):\/\//ig.test(url);
    }
  }, {
    key: "isImgUrl",
    value: function isImgUrl(url) {
      return /^http(s?):\/\/(.*)\.(jpg|jpeg|png|svg|icon|bmp|gif)$/i.test(url);
    }
  }, {
    key: "render",
    value: function render() {
      var _ref = Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__["getCurrentInstance"])().router || {},
          _ref$params$url = _ref.params.url,
          url = _ref$params$url === void 0 ? '' : _ref$params$url;

      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["View"], {
        className: "web-view",
        children: [this.isHttpUrl(url) && !this.isImgUrl(url) && "kwai" === 'weapp' && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("web-view", {
          src: url
        }), !this.isHttpUrl(url) && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["View"], {
          className: "richtext-empty",
          children: "\u7F51\u9875\u9519\u8BEF"
        }), this.isImgUrl(url) && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["View"], {
          className: "img-view",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__["Image"], {
            mode: "widthFix",
            className: "img-view-img",
            src: url
          })
        })]
      });
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);



/***/ }),

/***/ "./src/subPackages/pages/webview/index.scss":
/*!**************************************************!*\
  !*** ./src/subPackages/pages/webview/index.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/subPackages/pages/webview/index.tsx":
/*!*************************************************!*\
  !*** ./src/subPackages/pages/webview/index.tsx ***!
  \*************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/babel-loader/lib!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./src/subPackages/pages/webview/index.tsx");


var config = {"enableShareAppMessage":true,"navigationBarTitleText":""};

_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareAppMessage = true
var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'subPackages/pages/webview/index', {root:{cn:[]}}, config || {}))



/***/ })

},[["./src/subPackages/pages/webview/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map