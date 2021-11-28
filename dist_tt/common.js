(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["common"],{

/***/ "../stores/src/RootStore.ts":
/*!**********************************!*\
  !*** ../stores/src/RootStore.ts ***!
  \**********************************/
/*! exports provided: RootStore */
/*! exports used: RootStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootStore; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _share__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./share */ "../stores/src/share.ts");
/* harmony import */ var _shopGood__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopGood */ "../stores/src/shopGood.ts");
/* harmony import */ var _classify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classify */ "../stores/src/classify.ts");
/* harmony import */ var _miniUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./miniUser */ "../stores/src/miniUser.ts");
/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee */ "../stores/src/employee.ts");
/* harmony import */ var _shop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop */ "../stores/src/shop.ts");
/* harmony import */ var _school__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./school */ "../stores/src/school.ts");
/* harmony import */ var _good__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./good */ "../stores/src/good.ts");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order */ "../stores/src/order.ts");
/* harmony import */ var _miniUserCoupon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./miniUserCoupon */ "../stores/src/miniUserCoupon.ts");
/* harmony import */ var _vipfinance__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vipfinance */ "../stores/src/vipfinance.ts");
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./address */ "../stores/src/address.ts");
/* harmony import */ var _wechat__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./wechat */ "../stores/src/wechat.ts");
/* harmony import */ var _weapp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./weapp */ "../stores/src/weapp.ts");
/* harmony import */ var _vip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./vip */ "../stores/src/vip.ts");
/* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./static */ "../stores/src/static.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth */ "../stores/src/auth.ts");
/* harmony import */ var _offiaccount__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./offiaccount */ "../stores/src/offiaccount.ts");
/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./system */ "../stores/src/system.ts");
/* harmony import */ var _brand__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./brand */ "../stores/src/brand.ts");
/* harmony import */ var _openads__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./openads */ "../stores/src/openads.ts");
/* harmony import */ var _wechatIndex__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./wechatIndex */ "../stores/src/wechatIndex.ts");
/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./file */ "../stores/src/file.ts");
/* harmony import */ var _sale__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./sale */ "../stores/src/sale.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./user */ "../stores/src/user.ts");
/* harmony import */ var _feedback__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./feedback */ "../stores/src/feedback.ts");
/* harmony import */ var _career_job__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./career/job */ "../stores/src/career/job.ts");
/* harmony import */ var _career_apply__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./career/apply */ "../stores/src/career/apply.ts");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ui */ "../stores/src/ui.ts");




























 // import { PageStore } from './page';
// import { GlobalStore } from './global';
// import { EditorStore } from './editor';


var RootStore = // pageStore;
// globalStore;
// editorStore;
function RootStore() {
  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, RootStore);

  // data request
  this.addressStore = new _address__WEBPACK_IMPORTED_MODULE_12__[/* AddressStore */ "a"]();
  this.shareStore = new _share__WEBPACK_IMPORTED_MODULE_1__[/* ShareStore */ "a"]();
  this.shopStore = new _shop__WEBPACK_IMPORTED_MODULE_6__[/* ShopStore */ "a"]();
  this.schoolStore = new _school__WEBPACK_IMPORTED_MODULE_7__[/* SchoolStore */ "a"]();
  this.shopGoodStore = new _shopGood__WEBPACK_IMPORTED_MODULE_2__[/* ShopGoodStore */ "a"]();
  this.classifyStore = new _classify__WEBPACK_IMPORTED_MODULE_3__[/* ClassifyStore */ "a"]();
  this.miniUserStore = new _miniUser__WEBPACK_IMPORTED_MODULE_4__[/* MiniUserStore */ "a"]();
  this.goodStore = new _good__WEBPACK_IMPORTED_MODULE_8__[/* GoodStore */ "a"]();
  this.vipStore = new _vip__WEBPACK_IMPORTED_MODULE_15__[/* VipStore */ "a"]();
  this.miniUserCouponStore = new _miniUserCoupon__WEBPACK_IMPORTED_MODULE_10__[/* MiniUserCouponStore */ "a"]();
  this.vipfinanceStore = new _vipfinance__WEBPACK_IMPORTED_MODULE_11__[/* VipfinanceStore */ "a"]();
  this.orderStore = new _order__WEBPACK_IMPORTED_MODULE_9__[/* OrderStore */ "a"]();
  this.addressStore = new _address__WEBPACK_IMPORTED_MODULE_12__[/* AddressStore */ "a"]();
  this.wechatStore = new _wechat__WEBPACK_IMPORTED_MODULE_13__[/* WechatStore */ "a"]();
  this.weappStore = new _weapp__WEBPACK_IMPORTED_MODULE_14__[/* WeappStore */ "a"]();
  this.staticStore = new _static__WEBPACK_IMPORTED_MODULE_16__[/* StaticStore */ "a"]();
  this.authStore = new _auth__WEBPACK_IMPORTED_MODULE_17__[/* AuthStore */ "a"]();
  this.employeeStore = new _employee__WEBPACK_IMPORTED_MODULE_5__[/* EmployeeStore */ "a"]();
  this.offiaccountStore = new _offiaccount__WEBPACK_IMPORTED_MODULE_18__[/* OffiaccountStore */ "a"]();
  this.systemStore = new _system__WEBPACK_IMPORTED_MODULE_19__[/* SystemStore */ "a"]();
  this.brandStore = new _brand__WEBPACK_IMPORTED_MODULE_20__[/* BrandStore */ "a"]();
  this.openadsStore = new _openads__WEBPACK_IMPORTED_MODULE_21__[/* OpenadsStore */ "a"]();
  this.wechatIndexStore = new _wechatIndex__WEBPACK_IMPORTED_MODULE_22__[/* WechatIndexStore */ "a"]();
  this.fileStore = new _file__WEBPACK_IMPORTED_MODULE_23__[/* FileStore */ "a"]();
  this.saleStore = new _sale__WEBPACK_IMPORTED_MODULE_24__[/* SaleStore */ "a"]();
  this.userStore = new _user__WEBPACK_IMPORTED_MODULE_25__[/* UserStore */ "a"]();
  this.feedbackStore = new _feedback__WEBPACK_IMPORTED_MODULE_26__[/* FeedbackStore */ "a"](); // 界面

  this.uiStore = new _ui__WEBPACK_IMPORTED_MODULE_29__[/* UIStore */ "a"]();
  this.careerApplyStore = new _career_apply__WEBPACK_IMPORTED_MODULE_28__[/* CareerApplyStore */ "a"]();
  this.careerJobStore = new _career_job__WEBPACK_IMPORTED_MODULE_27__[/* CareerJobStore */ "a"](); // editor
  // this.pageStore = new PageStore();
  // this.globalStore = new GlobalStore();
  // this.editorStore = new EditorStore();
};

/***/ }),

/***/ "../stores/src/RootStoreProvider.tsx":
/*!*******************************************!*\
  !*** ../stores/src/RootStoreProvider.tsx ***!
  \*******************************************/
/*! exports provided: getRootStore, RootStoreContext, useRootStore, RootStoreProvider */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRootStore", function() { return getRootStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootStoreContext", function() { return RootStoreContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRootStore", function() { return useRootStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootStoreProvider", function() { return RootStoreProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../stores/node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RootStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RootStore */ "../stores/src/RootStore.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "../stores/node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);

 // single root store instance


var rootStoreInstance = new _RootStore__WEBPACK_IMPORTED_MODULE_1__[/* RootStore */ "a"](); // expose the store

var getRootStore = function getRootStore() {
  return rootStoreInstance;
};
var RootStoreContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(rootStoreInstance); // Root store wrapped in a React context.
// 新建钩子函数：获取上下文中的数据（Store 对象）

var useRootStore = function useRootStore() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(RootStoreContext);
}; // 新建组件：通过 Provider 传递上下文中的数据

var RootStoreProvider = function RootStoreProvider(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(RootStoreContext.Provider, {
    value: rootStoreInstance,
    children: children
  });
};

/***/ }),

/***/ "../stores/src/Store.ts":
/*!******************************!*\
  !*** ../stores/src/Store.ts ***!
  \******************************/
/*! exports provided: StoreProps, default */
/*! exports used: StoreProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Store; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/fetch */ "../stores/src/utils/fetch.tsx");







/*
 *   Copyright (c) 2020 Fu Yin
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */


var StoreProps = {
  data: mobx__WEBPACK_IMPORTED_MODULE_6__[/* observable */ "d"],
  datas: mobx__WEBPACK_IMPORTED_MODULE_6__[/* observable */ "d"],
  page: mobx__WEBPACK_IMPORTED_MODULE_6__[/* observable */ "d"],
  setData: mobx__WEBPACK_IMPORTED_MODULE_6__[/* action */ "a"],
  setDatas: mobx__WEBPACK_IMPORTED_MODULE_6__[/* action */ "a"],
  setPage: mobx__WEBPACK_IMPORTED_MODULE_6__[/* action */ "a"],
  get: mobx__WEBPACK_IMPORTED_MODULE_6__[/* action */ "a"],
  gets: mobx__WEBPACK_IMPORTED_MODULE_6__[/* action */ "a"],
  post: mobx__WEBPACK_IMPORTED_MODULE_6__[/* action */ "a"],
  put: mobx__WEBPACK_IMPORTED_MODULE_6__[/* action */ "a"],
  delete: mobx__WEBPACK_IMPORTED_MODULE_6__[/* action */ "a"],
  patch: mobx__WEBPACK_IMPORTED_MODULE_6__[/* action */ "a"]
};

var Store = /*#__PURE__*/function () {
  function Store() {
    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, Store);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "data", '');

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "datas", []);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "page", {
      count: 0,
      skip: 0,
      take: 10
    });

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "api", {
      get: '',
      gets: '',
      post: '',
      put: '',
      delete: '',
      patch: ''
    });
  }

  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Store, [{
    key: "setData",
    value: function setData(data) {
      this.data = data;
    }
  }, {
    key: "setDatas",
    value: function setDatas() {
      var datas = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (this.page.skip) {
        this.datas = this.datas.concat(datas);
      } else {
        this.datas = datas;
      }
    }
  }, {
    key: "setPage",
    value: function setPage(page) {
      this.page = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, this.page), page);
    }
    /** @param url 路径 或者 ID */

  }, {
    key: "get",
    value: function () {
      var _get = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var url,
            data,
            _args = arguments;
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';
                data = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                _context.next = 4;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_7__[/* fetch */ "a"])({
                  url: "/".concat(this.api.get).concat(url),
                  data: data,
                  method: 'GET'
                });

              case 4:
                return _context.abrupt("return", _context.sent);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function get() {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "gets",
    value: function () {
      var _gets = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(url, data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_7__[/* fetch */ "a"])({
                  url: "/".concat(this.api.gets).concat(url),
                  data: data,
                  method: 'GET'
                });

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function gets(_x, _x2) {
        return _gets.apply(this, arguments);
      }

      return gets;
    }()
  }, {
    key: "fetchs",
    value: function () {
      var _fetchs = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_7__[/* fetch */ "a"])({
                  url: "/".concat(this.api.gets),
                  data: data,
                  method: 'GET'
                });

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function fetchs(_x3) {
        return _fetchs.apply(this, arguments);
      }

      return fetchs;
    }()
  }, {
    key: "post",
    value: function () {
      var _post = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_7__[/* fetch */ "a"])({
                  url: "/".concat(this.api.post),
                  data: data,
                  method: 'POST'
                });

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function post(_x4) {
        return _post.apply(this, arguments);
      }

      return post;
    }()
  }, {
    key: "put",
    value: function () {
      var _put = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_7__[/* fetch */ "a"])({
                  url: "/".concat(this.api.put),
                  data: data,
                  method: 'PUT'
                });

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function put(_x5) {
        return _put.apply(this, arguments);
      }

      return put;
    }()
  }, {
    key: "patch",
    value: function () {
      var _patch = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_7__[/* fetch */ "a"])({
                  url: "/".concat(this.api.patch),
                  data: data,
                  method: 'PUT'
                });

              case 2:
                return _context6.abrupt("return", _context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function patch(_x6) {
        return _patch.apply(this, arguments);
      }

      return patch;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_7__[/* fetch */ "a"])({
                  url: "/".concat(this.api.delete, "/").concat(data.id),
                  data: data,
                  method: 'DELETE'
                });

              case 2:
                return _context7.abrupt("return", _context7.sent);

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function _delete(_x7) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);

  return Store;
}();



/***/ }),

/***/ "../stores/src/address.ts":
/*!********************************!*\
  !*** ../stores/src/address.ts ***!
  \********************************/
/*! exports provided: AddressStore */
/*! exports used: AddressStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressStore; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Store */ "../stores/src/Store.ts");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/fetch */ "../stores/src/utils/fetch.tsx");










/*
 *   Copyright (c) 2020 Fu Yin
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */



/** 地址 */

var AddressStore = /*#__PURE__*/function (_Store) {
  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(AddressStore, _Store);

  var _super = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(AddressStore);

  // rootStore;
  function AddressStore() {
    var _this;

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, AddressStore);

    _this = _super.call(this);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "location", {});

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "locationName", '');

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "api", {
      get: 'address',
      gets: 'addresses',
      post: 'addresses',
      put: 'addresses',
      patch: 'addresses',
      delete: 'addresses'
    });

    Object(mobx__WEBPACK_IMPORTED_MODULE_9__[/* makeObservable */ "c"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, _Store__WEBPACK_IMPORTED_MODULE_10__[/* StoreProps */ "a"]), {}, {
      locationName: mobx__WEBPACK_IMPORTED_MODULE_9__[/* observable */ "d"],
      location: mobx__WEBPACK_IMPORTED_MODULE_9__[/* observable */ "d"],
      setLocation: mobx__WEBPACK_IMPORTED_MODULE_9__[/* action */ "a"],
      setLocationName: mobx__WEBPACK_IMPORTED_MODULE_9__[/* action */ "a"],
      getSchool: mobx__WEBPACK_IMPORTED_MODULE_9__[/* action */ "a"],
      getThreeAddress: mobx__WEBPACK_IMPORTED_MODULE_9__[/* action */ "a"],
      addreUser: mobx__WEBPACK_IMPORTED_MODULE_9__[/* action */ "a"]
    })); // this.rootStore = // rootStore;

    return _this;
  }

  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AddressStore, [{
    key: "setLocation",
    value: function setLocation(data) {
      this.location = data;
    }
  }, {
    key: "setLocationName",
    value: function setLocationName(data) {
      this.locationName = data;
    }
  }, {
    key: "getSchool",
    value: function () {
      var _getSchool = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_11__[/* fetch */ "a"])({
                  url: "/address/school",
                  data: data,
                  method: 'GET'
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getSchool(_x) {
        return _getSchool.apply(this, arguments);
      }

      return getSchool;
    }()
  }, {
    key: "getThreeAddress",
    value: function () {
      var _getThreeAddress = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(code) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_11__[/* fetch */ "a"])({
                  url: "/province/".concat(code),
                  data: {},
                  method: 'GET'
                });

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getThreeAddress(_x2) {
        return _getThreeAddress.apply(this, arguments);
      }

      return getThreeAddress;
    }()
  }, {
    key: "addreUser",
    value: function () {
      var _addreUser = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var url,
            data,
            type,
            _args3 = arguments;
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : '';
                data = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
                type = _args3.length > 2 ? _args3[2] : undefined;
                _context3.next = 5;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_11__[/* fetch */ "a"])({
                  url: "/addre/user".concat(url),
                  data: data,
                  method: type
                });

              case 5:
                return _context3.abrupt("return", _context3.sent);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function addreUser() {
        return _addreUser.apply(this, arguments);
      }

      return addreUser;
    }()
  }]);

  return AddressStore;
}(_Store__WEBPACK_IMPORTED_MODULE_10__[/* default */ "b"]);

