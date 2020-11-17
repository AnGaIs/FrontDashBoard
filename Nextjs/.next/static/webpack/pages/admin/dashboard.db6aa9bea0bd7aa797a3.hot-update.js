webpackHotUpdate_N_E("pages/admin/dashboard",{

/***/ "./components/Cards/CardBarChart.js":
/*!******************************************!*\
  !*** ./components/Cards/CardBarChart.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardBarChart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\workspace\\DashBoards\\Nextjs\\components\\Cards\\CardBarChart.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function CardBarChart() {
  _s();

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"],
        datasets: [{
          label: new Date().getFullYear(),
          backgroundColor: "#ed64a6",
          borderColor: "#ed64a6",
          data: [30, 78, 56, 34, 100, 45, 13],
          fill: false,
          barThickness: 8
        }, {
          label: new Date().getFullYear() - 1,
          fill: false,
          backgroundColor: "#4c51bf",
          borderColor: "#4c51bf",
          data: [27, 68, 86, 74, 10, 4, 87],
          barThickness: 8
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart"
        },
        tooltips: {
          mode: "index",
          intersect: false
        },
        hover: {
          mode: "nearest",
          intersect: true
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)"
          },
          align: "end",
          position: "bottom"
        },
        scales: {
          xAxes: [{
            display: false,
            scaleLabel: {
              display: true,
              labelString: "Month"
            },
            gridLines: {
              borderDash: [2],
              borderDashOffset: [2],
              color: "rgba(33, 37, 41, 0.3)",
              zeroLineColor: "rgba(33, 37, 41, 0.3)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2]
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: false,
              labelString: "Value"
            },
            gridLines: {
              borderDash: [2],
              drawBorder: false,
              borderDashOffset: [2],
              color: "rgba(33, 37, 41, 0.2)",
              zeroLineColor: "rgba(33, 37, 41, 0.15)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2]
            }
          }]
        }
      }
    };
    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a(ctx, config);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "rounded-t mb-0 px-4 py-3 bg-transparent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-wrap items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "relative w-full max-w-full flex-grow flex-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, __jsx("h6", {
    className: "uppercase text-gray-500 mb-1 text-xs font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }, "Performance"), __jsx("h2", {
    className: "text-gray-800 text-xl font-semibold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, "Total orders")))), __jsx("div", {
    className: "p-4 flex-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative h-350-px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, __jsx("canvas", {
    id: "bar-chart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  })))));
}

_s(CardBarChart, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = CardBarChart;

var _c;

$RefreshReg$(_c, "CardBarChart");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkcy9DYXJkQmFyQ2hhcnQuanMiXSwibmFtZXMiOlsiQ2FyZEJhckNoYXJ0IiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJjb25maWciLCJ0eXBlIiwiZGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImZpbGwiLCJiYXJUaGlja25lc3MiLCJvcHRpb25zIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInJlc3BvbnNpdmUiLCJ0aXRsZSIsImRpc3BsYXkiLCJ0ZXh0IiwidG9vbHRpcHMiLCJtb2RlIiwiaW50ZXJzZWN0IiwiaG92ZXIiLCJsZWdlbmQiLCJmb250Q29sb3IiLCJhbGlnbiIsInBvc2l0aW9uIiwic2NhbGVzIiwieEF4ZXMiLCJzY2FsZUxhYmVsIiwibGFiZWxTdHJpbmciLCJncmlkTGluZXMiLCJib3JkZXJEYXNoIiwiYm9yZGVyRGFzaE9mZnNldCIsImNvbG9yIiwiemVyb0xpbmVDb2xvciIsInplcm9MaW5lQm9yZGVyRGFzaCIsInplcm9MaW5lQm9yZGVyRGFzaE9mZnNldCIsInlBeGVzIiwiZHJhd0JvcmRlciIsImN0eCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0Iiwid2luZG93IiwibXlCYXIiLCJDaGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsWUFBVCxHQUF3QjtBQUFBOztBQUNyQ0MsOENBQUssQ0FBQ0MsU0FBTixDQUFnQixNQUFNO0FBQ3BCLFFBQUlDLE1BQU0sR0FBRztBQUNYQyxVQUFJLEVBQUUsS0FESztBQUVYQyxVQUFJLEVBQUU7QUFDSkMsY0FBTSxFQUFFLENBQ04sU0FETSxFQUVOLFdBRk0sRUFHTixPQUhNLEVBSU4sT0FKTSxFQUtOLE1BTE0sRUFNTixPQU5NLEVBT04sT0FQTSxD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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMseUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyw2Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsb0RBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUlFO0FBQUksYUFBUyxFQUFDLHFDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkYsQ0FERixDQURGLENBREYsRUFhRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxNQUFFLEVBQUMsV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixDQWJGLENBREYsQ0FERjtBQXdCRDs7R0F6SHVCSCxZOztLQUFBQSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2Rhc2hib2FyZC5kYjZhYTliZWEwYmQ3YWE3OTdhMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkQmFyQ2hhcnQoKSB7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgIHR5cGU6IFwiYmFyXCIsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhYmVsczogW1xuICAgICAgICAgIFwiSmFuZWlyb1wiLFxuICAgICAgICAgIFwiRmV2ZXJlaXJvXCIsXG4gICAgICAgICAgXCJNYXLDp29cIixcbiAgICAgICAgICBcIkFicmlsXCIsXG4gICAgICAgICAgXCJNYWlvXCIsXG4gICAgICAgICAgXCJKdW5ob1wiLFxuICAgICAgICAgIFwiSnVsaG9cIixcbiAgICAgICAgXSxcbiAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNlZDY0YTZcIixcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiNlZDY0YTZcIixcbiAgICAgICAgICAgIGRhdGE6IFszMCwgNzgsIDU2LCAzNCwgMTAwLCA0NSwgMTNdLFxuICAgICAgICAgICAgZmlsbDogZmFsc2UsXG4gICAgICAgICAgICBiYXJUaGlja25lc3M6IDgsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIC0gMSxcbiAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM0YzUxYmZcIixcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiM0YzUxYmZcIixcbiAgICAgICAgICAgIGRhdGE6IFsyNywgNjgsIDg2LCA3NCwgMTAsIDQsIDg3XSxcbiAgICAgICAgICAgIGJhclRoaWNrbmVzczogOCxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgdGV4dDogXCJPcmRlcnMgQ2hhcnRcIixcbiAgICAgICAgfSxcbiAgICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgICBtb2RlOiBcImluZGV4XCIsXG4gICAgICAgICAgaW50ZXJzZWN0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICBtb2RlOiBcIm5lYXJlc3RcIixcbiAgICAgICAgICBpbnRlcnNlY3Q6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgZm9udENvbG9yOiBcInJnYmEoMCwwLDAsLjQpXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbGlnbjogXCJlbmRcIixcbiAgICAgICAgICBwb3NpdGlvbjogXCJib3R0b21cIixcbiAgICAgICAgfSxcbiAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgeEF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgIHNjYWxlTGFiZWw6IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiBcIk1vbnRoXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgICAgIGJvcmRlckRhc2g6IFsyXSxcbiAgICAgICAgICAgICAgICBib3JkZXJEYXNoT2Zmc2V0OiBbMl0sXG4gICAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSgzMywgMzcsIDQxLCAwLjMpXCIsXG4gICAgICAgICAgICAgICAgemVyb0xpbmVDb2xvcjogXCJyZ2JhKDMzLCAzNywgNDEsIDAuMylcIixcbiAgICAgICAgICAgICAgICB6ZXJvTGluZUJvcmRlckRhc2g6IFsyXSxcbiAgICAgICAgICAgICAgICB6ZXJvTGluZUJvcmRlckRhc2hPZmZzZXQ6IFsyXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB5QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6IFwiVmFsdWVcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyRGFzaDogWzJdLFxuICAgICAgICAgICAgICAgIGRyYXdCb3JkZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IFsyXSxcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDMzLCAzNywgNDEsIDAuMilcIixcbiAgICAgICAgICAgICAgICB6ZXJvTGluZUNvbG9yOiBcInJnYmEoMzMsIDM3LCA0MSwgMC4xNSlcIixcbiAgICAgICAgICAgICAgICB6ZXJvTGluZUJvcmRlckRhc2g6IFsyXSxcbiAgICAgICAgICAgICAgICB6ZXJvTGluZUJvcmRlckRhc2hPZmZzZXQ6IFsyXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBsZXQgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXItY2hhcnRcIikuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHdpbmRvdy5teUJhciA9IG5ldyBDaGFydChjdHgsIGNvbmZpZyk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIG1pbi13LTAgYnJlYWstd29yZHMgYmctd2hpdGUgdy1mdWxsIG1iLTYgc2hhZG93LWxnIHJvdW5kZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXQgbWItMCBweC00IHB5LTMgYmctdHJhbnNwYXJlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgbWF4LXctZnVsbCBmbGV4LWdyb3cgZmxleC0xXCI+XG4gICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC1ncmF5LTUwMCBtYi0xIHRleHQteHMgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgIFBlcmZvcm1hbmNlXG4gICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktODAwIHRleHQteGwgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgIFRvdGFsIG9yZGVyc1xuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBmbGV4LWF1dG9cIj5cbiAgICAgICAgICB7LyogQ2hhcnQgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTM1MC1weFwiPlxuICAgICAgICAgICAgPGNhbnZhcyBpZD1cImJhci1jaGFydFwiPjwvY2FudmFzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==