/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/@next/font/google/target.css?{\"path\":\"styles/globalStyles.ts\",\"import\":\"Montserrat_Alternates\",\"arguments\":[{\"weight\":\"400\"}],\"variableName\":\"montserrat\"}":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@next/font/google/target.css?{"path":"styles/globalStyles.ts","import":"Montserrat_Alternates","arguments":[{"weight":"400"}],"variableName":"montserrat"} ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"style\": {\"fontFamily\":\"'__Montserrat_Alternates_3e1da3', '__Montserrat_Alternates_Fallback_3e1da3'\",\"fontWeight\":400,\"fontStyle\":\"normal\"},\n\t\"className\": \"__className_3e1da3\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG5leHQvZm9udC9nb29nbGUvdGFyZ2V0LmNzcz97XCJwYXRoXCI6XCJzdHlsZXMvZ2xvYmFsU3R5bGVzLnRzXCIsXCJpbXBvcnRcIjpcIk1vbnRzZXJyYXRfQWx0ZXJuYXRlc1wiLFwiYXJndW1lbnRzXCI6W3tcIndlaWdodFwiOlwiNDAwXCJ9XSxcInZhcmlhYmxlTmFtZVwiOlwibW9udHNlcnJhdFwifS5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0EsV0FBVyxpSUFBaUk7QUFDNUk7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9AbmV4dC9mb250L2dvb2dsZS90YXJnZXQuY3NzPzc2NjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic3R5bGVcIjoge1wiZm9udEZhbWlseVwiOlwiJ19fTW9udHNlcnJhdF9BbHRlcm5hdGVzXzNlMWRhMycsICdfX01vbnRzZXJyYXRfQWx0ZXJuYXRlc19GYWxsYmFja18zZTFkYTMnXCIsXCJmb250V2VpZ2h0XCI6NDAwLFwiZm9udFN0eWxlXCI6XCJub3JtYWxcIn0sXG5cdFwiY2xhc3NOYW1lXCI6IFwiX19jbGFzc05hbWVfM2UxZGEzXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@next/font/google/target.css?{\"path\":\"styles/globalStyles.ts\",\"import\":\"Montserrat_Alternates\",\"arguments\":[{\"weight\":\"400\"}],\"variableName\":\"montserrat\"}\n");

/***/ }),