/***/ }),

/***/ "../stores/src/auth.ts":
/*!*****************************!*\
  !*** ../stores/src/auth.ts ***!
  \*****************************/
/*! exports provided: AuthStore */
/*! exports used: AuthStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthStore; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Store */ "../stores/src/Store.ts");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/fetch */ "../stores/src/utils/fetch.tsx");









/*
 *   Copyright (c) 2020 Fu Yin
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */



/** 权限，登录，注册 */

var AuthStore = /*#__PURE__*/function (_Store) {
  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(AuthStore, _Store);

  var _super = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(AuthStore);

  // rootStore;
  function AuthStore() {
    var _this;

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, AuthStore);

    _this = _super.call(this);
    Object(mobx__WEBPACK_IMPORTED_MODULE_8__[/* makeObservable */ "c"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, _Store__WEBPACK_IMPORTED_MODULE_9__[/* StoreProps */ "a"]), {}, {
      wxlogin: mobx__WEBPACK_IMPORTED_MODULE_8__[/* action */ "a"],
      register: mobx__WEBPACK_IMPORTED_MODULE_8__[/* action */ "a"],
      encrypt: mobx__WEBPACK_IMPORTED_MODULE_8__[/* action */ "a"],
      welogin: mobx__WEBPACK_IMPORTED_MODULE_8__[/* action */ "a"],
      login: mobx__WEBPACK_IMPORTED_MODULE_8__[/* action */ "a"]
    })); // this.rootStore = // rootStore;

    return _this;
  }
  /** 微信登录 */


  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AuthStore, [{
    key: "wxlogin",
    value: function () {
      var _wxlogin = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_10__[/* fetch */ "a"])({
                  url: "/mini/login",
                  data: data,
                  method: 'POST'
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function wxlogin(_x) {
        return _wxlogin.apply(this, arguments);
      }

      return wxlogin;
    }()
    /** 用户注册 */

  }, {
    key: "register",
    value: function () {
      var _register = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_10__[/* fetch */ "a"])({
                  url: "/mini/register",
                  data: data,
                  method: 'POST'
                });

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function register(_x2) {
        return _register.apply(this, arguments);
      }

      return register;
    }()
    /** 登录解密 */

  }, {
    key: "encrypt",
    value: function () {
      var _encrypt = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_10__[/* fetch */ "a"])({
                  url: "/mini/encrypt",
                  data: data,
                  method: 'POST'
                });

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function encrypt(_x3) {
        return _encrypt.apply(this, arguments);
      }

      return encrypt;
    }()
    /** 公众号登陆 */

  }, {
    key: "welogin",
    value: function () {
      var _welogin = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_10__[/* fetch */ "a"])({
                  url: "/mini/welogin",
                  data: data,
                  method: 'POST'
                });

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function welogin(_x4) {
        return _welogin.apply(this, arguments);
      }

      return welogin;
    }()
    /** H5 登录 */

  }, {
    key: "login",
    value: function () {
      var _login = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_10__[/* fetch */ "a"])({
                  url: "/login",
                  data: data,
                  method: 'POST'
                });

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function login(_x5) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }]);

  return AuthStore;
}(_Store__WEBPACK_IMPORTED_MODULE_9__[/* default */ "b"]);

/***/ }),

/***/ "../stores/src/brand.ts":
/*!******************************!*\
  !*** ../stores/src/brand.ts ***!
  \******************************/
/*! exports provided: BrandStore */
/*! exports used: BrandStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandStore; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Store */ "../stores/src/Store.ts");







/*
 *   Copyright (c) 2020 Fu Yin
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */


var BrandStore = /*#__PURE__*/function (_Store) {
  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(BrandStore, _Store);

  var _super = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(BrandStore);

  // rootStore;
  function BrandStore() {
    var _this;

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, BrandStore);

    _this = _super.call(this);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "brand", {});

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "api", {
      get: 'brand',
      gets: 'brands',
      post: 'brands',
      put: 'brands',
      patch: 'brands',
      delete: 'brands'
    });

    Object(mobx__WEBPACK_IMPORTED_MODULE_6__[/* makeObservable */ "c"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, _Store__WEBPACK_IMPORTED_MODULE_7__[/* StoreProps */ "a"])); // this.rootStore = // rootStore;

    return _this;
  }

  return BrandStore;
}(_Store__WEBPACK_IMPORTED_MODULE_7__[/* default */ "b"]);

/***/ }),

/***/ "../stores/src/career/apply.ts":
/*!*************************************!*\
  !*** ../stores/src/career/apply.ts ***!
  \*************************************/
/*! exports provided: CareerApplyStore */
/*! exports used: CareerApplyStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CareerApplyStore; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Store */ "../stores/src/Store.ts");







/*
 *   Copyright (c) 2020 Fu Yin
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */


var CareerApplyStore = /*#__PURE__*/function (_Store) {
  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(CareerApplyStore, _Store);

  var _super = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(CareerApplyStore);

  function CareerApplyStore() {
    var _this;

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, CareerApplyStore);

    _this = _super.call(this);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "api", {
      get: 'career/apply',
      gets: 'career/apply',
      post: 'career/apply',
      put: 'career/apply',
      patch: 'career/apply',
      delete: 'career/apply'
    });

    Object(mobx__WEBPACK_IMPORTED_MODULE_6__[/* makeObservable */ "c"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, _Store__WEBPACK_IMPORTED_MODULE_7__[/* StoreProps */ "a"])); // this.rootStore = // rootStore;

    return _this;
  }

  return CareerApplyStore;
}(_Store__WEBPACK_IMPORTED_MODULE_7__[/* default */ "b"]);

/***/ }),

/***/ "../stores/src/career/job.ts":
/*!***********************************!*\
  !*** ../stores/src/career/job.ts ***!
  \***********************************/
/*! exports provided: CareerJobStore */
/*! exports used: CareerJobStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CareerJobStore; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Store */ "../stores/src/Store.ts");







/*
 *   Copyright (c) 2020 Fu Yin
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */


var CareerJobStore = /*#__PURE__*/function (_Store) {
  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(CareerJobStore, _Store);

  var _super = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(CareerJobStore);

  function CareerJobStore() {
    var _this;

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, CareerJobStore);

    _this = _super.call(this);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "api", {
      get: 'career/jobs',
      gets: 'career/jobs',
      post: 'career/jobs',
      put: 'career/jobs',
      patch: 'career/jobs',
      delete: 'career/jobs'
    });

    Object(mobx__WEBPACK_IMPORTED_MODULE_6__[/* makeObservable */ "c"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, _Store__WEBPACK_IMPORTED_MODULE_7__[/* StoreProps */ "a"])); // this.rootStore = // rootStore;

    return _this;
  }

  return CareerJobStore;
}(_Store__WEBPACK_IMPORTED_MODULE_7__[/* default */ "b"]);

/***/ }),

/***/ "../stores/src/classify.ts":
/*!*********************************!*\
  !*** ../stores/src/classify.ts ***!
  \*********************************/
/*! exports provided: ClassifyStore */
/*! exports used: ClassifyStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassifyStore; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Store */ "../stores/src/Store.ts");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/fetch */ "../stores/src/utils/fetch.tsx");








/*
 *   Copyright (c) 2020 Fu Yin
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */



var ClassifyStore = /*#__PURE__*/function (_Store) {
  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(ClassifyStore, _Store);

  var _super = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(ClassifyStore);

  // rootStore;
  function ClassifyStore() {
    var _this;

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, ClassifyStore);

    _this = _super.call(this);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "api", {
      get: 'classify',
      gets: 'classifies',
      post: 'classifies',
      put: 'classifies',
      patch: 'classifies',
      delete: 'classifies'
    });

    Object(mobx__WEBPACK_IMPORTED_MODULE_8__[/* makeObservable */ "c"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, _Store__WEBPACK_IMPORTED_MODULE_7__[/* StoreProps */ "a"]), {}, {
      periphery: mobx__WEBPACK_IMPORTED_MODULE_8__[/* action */ "a"]
    })); // this.rootStore = // rootStore;

    return _this;
  }

  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(ClassifyStore, [{
    key: "periphery",
    value:
    /**
     * 获取周边分类
     *
     * @param shopId
     * @param data
     */
    function periphery(shopId, data) {
      return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_9__[/* fetch */ "a"])({
        url: "/classify/periphery/".concat(shopId),
        data: data,
        method: 'GET'
      });
    }
  }]);

  return ClassifyStore;
}(_Store__WEBPACK_IMPORTED_MODULE_7__[/* default */ "b"]);

/***/ }),

/***/ "../stores/src/employee.ts":
/*!*********************************!*\
  !*** ../stores/src/employee.ts ***!
  \*********************************/
/*! exports provided: EmployeeStore */
/*! exports used: EmployeeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeStore; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Store */ "../stores/src/Store.ts");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/fetch */ "../stores/src/utils/fetch.tsx");










/*
 *   Copyright (c) 2020 Fu Yin
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */



var EmployeeStore = /*#__PURE__*/function (_Store) {
  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(EmployeeStore, _Store);

  var _super = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(EmployeeStore);

  /** 接口返回资料 */
  // rootStore;
  function EmployeeStore() {
    var _this;

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, EmployeeStore);

    _this = _super.call(this);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "userData", {});

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "api", {
      get: 'employee',
      gets: 'employees',
      post: 'employees',
      put: 'employee',
      patch: 'employees',
      delete: 'employees'
    });

    Object(mobx__WEBPACK_IMPORTED_MODULE_9__[/* makeObservable */ "c"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, _Store__WEBPACK_IMPORTED_MODULE_10__[/* StoreProps */ "a"]), {}, {
      adminCount: mobx__WEBPACK_IMPORTED_MODULE_9__[/* action */ "a"]
    })); // this.rootStore = // rootStore;

    return _this;
  }

  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(EmployeeStore, [{
    key: "adminCount",
    value: function () {
      var _adminCount = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_11__[/* fetch */ "a"])({
                  url: "/employee/account",
                  data: data,
                  method: 'GET'
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function adminCount(_x) {
        return _adminCount.apply(this, arguments);
      }

      return adminCount;
    }()
  }]);

  return EmployeeStore;
}(_Store__WEBPACK_IMPORTED_MODULE_10__[/* default */ "b"]);

/***/ }),

/***/ "../stores/src/feedback.ts":
/*!*********************************!*\
  !*** ../stores/src/feedback.ts ***!
  \*********************************/
/*! exports provided: FeedbackStore */
/*! exports used: FeedbackStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackStore; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Store */ "../stores/src/Store.ts");







/*
 *   Copyright (c) 2020 Fu Yin
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */


var FeedbackStore = /*#__PURE__*/function (_Store) {
  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(FeedbackStore, _Store);

  var _super = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(FeedbackStore);

  /** 接口返回资料 */
  // rootStore;
  function FeedbackStore() {
    var _this;

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, FeedbackStore);

    _this = _super.call(this);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "userData", {});

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "api", {
      get: 'feedback',
      gets: 'feedbacks',
      post: 'feedbacks',
      put: 'feedback',
      patch: 'feedbacks',
      delete: 'feedbacks'
    });

    Object(mobx__WEBPACK_IMPORTED_MODULE_6__[/* makeObservable */ "c"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, _Store__WEBPACK_IMPORTED_MODULE_7__[/* StoreProps */ "a"])); // this.rootStore = // rootStore;

    return _this;
  }

  return FeedbackStore;
}(_Store__WEBPACK_IMPORTED_MODULE_7__[/* default */ "b"]);

/***/ }),

/***/ "../stores/src/file.ts":
/*!*****************************!*\
  !*** ../stores/src/file.ts ***!
  \*****************************/
/*! exports provided: FileStore */
/*! exports used: FileStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileStore; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Store */ "../stores/src/Store.ts");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/fetch */ "../stores/src/utils/fetch.tsx");










/*
 *   Copyright (c) 2020 Fu Yin
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */



var FileStore = /*#__PURE__*/function (_Store) {
  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(FileStore, _Store);

  var _super = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(FileStore);

  // rootStore;
  function FileStore() {
    var _this;

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, FileStore);

    _this = _super.call(this);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "file", '');

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "api", {
      get: '',
      gets: '',
      post: "/file/wxupload",
      put: '',
      patch: '',
      delete: ''
    });

    Object(mobx__WEBPACK_IMPORTED_MODULE_9__[/* makeObservable */ "c"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, _Store__WEBPACK_IMPORTED_MODULE_10__[/* StoreProps */ "a"]), {}, {
      fileUpload: mobx__WEBPACK_IMPORTED_MODULE_9__[/* action */ "a"]
    })); // this.rootStore = // rootStore;

    return _this;
  }

  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(FileStore, [{
    key: "fileUpload",
    value: function () {
      var _fileUpload = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_11__[/* fetch */ "a"])({
                  url: "/file/wxupload",
                  data: data,
                  method: 'GET'
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function fileUpload(_x) {
        return _fileUpload.apply(this, arguments);
      }

      return fileUpload;
    }()
  }]);

  return FileStore;
}(_Store__WEBPACK_IMPORTED_MODULE_10__[/* default */ "b"]);

/***/ }),

/***/ "../stores/src/good.ts":
/*!*****************************!*\
  !*** ../stores/src/good.ts ***!
  \*****************************/
