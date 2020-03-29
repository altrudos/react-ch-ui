webpackHotUpdate("static/development/pages/index.js",{

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

  var _useAsync = Object(_hooks_use_async__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_async__WEBPACK_IMPORTED_MODULE_2__["AsyncState"].Loading),
      status = _useAsync.status,
      runAsync = _useAsync.runAsync;

  switch (status) {
    case _components_async__WEBPACK_IMPORTED_MODULE_2__["AsyncState"].Loading:
      return __jsx(_components_loading__WEBPACK_IMPORTED_MODULE_3__["LoadingPage"], null);
  }
}

/***/ })

})
//# sourceMappingURL=index.js.688160fa08396ba9baab.hot-update.js.map