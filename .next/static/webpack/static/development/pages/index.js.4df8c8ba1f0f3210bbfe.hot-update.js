webpackHotUpdate("static/development/pages/index.js",{

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


var FullScreenCentered = Object(_div_factory__WEBPACK_IMPORTED_MODULE_1__["default"])("fullscreen centered");
var FullScreen = Object(_div_factory__WEBPACK_IMPORTED_MODULE_1__["default"])("fullscreen");
var Centered = Object(_div_factory__WEBPACK_IMPORTED_MODULE_1__["default"])("flex-column justify-center align-center");

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
/* harmony import */ var _components_layout_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout/container */ "./components/layout/container.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function CharitiesView() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      charities = _useState[0],
      setCharities = _useState[1];

  var _useAsync = Object(_hooks_use_async__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_async__WEBPACK_IMPORTED_MODULE_2__["AsyncState"].Loading),
      status = _useAsync.status,
      runAsync = _useAsync.runAsync;

  switch (status) {
    case _components_async__WEBPACK_IMPORTED_MODULE_2__["AsyncState"].Loading:
      return __jsx(_components_layout_container__WEBPACK_IMPORTED_MODULE_3__["FullScreenCentered"], {
        className: "color-secondary"
      }, __jsx(LoadingIcon, {
        className: "fa-8x mb-4"
      }), __jsx("div", null, "...Loading..."));
  }
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
//# sourceMappingURL=index.js.4df8c8ba1f0f3210bbfe.hot-update.js.map