module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/api.ts":
/*!********************!*\
  !*** ./api/api.ts ***!
  \********************/
/*! exports provided: baseURL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseURL", function() { return baseURL; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const baseURL = "http://localhost:8080";
/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL,
  withCredentials: true
}));

/***/ }),

/***/ "./api/charities.ts":
/*!**************************!*\
  !*** ./api/charities.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./api/api.ts");

const CharityApi = {
  async all() {
    const resp = await _api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/charities");
    return resp.data.Charities;
  },

  async one(id) {
    const resp = await _api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/charity/" + id);
    return resp.data.Charity;
  }

};
/* harmony default export */ __webpack_exports__["default"] = (CharityApi);

/***/ }),

/***/ "./components/async.ts":
/*!*****************************!*\
  !*** ./components/async.ts ***!
  \*****************************/
/*! exports provided: AsyncState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncState", function() { return AsyncState; });
let AsyncState;

(function (AsyncState) {
  AsyncState[AsyncState["Error"] = 0] = "Error";
  AsyncState[AsyncState["Loading"] = 1] = "Loading";
  AsyncState[AsyncState["Success"] = 2] = "Success";
  AsyncState[AsyncState["Available"] = 3] = "Available";
})(AsyncState || (AsyncState = {}));

/***/ }),

/***/ "./components/div-factory.tsx":
/*!************************************!*\
  !*** ./components/div-factory.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DivFactory; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_cx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/cx */ "./util/cx.ts");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function DivFactory(defaultClassName, classConfig) {
  return function (_ref) {
    let {
      className,
      children
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["className", "children"]);

    const otherClasses = [];

    if (!!classConfig) {
      for (const i in classConfig) {
        if (!(i in rest)) continue;
        const curr = classConfig[i]; // We can do this 'as' because classConfig
        // can only have keys which are in P.

        const val = rest[i]; // If the value of the prop 'i' is defined
        // in the configuration, we can use it to
        // add the classes in other classes.

        if (val in curr) {
          otherClasses.push(curr[val]);
        }
      }
    }

    return __jsx("div", _extends({
      className: Object(_util_cx__WEBPACK_IMPORTED_MODULE_1__["default"])(defaultClassName, className, ...otherClasses)
    }, rest), children);
  };
}

/***/ }),

/***/ "./components/icon/index.tsx":
/*!***********************************!*\
  !*** ./components/icon/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Icon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_cx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/cx */ "./util/cx.ts");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Icon(_ref) {
  let {
    className,
    suffix,
    family
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className", "suffix", "family"]);

  return __jsx("i", _extends({
    className: Object(_util_cx__WEBPACK_IMPORTED_MODULE_1__["default"])(family, `${family}-${suffix}`, className)
  }, rest));
}

/***/ }),

/***/ "./components/layout/container.less":
/*!******************************************!*\
  !*** ./components/layout/container.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/layout/container.tsx":
/*!*****************************************!*\
  !*** ./components/layout/container.tsx ***!
  \*****************************************/
/*! exports provided: FullScreenCentered, FullScreen, Centered */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullScreenCentered", function() { return FullScreenCentered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullScreen", function() { return FullScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Centered", function() { return Centered; });
/* harmony import */ var _container_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container.less */ "./components/layout/container.less");
/* harmony import */ var _container_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_container_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _div_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../div-factory */ "./components/div-factory.tsx");


const FullScreenCentered = Object(_div_factory__WEBPACK_IMPORTED_MODULE_1__["default"])("fullscreen centered");
const FullScreen = Object(_div_factory__WEBPACK_IMPORTED_MODULE_1__["default"])("fullscreen");
const Centered = Object(_div_factory__WEBPACK_IMPORTED_MODULE_1__["default"])("flex-column justify-center align-center");

/***/ }),

/***/ "./components/layout/panel.less":
/*!**************************************!*\
  !*** ./components/layout/panel.less ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/layout/row.less":
/*!************************************!*\
  !*** ./components/layout/row.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/layout/row.tsx":
/*!***********************************!*\
  !*** ./components/layout/row.tsx ***!
  \***********************************/