/***/ "./components/Layout/Transition/index.tsx":
/*!************************************************!*\
  !*** ./components/Layout/Transition/index.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Transition\": () => (/* binding */ Transition)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-transition-group */ \"react-transition-group\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_Layout_Transition_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Layout/Transition/styles */ \"./components/Layout/Transition/styles.ts\");\n\n\n\nconst TIMEOUT = 250;\nconst Transition = ({ children , location  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Layout_Transition_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTransitionGroup, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_1__.Transition, {\n            timeout: {\n                enter: TIMEOUT,\n                exit: TIMEOUT\n            },\n            children: (status)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        ...components_Layout_Transition_styles__WEBPACK_IMPORTED_MODULE_2__.transitionStyles[status]\n                    },\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/Users/choyan/Projects/choyan.github.io/components/Layout/Transition/index.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, undefined)\n        }, location, false, {\n            fileName: \"/Users/choyan/Projects/choyan.github.io/components/Layout/Transition/index.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/choyan/Projects/choyan.github.io/components/Layout/Transition/index.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9UcmFuc2l0aW9uL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUF1RTtBQUsxQjtBQU83QyxNQUFNSSxVQUFrQjtBQUVqQixNQUFNSixhQUFhLENBQUMsRUFBRUssU0FBUSxFQUFFQyxTQUFRLEVBQW1CLEdBQUs7SUFDckUscUJBQ0UsOERBQUNILHNGQUFxQkE7a0JBQ3BCLDRFQUFDRiw4REFBZUE7WUFFZE0sU0FBUztnQkFDUEMsT0FBT0o7Z0JBQ1BLLE1BQU1MO1lBQ1I7c0JBRUMsQ0FBQ00sdUJBQ0EsOERBQUNDO29CQUNDQyxPQUFPO3dCQUNMLEdBQUdWLGlGQUFnQixDQUFDUSxPQUFPO29CQUM3Qjs4QkFFQ0w7Ozs7OztXQVpBQzs7Ozs7Ozs7OztBQWtCYixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vY29tcG9uZW50cy9MYXlvdXQvVHJhbnNpdGlvbi9pbmRleC50c3g/Yzg0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2l0aW9uIGFzIFJlYWN0VHJhbnNpdGlvbiB9IGZyb20gXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIHRyYW5zaXRpb25TdHlsZXMsXHJcbiAgU3R5bGVkVHJhbnNpdGlvbkdyb3VwLFxyXG59IGZyb20gXCJjb21wb25lbnRzL0xheW91dC9UcmFuc2l0aW9uL3N0eWxlc1wiO1xyXG5cclxuaW50ZXJmYWNlIFRyYW5zaXRpb25Qcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBsb2NhdGlvbjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBUSU1FT1VUOiBudW1iZXIgPSAyNTA7XHJcblxyXG5leHBvcnQgY29uc3QgVHJhbnNpdGlvbiA9ICh7IGNoaWxkcmVuLCBsb2NhdGlvbiB9OiBUcmFuc2l0aW9uUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZFRyYW5zaXRpb25Hcm91cD5cclxuICAgICAgPFJlYWN0VHJhbnNpdGlvblxyXG4gICAgICAgIGtleT17bG9jYXRpb259XHJcbiAgICAgICAgdGltZW91dD17e1xyXG4gICAgICAgICAgZW50ZXI6IFRJTUVPVVQsXHJcbiAgICAgICAgICBleGl0OiBUSU1FT1VULFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7KHN0YXR1cykgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIC4uLnRyYW5zaXRpb25TdHlsZXNbc3RhdHVzXSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9SZWFjdFRyYW5zaXRpb24+XHJcbiAgICA8L1N0eWxlZFRyYW5zaXRpb25Hcm91cD5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiVHJhbnNpdGlvbiIsIlJlYWN0VHJhbnNpdGlvbiIsInRyYW5zaXRpb25TdHlsZXMiLCJTdHlsZWRUcmFuc2l0aW9uR3JvdXAiLCJUSU1FT1VUIiwiY2hpbGRyZW4iLCJsb2NhdGlvbiIsInRpbWVvdXQiLCJlbnRlciIsImV4aXQiLCJzdGF0dXMiLCJkaXYiLCJzdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout/Transition/index.tsx\n");

/***/ }),

