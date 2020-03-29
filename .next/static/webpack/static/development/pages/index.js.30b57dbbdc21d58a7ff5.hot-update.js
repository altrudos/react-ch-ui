webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/async.ts":
/*!*****************************!*\
  !*** ./components/async.ts ***!
  \*****************************/
/*! exports provided: AsyncState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncState", function() { return AsyncState; });
var AsyncState;

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
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_cx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/cx */ "./util/cx.ts");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


function DivFactory(defaultClassName, classConfig) {
  return function (_ref) {
    var className = _ref.className,
        children = _ref.children,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "children"]);

    var otherClasses = [];

    if (!!classConfig) {
      for (var i in classConfig) {
        if (!(i in rest)) continue;
        var curr = classConfig[i]; // We can do this 'as' because classConfig
        // can only have keys which are in P.

        var val = rest[i]; // If the value of the prop 'i' is defined
        // in the configuration, we can use it to
        // add the classes in other classes.

        if (val in curr) {
          otherClasses.push(curr[val]);
        }
      }
    }

    return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: _util_cx__WEBPACK_IMPORTED_MODULE_3__["default"].apply(void 0, [defaultClassName, className].concat(otherClasses))
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
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_cx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/cx */ "./util/cx.ts");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


function Icon(_ref) {
  var className = _ref.className,
      suffix = _ref.suffix,
      family = _ref.family,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "suffix", "family"]);

  return __jsx("i", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(_util_cx__WEBPACK_IMPORTED_MODULE_3__["default"])(family, "".concat(family, "-").concat(suffix), className)
  }, rest));
}

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
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _loading_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading.less */ "./components/loading/loading.less");
/* harmony import */ var _loading_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loading_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _div_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../div-factory */ "./components/div-factory.tsx");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon */ "./components/icon/index.tsx");
/* harmony import */ var _util_cx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/cx */ "./util/cx.ts");


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





var LoadingPage = Object(_div_factory__WEBPACK_IMPORTED_MODULE_4__["default"])("loading in-container");
var LoadingSection = Object(_div_factory__WEBPACK_IMPORTED_MODULE_4__["default"])("loading-section");
function LoadingIcon(_ref) {
  var className = _ref.className,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className"]);

  return __jsx(_icon__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    suffix: "spin",
    family: "fa",
    className: Object(_util_cx__WEBPACK_IMPORTED_MODULE_6__["default"])("fa-circle-notch", className)
  }, rest));
}

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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _components_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/async */ "./components/async.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/error */ "./util/error.ts");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var DefaultOptions = {
  AvailableMsg: "",
  AvailableAfterError: true,
  ThrowError: false
};
function useAsync() {
  var defaultState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _components_async__WEBPACK_IMPORTED_MODULE_2__["AsyncState"].Available;
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  // Stores whether it is currently already running or not. If it is running that means we are adding to
  // the end of the queue, which also means that we should be running any side effects as it will run itself.
  var isRunning = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false); // This is the handle for the interval while it is running. It will be cleared when there are no more
  // items left in the queue.

  var it = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null); // Queue will store future statuses that should be shown.

  var queue = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])([]); // Current status and message to show (if any)

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(defaultState),
      status = _useState[0],
      setStatus = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      errMsg = _useState2[0],
      setErrMsg = _useState2[1]; // Next is the iterative process. It will continue until the queue is cleared, where upon it needs to set the
  // statuses `isRunning` and `it` properly to reset the state.


  function next() {
    if (queue.current.length == 0) {
      isRunning.current = false;
      clearInterval(it.current);
      it.current = null;
      return;
    }

    var curr = queue.current.shift();
    setStatus(curr.Status);
    setErrMsg(curr.Message);
  }

  function _setStatus(status) {
    var err = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
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
    status: status,
    setStatus: _setStatus,
    errMsg: errMsg,
    runAsync: function runAsync(fn) {
      var options,
          _args = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function runAsync$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              options = _args.length > 1 && _args[1] !== undefined ? _args[1] : _objectSpread({}, DefaultOptions);

              _setStatus(_components_async__WEBPACK_IMPORTED_MODULE_2__["AsyncState"].Loading);

              _context.prev = 2;
              _context.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fn());

            case 5:
              _setStatus(_components_async__WEBPACK_IMPORTED_MODULE_2__["AsyncState"].Success);

              _setStatus(_components_async__WEBPACK_IMPORTED_MODULE_2__["AsyncState"].Available, options.AvailableMsg);

              _context.next = 16;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](2);
              console.log(_objectSpread({}, _context.t0));

              _setStatus(_components_async__WEBPACK_IMPORTED_MODULE_2__["AsyncState"].Error, Object(_util_error__WEBPACK_IMPORTED_MODULE_4__["parseError"])(_context.t0));

              if (options.AvailableAfterError) _setStatus(_components_async__WEBPACK_IMPORTED_MODULE_2__["AsyncState"].Available, options.AvailableMsg);

              if (!options.ThrowError) {
                _context.next = 16;
                break;
              }

              throw _context.t0;

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[2, 9]], Promise);
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_use_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-async */ "./hooks/use-async.ts");
/* harmony import */ var _components_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/async */ "./components/async.ts");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/loading */ "./components/loading/index.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function CharitiesView() {
  var _ref = [],
      charities = _ref[0],
      setCharities = _ref[1];

  var _useAsync = Object(_hooks_use_async__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_async__WEBPACK_IMPORTED_MODULE_2__["AsyncState"].Available),
      status = _useAsync.status,
      runAsync = _useAsync.runAsync;

  switch (status) {
    case _components_async__WEBPACK_IMPORTED_MODULE_2__["AsyncState"].Loading:
      return __jsx(_components_loading__WEBPACK_IMPORTED_MODULE_3__["LoadingPage"], null);
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
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
function cx() {
  var str = [];

  for (var _len = arguments.length, x = new Array(_len), _key = 0; _key < _len; _key++) {
    x[_key] = arguments[_key];
  }

  x.forEach(function (x) {
    if (typeof x === "string") {
      Object(_string__WEBPACK_IMPORTED_MODULE_0__["addToStringList"])(str, x);
      return;
    }

    for (var i in x) {
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
  return !!xs.find(function (s) {
    return s === x;
  });
}
function addToStringList(xs, x) {
  if (stringInList(xs, x)) return;
  xs.push(x);
}

/***/ })

})
//# sourceMappingURL=index.js.30b57dbbdc21d58a7ff5.hot-update.js.map