/*! exports provided: GoodStore */
/*! exports used: GoodStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoodStore; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Store */ "../stores/src/Store.ts");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/fetch */ "../stores/src/utils/fetch.tsx");










/*
 *   Copyright (c) 2020 Fu Yin
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */



var GoodStore = /*#__PURE__*/function (_Store) {
  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(GoodStore, _Store);

  var _super = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(GoodStore);

  // rootStore;
  function GoodStore() {
    var _this;

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, GoodStore);

    _this = _super.call(this);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "api", {
      get: 'good',
      gets: 'goods',
      post: 'goods',
      put: 'goods',
      patch: 'goods',
      delete: 'goods'
    });

    Object(mobx__WEBPACK_IMPORTED_MODULE_10__[/* makeObservable */ "c"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, _Store__WEBPACK_IMPORTED_MODULE_9__[/* StoreProps */ "a"]), {}, {
      byids: mobx__WEBPACK_IMPORTED_MODULE_10__[/* action */ "a"]
    })); // this.rootStore = // rootStore;

    return _this;
  }

  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(GoodStore, [{
    key: "byids",
    value: function () {
      var _byids = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_11__[/* fetch */ "a"])({
                  url: "/goods/byids",
                  data: data,
                  method: 'GET'
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function byids(_x) {
        return _byids.apply(this, arguments);
      }

      return byids;
    }()
  }]);

  return GoodStore;
}(_Store__WEBPACK_IMPORTED_MODULE_9__[/* default */ "b"]);

/***/ }),

/***/ "../stores/src/miniUser.ts":
/*!*********************************!*\
  !*** ../stores/src/miniUser.ts ***!
  \*********************************/
/*! exports provided: MiniUserStore */
/*! exports used: MiniUserStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiniUserStore; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Store */ "../stores/src/Store.ts");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/fetch */ "../stores/src/utils/fetch.tsx");










/*
 *   Copyright (c) 2020 Fu Yin
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */



var MiniUserStore = /*#__PURE__*/function (_Store) {
  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(MiniUserStore, _Store);

  var _super = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(MiniUserStore);

  /** 接口返回资料 */
  // rootStore;
  function MiniUserStore() {
    var _this;

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, MiniUserStore);

    _this = _super.call(this);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "userData", {});

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "employee", {});

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "gender", ['同学', '男士', '女士' // i18next.t('同学'),
    // i18next.t('男士'),
    // i18next.t('女士')
    ]);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "api", {
      get: 'miniUser',
      gets: 'miniUsers',
      post: 'miniUsers',
      put: 'miniUser',
      patch: 'miniUsers',
      delete: 'miniUsers'
    });

    Object(mobx__WEBPACK_IMPORTED_MODULE_9__[/* makeObservable */ "c"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, _Store__WEBPACK_IMPORTED_MODULE_10__[/* StoreProps */ "a"]), {}, {
      userData: mobx__WEBPACK_IMPORTED_MODULE_9__[/* observable */ "d"],
      employee: mobx__WEBPACK_IMPORTED_MODULE_9__[/* observable */ "d"],
      account: mobx__WEBPACK_IMPORTED_MODULE_9__[/* action */ "a"],
      setUserData: mobx__WEBPACK_IMPORTED_MODULE_9__[/* action */ "a"]
    })); // this.rootStore = // rootStore;

    return _this;
  }

  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(MiniUserStore, [{
    key: "setUserData",
    value: function setUserData() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      console.log('setUserData', data);
      this.userData = data;
    }
  }, {
    key: "account",
    value: function () {
      var _account = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_11__[/* fetch */ "a"])({
                  url: "/miniUser/account",
                  data: data,
                  method: 'GET'
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function account(_x) {
        return _account.apply(this, arguments);
      }

      return account;
    }()
  }]);

  return MiniUserStore;
}(_Store__WEBPACK_IMPORTED_MODULE_10__[/* default */ "b"]);

/***/ }),

/***/ "../stores/src/miniUserCoupon.ts":
/*!***************************************!*\
  !*** ../stores/src/miniUserCoupon.ts ***!
  \***************************************/
/*! exports provided: MiniUserCouponStore */
/*! exports used: MiniUserCouponStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiniUserCouponStore; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Store */ "../stores/src/Store.ts");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/fetch */ "../stores/src/utils/fetch.tsx");










/*
 *   Copyright (c) 2020 Fu Yin
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */



var MiniUserCouponStore = /*#__PURE__*/function (_Store) {
  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(MiniUserCouponStore, _Store);

  var _super = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(MiniUserCouponStore);

  // rootStore;
  function MiniUserCouponStore() {
    var _this;

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, MiniUserCouponStore);

    _this = _super.call(this);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "api", {
      get: 'miniUserCoupon',
      gets: 'miniUserCoupones',
      post: 'miniUserCoupones',
      put: 'miniUserCoupones',
      patch: 'miniUserCoupones',
      delete: 'miniUserCoupones'
    });

    Object(mobx__WEBPACK_IMPORTED_MODULE_10__[/* makeObservable */ "c"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, _Store__WEBPACK_IMPORTED_MODULE_9__[/* StoreProps */ "a"]), {}, {
      getPopupCoupon: mobx__WEBPACK_IMPORTED_MODULE_10__[/* action */ "a"],
      getList: mobx__WEBPACK_IMPORTED_MODULE_10__[/* action */ "a"],
      setPopupCouponShowed: mobx__WEBPACK_IMPORTED_MODULE_10__[/* action */ "a"],
      miniUserCouponGet: mobx__WEBPACK_IMPORTED_MODULE_10__[/* action */ "a"],
      miniUserCouponShare: mobx__WEBPACK_IMPORTED_MODULE_10__[/* action */ "a"]
    })); // this.rootStore = // rootStore;

    return _this;
  }

  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(MiniUserCouponStore, [{
    key: "getPopupCoupon",
    value: function () {
      var _getPopupCoupon = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_11__[/* fetch */ "a"])({
                  url: "/miniUserCoupon/popup",
                  data: data,
                  method: 'GET'
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getPopupCoupon(_x) {
        return _getPopupCoupon.apply(this, arguments);
      }

      return getPopupCoupon;
    }()
  }, {
    key: "getList",
    value: function () {
      var _getList = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_11__[/* fetch */ "a"])({
                  url: "/miniUserCoupon/list",
                  data: data,
                  method: 'GET'
                });

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getList(_x2) {
        return _getList.apply(this, arguments);
      }

      return getList;
    }()
  }, {
    key: "setPopupCouponShowed",
    value: function () {
      var _setPopupCouponShowed = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_11__[/* fetch */ "a"])({
                  url: "/miniUserCoupon/showed",
                  data: data,
                  method: 'GET'
                });

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function setPopupCouponShowed(_x3) {
        return _setPopupCouponShowed.apply(this, arguments);
      }

      return setPopupCouponShowed;
    }()
    /** 领取优惠券 */

  }, {
    key: "miniUserCouponGet",
    value: function () {
      var _miniUserCouponGet = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(id) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_11__[/* fetch */ "a"])({
                  url: "/miniUserCoupon/get/".concat(id),
                  data: {},
                  method: 'GET'
                });

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function miniUserCouponGet(_x4) {
        return _miniUserCouponGet.apply(this, arguments);
      }

      return miniUserCouponGet;
    }()
  }, {
    key: "miniUserCouponShare",
    value: function () {
      var _miniUserCouponShare = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(id) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_11__[/* fetch */ "a"])({
                  url: "/miniUserCoupon/share/".concat(id),
                  data: {},
                  method: 'GET'
                });

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function miniUserCouponShare(_x5) {
        return _miniUserCouponShare.apply(this, arguments);
      }

      return miniUserCouponShare;
    }()
  }]);

  return MiniUserCouponStore;
}(_Store__WEBPACK_IMPORTED_MODULE_9__[/* default */ "b"]);

/***/ }),

/***/ "../stores/src/offiaccount.ts":
/*!************************************!*\
  !*** ../stores/src/offiaccount.ts ***!
  \************************************/
/*! exports provided: OffiaccountStore */
/*! exports used: OffiaccountStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffiaccountStore; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Store */ "../stores/src/Store.ts");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/fetch */ "../stores/src/utils/fetch.tsx");










/*
 *   Copyright (c) 2020 Fu Yin
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */



var OffiaccountStore = /*#__PURE__*/function (_Store) {
  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(OffiaccountStore, _Store);

  var _super = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(OffiaccountStore);

  // rootStore;
  function OffiaccountStore() {
    var _this;

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, OffiaccountStore);

    _this = _super.call(this);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "api", {
      get: 'offiaccount',
      gets: 'offiaccount',
      post: 'offiaccount',
      put: 'offiaccount',
      patch: 'offiaccount',
      delete: 'offiaccount'
    });

    Object(mobx__WEBPACK_IMPORTED_MODULE_10__[/* makeObservable */ "c"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, _Store__WEBPACK_IMPORTED_MODULE_9__[/* StoreProps */ "a"]), {}, {
      config: mobx__WEBPACK_IMPORTED_MODULE_10__[/* action */ "a"]
    })); // this.rootStore = // rootStore;

    return _this;
  }

  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(OffiaccountStore, [{
    key: "config",
    value:
    /**
     * 公众号配置
     *
     * @param data { url: '' }
     */
    function () {
      var _config = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_11__[/* fetch */ "a"])({
                  url: "/offiaccount/config",
                  data: data,
                  method: 'GET'
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function config(_x) {
        return _config.apply(this, arguments);
      }

      return config;
    }()
  }]);

  return OffiaccountStore;
}(_Store__WEBPACK_IMPORTED_MODULE_9__[/* default */ "b"]);

/***/ }),

/***/ "../stores/src/openads.ts":
/*!********************************!*\
  !*** ../stores/src/openads.ts ***!
  \********************************/
/*! exports provided: OpenadsStore */
/*! exports used: OpenadsStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenadsStore; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Store */ "../stores/src/Store.ts");







/*
 *   Copyright (c) 2020 Fu Yin
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */


var OpenadsStore = /*#__PURE__*/function (_Store) {
  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(OpenadsStore, _Store);

  var _super = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(OpenadsStore);

  // rootStore;
  function OpenadsStore() {
    var _this;

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, OpenadsStore);

    _this = _super.call(this);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "api", {
      get: 'wechat/openads',
      gets: 'wechat/openads',
      post: 'wechat/openads',
      put: 'wechat/openads',
      patch: 'wechat/openads',
      delete: 'wechat/openads'
    });

    Object(mobx__WEBPACK_IMPORTED_MODULE_6__[/* makeObservable */ "c"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, _Store__WEBPACK_IMPORTED_MODULE_7__[/* StoreProps */ "a"])); // this.rootStore = // rootStore;

    return _this;
  }

  return OpenadsStore;
}(_Store__WEBPACK_IMPORTED_MODULE_7__[/* default */ "b"]);

/***/ }),

/***/ "../stores/src/order.ts":
/*!******************************!*\
  !*** ../stores/src/order.ts ***!
  \******************************/
/*! exports provided: OrderStore */
/*! exports used: OrderStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderStore; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/fetch */ "../stores/src/utils/fetch.tsx");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Store */ "../stores/src/Store.ts");










/*
 *   Copyright (c) 2020 Fu Yin
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */



var OrderStore = /*#__PURE__*/function (_Store) {
  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(OrderStore, _Store);

  var _super = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(OrderStore);

  // rootStore;
  function OrderStore() {
    var _this;

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, OrderStore);

    _this = _super.call(this);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "api", {
      get: 'order',
      gets: 'order',
      post: 'order',
      put: 'orders',
      patch: 'orders',
      delete: 'order'
    });

    Object(mobx__WEBPACK_IMPORTED_MODULE_9__[/* makeObservable */ "c"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, _Store__WEBPACK_IMPORTED_MODULE_11__[/* StoreProps */ "a"]), {}, {
      vip: mobx__WEBPACK_IMPORTED_MODULE_9__[/* action */ "a"],
      add: mobx__WEBPACK_IMPORTED_MODULE_9__[/* action */ "a"],
      check: mobx__WEBPACK_IMPORTED_MODULE_9__[/* action */ "a"],
      memopay: mobx__WEBPACK_IMPORTED_MODULE_9__[/* action */ "a"],
      list: mobx__WEBPACK_IMPORTED_MODULE_9__[/* action */ "a"],
      lists: mobx__WEBPACK_IMPORTED_MODULE_9__[/* action */ "a"],
      coupon: mobx__WEBPACK_IMPORTED_MODULE_9__[/* action */ "a"],
      classes: mobx__WEBPACK_IMPORTED_MODULE_9__[/* action */ "a"],
      qrcode: mobx__WEBPACK_IMPORTED_MODULE_9__[/* action */ "a"],
      rush: mobx__WEBPACK_IMPORTED_MODULE_9__[/* action */ "a"],
      cancel: mobx__WEBPACK_IMPORTED_MODULE_9__[/* action */ "a"],
      finish: mobx__WEBPACK_IMPORTED_MODULE_9__[/* action */ "a"],
      success: mobx__WEBPACK_IMPORTED_MODULE_9__[/* action */ "a"]
    })); // this.rootStore = // rootStore;

    return _this;
  }

  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(OrderStore, [{
    key: "vip",
    value: // VIP order
    function () {
      var _vip = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
        var res;
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_10__[/* fetch */ "a"])({
                  url: "/order/vip",
                  data: data,
                  method: 'POST'
                });

              case 2:
                res = _context.sent;
                return _context.abrupt("return", res.data);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function vip(_x) {
        return _vip.apply(this, arguments);
      }

      return vip;
    }()
  }, {
    key: "add",
    value: function () {
      var _add = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data) {
        var res;
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_10__[/* fetch */ "a"])({
                  url: "/order/add",
                  data: data,
                  method: 'POST'
                });

              case 2:
                res = _context2.sent;
                return _context2.abrupt("return", res.data);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function add(_x2) {
        return _add.apply(this, arguments);
      }

      return add;
    }()
  }, {
    key: "check",
    value: function () {
      var _check = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_10__[/* fetch */ "a"])({
                  url: "/order/check",
                  data: data,
                  method: 'POST'
                });

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function check(_x3) {
        return _check.apply(this, arguments);
      }

      return check;
    }()
  }, {
    key: "memopay",
    value: function () {
      var _memopay = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_10__[/* fetch */ "a"])({
                  url: "/order/memopay",
                  data: data,
                  method: 'PUT'
                });

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function memopay(_x4) {
        return _memopay.apply(this, arguments);
      }

      return memopay;
    }()
  }, {
    key: "lists",
    value: function () {
      var _lists = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_10__[/* fetch */ "a"])({
                  url: "/order/lists",
                  data: data,
                  method: 'GET'
                });

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function lists(_x5) {
        return _lists.apply(this, arguments);
      }

      return lists;
    }()
  }, {
    key: "list",
    value: function () {
      var _list = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(type, data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_10__[/* fetch */ "a"])({
                  url: "/order/list/".concat(type),
                  data: data,
                  method: 'GET'
                });

              case 2:
                return _context6.abrupt("return", _context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function list(_x6, _x7) {
        return _list.apply(this, arguments);
      }

      return list;
    }() // 购买健身课程

  }, {
    key: "classes",
    value: function () {
      var _classes = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_10__[/* fetch */ "a"])({
                  url: "/order/class",
                  data: data,
                  method: 'POST'
                });

              case 2:
                return _context7.abrupt("return", _context7.sent);

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function classes(_x8) {
        return _classes.apply(this, arguments);
      }

      return classes;
    }() // 购买优惠券

  }, {
    key: "coupon",
    value: function () {
      var _coupon = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_10__[/* fetch */ "a"])({
                  url: "/order/coupon",
                  data: data,
                  method: 'POST'
                });

              case 2:
                return _context8.abrupt("return", _context8.sent);

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function coupon(_x9) {
        return _coupon.apply(this, arguments);
      }

      return coupon;
    }()
  }, {
    key: "qrcode",
    value: function () {
      var _qrcode = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(id, data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_10__[/* fetch */ "a"])({
                  url: "/order/qrcode/".concat(id),
                  data: data,
                  method: 'GET'
                });

              case 2:
                return _context9.abrupt("return", _context9.sent);

              case 3:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function qrcode(_x10, _x11) {
        return _qrcode.apply(this, arguments);
      }

      return qrcode;
    }()
  }, {
    key: "rush",
    value: function () {
      var _rush = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_10__[/* fetch */ "a"])({
                  url: "/order/rush",
                  data: data,
                  method: 'PUT'
                });

              case 2:
                return _context10.abrupt("return", _context10.sent);

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function rush(_x12) {
        return _rush.apply(this, arguments);
      }

      return rush;
    }()
  }, {
    key: "cancel",
    value: function () {
      var _cancel = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_10__[/* fetch */ "a"])({
                  url: "/order/refund",
                  data: data,
                  method: 'POST'
                });

              case 2:
                return _context11.abrupt("return", _context11.sent);

              case 3:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      function cancel(_x13) {
        return _cancel.apply(this, arguments);
      }

      return cancel;
    }()
  }, {
    key: "finish",
    value: function () {
      var _finish = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_10__[/* fetch */ "a"])({
                  url: "/order/finish",
                  data: data,
                  method: 'PUT'
                });

              case 2:
                return _context12.abrupt("return", _context12.sent);

              case 3:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      function finish(_x14) {
        return _finish.apply(this, arguments);
      }

      return finish;
    }() // 购买优惠券成功

  }, {
    key: "success",
    value: function () {
      var _success = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_10__[/* fetch */ "a"])({
                  url: "/order/success",
                  data: data,
                  method: 'PUT'
                });

              case 2:
                return _context13.abrupt("return", _context13.sent);

              case 3:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }));

      function success(_x15) {
        return _success.apply(this, arguments);
      }

      return success;
    }()
  }]);

  return OrderStore;
}(_Store__WEBPACK_IMPORTED_MODULE_11__[/* default */ "b"]);