/***/ "./components/Layout/Transition/styles.ts":
/*!************************************************!*\
  !*** ./components/Layout/Transition/styles.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StyledTransitionGroup\": () => (/* binding */ StyledTransitionGroup),\n/* harmony export */   \"transitionStyles\": () => (/* binding */ transitionStyles)\n/* harmony export */ });\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-transition-group */ \"react-transition-group\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst TIMEOUT = \"250ms\";\nconst transitionStyles = {\n    entering: {\n        position: `absolute`,\n        opacity: 0,\n        transform: `translateX(50px)`\n    },\n    entered: {\n        transition: `opacity ${TIMEOUT} ease, transform ${TIMEOUT} ease`,\n        opacity: 1,\n        transform: `translateX(0px)`,\n        animation: \"blink .3s linear 2\"\n    },\n    exiting: {\n        transition: `opacity ${TIMEOUT} ease, transform ${TIMEOUT} ease`,\n        opacity: 0,\n        transform: `translateX(-50px)`\n    }\n};\nconst StyledTransitionGroup = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(react_transition_group__WEBPACK_IMPORTED_MODULE_0__.TransitionGroup).withConfig({\n    displayName: \"styles__StyledTransitionGroup\",\n    componentId: \"sc-9e16b66d-0\"\n})`\r\n  position: relative;\r\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9UcmFuc2l0aW9uL3N0eWxlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUQ7QUFDbEI7QUFFdkMsTUFBTUUsVUFBa0I7QUFFakIsTUFBTUMsbUJBQW1CO0lBQzlCQyxVQUFVO1FBQ1JDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDcEJDLFNBQVM7UUFDVEMsV0FBVyxDQUFDLGdCQUFnQixDQUFDO0lBQy9CO0lBQ0FDLFNBQVM7UUFDUEMsWUFBWSxDQUFDLFFBQVEsRUFBRVAsUUFBUSxpQkFBaUIsRUFBRUEsUUFBUSxLQUFLLENBQUM7UUFDaEVJLFNBQVM7UUFDVEMsV0FBVyxDQUFDLGVBQWUsQ0FBQztRQUM1QkcsV0FBVztJQUNiO0lBQ0FDLFNBQVM7UUFDUEYsWUFBWSxDQUFDLFFBQVEsRUFBRVAsUUFBUSxpQkFBaUIsRUFBRUEsUUFBUSxLQUFLLENBQUM7UUFDaEVJLFNBQVM7UUFDVEMsV0FBVyxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDO0FBQ0YsRUFBUztBQUVGLE1BQU1LLHdCQUF3Qlgsd0RBQU1BLENBQUNELG1FQUFlQTs7O0VBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL2NvbXBvbmVudHMvTGF5b3V0L1RyYW5zaXRpb24vc3R5bGVzLnRzP2JiODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNpdGlvbkdyb3VwIH0gZnJvbSBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IFRJTUVPVVQ6IHN0cmluZyA9IFwiMjUwbXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB0cmFuc2l0aW9uU3R5bGVzID0ge1xyXG4gIGVudGVyaW5nOiB7XHJcbiAgICBwb3NpdGlvbjogYGFic29sdXRlYCxcclxuICAgIG9wYWNpdHk6IDAsXHJcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDUwcHgpYCxcclxuICB9LFxyXG4gIGVudGVyZWQ6IHtcclxuICAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7VElNRU9VVH0gZWFzZSwgdHJhbnNmb3JtICR7VElNRU9VVH0gZWFzZWAsXHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgwcHgpYCxcclxuICAgIGFuaW1hdGlvbjogXCJibGluayAuM3MgbGluZWFyIDJcIixcclxuICB9LFxyXG4gIGV4aXRpbmc6IHtcclxuICAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7VElNRU9VVH0gZWFzZSwgdHJhbnNmb3JtICR7VElNRU9VVH0gZWFzZWAsXHJcbiAgICBvcGFjaXR5OiAwLFxyXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtNTBweClgLFxyXG4gIH0sXHJcbn0gYXMgYW55O1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZFRyYW5zaXRpb25Hcm91cCA9IHN0eWxlZChUcmFuc2l0aW9uR3JvdXApYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYDtcclxuIl0sIm5hbWVzIjpbIlRyYW5zaXRpb25Hcm91cCIsInN0eWxlZCIsIlRJTUVPVVQiLCJ0cmFuc2l0aW9uU3R5bGVzIiwiZW50ZXJpbmciLCJwb3NpdGlvbiIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJlbnRlcmVkIiwidHJhbnNpdGlvbiIsImFuaW1hdGlvbiIsImV4aXRpbmciLCJTdHlsZWRUcmFuc2l0aW9uR3JvdXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout/Transition/styles.ts\n");

/***/ }),