/*! exports provided: Row, Col, PanelHeader, PanelBody, PanelFooter, Panel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return Col; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelHeader", function() { return PanelHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelBody", function() { return PanelBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelFooter", function() { return PanelFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return Panel; });
/* harmony import */ var _row_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./row.less */ "./components/layout/row.less");
/* harmony import */ var _row_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_row_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _panel_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel.less */ "./components/layout/panel.less");
/* harmony import */ var _panel_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_panel_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _div_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../div-factory */ "./components/div-factory.tsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const BasicClasses = {
  flex: {
    row: "flex-row",
    column: "flex-column"
  },
  justifyContent: {
    spaceBetween: "justify-between",
    spaceAround: "justify-around",
    start: "justify-start",
    end: "justify-end",
    center: "justify-center",
    evenly: "justify-evenly",
    stretch: "justify-stretch"
  },
  alignItems: {
    start: "align-start",
    end: "align-end",
    center: "align-center",
    stretch: "align-stretch",
    baseline: "align-baseline"
  }
};
const Row = Object(_div_factory__WEBPACK_IMPORTED_MODULE_2__["default"])("row");
const Col = Object(_div_factory__WEBPACK_IMPORTED_MODULE_2__["default"])("col", _objectSpread({
  size: {}
}, BasicClasses));
const PanelHeader = Object(_div_factory__WEBPACK_IMPORTED_MODULE_2__["default"])("panel-header");
const PanelBody = Object(_div_factory__WEBPACK_IMPORTED_MODULE_2__["default"])("panel-body");
const PanelFooter = Object(_div_factory__WEBPACK_IMPORTED_MODULE_2__["default"])("panel-footer");
const Panel = Object(_div_factory__WEBPACK_IMPORTED_MODULE_2__["default"])("panel");
Panel.Header = PanelHeader;
Panel.Body = PanelBody;
Panel.Footer = PanelFooter;

/***/ }),

/***/ "./components/loading/index.tsx":
/*!**************************************!*\
  !*** ./components/loading/index.tsx ***!
  \**************************************/
/*! exports provided: LoadingPage, LoadingSection, LoadingIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPage", function() { return LoadingPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSection", function() { return LoadingSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingIcon", function() { return LoadingIcon; });
/* harmony import */ var _loading_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.less */ "./components/loading/loading.less");
/* harmony import */ var _loading_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_loading_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _div_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../div-factory */ "./components/div-factory.tsx");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon */ "./components/icon/index.tsx");
/* harmony import */ var _util_cx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/cx */ "./util/cx.ts");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const LoadingPage = Object(_div_factory__WEBPACK_IMPORTED_MODULE_2__["default"])("loading-page");
const LoadingSection = Object(_div_factory__WEBPACK_IMPORTED_MODULE_2__["default"])("loading-section");
function LoadingIcon(_ref) {
  let {
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return __jsx(_icon__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    suffix: "spin",
    family: "fa",
    className: Object(_util_cx__WEBPACK_IMPORTED_MODULE_4__["default"])("fa-circle-notch", className)
  }, rest));
}

/***/ }),

/***/ "./components/loading/loading.less":
/*!*****************************************!*\
  !*** ./components/loading/loading.less ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./hooks/use-async.ts":
/*!****************************!*\
  !*** ./hooks/use-async.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useAsync; });
/* harmony import */ var _components_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/async */ "./components/async.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/error */ "./util/error.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const DefaultOptions = {
  AvailableMsg: "",
  AvailableAfterError: true,
  ThrowError: false
};
function useAsync(defaultState = _components_async__WEBPACK_IMPORTED_MODULE_0__["AsyncState"].Available, duration = 300) {
  // Stores whether it is currently already running or not. If it is running that means we are adding to
  // the end of the queue, which also means that we should be running any side effects as it will run itself.
  const isRunning = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false); // This is the handle for the interval while it is running. It will be cleared when there are no more
  // items left in the queue.

  const it = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null); // Queue will store future statuses that should be shown.

  const queue = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])([]); // Current status and message to show (if any)

  const {
    0: status,
    1: setStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultState);
  const {
    0: errMsg,
    1: setErrMsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""); // Next is the iterative process. It will continue until the queue is cleared, where upon it needs to set the
  // statuses `isRunning` and `it` properly to reset the state.

  function next() {
    if (queue.current.length == 0) {
      isRunning.current = false;
      clearInterval(it.current);
      it.current = null;
      return;
    }

    const curr = queue.current.shift();
    setStatus(curr.Status);
    setErrMsg(curr.Message);
  }

  function _setStatus(status, err = "") {
    queue.current.push({
      Status: status,
      Message: err
    });

    if (isRunning.current) {
      return;
    }

    isRunning.current = true;
    it.current = setInterval(next, duration);
  }

  return {
    status,
    setStatus: _setStatus,
    errMsg,
    runAsync: async (fn, options = _objectSpread({}, DefaultOptions)) => {
      _setStatus(_components_async__WEBPACK_IMPORTED_MODULE_0__["AsyncState"].Loading);

      try {
        await fn();

        _setStatus(_components_async__WEBPACK_IMPORTED_MODULE_0__["AsyncState"].Success);

        _setStatus(_components_async__WEBPACK_IMPORTED_MODULE_0__["AsyncState"].Available, options.AvailableMsg);
      } catch (err) {
        console.log(_objectSpread({}, err));

        _setStatus(_components_async__WEBPACK_IMPORTED_MODULE_0__["AsyncState"].Error, Object(_util_error__WEBPACK_IMPORTED_MODULE_2__["parseError"])(err));

        if (options.AvailableAfterError) _setStatus(_components_async__WEBPACK_IMPORTED_MODULE_0__["AsyncState"].Available, options.AvailableMsg);
        if (options.ThrowError) throw err;
      }
    }
  };
}