/***/ }),

/***/ "../stores/src/sale.ts":
/*!*****************************!*\
  !*** ../stores/src/sale.ts ***!
  \*****************************/
/*! exports provided: SaleStore */
/*! exports used: SaleStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaleStore; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/fetch */ "../stores/src/utils/fetch.tsx");






/*
 *   Copyright (c) 2020 Fu Yin
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */


var SaleStore = /*#__PURE__*/function () {
  // rootStore;
  function SaleStore() {
    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, SaleStore);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "goodSale", []);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, "sourceCount", []);

    Object(mobx__WEBPACK_IMPORTED_MODULE_5__[/* makeObservable */ "c"])(this, {
      // rootStore: false,
      getGoodCount: mobx__WEBPACK_IMPORTED_MODULE_5__[/* action */ "a"],
      getSourceCount: mobx__WEBPACK_IMPORTED_MODULE_5__[/* action */ "a"]
    }); // this.rootStore = // rootStore;
  }

  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(SaleStore, [{
    key: "getGoodCount",
    value: function () {
      var _getGoodCount = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var data,
            _args = arguments;
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = _args.length > 0 && _args[0] !== undefined ? _args[0] : {
                  shop: {
                    id: 0
                  }
                };
                _context.next = 3;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_6__[/* fetch */ "a"])({
                  url: "/dashboard/good/count",
                  data: data,
                  method: 'GET'
                });

              case 3:
                return _context.abrupt("return", _context.sent);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getGoodCount() {
        return _getGoodCount.apply(this, arguments);
      }

      return getGoodCount;
    }()
  }, {
    key: "getSourceCount",
    value: function () {
      var _getSourceCount = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var data,
            _args2 = arguments;
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                data = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {
                  shop: {
                    id: 0
                  }
                };
                _context2.next = 3;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_6__[/* fetch */ "a"])({
                  url: "/dashboard/source/count",
                  data: data,
                  method: 'GET'
                });

              case 3:
                return _context2.abrupt("return", _context2.sent);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getSourceCount() {
        return _getSourceCount.apply(this, arguments);
      }

      return getSourceCount;
    }()
  }]);

  return SaleStore;
}();

/***/ }),

/***/ "../stores/src/school.ts":
/*!*******************************!*\
  !*** ../stores/src/school.ts ***!
  \*******************************/
/*! exports provided: SchoolStore */
/*! exports used: SchoolStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolStore; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Store */ "../stores/src/Store.ts");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/fetch */ "../stores/src/utils/fetch.tsx");










/*
 *   Copyright (c) 2020 Fu Yin
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */



var SchoolStore = /*#__PURE__*/function (_Store) {
  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(SchoolStore, _Store);

  var _super = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(SchoolStore);

  // rootStore;
  function SchoolStore() {
    var _this;

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, SchoolStore);

    _this = _super.call(this);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "nearBySchool", {});

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "setSchoolAdress", {});

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "SchoolAdressFlag", {});

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "shchoolId", '');

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "nearBySchools", []);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "api", {
      get: 'school',
      gets: 'schools',
      post: 'schools',
      put: 'schools',
      patch: 'schools',
      delete: 'schools'
    });

    Object(mobx__WEBPACK_IMPORTED_MODULE_9__[/* makeObservable */ "c"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, _Store__WEBPACK_IMPORTED_MODULE_10__[/* StoreProps */ "a"]), {}, {
      bylbs: mobx__WEBPACK_IMPORTED_MODULE_9__[/* action */ "a"]
    })); // this.rootStore = // rootStore;

    return _this;
  }

  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(SchoolStore, [{
    key: "bylbs",
    value: // 根据地理位置获取最近店铺
    function () {
      var _bylbs = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_11__[/* fetch */ "a"])({
                  url: "/schools/bylbs",
                  data: data,
                  method: 'GET'
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function bylbs(_x) {
        return _bylbs.apply(this, arguments);
      }

      return bylbs;
    }()
  }]);

  return SchoolStore;
}(_Store__WEBPACK_IMPORTED_MODULE_10__[/* default */ "b"]);

/***/ }),

/***/ "../stores/src/share.ts":
/*!******************************!*\
  !*** ../stores/src/share.ts ***!
  \******************************/
/*! exports provided: ShareStore */
/*! exports used: ShareStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareStore; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Store */ "../stores/src/Store.ts");







/*
 *   Copyright (c) 2020 Fu Yin
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */


var ShareStore = /*#__PURE__*/function (_Store) {
  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ShareStore, _Store);

  var _super = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(ShareStore);

  // rootStore;
  function ShareStore() {
    var _this;

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, ShareStore);

    _this = _super.call(this);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "api", {
      get: 'share',
      gets: 'shares',
      post: 'shares',
      put: 'shares',
      patch: 'shares',
      delete: 'shares'
    });

    Object(mobx__WEBPACK_IMPORTED_MODULE_6__[/* makeObservable */ "c"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, _Store__WEBPACK_IMPORTED_MODULE_7__[/* StoreProps */ "a"])); // this.rootStore = // rootStore;

    return _this;
  }

  return ShareStore;
}(_Store__WEBPACK_IMPORTED_MODULE_7__[/* default */ "b"]);

/***/ }),

/***/ "../stores/src/shop.ts":
/*!*****************************!*\
  !*** ../stores/src/shop.ts ***!
  \*****************************/
/*! exports provided: ShopStore */
/*! exports used: ShopStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopStore; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Store */ "../stores/src/Store.ts");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/fetch */ "../stores/src/utils/fetch.tsx");










/*
 *   Copyright (c) 2020 Fu Yin
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */



var ShopStore = /*#__PURE__*/function (_Store) {
  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(ShopStore, _Store);

  var _super = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(ShopStore);

  // rootStore;
  function ShopStore() {
    var _this;

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, ShopStore);

    _this = _super.call(this);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "shopId", '');

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "nearByShop", {});

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "setShopAdress", '');

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "ShopAdressFlag", 0);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "nearByShopes", []);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "api", {
      get: 'shop',
      gets: 'shopes',
      post: 'shopes',
      put: 'shopes',
      patch: 'shopes',
      delete: 'shopes'
    });

    Object(mobx__WEBPACK_IMPORTED_MODULE_9__[/* makeObservable */ "c"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, _Store__WEBPACK_IMPORTED_MODULE_10__[/* StoreProps */ "a"]), {}, {
      bylbs: mobx__WEBPACK_IMPORTED_MODULE_9__[/* action */ "a"],
      byids: mobx__WEBPACK_IMPORTED_MODULE_9__[/* action */ "a"]
    })); // this.rootStore = // rootStore;

    return _this;
  }

  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(ShopStore, [{
    key: "bylbs",
    value: // 根据地理位置获取最近店铺
    function () {
      var _bylbs = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_11__[/* fetch */ "a"])({
                  url: "/shopes/bylbs",
                  data: data,
                  method: 'GET'
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function bylbs(_x) {
        return _bylbs.apply(this, arguments);
      }

      return bylbs;
    }()
  }, {
    key: "byids",
    value: function () {
      var _byids = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_11__[/* fetch */ "a"])({
                  url: "/shopes/byids",
                  data: data,
                  method: 'GET'
                });

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function byids(_x2) {
        return _byids.apply(this, arguments);
      }

      return byids;
    }()
  }]);

  return ShopStore;
}(_Store__WEBPACK_IMPORTED_MODULE_10__[/* default */ "b"]);

/***/ }),

/***/ "../stores/src/shopGood.ts":
/*!*********************************!*\
  !*** ../stores/src/shopGood.ts ***!
  \*********************************/
/*! exports provided: ShopGoodStore */
/*! exports used: ShopGoodStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopGoodStore; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Store */ "../stores/src/Store.ts");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/fetch */ "../stores/src/utils/fetch.tsx");










/*
 *   Copyright (c) 2020 Fu Yin
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */



var ShopGoodStore = /*#__PURE__*/function (_Store) {
  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(ShopGoodStore, _Store);

  var _super = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(ShopGoodStore);

  // rootStore;
  function ShopGoodStore() {
    var _this;

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, ShopGoodStore);

    _this = _super.call(this);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "api", {
      get: 'shopGood',
      gets: 'shopGoods',
      post: 'shopGoods',
      put: 'shopGoods',
      patch: 'shopGoods',
      delete: 'shopGoods'
    });

    Object(mobx__WEBPACK_IMPORTED_MODULE_9__[/* makeObservable */ "c"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, _Store__WEBPACK_IMPORTED_MODULE_10__[/* StoreProps */ "a"]), {}, {
      byShopClassify: mobx__WEBPACK_IMPORTED_MODULE_9__[/* action */ "a"]
    })); // this.rootStore = // rootStore;

    return _this;
  }

  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(ShopGoodStore, [{
    key: "byShopClassify",
    value: function () {
      var _byShopClassify = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_11__[/* fetch */ "a"])({
                  url: "/shopGood",
                  data: data,
                  method: 'GET'
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function byShopClassify(_x) {
        return _byShopClassify.apply(this, arguments);
      }

      return byShopClassify;
    }()
  }]);

  return ShopGoodStore;
}(_Store__WEBPACK_IMPORTED_MODULE_10__[/* default */ "b"]);

/***/ }),

/***/ "../stores/src/static.ts":
/*!*******************************!*\
  !*** ../stores/src/static.ts ***!
  \*******************************/
/*! exports provided: StaticStore */
/*! exports used: StaticStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaticStore; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Store */ "../stores/src/Store.ts");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/fetch */ "../stores/src/utils/fetch.tsx");










/*
 *   Copyright (c) 2020 Fu Yin
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */



var StaticStore = /*#__PURE__*/function (_Store) {
  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(StaticStore, _Store);

  var _super = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(StaticStore);

  // rootStore;
  function StaticStore() {
    var _this;

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, StaticStore);

    _this = _super.call(this);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "api", {
      get: 'static',
      gets: 'statics',
      post: 'statics',
      put: 'statics',
      patch: 'statics',
      delete: 'statics'
    });

    Object(mobx__WEBPACK_IMPORTED_MODULE_10__[/* makeObservable */ "c"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, _Store__WEBPACK_IMPORTED_MODULE_9__[/* StoreProps */ "a"]), {}, {
      html: mobx__WEBPACK_IMPORTED_MODULE_10__[/* action */ "a"]
    })); // this.rootStore = // rootStore;

    return _this;
  }

  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(StaticStore, [{
    key: "html",
    value: function () {
      var _html = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url, data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_11__[/* fetch */ "a"])({
                  url: url,
                  data: data,
                  method: 'GET'
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function html(_x, _x2) {
        return _html.apply(this, arguments);
      }

      return html;
    }()
  }]);

  return StaticStore;
}(_Store__WEBPACK_IMPORTED_MODULE_9__[/* default */ "b"]);

/***/ }),

/***/ "../stores/src/system.ts":
/*!*******************************!*\
  !*** ../stores/src/system.ts ***!
  \*******************************/
/*! exports provided: SystemStore */
/*! exports used: SystemStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemStore; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Store */ "../stores/src/Store.ts");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/fetch */ "../stores/src/utils/fetch.tsx");










/*
 *   Copyright (c) 2020 Fu Yin
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */



