/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkodin_restaurant"] = self["webpackChunkodin_restaurant"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./main-background.jpg */ \"./src/main-background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=The+Nautigal:wght@400;700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    padding: 0;\\n    margin: 0;\\n    box-sizing: border-box;\\n}\\n\\nbody {\\n    position: relative;\\n    width: 100vw;\\n    height: 100vh;\\n    background-color: black;\\n    color: white;\\n    font-family: 'Montserrat', sans-serif;\\n}\\n\\nbody::before {\\n    content: '';\\n    position: absolute;\\n    top: 0;\\n    right: 0;\\n    bottom: 0;\\n    left: 0;\\n    filter: blur(2px) brightness(0.35);\\n    z-index: -1;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    background-size: cover;\\n    background-position: center;\\n    background-repeat: no-repeat;\\n}\\n\\n.content {\\n    display: grid;\\n    grid-template-columns: 1fr;\\n    grid-template-rows: auto 1fr auto;\\n    height: 100vh;\\n    padding: 50px 100px;\\n}\\n\\nheader>nav {\\n    display: flex;\\n    align-items: flex-end;\\n    justify-content: space-between;\\n}\\n\\nheader>nav>img {\\n    width: 225px;\\n    color: black;\\n    cursor: pointer;\\n}\\n\\nheader>nav>ul {\\n    display: flex;\\n    gap: 70px;\\n    list-style: none;\\n    font-size: 1.15rem;\\n}\\n\\nheader>nav>ul>li {\\n    cursor: pointer;\\n}\\n\\nmain {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    gap: 30px;\\n}\\n\\nmain h1 {\\n    font-family: 'The Nautigal', cursive;\\n    font-size: 4.5rem;\\n}\\n\\nmain>div:first-child>p {\\n    margin: 20px auto 0 auto;\\n    width: 320px;\\n    text-align: center;\\n    font-size: 1.15rem;\\n}\\n\\nmain>.button-container {\\n    display: grid;\\n    grid-template-columns: 1fr auto 1fr;\\n    gap: 20px;\\n    align-items: center;\\n    margin-right: 9px;\\n}\\n\\nmain>.button-container>button {\\n    width: 100px;\\n    height: auto;\\n    border: none;\\n    color: white;\\n    background-color: #00000000;\\n    border: 2px solid white;\\n    border-radius: 5px;\\n    padding: 6px;\\n    font-family: 'Montserrat', sans-serif;\\n    font-size: 1.15rem;\\n    cursor: pointer;\\n}\\n\\nmain>.button-container>button:hover {\\n    background-color: #1A4314;\\n}\\n\\nmain>.button-container>button:first-child {\\n    justify-self: end;\\n}\\n\\nmain>.button-container>div {\\n    width: 1px;\\n    height: 50px;\\n    background-color: white;\\n}\\n\\nfooter {\\n    display: grid;\\n    grid-template-columns: 1fr auto auto auto 1fr;\\n    gap: 8px;\\n    align-items: center;\\n}\\n\\nfooter a:link {\\n    color: white;\\n}\\n\\nfooter a:visited {\\n    color: white;\\n}\\n\\nfooter>p:first-child {\\n    grid-column: 2 / 3;\\n    justify-self: end;\\n}\\n\\nfooter>p:nth-child(2) {\\n    grid-column: 4 / 5;\\n}\\n\\nfooter>div {\\n    background-color: white;\\n    grid-column: 3 / 4;\\n    height: 100%;\\n    width: 1px;\\n}\\n\\nfooter>p:last-child {\\n    grid-column: 5 / 6;\\n    justify-self: end;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/menu-items.xml":
/*!****************************!*\
  !*** ./src/menu-items.xml ***!
  \****************************/
/***/ ((module) => {

eval("module.exports = {\"menu\":{\"appetizers\":[{\"item\":[{\"italian\":[\"Crostini misti con Sottoli\"],\"english\":[\"Toasted bread with mixed vegetables in oil\"],\"price\":[\"3$\"]},{\"italian\":[\"Bruschetta calda all'Olio d'Oliva e Aglio\"],\"english\":[\"Garlic Bread with olive oil\"],\"price\":[\"3$\"]},{\"italian\":[\"Affettato tipico\"],\"english\":[\"Sliced meats: wild boar, deer and roe\"],\"price\":[\"4$\"]}]}],\"first-courses\":[{\"item\":[{\"italian\":[\"Tortelli di Ricotta e Bietole al sugo di Carne\"],\"english\":[\"Ravioli with ricotta and chard in bolognese sauce\"],\"price\":[\"15$\"]},{\"italian\":[\"Zuppa contadina di verdure fresche Pane e Pecorino Toscano\"],\"english\":[\"Rustic vegetable soup with bread and strong Tuscan cheese\"],\"price\":[\"14$\"]}]}],\"second-courses\":[{\"item\":[{\"italian\":[\"Il Filetto del \\\"Leccio\\\"\"],\"english\":[\"Fillet of the house: fillet cooked with truffle cream, parmesan, rocket and porcini mushrooms\"],\"price\":[\"15$\"]},{\"italian\":[\"Salsiccia alla brace\"],\"english\":[\"Barbecued sausage\"],\"price\":[\"10$\"]},{\"italian\":[\"Faraona in teglia con Patate\"],\"english\":[\"Roast Guinea Fowl with potatoes\"],\"price\":[\"20$\"]},{\"italian\":[\"Cinghiale alla Cacciatore\"],\"english\":[\"Wild boar stewed in tomatoe, wine and herb sauce\"],\"price\":[\"25$\"]},{\"italian\":[\"Rostinciana alla brace\"],\"english\":[\"Barbecued rack of ribs\"],\"price\":[\"20$\"]}]}],\"side-dishes\":[{\"item\":[{\"italian\":[\"Insalata verde\"],\"english\":[\"Green salad\"],\"price\":[\"3$\"]},{\"italian\":[\"Patate fritte\"],\"english\":[\"French fries\"],\"price\":[\"2$\"]},{\"italian\":[\"Patate al Rosmarino\"],\"english\":[\"Roast potatoes with rosemary\"],\"price\":[\"2$\"]}]}],\"desserts\":[{\"item\":[{\"italian\":[\"Torta della Nonna\"],\"english\":[\"\\\"Grandmother's Cake\\\"\"],\"price\":[\"8$\"]}]}]}}\n\n//# sourceURL=webpack://odin-restaurant/./src/menu-items.xml?");

/***/ }),