/***/ }),

/***/ "./modules/charities/view-charities.tsx":
/*!**********************************************!*\
  !*** ./modules/charities/view-charities.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CharitiesView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_use_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-async */ "./hooks/use-async.ts");
/* harmony import */ var _components_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/async */ "./components/async.ts");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/loading */ "./components/loading/index.tsx");
/* harmony import */ var _components_layout_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layout/container */ "./components/layout/container.tsx");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/icon */ "./components/icon/index.tsx");
/* harmony import */ var _api_charities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/charities */ "./api/charities.ts");
/* harmony import */ var _components_layout_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/layout/row */ "./components/layout/row.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function CharitiesView() {
  const {
    0: charities,
    1: setCharities
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    status,
    errMsg,
    runAsync
  } = Object(_hooks_use_async__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_async__WEBPACK_IMPORTED_MODULE_2__["AsyncState"].Loading);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    runAsync(loadCharities, {
      ThrowError: false,
      AvailableAfterError: false,
      AvailableMsg: ""
    });
  }, []);

  async function loadCharities() {
    const charities = await _api_charities__WEBPACK_IMPORTED_MODULE_6__["default"].all();
    setCharities(charities.Data);
  }

  switch (status) {
    case _components_async__WEBPACK_IMPORTED_MODULE_2__["AsyncState"].Loading:
      return __jsx(_components_layout_container__WEBPACK_IMPORTED_MODULE_4__["FullScreenCentered"], null, __jsx(_components_loading__WEBPACK_IMPORTED_MODULE_3__["LoadingIcon"], {
        className: "fa-8x"
      }), __jsx("div", null, "...Loading..."));

    case _components_async__WEBPACK_IMPORTED_MODULE_2__["AsyncState"].Error:
      return __jsx(_components_layout_container__WEBPACK_IMPORTED_MODULE_4__["FullScreenCentered"], {
        className: "bg-danger color-danger"
      }, __jsx(_components_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        suffix: "times",
        family: "fa",
        className: "fa-8x mb-4"
      }), __jsx("div", null, errMsg || "Oops! There's been an error."));
  }

  return __jsx(_components_layout_row__WEBPACK_IMPORTED_MODULE_7__["Panel"], null, __jsx(_components_layout_row__WEBPACK_IMPORTED_MODULE_7__["Panel"].Header, null, "Charities"), __jsx(_components_layout_row__WEBPACK_IMPORTED_MODULE_7__["Panel"].Body, null, __jsx("ul", null, charities.map(ch => __jsx("li", null, ch.Name)))));
}

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_charities_view_charities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/charities/view-charities */ "./modules/charities/view-charities.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function HomePage() {
  return __jsx("div", {
    className: "fullscreen"
  }, __jsx(_modules_charities_view_charities__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/***/ }),

/***/ "./util/cx.ts":
/*!********************!*\
  !*** ./util/cx.ts ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cx; });
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string */ "./util/string.ts");


/**
 * cx groups provided terms together as a list of HTML classes.
 * @param x is either a string or an object with classes as the key and a boolean as the value.
 *  a value of true means to include it in the classlist.
 */
function cx(...x) {
  const str = [];
  x.forEach(x => {
    if (typeof x === "string") {
      Object(_string__WEBPACK_IMPORTED_MODULE_0__["addToStringList"])(str, x);
      return;
    }

    for (let i in x) {
      if (x[i]) {
        Object(_string__WEBPACK_IMPORTED_MODULE_0__["addToStringList"])(str, i);
      }
    }
  });
  return str.join(" ");
}

/***/ }),

/***/ "./util/error.ts":
/*!***********************!*\
  !*** ./util/error.ts ***!
  \***********************/
/*! exports provided: parseError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseError", function() { return parseError; });
function parseError(err) {
  if ('response' in err) {
    if (!err.response || !err.response.data) return "Network Error";
    return err.response.data.Message;
  }

  return err.message;
}

/***/ }),

/***/ "./util/string.ts":
/*!************************!*\
  !*** ./util/string.ts ***!
  \************************/
/*! exports provided: stringInList, addToStringList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringInList", function() { return stringInList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToStringList", function() { return addToStringList; });
function stringInList(xs, x) {
  return !!xs.find(s => s === x);
}
function addToStringList(xs, x) {
  if (stringInList(xs, x)) return;
  xs.push(x);
}

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bryancua/Sites/charityhonor/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map