var SystemStore = /*#__PURE__*/function (_Store) {
  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(SystemStore, _Store);

  var _super = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(SystemStore);

  // rootStore;
  function SystemStore() {
    var _this;

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, SystemStore);

    _this = _super.call(this);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "mineList", []);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "firstRegisterLimit", []);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "api", {
      get: 'system',
      gets: '',
      post: '',
      put: '',
      patch: '',
      delete: ''
    });

    Object(mobx__WEBPACK_IMPORTED_MODULE_9__[/* makeObservable */ "c"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, _Store__WEBPACK_IMPORTED_MODULE_10__[/* StoreProps */ "a"]), {}, {
      getOneByEfunc: mobx__WEBPACK_IMPORTED_MODULE_9__[/* action */ "a"]
    })); // this.rootStore = // rootStore;

    return _this;
  }

  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(SystemStore, [{
    key: "getOneByEfunc",
    value: function () {
      var _getOneByEfunc = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url) {
        var data,
            sysData,
            result,
            _args = arguments;
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                _context.next = 3;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_11__[/* fetch */ "a"])({
                  url: "/".concat(this.api.get).concat(url),
                  data: data,
                  method: 'GET'
                });

              case 3:
                _context.t0 = _context.sent;

                if (_context.t0) {
                  _context.next = 6;
                  break;
                }

                _context.t0 = {};

              case 6:
                sysData = _context.t0;
                result = sysData && sysData.length ? JSON.parse(sysData[0].value) : null;
                return _context.abrupt("return", result);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getOneByEfunc(_x) {
        return _getOneByEfunc.apply(this, arguments);
      }

      return getOneByEfunc;
    }()
  }]);

  return SystemStore;
}(_Store__WEBPACK_IMPORTED_MODULE_10__[/* default */ "b"]);

/***/ }),

/***/ "../stores/src/ui.ts":
/*!***************************!*\
  !*** ../stores/src/ui.ts ***!
  \***************************/
/*! exports provided: UIStore */
/*! exports used: UIStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIStore; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/dist/mobx.esm.js");




var UIStore = /*#__PURE__*/function () {
  /** 展示提示的堆栈 */
  // rootStore;
  function UIStore() {
    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, UIStore);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "language", 'zh_CN');

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "noticeStack", []);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, "pendingRequest", false);

    Object(mobx__WEBPACK_IMPORTED_MODULE_3__[/* makeAutoObservable */ "b"])(this, {
      // rootStore: false,
      noticeStack: mobx__WEBPACK_IMPORTED_MODULE_3__[/* observable */ "d"],
      pendingRequest: mobx__WEBPACK_IMPORTED_MODULE_3__[/* observable */ "d"],
      togglePendingRequest: mobx__WEBPACK_IMPORTED_MODULE_3__[/* action */ "a"]
    }); // this.rootStore = // rootStore;
  }

  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(UIStore, [{
    key: "togglePendingRequest",
    value: function togglePendingRequest() {
      this.pendingRequest = !this.pendingRequest;
    }
  }, {
    key: "setNoticeStack",
    value: function setNoticeStack(data, type) {
      switch (type) {
        case 'insert':
          this.noticeStack.push(data);

        case 'remove':
          this.noticeStack.pop();

        case 'all':
          this.noticeStack = data;
      }
    }
  }]);

  return UIStore;
}();

/***/ }),

/***/ "../stores/src/user.ts":
/*!*****************************!*\
  !*** ../stores/src/user.ts ***!
  \*****************************/
/*! exports provided: UserStore */
/*! exports used: UserStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserStore; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Store */ "../stores/src/Store.ts");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/fetch */ "../stores/src/utils/fetch.tsx");










/*
 *   Copyright (c) 2020 Fu Yin
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */



var UserStore = /*#__PURE__*/function (_Store) {
  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(UserStore, _Store);

  var _super = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(UserStore);

  /** 接口返回资料 */
  // // rootStore;
  function UserStore() {
    var _this;

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, UserStore);

    _this = _super.call(this);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "userData", {});

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "api", {
      get: 'user',
      gets: 'users',
      post: 'users',
      put: 'user',
      patch: 'users',
      delete: 'users'
    });

    Object(mobx__WEBPACK_IMPORTED_MODULE_9__[/* makeObservable */ "c"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, _Store__WEBPACK_IMPORTED_MODULE_10__[/* StoreProps */ "a"]), {}, {
      adminCount: mobx__WEBPACK_IMPORTED_MODULE_9__[/* action */ "a"]
    })); // // this.rootStore = // rootStore;

    return _this;
  }

  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(UserStore, [{
    key: "adminCount",
    value: function () {
      var _adminCount = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_11__[/* fetch */ "a"])({
                  url: "/user/account",
                  data: data,
                  method: 'GET'
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function adminCount(_x) {
        return _adminCount.apply(this, arguments);
      }

      return adminCount;
    }()
  }]);

  return UserStore;
}(_Store__WEBPACK_IMPORTED_MODULE_10__[/* default */ "b"]);

/***/ }),

/***/ "../stores/src/utils/fetch.tsx":
/*!*************************************!*\
  !*** ../stores/src/utils/fetch.tsx ***!
  \*************************************/
/*! exports provided: HTTP_STATUS, REFRESH_STATUS, codeMessage, fetch, default */
/*! exports used: fetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HTTP_STATUS */
/* unused harmony export REFRESH_STATUS */
/* unused harmony export codeMessage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetch; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "../../node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qs */ "../../node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "../../node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _taroTools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taroTools */ "../stores/src/utils/taroTools.ts");





var HTTP_STATUS = {
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NON_AUTHORITATIVE_INFORMATION: 203,
  NO_CONTENT: 204,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504
};
var REFRESH_STATUS = {
  NORMAL: 0,
  REFRESHING: 1,
  NO_MORE_DATA: 2
};
var codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
};
/**
 * Fetch
 *
 * Const API_URL = Taro.getStorageSync('API_URL') || '';
 *
 * @param url
 * @param options https://taro-docs.jd.com/taro/docs/apis/network/request/request/
 */

function fetch(_ref) {
  var _ref$url = _ref.url,
      url = _ref$url === void 0 ? '' : _ref$url,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data,
      _ref$method = _ref.method,
      method = _ref$method === void 0 ? 'GET' : _ref$method;
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.showLoading({
    title: '加载中...'
  });
  var API_URL = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getStorageSync('API_URL') || '';
  url = "".concat(API_URL).concat(url);

  if (method.toUpperCase() === 'GET') {
    url = Object.keys(data).length && Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(data) === 'object' ? "".concat(url, "?").concat(qs__WEBPACK_IMPORTED_MODULE_2__["stringify"](data)) : url;
    data = {};
  } else {
    data = JSON.stringify(data);
  }

  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.request({
    url: url,
    // mode: 'no-cors',
    // credentials: 'include',
    data: data,
    method: method,
    header: {
      'content-type': 'application/json; charset=utf-8',
      Authorization: "Bearer ".concat(js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('accessToken') || _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getStorageSync('accessToken')),
      'X-Api-Key': "APIKey ".concat(js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('APIKey') || _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getStorageSync('APIKey'))
    }
  }).then(function (res) {
    return fatchCallback(res);
  }).catch(function (err) {
    return fatchCallback(err);
  });
}

var fatchCallback = function fatchCallback(res) {
  var status = res.status,
      statusText = res.statusText,
      error = res.error,
      page = res.page,
      resultData = res.data;

  var _ref2 = resultData || {},
      statusCode = _ref2.statusCode,
      message = _ref2.message,
      _ref2$data = _ref2.data,
      data = _ref2$data === void 0 ? undefined : _ref2$data;

  var statusCodeData = statusCode || status;
  var messageData = message || statusText || error;
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.hideLoading();

  if (!res) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.showToast({
      title: '未知错误',
      icon: 'none'
    });
    return {};
  } // 保存本地数据


  if (res && statusCodeData === HTTP_STATUS.NOT_FOUND) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.showToast({
      title: messageData,
      icon: 'none'
    });
    return {};
  } else if (res && statusCodeData === HTTP_STATUS.BAD_GATEWAY) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.showToast({
      title: '服务端出现了问题',
      icon: 'none'
    });
    return {};
  } else if (res && (statusCodeData === HTTP_STATUS.FORBIDDEN || statusCodeData === HTTP_STATUS.AUTHENTICATE)) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.showToast({
      title: '没有权限！',
      icon: 'none'
    }); // Taro.setStorageSync('accessToken', '');

    var path = Object(_taroTools__WEBPACK_IMPORTED_MODULE_4__[/* getCurrentPageUrl */ "a"])();

    if (!_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getStorageSync('notlogin') && path !== 'subPackages/pages/login/index') {
      // !Taro.getStorageSync("notlogin") &&
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.showToast({
        title: '登录失效，请重新登录',
        icon: 'none',
        duration: 2000
      }).then(function (res) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.setStorageSync('notlogin', true); // Taro.navigateTo({
        //   url: "/subPackages/pages/login/index"
        // });
      });
    } else {// Taro.setStorageSync("notlogin", false);
    }

    return {};
  } else if (res && statusCodeData >= 400) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.showToast({
      title: Object.values(messageData[0])[0] || messageData,
      icon: 'none'
    });
    return resultData;
  } else if (res && statusCodeData >= 200 && statusCodeData < 300) {
    /** 本地缓存 */
    // store.set(urlKey, res.data);
    return resultData;
  }
};


/* unused harmony default export */ var _unused_webpack_default_export = (fetch);

/***/ }),

/***/ "../stores/src/utils/taroTools.ts":
/*!****************************************!*\
  !*** ../stores/src/utils/taroTools.ts ***!
  \****************************************/
/*! exports provided: getCurrentPageUrl */
/*! exports used: getCurrentPageUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCurrentPageUrl; });
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "../../node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);

function getCurrentPageUrl() {
  var pages = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.getCurrentPages();
  var currentPage = pages[pages.length - 1];
  var url = currentPage.route;
  return url;
}

/***/ }),

/***/ "../stores/src/vip.ts":
/*!****************************!*\
  !*** ../stores/src/vip.ts ***!
  \****************************/
/*! exports provided: VipStore */
/*! exports used: VipStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VipStore; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Store */ "../stores/src/Store.ts");







/*
 *   Copyright (c) 2020 Fu Yin
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */


var VipStore = /*#__PURE__*/function (_Store) {
  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(VipStore, _Store);

  var _super = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(VipStore);

  // rootStore;
  function VipStore() {
    var _this;

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, VipStore);

    _this = _super.call(this);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "api", {
      get: 'vip',
      gets: 'vips',
      post: 'vips',
      put: 'vips',
      patch: 'vips',
      delete: 'vips'
    });

    Object(mobx__WEBPACK_IMPORTED_MODULE_6__[/* makeObservable */ "c"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, _Store__WEBPACK_IMPORTED_MODULE_7__[/* StoreProps */ "a"])); // this.rootStore = // rootStore;

    return _this;
  }

  return VipStore;
}(_Store__WEBPACK_IMPORTED_MODULE_7__[/* default */ "b"]);

/***/ }),

/***/ "../stores/src/vipfinance.ts":
/*!***********************************!*\
  !*** ../stores/src/vipfinance.ts ***!
  \***********************************/
/*! exports provided: VipfinanceStore */
/*! exports used: VipfinanceStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VipfinanceStore; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Store */ "../stores/src/Store.ts");







/*
 *   Copyright (c) 2020 Fu Yin
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */


var VipfinanceStore = /*#__PURE__*/function (_Store) {
  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(VipfinanceStore, _Store);

  var _super = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(VipfinanceStore);

  // rootStore;
  function VipfinanceStore() {
    var _this;

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, VipfinanceStore);

    _this = _super.call(this);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "api", {
      get: 'vipfinance',
      gets: 'vipfinancees',
      post: 'vipfinancees',
      put: 'vipfinancees',
      patch: 'vipfinancees',
      delete: 'vipfinancees'
    });

    Object(mobx__WEBPACK_IMPORTED_MODULE_6__[/* makeObservable */ "c"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, _Store__WEBPACK_IMPORTED_MODULE_7__[/* StoreProps */ "a"])); // this.rootStore = // rootStore;

    return _this;
  }

  return VipfinanceStore;
}(_Store__WEBPACK_IMPORTED_MODULE_7__[/* default */ "b"]);

/***/ }),

/***/ "../stores/src/weapp.ts":
/*!******************************!*\
  !*** ../stores/src/weapp.ts ***!
  \******************************/
/*! exports provided: WeappStore */
/*! exports used: WeappStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeappStore; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Store */ "../stores/src/Store.ts");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/fetch */ "../stores/src/utils/fetch.tsx");










/*
 *   Copyright (c) 2020 Fu Yin
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */



var WeappStore = /*#__PURE__*/function (_Store) {
  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(WeappStore, _Store);

  var _super = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(WeappStore);

  // rootStore;
  function WeappStore() {
    var _this;

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, WeappStore);

    _this = _super.call(this);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "api", {
      get: 'weapp',
      gets: 'weapps',
      post: 'weapps',
      put: 'weapps',
      patch: 'weapps',
      delete: 'weapps'
    });

    Object(mobx__WEBPACK_IMPORTED_MODULE_9__[/* makeObservable */ "c"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, _Store__WEBPACK_IMPORTED_MODULE_10__[/* StoreProps */ "a"]), {}, {
      pushMessage: mobx__WEBPACK_IMPORTED_MODULE_9__[/* action */ "a"],
      getMessages: mobx__WEBPACK_IMPORTED_MODULE_9__[/* action */ "a"]
    })); // this.rootStore = // rootStore;

    return _this;
  }

  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(WeappStore, [{
    key: "pushMessage",
    value: // 消息推送
    function () {
      var _pushMessage = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_11__[/* fetch */ "a"])({
                  url: "/weapp/message/push",
                  data: data,
                  method: 'GET'
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function pushMessage(_x) {
        return _pushMessage.apply(this, arguments);
      }

      return pushMessage;
    }() // 订阅功能

  }, {
    key: "getMessages",
    value: function () {
      var _getMessages = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_11__[/* fetch */ "a"])({
                  url: "/weapp/messages",
                  data: data,
                  method: 'GET'
                });

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getMessages(_x2) {
        return _getMessages.apply(this, arguments);
      }

      return getMessages;
    }()
  }]);

  return WeappStore;
}(_Store__WEBPACK_IMPORTED_MODULE_10__[/* default */ "b"]);

/***/ }),

/***/ "../stores/src/wechat.ts":
/*!*******************************!*\
  !*** ../stores/src/wechat.ts ***!
  \*******************************/
