webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _components_layout_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layout/container */ "./components/layout/container.tsx");
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
      return __jsx(_components_layout_container__WEBPACK_IMPORTED_MODULE_4__["FullScreenCentered"], {
        className: "color-secondary"
      }, __jsx(_components_loading__WEBPACK_IMPORTED_MODULE_3__["LoadingIcon"], {
        className: "fa-8x mb-4"
      }), __jsx("div", null, "...Loading..."));
  }
}

/***/ })

})
//# sourceMappingURL=index.js.00165802055a7571ceb8.hot-update.js.map