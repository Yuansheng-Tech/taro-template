(ks["webpackJsonp"] = ks["webpackJsonp"] || []).push([["common"],{

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
/* harmony import */ var _ysyp_stores_dist_RootStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ysyp/stores/dist/RootStore */ "./node_modules/@ysyp/stores/dist/RootStore.js");
/* harmony import */ var _ysyp_stores_dist_RootStore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ysyp_stores_dist_RootStore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);

 // single root store instance


var rootStoreInstance = new _ysyp_stores_dist_RootStore__WEBPACK_IMPORTED_MODULE_1__["RootStore"](); // expose the store

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