/*! exports provided: WechatStore */
/*! exports used: WechatStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WechatStore; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Store */ "../stores/src/Store.ts");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/fetch */ "../stores/src/utils/fetch.tsx");










/*
 *   Copyright (c) 2020 Fu Yin
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */



var WechatStore = /*#__PURE__*/function (_Store) {
  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(WechatStore, _Store);

  var _super = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(WechatStore);

  // rootStore;
  function WechatStore() {
    var _this;

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, WechatStore);

    _this = _super.call(this);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "api", {
      get: 'wechat',
      gets: 'wechats',
      post: 'wechats',
      put: 'wechats',
      patch: 'wechats',
      delete: 'wechats'
    });

    Object(mobx__WEBPACK_IMPORTED_MODULE_9__[/* makeObservable */ "c"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, _Store__WEBPACK_IMPORTED_MODULE_10__[/* StoreProps */ "a"]), {}, {
      getQrcode: mobx__WEBPACK_IMPORTED_MODULE_9__[/* action */ "a"]
    })); // this.rootStore = // rootStore;

    return _this;
  }

  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(WechatStore, [{
    key: "getQrcode",
    value: function () {
      var _getQrcode = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
        return _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_11__[/* fetch */ "a"])({
                  url: "/wechat/qrcode",
                  data: data,
                  method: 'GET'
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getQrcode(_x) {
        return _getQrcode.apply(this, arguments);
      }

      return getQrcode;
    }()
  }]);

  return WechatStore;
}(_Store__WEBPACK_IMPORTED_MODULE_10__[/* default */ "b"]);

/***/ }),

/***/ "../stores/src/wechatIndex.ts":
/*!************************************!*\
  !*** ../stores/src/wechatIndex.ts ***!
  \************************************/
/*! exports provided: WechatIndexStore */
/*! exports used: WechatIndexStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WechatIndexStore; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx */ "../../node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Store */ "../stores/src/Store.ts");







/*
 *   Copyright (c) 2020 Fu Yin
 *   All rights reserved.

 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */


var WechatIndexStore = /*#__PURE__*/function (_Store) {
  Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(WechatIndexStore, _Store);

  var _super = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(WechatIndexStore);

  // rootStore;
  function WechatIndexStore() {
    var _this;

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, WechatIndexStore);

    _this = _super.call(this);

    Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "api", {
      get: 'wechat/index',
      gets: '',
      post: '',
      put: '',
      patch: '',
      delete: ''
    });

    Object(mobx__WEBPACK_IMPORTED_MODULE_6__[/* makeObservable */ "c"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, _Store__WEBPACK_IMPORTED_MODULE_7__[/* StoreProps */ "a"])); // this.rootStore = // rootStore;

    return _this;
  }

  return WechatIndexStore;
}(_Store__WEBPACK_IMPORTED_MODULE_7__[/* default */ "b"]);

/***/ }),

/***/ "../utils/src/W-baiduyy.ts":
/*!*********************************!*\
  !*** ../utils/src/W-baiduyy.ts ***!
  \*********************************/
/*! exports provided: openVoice */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openVoice", function() { return openVoice; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "../utils/node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);


var audioTeam = [];
var audioStartSwitch = false;
var getAudioUrl = 'https://tsn.baidu.com/text2audio';
/**
 * Copy from https://github.com/HuLuoQian/QS-baiduyy 浏览器调用语音合成接口 请参考 https://ai.baidu.com/docs#/TTS-API/41ac79a6
 * 强烈建议后端访问接口获取token返回给前端 client_id = API Key & client_secret = secret Key 获取token接口:
 * https://openapi.baidu.com/oauth/2.0/token?grant_type=client_credentials&client_id=uFYiXWMCiYvx68V4EVyCGeL8j4GAzXD5&client_secret=897Mm2qCj7bC1eHYVDxaWrO38FscTOHD
 */

function getBDVoicToken() {
  return new Promise(function (rs, rj) {
    console.log('准备访问接口获取语音token');
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.request({
      // 强烈建议此接口由后端访问并且维护token有效期，否则前端每次访问都会刷新token
      //此url为专门插件测试预览用的key和secret key， 请替换为自己申请的key
      url: 'https://openapi.baidu.com/oauth/2.0/token',
      method: 'POST',
      //建议使用post访问
      // data: 'grant_type=client_credentials&client_id=nm6Os9qqOacgxXjKv8PIp45H&client_secret=BXHhGIpNU7Wi3GDYUt0AGY5cWbWklrov',
      data: 'grant_type=client_credentials&client_id=0RG4p2GGmSgf6dsrDpSGZMxV&client_secret=28ZbXQAei8IKOFnVob633AgXCxfcjfR4',
      header: {
        'content-type': 'application/json; charset=utf-8' // "content-type": "application/x-www-form-urlencoded"

      },
      success: function success(res) {
        console.log('访问成功');
        rs(res);
      },
      fail: function fail(err) {
        console.log('访问失败');
        rj(err);
      }
    });
  });
}

function openVoice(objs) {
  // 传入需转为语音的文本内容
  var lineUp = false;
  var returnAudio = false;

  if (typeof objs !== 'string') {
    if (objs && objs.lineUp === true) {
      lineUp = true;
    }

    if (objs && objs.returnAudio === true) {
      returnAudio = true;
    }
  }

  if (returnAudio) {
    return new Promise(function (resolve, reject) {
      openVoiceFc(objs, returnAudio).then(function (res) {
        resolve(res);
      }).catch(function (err) {
        reject(err);
      });
    });
  }

  if (!audioStartSwitch || lineUp) {
    audioStartSwitch = true;
    return openVoiceFc(objs, false);
  } else {
    return audioTeam.push(objs);
  }
}

function openVoiceFc(objs, returnAudio) {
  console.log('准备获取语音tok');

  if (returnAudio) {
    return new Promise(function (resolve, reject) {
      getBDVoicToken().then(function (res) {
        console.log('获取语音tok接口成功');

        if (res.data && res.data.access_token) {
          console.log('token: ' + res.data.access_token);
          resolve(tts(objs, res.data.access_token, returnAudio));
        } else {
          console.log('获取语音tok接口为空');
          reject('获取语音tok接口为空');
        }
      }).catch(function (err) {
        console.log('获取语音tok接口失败');
        reject(err || '获取语音tok接口失败');
      });
    });
  } else {
    getBDVoicToken().then(function (res) {
      console.log('获取语音tok接口成功');

      if (res.data && res.data.access_token) {
        console.log('token: ' + res.data.access_token);
        tts(objs, res.data.access_token, false);
      } else {
        console.log('获取语音tok接口为空');
      }
    }).catch(function (err) {
      console.log('获取语音tok接口失败', err);
    });
  }
}

function tts(objs, tok, returnAudio) {
  if (typeof objs == 'string') objs = {
    voiceSet: {
      tex: objs
    }
  };

  var data = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    tok: tok,
    cuid: tok,
    ctp: 1,
    lan: 'zh'
  }, objs.voiceSet);

  if (returnAudio) return btts(data, objs.audioSet, objs.audioCallback, objs.lineUp, returnAudio);
  btts(data, objs.audioSet, objs.audioCallback, objs.lineUp, returnAudio);
}

function setAudioSet(options, audio) {
  if (options) {
    audio.volume = options.volume || 1;
    audio.startTime = options.startTime || 0;
    audio.loop = options.loop || false;
    audio.obeyMuteSwitch = options.obeyMuteSwitch && typeof options.obeyMuteSwitch == 'boolean' ? options.obeyMuteSwitch : true; //支持微信小程序、百度小程序、头条小程序
  }
}

function btts(param, options, audioCallback, lineUp, returnAudio) {
  var audio = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.createInnerAudioContext();
  setAudioSet(options, audio); // 序列化参数列表

  var fd = [];

  for (var k in param) {
    fd.push(k + '=' + encodeURIComponent(encodeURIComponent(param[k])));
  }

  audio.src = "".concat(getAudioUrl, "?").concat(fd.join('&'));

  if (returnAudio) {
    audio.onEnded(function () {
      console.log('音频播放结束');
      console.log('销毁音频实例');
      audio.destroy(); //销毁音频实例
      // audio = null;
    });
    audio.onError(function (e) {
      if (audioCallback && audioCallback.onError && typeof audioCallback.onError == 'function') audioCallback.onError(e);
      console.log('音频播放错误: ' + JSON.stringify(e));
      console.log('销毁音频实例');
      audio.destroy(); //销毁音频实例
      // audio = null;
    });
    return audio;
  }

  audio.onPlay(function () {
    console.log('音频播放开始');
    if (audioCallback && audioCallback.onPlay && typeof audioCallback.onPlay == 'function') audioCallback.onPlay();
  });
  audio.onPause(function () {
    if (audioCallback && audioCallback.onPause && typeof audioCallback.onPause == 'function') audioCallback.onPause();
  });
  audio.onWaiting(function () {
    if (audioCallback && audioCallback.onWaiting && typeof audioCallback.onWaiting == 'function') audioCallback.onWaiting();
  });
  audio.onStop(function () {
    if (audioCallback && audioCallback.onStop && typeof audioCallback.onStop == 'function') audioCallback.onStop();
  });
  audio.onTimeUpdate(function () {
    if (audioCallback && audioCallback.onTimeUpdate && typeof audioCallback.onTimeUpdate == 'function') audioCallback.onTimeUpdate();
  });
  audio.onSeeking(function () {
    if (audioCallback && audioCallback.onSeeking && typeof audioCallback.onSeeking == 'function') audioCallback.onSeeking();
  });
  audio.onSeeked(function () {
    if (audioCallback && audioCallback.onSeeked && typeof audioCallback.onSeeked == 'function') audioCallback.onSeeked();
  });
  audio.onEnded(function () {
    console.log('音频播放结束');
    console.log('销毁音频实例');
    audio.destroy(); //销毁音频实例
    // audio = null;

    if (audioCallback && audioCallback.onEnded && typeof audioCallback.onEnded == 'function') audioCallback.onEnded();

    if (lineUp !== false) {
      if (audioTeam.length > 0) {
        console.log('队列中');
        openVoiceFc(audioTeam[0], false);
        audioTeam.splice(0, 1);
      } else {
        console.log('队列为零');
        audioStartSwitch = false;
      }
    }
  });
  audio.onError(function (e) {
    if (audioCallback && audioCallback.onError && typeof audioCallback.onError == 'function') audioCallback.onError(e);
    console.log('音频播放错误: ' + JSON.stringify(e));
    console.log('销毁音频实例');
    audio.destroy(); //销毁音频实例
    // audio = null;
  });
  audio.play();
}
/**
 * # 下载示例项目, 拖进项目即可运行
 *
 * # 插件简介
 *
 * 非常轻便使用的语音合成接口，一般用于对推送过来的消息进行语音播报
 *
 * 1、新增测试url， 运行项目即可体验，因为是测试的，并且是前端直接获取token，如果有多人同时使用，则有可能播放失败，换成自己的并且token由后端维护就好 | 案例运行npm i安装依赖
 *
 * # 1. 注意
 *
 * 1、`强烈建议token的获取与维护交由后端`, 在获取token的接口中有返回expires_in, 该参数为token有效期，文档中token有效期为30天，后端可以每一段时间获取一次<br />
 * 2、该api接口QPS限制(每秒查询率)是100，详见百度云文档, 若不够用请看2.<br /> 3、默认开启语音队列机制
 *
 * # 2.当QPS限制100不够用时
 *
 * 当QPS限制100不够用时, `可以在百度云多创建几个应用`, 后端同时维护多个token，前端访问时可以按顺序返回token
 *
 * # 3. 百度语音合成接口使用说明
 *
 * 注：需先在百度云注册账号并创建应用（内有文档地址），获得API Key和Secret Key并填入js的url地址中, `强烈建议由后端访问并维护token`
 *
 * ## 引入js
 *
 * ```javascript
 * import Voice from 'W-baiduyy.js';
 * ```
 *
 * ### 使用
 *
 * ```javascript
 * Voice('想要播报的内容');
 * ```
 *
 * # 4.参数说明
 *
 * ## 4.0.1 String类型
 *
 * ```javascript
 * 示例代码: Voice('想要播报的内容');
 * ```
 *
 * ## 4.0.2 Object类型
 *
 * ```javascript
 * 示例代码:
 * Voice({
 *   voiceSet: {
 *     tex: '想要播报的内容'
 *   },
 *   audioSet: {
 *     volume: 1
 *   },
 *   audioCallback: {
 *     o-n-P-l-a-y: ()=>{   //属性名去掉 - , 不知道为什么全名显示不了
 *       console.log('音频开始播放了')
 *     }
 *   }
 *   lineUp: true   // 加入语音队列
 *   returnAudio: false  // 返回音频对象
 * })
 * ```
 *
 * | 属性名        | 是否必填 | 参数类型 | 默认值 |                 说明 |
 * | ------------- | -------- | -------- | ------ | -------------------: |
 * | voiceSet      | 是       | Object   |        |     百度接口参数设置 |
 * | audioSet      |          | Object   |        |     音频组件参数设置 |
 * | audioCallback |          | Object   |        | 音频组件回调函数设置 |
 * | lineUp        |          | Boolean  | true   |     是否加入语音队列 |
 * | returnAudio   |          | Boolean  | false  |     是否返回音频对象 |
 *
 * ### voiceSet参数详解
 *
 * | 属性名 | 是否必填 | 参数类型 | 默认值 |                                                                                                                     说明 |
 * | ------ | -------- | -------- | ------ | -----------------------------------------------------------------------------------------------------------------------: |
 * | tex    | 是       | String   |        | 合成的文本，使用 UTF-8 编码。小于 2048 个中文字或者英文数字。（文本在百度服务器内转换为 GBK 后，长度必须小于 4096 字节） |
 * | spd    |          | Number   | 5      |                                                                                         语速，取值 0-15，默认为 5 中语速 |
 * | pit    |          | Number   | 5      |                                                                                         音调，取值 0-15，默认为 5 中语调 |
 * | vol    |          | Number   | 5      |                                                                                         音量，取值 0-15，默认为 5 中音量 |
 * | per    |          | Number   | 0      |                         发音人选择, 0 为普通女声，1 为普通男生，3 为情感合成-度逍遥，4 为情感合成-度丫丫，默认为普通女声 |
 *
 * ### audioSet参数详解
 *
 * | 属性名         | 是否必填 | 参数类型 | 默认值 |                                                                                                                                    说明 |
 * | -------------- | -------- | -------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------: |
 * | volume         |          | Number   | 1      |                                                                                                                          音量。范围 0~1 |
 * | startTime      |          | Number   | 0      |                                                                                                       开始播放的位置（单位：s），默认 0 |
 * | loop           |          | Boolean  | false  |                                                                                                                是否循环播放，默认 false |
 * | obeyMuteSwitch |          | Boolean  | true   | 是否遵循系统静音开关，当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音，默认值 true （微信小程序、百度小程序、头条小程序） |
 *
 * ### audioCallback参数详解
 *
 *     详见官方-innerAudioContext 对象的方法列表中的on事件(除onCanplay外)
 *
 * ### lineUp参数详解
 *
 *     lineUp-是否加入语音队列
 *     若为true则加入语音队列，当正在播放语音时，有推送过来的消息要进行语音播报，则先等上一个音频播放完后再继续播放下一个
 *
 * ### returnAudio参数详解
 *
 *     若传returnAudio为true， 会返回一个最终返回音频对象的Promise对象， 若采用此方式，则不会加入语音队列，并且音频状态的监听需要自己得到音频对象后加上，默认是监听停止或错误后移除此对象
 */