/***/ "./lib/displayDevice.ts":
/*!******************************!*\
  !*** ./lib/displayDevice.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"devices\": () => (/* binding */ devices)\n/* harmony export */ });\nconst breakPoints = {\n    mobileL: \"576px\",\n    tabletM: \"768px\",\n    desktopM: \"992px\",\n    tabletL: \"1024px\",\n    desktopL: \"1200px\"\n};\nconst devices = {\n    mobileL: `(max-width: ${breakPoints.mobileL})`,\n    tabletM: `(max-width: ${breakPoints.tabletM})`,\n    desktopM: `(max-width: ${breakPoints.desktopM})`,\n    tabletL: `(max-width: ${breakPoints.tabletL})`,\n    desktopL: `(max-width: ${breakPoints.desktopL})`\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZGlzcGxheURldmljZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsY0FBYztJQUNsQkMsU0FBUztJQUNUQyxTQUFTO0lBQ1RDLFVBQVU7SUFDVkMsU0FBUztJQUNUQyxVQUFVO0FBQ1o7QUFFTyxNQUFNQyxVQUFVO0lBQ3JCTCxTQUFTLENBQUMsWUFBWSxFQUFFRCxZQUFZQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzlDQyxTQUFTLENBQUMsWUFBWSxFQUFFRixZQUFZRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzlDQyxVQUFVLENBQUMsWUFBWSxFQUFFSCxZQUFZRyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2hEQyxTQUFTLENBQUMsWUFBWSxFQUFFSixZQUFZSSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzlDQyxVQUFVLENBQUMsWUFBWSxFQUFFTCxZQUFZSyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ2xELEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9saWIvZGlzcGxheURldmljZS50cz9lZjE0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJyZWFrUG9pbnRzID0ge1xyXG4gIG1vYmlsZUw6IFwiNTc2cHhcIixcclxuICB0YWJsZXRNOiBcIjc2OHB4XCIsXHJcbiAgZGVza3RvcE06IFwiOTkycHhcIixcclxuICB0YWJsZXRMOiBcIjEwMjRweFwiLFxyXG4gIGRlc2t0b3BMOiBcIjEyMDBweFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRldmljZXMgPSB7XHJcbiAgbW9iaWxlTDogYChtYXgtd2lkdGg6ICR7YnJlYWtQb2ludHMubW9iaWxlTH0pYCxcclxuICB0YWJsZXRNOiBgKG1heC13aWR0aDogJHticmVha1BvaW50cy50YWJsZXRNfSlgLFxyXG4gIGRlc2t0b3BNOiBgKG1heC13aWR0aDogJHticmVha1BvaW50cy5kZXNrdG9wTX0pYCxcclxuICB0YWJsZXRMOiBgKG1heC13aWR0aDogJHticmVha1BvaW50cy50YWJsZXRMfSlgLFxyXG4gIGRlc2t0b3BMOiBgKG1heC13aWR0aDogJHticmVha1BvaW50cy5kZXNrdG9wTH0pYCxcclxufTtcclxuIl0sIm5hbWVzIjpbImJyZWFrUG9pbnRzIiwibW9iaWxlTCIsInRhYmxldE0iLCJkZXNrdG9wTSIsInRhYmxldEwiLCJkZXNrdG9wTCIsImRldmljZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/displayDevice.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_Layout_Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Layout/Transition */ \"./components/Layout/Transition/index.tsx\");\n/* harmony import */ var styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/globalStyles */ \"./styles/globalStyles.ts\");\n/* harmony import */ var styles_nprogress_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/nprogress.css */ \"./styles/nprogress.css\");\n/* harmony import */ var styles_nprogress_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styles_nprogress_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst NProgress = __webpack_require__(/*! nprogress */ \"nprogress\");\nNProgress.configure({\n    showSpinner: false\n});\nlet progressBarTimeout;\nconst startProgressBar = ()=>{\n    clearTimeout(progressBarTimeout);\n    progressBarTimeout = setTimeout(NProgress.start, 200);\n};\nconst stopProgressBar = ()=>{\n    clearTimeout(progressBarTimeout);\n    NProgress.done();\n};\nnext_router__WEBPACK_IMPORTED_MODULE_1___default().events.on(\"routeChangeStart\", startProgressBar);\nnext_router__WEBPACK_IMPORTED_MODULE_1___default().events.on(\"routeChangeComplete\", stopProgressBar);\nnext_router__WEBPACK_IMPORTED_MODULE_1___default().events.on(\"routeChangeError\", stopProgressBar);\nfunction App({ Component , pageProps , router  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__.GlobalStyle, {}, void 0, false, {\n                fileName: \"/Users/choyan/Projects/choyan.github.io/pages/_app.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Layout_Transition__WEBPACK_IMPORTED_MODULE_3__.Transition, {\n                location: router.pathname,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/choyan/Projects/choyan.github.io/pages/_app.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/choyan/Projects/choyan.github.io/pages/_app.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/choyan/Projects/choyan.github.io/pages/_app.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2lDO0FBQ1c7QUFDYztBQUVSO0FBQ3BCO0FBRTlCLE1BQU1JLFlBQVlDLG1CQUFPQSxDQUFDLDRCQUFXO0FBQ3JDRCxVQUFVRSxTQUFTLENBQUM7SUFBRUMsYUFBYSxLQUFLO0FBQUM7QUFFekMsSUFBSUM7QUFFSixNQUFNQyxtQkFBbUIsSUFBTTtJQUM3QkMsYUFBYUY7SUFDYkEscUJBQXFCRyxXQUFXUCxVQUFVUSxLQUFLLEVBQUU7QUFDbkQ7QUFFQSxNQUFNQyxrQkFBa0IsSUFBTTtJQUM1QkgsYUFBYUY7SUFDYkosVUFBVVUsSUFBSTtBQUNoQjtBQUVBZCw0REFBZ0IsQ0FBQyxvQkFBb0JTO0FBQ3JDVCw0REFBZ0IsQ0FBQyx1QkFBdUJhO0FBQ3hDYiw0REFBZ0IsQ0FBQyxvQkFBb0JhO0FBRXRCLFNBQVNJLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUVuQixPQUFNLEVBQVksRUFBRTtJQUN0RSxxQkFDRSw4REFBQ0Msc0RBQWFBOzswQkFDWiw4REFBQ0UsNERBQVdBOzs7OzswQkFDWiw4REFBQ0Qsb0VBQVVBO2dCQUFDa0IsVUFBVXBCLE9BQU9xQixRQUFROzBCQUNuQyw0RUFBQ0g7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIm5leHQtdGhlbWVzXCI7XHJcbmltcG9ydCB7IFRyYW5zaXRpb24gfSBmcm9tIFwiY29tcG9uZW50cy9MYXlvdXQvVHJhbnNpdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVzL2dsb2JhbFN0eWxlc1wiO1xyXG5pbXBvcnQgXCJzdHlsZXMvbnByb2dyZXNzLmNzc1wiO1xyXG5cclxuY29uc3QgTlByb2dyZXNzID0gcmVxdWlyZShcIm5wcm9ncmVzc1wiKTtcclxuTlByb2dyZXNzLmNvbmZpZ3VyZSh7IHNob3dTcGlubmVyOiBmYWxzZSB9KTtcclxuXHJcbmxldCBwcm9ncmVzc0JhclRpbWVvdXQ6IE5vZGVKUy5UaW1lb3V0O1xyXG5cclxuY29uc3Qgc3RhcnRQcm9ncmVzc0JhciA9ICgpID0+IHtcclxuICBjbGVhclRpbWVvdXQocHJvZ3Jlc3NCYXJUaW1lb3V0KTtcclxuICBwcm9ncmVzc0JhclRpbWVvdXQgPSBzZXRUaW1lb3V0KE5Qcm9ncmVzcy5zdGFydCwgMjAwKTtcclxufTtcclxuXHJcbmNvbnN0IHN0b3BQcm9ncmVzc0JhciA9ICgpID0+IHtcclxuICBjbGVhclRpbWVvdXQocHJvZ3Jlc3NCYXJUaW1lb3V0KTtcclxuICBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG59O1xyXG5cclxucm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgc3RhcnRQcm9ncmVzc0Jhcik7XHJcbnJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIHN0b3BQcm9ncmVzc0Jhcik7XHJcbnJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUVycm9yXCIsIHN0b3BQcm9ncmVzc0Jhcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH06IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyPlxyXG4gICAgICA8R2xvYmFsU3R5bGUgLz5cclxuICAgICAgPFRyYW5zaXRpb24gbG9jYXRpb249e3JvdXRlci5wYXRobmFtZX0+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L1RyYW5zaXRpb24+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsicm91dGVyIiwiVGhlbWVQcm92aWRlciIsIlRyYW5zaXRpb24iLCJHbG9iYWxTdHlsZSIsIk5Qcm9ncmVzcyIsInJlcXVpcmUiLCJjb25maWd1cmUiLCJzaG93U3Bpbm5lciIsInByb2dyZXNzQmFyVGltZW91dCIsInN0YXJ0UHJvZ3Jlc3NCYXIiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwic3RhcnQiLCJzdG9wUHJvZ3Jlc3NCYXIiLCJkb25lIiwiZXZlbnRzIiwib24iLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJsb2NhdGlvbiIsInBhdGhuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globalStyles.ts":
/*!********************************!*\
  !*** ./styles/globalStyles.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalStyle\": () => (/* binding */ GlobalStyle)\n/* harmony export */ });\n/* harmony import */ var _next_font_google_target_css_path_styles_globalStyles_ts_import_Montserrat_Alternates_arguments_weight_400_variableName_montserrat___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next/font/google/target.css?{\"path\":\"styles/globalStyles.ts\",\"import\":\"Montserrat_Alternates\",\"arguments\":[{\"weight\":\"400\"}],\"variableName\":\"montserrat\"} */ \"./node_modules/@next/font/google/target.css?{\\\"path\\\":\\\"styles/globalStyles.ts\\\",\\\"import\\\":\\\"Montserrat_Alternates\\\",\\\"arguments\\\":[{\\\"weight\\\":\\\"400\\\"}],\\\"variableName\\\":\\\"montserrat\\\"}\");\n/* harmony import */ var _next_font_google_target_css_path_styles_globalStyles_ts_import_Montserrat_Alternates_arguments_weight_400_variableName_montserrat___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_font_google_target_css_path_styles_globalStyles_ts_import_Montserrat_Alternates_arguments_weight_400_variableName_montserrat___WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lib_displayDevice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/displayDevice */ \"./lib/displayDevice.ts\");\n\n\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\r\n    body {\r\n      margin:0;\r\n      padding:0;\r\n      border: 0;\r\n      outline: 0;\r\n      overflow-x: hidden;\r\n      font-family: ${(_next_font_google_target_css_path_styles_globalStyles_ts_import_Montserrat_Alternates_arguments_weight_400_variableName_montserrat___WEBPACK_IMPORTED_MODULE_2___default().style.fontFamily)};\r\n      font-weight: 400;\r\n      font-style: normal;\r\n      font-display: swap;\r\n    }\r\n\r\n    * {\r\n      box-sizing: border-box;\r\n      border: 0 solid;\r\n    }\r\n\r\n    html {\r\n        scroll-behavior: smooth;\r\n    }\r\n\r\n    #__next {\r\n      display: flex;\r\n      flex-direction: column;\r\n      min-height: 100vh;\r\n    }\r\n\r\n    a {\r\n      text-decoration: none;\r\n      text-align: initial;\r\n      outline: none;\r\n      font-size: 1.125rem;\r\n    }\r\n\r\n    button {\r\n      padding: 0;\r\n      line-height: inherit;\r\n      color: inherit;\r\n      cursor: pointer;\r\n    }\r\n\r\n    input,\r\n    textarea {\r\n      border: 0;\r\n      transition: all 0.3s ease-in-out;\r\n      outline: none;\r\n      width: 100%;\r\n      padding: 1rem 1.25rem;\r\n    }\r\n\r\n    h2, h3, h4, h5 {\r\n      line-height: 35px;\r\n    }\r\n\r\n    h1 {\r\n      font-weight: 600;\r\n      letter-spacing: 0.025rem;\r\n      margin-bottom: 1rem;\r\n      font-size: 2.8125rem;\r\n\r\n      @media ${lib_displayDevice__WEBPACK_IMPORTED_MODULE_1__.devices.tabletL} {\r\n        font-size: 2.375rem;\r\n      }\r\n\r\n      @media ${lib_displayDevice__WEBPACK_IMPORTED_MODULE_1__.devices.mobileL} {\r\n        font-size: 1.75rem;\r\n      }\r\n    }\r\n\r\n    h3 {\r\n      margin-bottom: 1rem;\r\n      font-weight: 600;\r\n      font-size: 2rem;\r\n\r\n      @media ${lib_displayDevice__WEBPACK_IMPORTED_MODULE_1__.devices.tabletL} {\r\n        font-size: 1.75rem;\r\n      }\r\n\r\n      @media ${lib_displayDevice__WEBPACK_IMPORTED_MODULE_1__.devices.mobileL} {\r\n        font-size: 1.25rem;\r\n      }\r\n    }\r\n\r\n    h4 {\r\n      margin-bottom: 1rem;\r\n      font-weight: 600;\r\n      font-size: 1.25rem;\r\n    }\r\n\r\n    p, li {\r\n      line-height: 28px;\r\n    }\r\n\r\n    p, h2, button {\r\n      font-weight: 400;\r\n      font-size: 1.125rem;\r\n    }\r\n\r\n    ul {\r\n      list-style: none;\r\n      margin: 0;\r\n      padding: 0;\r\n    }\r\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvZ2xvYmFsU3R5bGVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUlNQTtBQUpnRDtBQUNWO0FBT3JDLE1BQU1HLGNBQWNGLGdFQUFpQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3R5bGVzL2dsb2JhbFN0eWxlcy50cz81NGYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGRldmljZXMgfSBmcm9tIFwibGliL2Rpc3BsYXlEZXZpY2VcIjtcclxuaW1wb3J0IHsgTW9udHNlcnJhdF9BbHRlcm5hdGVzIH0gZnJvbSAnQG5leHQvZm9udC9nb29nbGUnXHJcblxyXG5jb25zdCBtb250c2VycmF0ID0gTW9udHNlcnJhdF9BbHRlcm5hdGVzKHtcclxuICB3ZWlnaHQ6ICc0MDAnXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAgIGJvZHkge1xyXG4gICAgICBtYXJnaW46MDtcclxuICAgICAgcGFkZGluZzowO1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgZm9udC1mYW1pbHk6ICR7bW9udHNlcnJhdC5zdHlsZS5mb250RmFtaWx5fTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICB9XHJcblxyXG4gICAgKiB7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGJvcmRlcjogMCBzb2xpZDtcclxuICAgIH1cclxuXHJcbiAgICBodG1sIHtcclxuICAgICAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICAgIH1cclxuXHJcbiAgICAjX19uZXh0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgdGV4dC1hbGlnbjogaW5pdGlhbDtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dCxcclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW0gMS4yNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBoMiwgaDMsIGg0LCBoNSB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGgxIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDI1cmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICBmb250LXNpemU6IDIuODEyNXJlbTtcclxuXHJcbiAgICAgIEBtZWRpYSAke2RldmljZXMudGFibGV0TH0ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi4zNzVyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSAke2RldmljZXMubW9iaWxlTH0ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgZm9udC1zaXplOiAycmVtO1xyXG5cclxuICAgICAgQG1lZGlhICR7ZGV2aWNlcy50YWJsZXRMfSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgJHtkZXZpY2VzLm1vYmlsZUx9IHtcclxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBwLCBsaSB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAsIGgyLCBidXR0b24ge1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIHVsIHtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5gO1xyXG4iXSwibmFtZXMiOlsibW9udHNlcnJhdCIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiZGV2aWNlcyIsIkdsb2JhbFN0eWxlIiwic3R5bGUiLCJmb250RmFtaWx5IiwidGFibGV0TCIsIm1vYmlsZUwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/globalStyles.ts\n");

/***/ }),

/***/ "./styles/nprogress.css":
/*!******************************!*\
  !*** ./styles/nprogress.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();