/***/ "./src/generate-contact.js":
/*!*********************************!*\
  !*** ./src/generate-contact.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GenerateContact\": () => (/* binding */ GenerateContact)\n/* harmony export */ });\nfunction GenerateContact() {\n    \n}\n\n//# sourceURL=webpack://odin-restaurant/./src/generate-contact.js?");

/***/ }),

/***/ "./src/generate-footer.js":
/*!********************************!*\
  !*** ./src/generate-footer.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GenerateFooter\": () => (/* binding */ GenerateFooter)\n/* harmony export */ });\nfunction GenerateFooter() {\n    const content = document.querySelector(\".content\");\n\n    const footer = document.createElement(\"footer\");\n\n    const developedBy = document.createElement(\"p\");\n    developedBy.textContent = \"Developed by\";\n    \n    const divider = document.createElement(\"div\");\n\n    const developerName = document.createElement(\"p\");\n    const developerLink = document.createElement(\"a\");\n    developerLink.target = \"_blank\";\n    developerLink.href = \"https://github.com/AntanasPuzas\";\n    developerLink.textContent = \"Antanas Pužas\";\n    developerName.appendChild(developerLink);\n\n    const shoutout = document.createElement(\"p\");\n    shoutout.textContent = \"Photo by \";\n\n    const shoutoutCreatorLink = document.createElement(\"a\");\n    shoutoutCreatorLink.target = \"_blank\";\n    shoutoutCreatorLink.href = \"https://unsplash.com/@foodiesfeed?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\"\n    shoutoutCreatorLink.textContent = \"Jakub Kapusnak\";\n\n    shoutout.append(shoutoutCreatorLink, \" on \");\n\n    const shoutoutWebsiteLink = document.createElement(\"a\");\n    shoutoutWebsiteLink.target = \"_blank\";\n    shoutoutWebsiteLink.href = \"https://unsplash.com/s/photos/italian-restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\";\n    shoutoutWebsiteLink.textContent = \"Unsplash\";\n    \n    shoutout.appendChild(shoutoutWebsiteLink);\n\n    footer.append(developedBy, divider, developerLink, shoutout);\n\n    content.append(footer);\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/generate-footer.js?");

/***/ }),

/***/ "./src/generate-header.js":
/*!********************************!*\
  !*** ./src/generate-header.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GenerateHeader\": () => (/* binding */ GenerateHeader)\n/* harmony export */ });\n/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.svg */ \"./src/logo.svg\");\n/* harmony import */ var _generate_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generate-main */ \"./src/generate-main.js\");\n/* harmony import */ var _generate_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generate-menu */ \"./src/generate-menu.js\");\n/* harmony import */ var _generate_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generate-contact */ \"./src/generate-contact.js\");\n\n\n\n\n\nfunction GenerateHeader() {\n    const content = document.querySelector(\".content\");\n\n    const header = document.createElement(\"header\");\n\n    const nav = document.createElement(\"nav\");\n\n    const logo = document.createElement(\"img\")\n    logo.src = _logo_svg__WEBPACK_IMPORTED_MODULE_0__;\n    logo.addEventListener(\"click\", () => {\n        (0,_generate_main__WEBPACK_IMPORTED_MODULE_1__.ClearMain)();\n        (0,_generate_main__WEBPACK_IMPORTED_MODULE_1__.GenerateMain)();\n    })\n\n    const tabList = document.createElement(\"ul\");\n\n    const links = [\"Home\", \"Menu\", \"Contact\"];\n    links.forEach(el => {\n        const item = document.createElement(\"li\");\n        const link = document.createElement(\"a\");\n        link.textContent = el;\n        item.appendChild(link);\n        tabList.appendChild(item);\n    })\n\n    nav.appendChild(logo);\n    nav.appendChild(tabList);\n    header.appendChild(nav);\n    content.appendChild(header);\n\n    const home = document.querySelector(\"header>nav>ul>li:first-child\");\n    home.addEventListener(\"click\", () => {\n        (0,_generate_main__WEBPACK_IMPORTED_MODULE_1__.ClearMain)();\n        (0,_generate_main__WEBPACK_IMPORTED_MODULE_1__.GenerateMain)();\n    })\n\n    const menu = document.querySelector(\"header>nav>ul>li:nth-child(2)\");\n    menu.addEventListener(\"click\", () => {\n        (0,_generate_main__WEBPACK_IMPORTED_MODULE_1__.ClearMain)();\n        (0,_generate_menu__WEBPACK_IMPORTED_MODULE_2__.GenerateMenu)();\n    })\n\n    const contact = document.querySelector(\"header>nav>ul>li:last-child\");\n    contact.addEventListener(\"click\", () => {\n        (0,_generate_main__WEBPACK_IMPORTED_MODULE_1__.ClearMain)();\n        _generate_contact__WEBPACK_IMPORTED_MODULE_3__.GenerateContact\n    })\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/generate-header.js?");