/***/ }),

/***/ "../utils/src/fetch.tsx":
/*!******************************!*\
  !*** ../utils/src/fetch.tsx ***!
  \******************************/
/*! exports provided: HTTP_STATUS, REFRESH_STATUS, codeMessage, fetch, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_STATUS", function() { return HTTP_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REFRESH_STATUS", function() { return REFRESH_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeMessage", function() { return codeMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "../utils/node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qs */ "../utils/node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "../utils/node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _taroTools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taroTools */ "../utils/src/taroTools.ts");





var HTTP_STATUS = {
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NON_AUTHORITATIVE_INFORMATION: 203,
  NO_CONTENT: 204,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504
};
var REFRESH_STATUS = {
  NORMAL: 0,
  REFRESHING: 1,
  NO_MORE_DATA: 2
};
var codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
};
/**
 * Fetch
 *
 * Const API_URL = Taro.getStorageSync('API_URL') || '';
 *
 * @param url
 * @param options https://taro-docs.jd.com/taro/docs/apis/network/request/request/
 */

function fetch(_ref) {
  var _ref$url = _ref.url,
      url = _ref$url === void 0 ? '' : _ref$url,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data,
      _ref$method = _ref.method,
      method = _ref$method === void 0 ? 'GET' : _ref$method;
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.showLoading({
    title: '加载中...'
  });
  var API_URL = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getStorageSync('API_URL') || '';
  url = "".concat(API_URL).concat(url);
  console.log('url', url);

  if (method.toUpperCase() === 'GET') {
    url = Object.keys(data).length && Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(data) === 'object' ? "".concat(url, "?").concat(qs__WEBPACK_IMPORTED_MODULE_2__["stringify"](data)) : url;
    data = {};
  } else {
    data = JSON.stringify(data);
  }

  var authenticate = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('accessToken') || _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getStorageSync('accessToken');
  var apikey = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('APIKey') || _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getStorageSync('APIKey');
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.request({
    url: url,
    // mode: 'no-cors',
    // credentials: 'include',
    data: data,
    method: method,
    header: Object.assign({
      'content-type': 'application/json; charset=utf-8'
    }, !!apikey ? {
      'X-Api-Key': "APIKey ".concat(apikey)
    } : {}, !!authenticate ? {
      Authorization: "Bearer ".concat(authenticate)
    } : {})
  }).then(function (res) {
    return fatchCallback(res);
  }).catch(function (err) {
    return fatchCallback(err);
  });
}

var fatchCallback = function fatchCallback(res) {
  var status = res.status,
      statusText = res.statusText,
      error = res.error,
      page = res.page,
      resultData = res.data;

  var _ref2 = resultData || {},
      statusCode = _ref2.statusCode,
      message = _ref2.message,
      _ref2$data = _ref2.data,
      data = _ref2$data === void 0 ? undefined : _ref2$data;

  var statusCodeData = statusCode || status;
  var messageData = message || statusText || error;
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.hideLoading();

  if (!res) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.showToast({
      title: '未知错误',
      icon: 'none'
    });
    return {};
  } // 保存本地数据


  if (res && statusCodeData === HTTP_STATUS.NOT_FOUND) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.showToast({
      title: messageData,
      icon: 'none'
    });
    return {};
  } else if (res && statusCodeData === HTTP_STATUS.BAD_GATEWAY) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.showToast({
      title: '服务端出现了问题',
      icon: 'none'
    });
    return {};
  } else if (res && (statusCodeData === HTTP_STATUS.FORBIDDEN || statusCodeData === HTTP_STATUS.AUTHENTICATE)) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.showToast({
      title: '没有权限！',
      icon: 'none'
    });
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.setStorageSync('accessToken', '');
    var path = Object(_taroTools__WEBPACK_IMPORTED_MODULE_4__[/* getCurrentPageUrl */ "a"])();

    if (!_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getStorageSync('notlogin') && path !== '/pages/login/index') {
      // !Taro.getStorageSync("notlogin") &&
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.showToast({
        title: '登录失效，请重新登录',
        icon: 'none',
        duration: 2000
      }).then(function (res) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.setStorageSync('notlogin', true);
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.navigateTo({
          url: '/pages/login/index'
        });
      });
    } else {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.setStorageSync('notlogin', false);
    }

    return {};
  } else if (res && statusCodeData >= 400) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.showToast({
      title: messageData,
      icon: 'none'
    });
    return {};
  } else if (res && statusCodeData >= 200 && statusCodeData < 300) {
    /** 本地缓存 */
    // store.set(urlKey, res.data);
    return resultData;
  }
};


/* harmony default export */ __webpack_exports__["default"] = (fetch);

/***/ }),

/***/ "../utils/src/router.tsx":
/*!*******************************!*\
  !*** ../utils/src/router.tsx ***!
  \*******************************/
/*! exports provided: router, Link, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../utils/node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "../utils/node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "../utils/node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "../utils/node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);


var _excluded = ["url", "text"];




var router = {
  navigateTo: function navigateTo(object) {
    if (false) {} else {
      if (/^(http(s)?:)?\/\//.test(object.url)) {
        object.url = "/subPackages/pages/webview/index?url=".concat(object.url);
      }

      if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getCurrentPages().length > 9) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.redirectTo(object);
      } else {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.navigateTo(object);
      }
    }
  },
  // 其他跳转不处理
  navigateBack: function navigateBack(object) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.navigateBack(object);
  },
  switchTab: function switchTab(object) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.switchTab(object);
  },
  redirectTo: function (_redirectTo) {
    function redirectTo(_x) {
      return _redirectTo.apply(this, arguments);
    }

    redirectTo.toString = function () {
      return _redirectTo.toString();
    };

    return redirectTo;
  }(function (object) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.redirectTo(object);
  }),
  reLaunch: function reLaunch(object) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.reLaunch(object);
  }
};
var Link = function Link(_ref) {
  var url = _ref.url,
      text = _ref.text,
      props = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, _excluded);

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Button */ "a"], Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    onClick: function onClick() {
      router.navigateTo({
        url: url
      });
    }
  }, props), {}, {
    children: text
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "../utils/src/taroTools.ts":
/*!*********************************!*\
  !*** ../utils/src/taroTools.ts ***!
  \*********************************/
/*! exports provided: getCurrentPageUrl */
/*! exports used: getCurrentPageUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCurrentPageUrl; });
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "../utils/node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);

function getCurrentPageUrl() {
  var pages = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.getCurrentPages();
  var currentPage = pages[pages.length - 1];
  var url = currentPage.route;
  return url;
}

/***/ }),

/***/ "../utils/src/useQuery.ts":
/*!********************************!*\
  !*** ../utils/src/useQuery.ts ***!
  \********************************/
/*! exports provided: useSafeSetState, useQuery, useQueryWithStore */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSafeSetState", function() { return useSafeSetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return useQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useQueryWithStore", function() { return useQueryWithStore; });
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../utils/node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetch */ "../utils/src/fetch.tsx");





function useSafeSetState(initialState) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(initialState),
      _useState2 = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var mountedRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    mountedRef.current = true;
    return function () {
      mountedRef.current = false;
    };
  }, []);
  var safeSetState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (args) {
    if (mountedRef.current) {
      return setState(args);
    }
  }, [mountedRef, setState]);
  return [state, safeSetState];
}
var useQuery = function useQuery(query) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _query$method = query.method,
      method = _query$method === void 0 ? 'GET' : _query$method,
      url = query.url,
      _query$body = query.body,
      body = _query$body === void 0 ? {} : _query$body;

  var otherOptions = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, options); // const version = userVersion();


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState4 = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState3, 2),
      innerVersion = _useState4[0],
      setInnerVersion = _useState4[1];

  var refetch = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    setInnerVersion(function (preInnerVersion) {
      return preInnerVersion + 1;
    });
  }, []);
  var requestSignature = JSON.stringify({
    query: query,
    options: otherOptions,
    // version,
    innerVersion: innerVersion
  });

  var _useSafeSetState = useSafeSetState({
    data: undefined,
    error: null,
    loading: true,
    loaded: false,
    refetch: refetch
  }),
      _useSafeSetState2 = Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useSafeSetState, 2),
      state = _useSafeSetState2[0],
      setState = _useSafeSetState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setState(function (prevState) {
      return Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_x_yuansheng_editor_packages_template_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, prevState), {}, {
        loading: true
      });
    });
    Object(_fetch__WEBPACK_IMPORTED_MODULE_4__["default"])({
      url: url,
      data: body,
      method: method
    }).then(function (result) {
      setState({
        data: result.data,
        loading: false,
        loaded: true,
        refetch: refetch
      });
    }).catch(function (error) {
      setState({
        error: error,
        loading: false,
        loaded: false,
        refetch: refetch
      });
    });
  }, [requestSignature, setState]);
  return state;
};
var useQueryWithStore = function useQueryWithStore() {
  return {
    data: '',
    loading: '',
    error: ''
  };
};

/***/ }),

/***/ "./src/base/RootStoreProvider.tsx":
/*!****************************************!*\
  !*** ./src/base/RootStoreProvider.tsx ***!
  \****************************************/
/*! exports provided: getRootStore, RootStoreContext, useRootStore, RootStoreProvider */
/*! exports used: RootStoreProvider, useRootStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getRootStore */
/* unused harmony export RootStoreContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useRootStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootStoreProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ysyp_stores_dist_RootStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ysyp/stores/dist/RootStore */ "../stores/src/RootStore.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);

 // single root store instance


var rootStoreInstance = new _ysyp_stores_dist_RootStore__WEBPACK_IMPORTED_MODULE_1__[/* RootStore */ "a"](); // expose the store

var getRootStore = function getRootStore() {
  return rootStoreInstance;
};
var RootStoreContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(rootStoreInstance); // Root store wrapped in a React context.
// 新建钩子函数：获取上下文中的数据（Store 对象）

var useRootStore = function useRootStore() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(RootStoreContext);
}; // 新建组件：通过 Provider 传递上下文中的数据

var RootStoreProvider = function RootStoreProvider(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(RootStoreContext.Provider, {
    value: rootStoreInstance,
    children: children
  });
};

/***/ }),

/***/ "./src/base/richtext/base.ts":
/*!***********************************!*\
  !*** ./src/base/richtext/base.ts ***!
  \***********************************/
