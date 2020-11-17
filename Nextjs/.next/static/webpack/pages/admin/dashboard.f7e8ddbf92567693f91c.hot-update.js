webpackHotUpdate_N_E("pages/admin/dashboard",{

/***/ "./components/Cards/CardLineChart.js":
/*!*******************************************!*\
  !*** ./components/Cards/CardLineChart.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardLineChart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\workspace\\DashBoards\\Nextjs\\components\\Cards\\CardLineChart.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function CardLineChart() {
  _s();

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    var config = {
      type: "line",
      data: {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"],
        datasets: [{
          label: new Date().getFullYear(),
          backgroundColor: "#4c51bf",
          borderColor: "#4c51bf",
          data: [65, 78, 66, 44, 56, 67, 75],
          fill: false
        }, {
          label: new Date().getFullYear() - 1,
          fill: false,
          backgroundColor: "#fff",
          borderColor: "#fff",
          data: [40, 68, 86, 74, 56, 60, 87]
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white"
        },
        legend: {
          labels: {
            fontColor: "white"
          },
          align: "end",
          position: "bottom"
        },
        tooltips: {
          mode: "index",
          intersect: false
        },
        hover: {
          mode: "nearest",
          intersect: true
        },
        scales: {
          xAxes: [{
            ticks: {
              fontColor: "rgba(255,255,255,.7)"
            },
            display: true,
            scaleLabel: {
              display: false,
              labelString: "Month",
              fontColor: "white"
            },
            gridLines: {
              display: false,
              borderDash: [2],
              borderDashOffset: [2],
              color: "rgba(33, 37, 41, 0.3)",
              zeroLineColor: "rgba(0, 0, 0, 0)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2]
            }
          }],
          yAxes: [{
            ticks: {
              fontColor: "rgba(255,255,255,.7)"
            },
            display: true,
            scaleLabel: {
              display: false,
              labelString: "Value",
              fontColor: "white"
            },
            gridLines: {
              borderDash: [3],
              borderDashOffset: [3],
              drawBorder: false,
              color: "rgba(255, 255, 255, 0.15)",
              zeroLineColor: "rgba(33, 37, 41, 0)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2]
            }
          }]
        }
      }
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a(ctx, config);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-800",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "rounded-t mb-0 px-4 py-3 bg-transparent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-wrap items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "relative w-full max-w-full flex-grow flex-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, __jsx("h6", {
    className: "uppercase text-gray-200 mb-1 text-xs font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }, "Vendas"), __jsx("h2", {
    className: "text-white text-xl font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }, "Montante")))), __jsx("div", {
    className: "p-4 flex-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative h-350-px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, __jsx("canvas", {
    id: "line-chart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  })))));
}

_s(CardLineChart, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = CardLineChart;

var _c;

$RefreshReg$(_c, "CardLineChart");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkcy9DYXJkTGluZUNoYXJ0LmpzIl0sIm5hbWVzIjpbIkNhcmRMaW5lQ2hhcnQiLCJSZWFjdCIsInVzZUVmZmVjdCIsImNvbmZpZyIsInR5cGUiLCJkYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiZmlsbCIsIm9wdGlvbnMiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwicmVzcG9uc2l2ZSIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiLCJmb250Q29sb3IiLCJsZWdlbmQiLCJhbGlnbiIsInBvc2l0aW9uIiwidG9vbHRpcHMiLCJtb2RlIiwiaW50ZXJzZWN0IiwiaG92ZXIiLCJzY2FsZXMiLCJ4QXhlcyIsInRpY2tzIiwic2NhbGVMYWJlbCIsImxhYmVsU3RyaW5nIiwiZ3JpZExpbmVzIiwiYm9yZGVyRGFzaCIsImJvcmRlckRhc2hPZmZzZXQiLCJjb2xvciIsInplcm9MaW5lQ29sb3IiLCJ6ZXJvTGluZUJvcmRlckRhc2giLCJ6ZXJvTGluZUJvcmRlckRhc2hPZmZzZXQiLCJ5QXhlcyIsImRyYXdCb3JkZXIiLCJjdHgiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsIndpbmRvdyIsIm15TGluZSIsIkNoYXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxhQUFULEdBQXlCO0FBQUE7O0FBQ3RDQyw4Q0FBSyxDQUFDQyxTQUFOLENBQWdCLE1BQU07QUFDcEIsUUFBSUMsTUFBTSxHQUFHO0FBQ1hDLFVBQUksRUFBRSxNQURLO0FBRVhDLFVBQUksRUFBRTtBQUNKQyxjQUFNLEVBQUUsQ0FDUCxTQURPLEVBRU4sV0FGTSxFQUdOLE9BSE0sRUFJTixPQUpNLEVBS04sTUFMTSxFQU1OLE9BTk0sRUFPTixPQVBNLENBREo7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QyxNQUFQLEdBQWdCLElBQUlDLCtDQUFKLENBQVVOLEdBQVYsRUFBZXZDLE1BQWYsQ0FBaEI7QUFDRCxHQXZHRCxFQXVHRyxFQXZHSDtBQXdHQSxTQUNFLG1FQUNFO0FBQUssYUFBUyxFQUFDLHNGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx5Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsNkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDZDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxvREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFJRTtBQUFJLGFBQVMsRUFBQyxrQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLENBREYsQ0FERixDQURGLEVBV0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUU7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsTUFBRSxFQUFDLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkYsQ0FYRixDQURGLENBREY7QUFzQkQ7O0dBL0h1QkgsYTs7S0FBQUEsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9kYXNoYm9hcmQuZjdlOGRkYmY5MjU2NzY5M2Y5MWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZExpbmVDaGFydCgpIHtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICB2YXIgY29uZmlnID0ge1xuICAgICAgdHlwZTogXCJsaW5lXCIsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhYmVsczogW1xuICAgICAgICAgXCJKYW5laXJvXCIsXG4gICAgICAgICAgXCJGZXZlcmVpcm9cIixcbiAgICAgICAgICBcIk1hcsOnb1wiLFxuICAgICAgICAgIFwiQWJyaWxcIixcbiAgICAgICAgICBcIk1haW9cIixcbiAgICAgICAgICBcIkp1bmhvXCIsXG4gICAgICAgICAgXCJKdWxob1wiLFxuICAgICAgICBdLFxuICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzRjNTFiZlwiLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzRjNTFiZlwiLFxuICAgICAgICAgICAgZGF0YTogWzY1LCA3OCwgNjYsIDQ0LCA1NiwgNjcsIDc1XSxcbiAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIDEsXG4gICAgICAgICAgICBmaWxsOiBmYWxzZSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICBkYXRhOiBbNDAsIDY4LCA4NiwgNzQsIDU2LCA2MCwgODddLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgICB0ZXh0OiBcIlNhbGVzIENoYXJ0c1wiLFxuICAgICAgICAgIGZvbnRDb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICB9LFxuICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgIGZvbnRDb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYWxpZ246IFwiZW5kXCIsXG4gICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgbW9kZTogXCJpbmRleFwiLFxuICAgICAgICAgIGludGVyc2VjdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgbW9kZTogXCJuZWFyZXN0XCIsXG4gICAgICAgICAgaW50ZXJzZWN0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICB4QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgIGZvbnRDb2xvcjogXCJyZ2JhKDI1NSwyNTUsMjU1LC43KVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6IFwiTW9udGhcIixcbiAgICAgICAgICAgICAgICBmb250Q29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgYm9yZGVyRGFzaDogWzJdLFxuICAgICAgICAgICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IFsyXSxcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDMzLCAzNywgNDEsIDAuMylcIixcbiAgICAgICAgICAgICAgICB6ZXJvTGluZUNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMClcIixcbiAgICAgICAgICAgICAgICB6ZXJvTGluZUJvcmRlckRhc2g6IFsyXSxcbiAgICAgICAgICAgICAgICB6ZXJvTGluZUJvcmRlckRhc2hPZmZzZXQ6IFsyXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB5QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgIGZvbnRDb2xvcjogXCJyZ2JhKDI1NSwyNTUsMjU1LC43KVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6IFwiVmFsdWVcIixcbiAgICAgICAgICAgICAgICBmb250Q29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyRGFzaDogWzNdLFxuICAgICAgICAgICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IFszXSxcbiAgICAgICAgICAgICAgICBkcmF3Qm9yZGVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpXCIsXG4gICAgICAgICAgICAgICAgemVyb0xpbmVDb2xvcjogXCJyZ2JhKDMzLCAzNywgNDEsIDApXCIsXG4gICAgICAgICAgICAgICAgemVyb0xpbmVCb3JkZXJEYXNoOiBbMl0sXG4gICAgICAgICAgICAgICAgemVyb0xpbmVCb3JkZXJEYXNoT2Zmc2V0OiBbMl0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG4gICAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZS1jaGFydFwiKS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgd2luZG93Lm15TGluZSA9IG5ldyBDaGFydChjdHgsIGNvbmZpZyk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIG1pbi13LTAgYnJlYWstd29yZHMgdy1mdWxsIG1iLTYgc2hhZG93LWxnIHJvdW5kZWQgYmctZ3JheS04MDBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXQgbWItMCBweC00IHB5LTMgYmctdHJhbnNwYXJlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgbWF4LXctZnVsbCBmbGV4LWdyb3cgZmxleC0xXCI+XG4gICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC1ncmF5LTIwMCBtYi0xIHRleHQteHMgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgIFZlbmRhc1xuICAgICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5Nb250YW50ZTwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGZsZXgtYXV0b1wiPlxuICAgICAgICAgIHsvKiBDaGFydCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtMzUwLXB4XCI+XG4gICAgICAgICAgICA8Y2FudmFzIGlkPVwibGluZS1jaGFydFwiPjwvY2FudmFzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==