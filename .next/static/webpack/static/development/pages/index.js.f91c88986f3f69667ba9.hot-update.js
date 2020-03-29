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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-async */ "./hooks/use-async.ts");
/* harmony import */ var _components_async__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/async */ "./components/async.ts");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/loading */ "./components/loading/index.tsx");
/* harmony import */ var _components_layout_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layout/container */ "./components/layout/container.tsx");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/icon */ "./components/icon/index.tsx");
/* harmony import */ var _api_charities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/charities */ "./api/charities.ts");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function CharitiesView() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      charities = _useState[0],
      setCharities = _useState[1];

  var _useAsync = Object(_hooks_use_async__WEBPACK_IMPORTED_MODULE_2__["default"])(_components_async__WEBPACK_IMPORTED_MODULE_3__["AsyncState"].Loading),
      status = _useAsync.status,
      errMsg = _useAsync.errMsg,
      runAsync = _useAsync.runAsync;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    runAsync(loadCharities, {
      ThrowError: false,
      AvailableAfterError: false,
      AvailableMsg: ""
    });
  }, []);

  function loadCharities() {
    var charities;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function loadCharities$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_api_charities__WEBPACK_IMPORTED_MODULE_7__["default"].all());

          case 2:
            charities = _context.sent;
            setCharities(charities.Data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }

  switch (status) {
    case _components_async__WEBPACK_IMPORTED_MODULE_3__["AsyncState"].Loading:
      return __jsx(_components_layout_container__WEBPACK_IMPORTED_MODULE_5__["FullScreenCentered"], null, __jsx(_components_loading__WEBPACK_IMPORTED_MODULE_4__["LoadingIcon"], {
        className: "fa-8x"
      }), __jsx("div", null, "...Loading..."));

    case _components_async__WEBPACK_IMPORTED_MODULE_3__["AsyncState"].Error:
      return __jsx(_components_layout_container__WEBPACK_IMPORTED_MODULE_5__["FullScreenCentered"], {
        className: "bg-danger color-danger"
      }, __jsx(_components_icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
        suffix: "times",
        family: "fa",
        className: "fa-8x mb-4"
      }), __jsx("div", null, errMsg || "Oops! There's been an error."));
  }

  return __jsx("div", null);
}

/***/ })

})
//# sourceMappingURL=index.js.f91c88986f3f69667ba9.hot-update.js.map