/***/ }),

/***/ "./src/generate-main.js":
/*!******************************!*\
  !*** ./src/generate-main.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ClearMain\": () => (/* binding */ ClearMain),\n/* harmony export */   \"GenerateMain\": () => (/* binding */ GenerateMain)\n/* harmony export */ });\n/* harmony import */ var _generate_contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate-contact */ \"./src/generate-contact.js\");\n/* harmony import */ var _generate_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generate-menu */ \"./src/generate-menu.js\");\n\n\n\nfunction GenerateMain() {\n    const content = document.querySelector(\".content\");\n\n    const main = (document.querySelector(\"main\")\n        ? document.querySelector(\"main\")\n        : document.createElement(\"main\"));\n\n    const text = document.createElement(\"div\");\n\n    const title = document.createElement(\"h1\");\n    title.textContent = \"Welcome to El Restaurante!\";\n\n    const paragraph = document.createElement(\"p\")\n    paragraph.textContent = \"We hope you enjoy the food just as much as we enjoyed making it!\";\n\n    const buttonContainer = document.createElement(\"div\");\n    buttonContainer.classList.add(\"button-container\");\n\n    const menuButton = document.createElement(\"button\");\n    menuButton.textContent = \"Menu\";\n    menuButton.addEventListener(\"click\", () => {\n        ClearMain();\n        (0,_generate_menu__WEBPACK_IMPORTED_MODULE_1__.GenerateMenu)();\n    });\n\n    const divider = document.createElement(\"div\");\n\n    const contactButton = document.createElement(\"button\");\n    contactButton.textContent = \"Contact\";\n    contactButton.addEventListener(\"click\", () => {\n        ClearMain();\n        (0,_generate_contact__WEBPACK_IMPORTED_MODULE_0__.GenerateContact)();\n    });\n\n    text.append(title, paragraph);\n    buttonContainer.append(menuButton, divider, contactButton);\n    main.append(text, buttonContainer);\n    if (!document.querySelector(\"main\")) {\n        content.append(main);\n    }\n}\n\nfunction ClearMain() {\n    const main = document.querySelector(\"main\");\n    const mainElements = [...document.querySelectorAll(\"main>*\")];\n    mainElements.forEach(el => main.removeChild(el));\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/generate-main.js?");

/***/ }),

/***/ "./src/generate-menu.js":
/*!******************************!*\
  !*** ./src/generate-menu.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GenerateMenu\": () => (/* binding */ GenerateMenu)\n/* harmony export */ });\n/* harmony import */ var _menu_items_xml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-items.xml */ \"./src/menu-items.xml\");\n/* harmony import */ var _menu_items_xml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_menu_items_xml__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction GenerateMenu() {\n    console.log((_menu_items_xml__WEBPACK_IMPORTED_MODULE_0___default()));\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/generate-menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _generate_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate-header */ \"./src/generate-header.js\");\n/* harmony import */ var _generate_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generate-main */ \"./src/generate-main.js\");\n/* harmony import */ var _generate_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generate-footer */ \"./src/generate-footer.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\nconst addContent = (() => {\n    const content = document.createElement(\"div\");\n    content.classList.add(\"content\");\n    document.querySelector(\"body\").appendChild(content);\n})();\n\n(0,_generate_header__WEBPACK_IMPORTED_MODULE_0__.GenerateHeader)();\n(0,_generate_main__WEBPACK_IMPORTED_MODULE_1__.GenerateMain)();\n(0,_generate_footer__WEBPACK_IMPORTED_MODULE_2__.GenerateFooter)();\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/logo.svg":
/*!**********************!*\
  !*** ./src/logo.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"6aeedd2678d7dc3b027d.svg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/logo.svg?");

/***/ }),

/***/ "./src/main-background.jpg":
/*!*********************************!*\
  !*** ./src/main-background.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f7c5fde5e3a9073746d1.jpg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/main-background.jpg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);