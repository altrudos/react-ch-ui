webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/div-factory.tsx":
false,

/***/ "./components/icon/index.tsx":
false,

/***/ "./components/loading/index.tsx":
false,

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
      return __jsx(FullScreenCentered, {
        className: "color-secondary"
      }, __jsx(LoadingIcon, {
        className: "fa-8x mb-4"
      }), __jsx("div", null, "...Loading..."));
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
false,

/***/ "./util/cx.ts":
false,

/***/ "./util/string.ts":
false

})
//# sourceMappingURL=index.js.b453ff429ad92e4030aa.hot-update.js.map