/*! exports provided: baseCssToJs, getBasegetCssToJs */
/*! exports used: getBasegetCssToJs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export baseCssToJs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getBasegetCssToJs; });
var baseCssToJs = {
  html: "\n    display: block;\n  ",
  head: "\n    display: none;\n  ",
  meta: "\n    display: none;\n  ",
  title: "\n    display: none;\n  ",
  link: "\n    display: none;\n  ",
  style: "\n    display: none;\n  ",
  script: "\n    display: none;\n  ",
  body: "\n    display: block;\n    margin: 8px;\n  ",
  p: "\n    display: block;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n    margin-inline-start: 0;\n    margin-inline-end: 0;\n  ",
  div: "\n    display: block;\n  ",
  layer: "\n    display: block;\n  ",
  article: "\n    display: block;\n  ",
  aside: "\n    display: block;\n  ",
  footer: "\n    display: block;\n  ",
  header: "\n    display: block;\n  ",
  hgroup: "\n    display: block;\n  ",
  main: "\n    display: block;\n  ",
  nav: "\n    display: block;\n  ",
  section: "\n    display: block;\n  ",
  marquee: "\n    display: inline-block;\n    width: -webkit-fill-available;\n  ",
  address: "\n    display: block;\n    font-style: italic;\n  ",
  blockquote: "\n    display: block;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n    margin-inline-start: 40px;\n    margin-inline-end: 40px;\n  ",
  figcaption: "\n    display: block;\n  ",
  figure: "\n    display: block;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n    margin-inline-start: 40px;\n    margin-inline-end: 40px;\n  ",
  q: "\n    display: inline;\n  ",
  center: "\n    display: block;\n    text-align: -webkit-center;\n  ",
  hr: "\n    display: block;\n    overflow: hidden;\n    unicode-bidi: isolate;\n    margin-block-start: 0.5em;\n    margin-block-end: 0.5em;\n    margin-inline-start: auto;\n    margin-inline-end: auto;\n    border-style: inset;\n    border-width: 1px;\n  ",
  map: "\n    display: inline;\n  ",
  video: "\n    object-fit: contain;\n  ",
  h1: "\n    display: block;\n    font-size: 2em;\n    margin-block-start: 0.67em;\n    margin-block-end: 0.67em;\n    margin-inline-start: 0;\n    margin-inline-end: 0;\n    font-weight: bold;\n  ",
  h2: "\n    display: block;\n    font-size: 1.5em;\n    margin-block-start: 0.83em;\n    margin-block-end: 0.83em;\n    margin-inline-start: 0;\n    margin-inline-end: 0;\n    font-weight: bold;\n  ",
  h3: "\n    display: block;\n    font-size: 1.17em;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n    margin-inline-start: 0;\n    margin-inline-end: 0;\n    font-weight: bold;\n  ",
  h4: "\n    display: block;\n    margin-block-start: 1.33em;\n    margin-block-end: 1.33em;\n    margin-inline-start: 0;\n    margin-inline-end: 0;\n    font-weight: bold;\n  ",
  h5: "\n    display: block;\n    font-size: 0.83em;\n    margin-block-start: 1.67em;\n    margin-block-end: 1.67em;\n    margin-inline-start: 0;\n    margin-inline-end: 0;\n    font-weight: bold;\n  ",
  h6: "\n    display: block;\n    font-size: 0.67em;\n    margin-block-start: 2.33em;\n    margin-block-end: 2.33em;\n    margin-inline-start: 0;\n    margin-inline-end: 0;\n    font-weight: bold;\n  ",
  table: "\n    display: table;\n    border-collapse: separate;\n    border-spacing: 2px;\n    border-color: gray;\n    box-sizing: border-box;\n    text-indent: initial;\n  ",
  thead: "\n    display: table-header-group;\n    vertical-align: middle;\n    border-color: inherit;\n  ",
  tbody: "\n    display: table-row-group;\n    vertical-align: middle;\n    border-color: inherit;\n  ",
  tfoot: "\n    display: table-footer-group;\n    vertical-align: middle;\n    border-color: inherit;\n  ",
  tr: "\n    vertical-align: middle;\n    display: table-row;\n    vertical-align: inherit;\n    border-color: inherit;\n  ",
  col: "\n    display: table-column;\n  ",
  colgroup: "\n    display: table-column-group;\n  ",
  td: "\n    display: table-cell;\n    vertical-align: inherit;\n  ",
  th: "\n    display: table-cell;\n    vertical-align: inherit;\n    font-weight: bold;\n    text-align: -internal-center;\n  ",
  caption: "\n    display: table-caption;\n    text-align: -webkit-center;\n  ",
  ul: "\n    display: block;\n    list-style-type: disc;\n    margin: 0;\n    padding: 0 1em;\n  ",
  menu: "\n    display: block;\n    list-style-type: disc;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n    margin-inline-start: 0;\n    margin-inline-end: 0;\n    padding-inline-start: 40px;\n  ",
  dir: "\n    display: block;\n    list-style-type: disc;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n    margin-inline-start: 0;\n    margin-inline-end: 0;\n    padding-inline-start: 40px;\n  ",
  ol: "\n    display: block;\n    list-style-type: decimal;\n    margin: 0;\n    padding: 0 1em;\n  ",
  li: "\n    display: list-item;\n    text-align: -webkit-match-parent;\n    margin: 0;\n    padding: 0;\n  ",
  dd: "\n    display: block;\n    margin-inline-start: 40px;\n  ",
  dl: "\n    display: block;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n    margin-inline-start: 0;\n    margin-inline-end: 0;\n  ",
  dt: "\n    display: block;\n  ",
  form: "\n    display: block;\n    margin-top: 0em;\n  ",
  label: "\n    cursor: default;\n  ",
  legend: "\n    display: block;\n    padding-inline-start: 2px;\n    padding-inline-end: 2px;\n    border: none;\n  ",
  fieldset: "\n    display: block;\n    margin-inline-start: 2px;\n    margin-inline-end: 2px;\n    padding-block-start: 0.35em;\n    padding-inline-start: 0.75em;\n    padding-inline-end: 0.75em;\n    padding-block-end: 0.625em;\n    border: 2px groove ThreeDFace;\n    min-inline-size: min-content;\n  ",
  button: "\n    appearance: auto;\n    -webkit-writing-mode: horizontal-tb !important;\n    margin: 0em;\n    font: -webkit-small-control;\n    text-rendering: auto;\n    color: black;\n    letter-spacing: normal;\n    word-spacing: normal;\n    line-height: normal;\n    text-transform: none;\n    text-indent: 0;\n    text-shadow: none;\n    display: inline-block;\n    text-align: start;\n  ",
  textarea: "\n    -webkit-writing-mode: horizontal-tb !important;\n    margin: 0em;\n    font: -webkit-small-control;\n    text-rendering: auto;\n    color: black;\n    letter-spacing: normal;\n    word-spacing: normal;\n    line-height: normal;\n    text-transform: none;\n    text-indent: 0;\n    text-shadow: none;\n    display: inline-block;\n    text-align: start;\n    appearance: auto;\n    border: 1px solid #767676;\n    column-count: initial !important;\n    -webkit-rtl-ordering: logical;\n    resize: auto;\n    cursor: text;\n    padding: 2px;\n    white-space: pre-wrap;\n    word-wrap: break-word;\n    background-color: #ffffff;\n    font-family: monospace;\n  ",
  input: "\n    -webkit-writing-mode: horizontal-tb !important;\n    margin: 0em;\n    font: -webkit-small-control;\n    text-rendering: auto;\n    color: black;\n    letter-spacing: normal;\n    word-spacing: normal;\n    line-height: normal;\n    text-transform: none;\n    text-indent: 0;\n    text-shadow: none;\n    display: inline-block;\n    text-align: start;\n    appearance: auto;\n    padding: 1px 0;\n    border: 2px inset #767676;\n    -webkit-rtl-ordering: logical;\n    cursor: text;\n    background-color: #ffffff;\n  ",
  datalist: "\n    display: none;\n  ",
  area: "\n    display: inline;\n  ",
  param: "\n    display: none;\n  ",
  select: "\n    appearance: auto;\n    box-sizing: border-box;\n    align-items: center;\n    white-space: pre;\n    -webkit-rtl-ordering: logical;\n    color: black;\n    background-color: #ffffff;\n    border: 1px solid #767676;\n    cursor: default;\n    border-radius: 0;\n    -webkit-writing-mode: horizontal-tb !important;\n    margin: 0em;\n    font: -webkit-small-control;\n    text-rendering: auto;\n    color: black;\n    letter-spacing: normal;\n    word-spacing: normal;\n    line-height: normal;\n    text-transform: none;\n    text-indent: 0;\n    text-shadow: none;\n    display: inline-block;\n    text-align: start;\n  ",
  optgroup: "\n    font-weight: bolder;\n    display: block;\n  ",
  option: "\n    font-weight: normal;\n    display: block;\n    padding: 0 2px 1px 2px;\n    white-space: nowrap;\n    min-height: 1.2em;\n  ",
  selectmenu: "\n    display: inline-block;\n  ",
  output: "\n    display: inline;\n    unicode-bidi: isolate;\n  ",
  meter: "\n    -webkit-writing-mode: horizontal-tb !important;\n    appearance: auto;\n    box-sizing: border-box;\n    display: inline-block;\n    height: 1em;\n    width: 5em;\n    vertical-align: -0.2em;\n    -webkit-user-modify: read-only !important;\n  ",
  progress: "\n    -webkit-writing-mode: horizontal-tb !important;\n    appearance: auto;\n    box-sizing: border-box;\n    display: inline-block;\n    height: 1em;\n    width: 10em;\n    vertical-align: -0.2em;\n  ",
  u: "\n    text-decoration: underline;\n  ",
  ins: "\n    text-decoration: underline;\n  ",
  strong: "\n    font-weight: bold;\n  ",
  b: "\n    font-weight: bold;\n  ",
  i: "\n    font-style: italic;\n  ",
  cite: "\n    font-style: italic;\n  ",
  em: "\n    font-style: italic;\n  ",
  var: "\n    font-style: italic;\n  ",
  dfn: "\n    font-style: italic;\n  ",
  tt: "\n    font-family: monospace;\n  ",
  code: "\n    font-family: monospace;\n  ",
  kbd: "\n    font-family: monospace;\n  ",
  samp: "\n    font-family: monospace;\n  ",
  pre: "\n    display: block;\n    font-family: monospace;\n    white-space: pre;\n    margin: 1em 0;\n  ",
  xmp: "\n    display: block;\n    font-family: monospace;\n    white-space: pre;\n    margin: 1em 0;\n  ",
  plaintext: "\n    display: block;\n    font-family: monospace;\n    white-space: pre;\n    margin: 1em 0;\n  ",
  listing: "\n    display: block;\n    font-family: monospace;\n    white-space: pre;\n    margin: 1em 0;\n  ",
  mark: "\n    background-color: yellow;\n    color: black;\n  ",
  big: "\n    font-size: larger;\n  ",
  small: "\n    font-size: smaller;\n  ",
  s: "\n    text-decoration: line-through;\n  ",
  strike: "\n    text-decoration: line-through;\n  ",
  del: "\n    text-decoration: line-through;\n  ",
  sub: "\n    vertical-align: sub;\n    font-size: smaller;\n  ",
  sup: "\n    vertical-align: super;\n    font-size: smaller;\n  ",
  nobr: "\n    white-space: nowrap;\n  ",
  ruby: "\n    text-indent: 0;\n  ",
  rt: "\n    text-indent: 0;\n    line-height: normal;\n    -webkit-text-emphasis: none;\n    display: block;\n    font-size: 50%;\n    text-align: start;\n  ",
  rp: "\n    display: none;\n  ",
  noframes: "\n    display: none;\n  ",
  frameset: "\n    display: block;\n    border-color: inherit;\n  ",
  frame: "\n    display: block;\n  ",
  iframe: "\n    border: 2px inset;\n  ",
  details: "\n    display: block;\n  ",
  summary: "\n    display: block;\n  ",
  template: "\n    display: none;\n  ",
  bdi: "\n    unicode-bidi: isolate;\n  ",
  bdo: "\n    unicode-bidi: bidi-override;\n  ",
  dialog: "\n    display: block;\n    position: absolute;\n    left: 0;\n    right: 0;\n    width: fit-content;\n    height: fit-content;\n    margin: auto;\n    border: solid;\n    padding: 1em;\n    background: white;\n    color: black;\n  ",
  slot: "\n    display: contents;\n  "
};
var getBasegetCssToJs = function getBasegetCssToJs(key) {
  return baseCssToJs[key] || '';
};

/***/ }),

/***/ "./src/base/richtext/css.ts":
/*!**********************************!*\
  !*** ./src/base/richtext/css.ts ***!
  \**********************************/
/*! exports provided: cssTojs, getCssToJs */
/*! exports used: getCssToJs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export cssTojs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCssToJs; });
var cssTojs = {
  h1: "margin-block-start: 0;\n\tmargin-block-end: 0;",
  h2: "margin-block-start: 0;\n\tmargin-block-end: 0;\n\tcolor: #333;",
  h3: "margin-block-start: 0;\n\tmargin-block-end: 0;",
  code: "background-color: rgba(97, 97, 97, 0.1);\n\tcolor: #616161;\n  color: inherit;\n\tbackground: none;\n\tfont-size: 0.6rem;",
  p: "margin: 1em 0;\n\t",
  pre: "background: #0D0D0D;\n\tcolor: #FFF;\n\tfont-family: 'JetBrainsMono', monospace;\n\tpadding: 0.5rem 0.75rem;\n\tborder-radius: 0.3rem;",
  img: "width: 100%;\n  max-width:100%;\n  height:auto;\n  display:block;\n  margin-top:0;\n  margin-bottom:0;",
  ul: "margin: 0;",
  ol: "margin: 0;",
  li: "margin: 0;",
  blockquote: "padding-left: 1rem;\n\tmargin: 0;\n\tborder-left: 2px solid rgba(13, 13, 13, 0.1);",
  hr: "border: none;\n\tborder-top: 2px solid rgba(13, 13, 13, 0.1);\n\tmargin: 1rem 0;",
  table: "border-collapse: collapse;\n\ttable-layout: fixed;\n\twidth: 100%;\n\tmargin: 0;\n\toverflow: hidden;",
  td: "min-width: 1em;\n\tborder: 1px solid #ced4da;\n\tpadding: 3px 5px;\n\tvertical-align: top;\n\tbox-sizing: border-box;\n\tposition: relative;",
  th: "min-width: 1em;\n\tborder: 1px solid #ced4da;\n\tpadding: 3px 5px;\n\tvertical-align: top;\n\tbox-sizing: border-box;\n\tposition: relative;\n  font-weight: bold;\n\ttext-align: left;\n\tbackground-color: #f1f3f5;"
};
var getCssToJs = function getCssToJs(key) {
  return cssTojs[key] || '';
};

/***/ }),

/***/ "./src/base/richtext/richtext-format.ts":
/*!**********************************************!*\
  !*** ./src/base/richtext/richtext-format.ts ***!
  \**********************************************/
/*! exports provided: formatRichText, addClassAndStyle */
/*! exports used: addClassAndStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export formatRichText */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addClassAndStyle; });
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css */ "./src/base/richtext/css.ts");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/base/richtext/base.ts");


function formatRichText(html) {
  var newContent = html.replace(/]*>/gi, function (match, capture) {
    match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
    match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
    match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
    return match;
  });
  newContent = newContent.replace(/style="[^"]+"/gi, function (match, capture) {
    match = match.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(/width:[^;]+;/gi, 'max-width:100%;');
    return match;
  });
  newContent = newContent.replace(/]*\/>/gi, '');
  newContent = newContent.replace(/<img/gi, '<img style="max-width:100%;height:auto;display:block;margin-top:0;margin-bottom:0;"');
  return newContent;
}
function addClassAndStyle(html) {
  return html.replace('<br>', '<br />').replace(/<([a-zA-Z0-9]*) (.*?)>/g, function (str, group, match, index, tpl) {
    if (/style/g.test(str)) {
      str = str.replace(/style="(.*?)"/g, "style=\"".concat(Object(_base__WEBPACK_IMPORTED_MODULE_1__[/* getBasegetCssToJs */ "a"])(group)).concat(Object(_css__WEBPACK_IMPORTED_MODULE_0__[/* getCssToJs */ "a"])(group), "$1\""));
    } else if (group == 'img') {
      str = "<".concat(group, " class=\".h5-").concat(group, "\" style=\"").concat(Object(_base__WEBPACK_IMPORTED_MODULE_1__[/* getBasegetCssToJs */ "a"])(group)).concat(Object(_css__WEBPACK_IMPORTED_MODULE_0__[/* getCssToJs */ "a"])(group), "\" ").concat(match, " />");
    } else {
      str = "<".concat(group, " class=\".h5-").concat(group, "\" style=\"").concat(Object(_base__WEBPACK_IMPORTED_MODULE_1__[/* getBasegetCssToJs */ "a"])(group)).concat(Object(_css__WEBPACK_IMPORTED_MODULE_0__[/* getCssToJs */ "a"])(group), "\" ").concat(match, ">");
    }

    console.log('str', str);
    console.log('group', group);
    console.log('match', match);
    console.log('index', index);
    console.log('tpl', tpl);
    return str;
  }).replace(/<([a-zA-Z0-9]*)>/g, function (str, group, match, index, tpl) {
    return "<".concat(group, " class=\".h5-").concat(group, "\" style=\"").concat(Object(_base__WEBPACK_IMPORTED_MODULE_1__[/* getBasegetCssToJs */ "a"])(group)).concat(Object(_css__WEBPACK_IMPORTED_MODULE_0__[/* getCssToJs */ "a"])(group), "\">");
  });
}

/***/ }),

/***/ "./src/base/richtext/richtext.scss":
/*!*****************************************!*\
  !*** ./src/base/richtext/richtext.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=common.js.map