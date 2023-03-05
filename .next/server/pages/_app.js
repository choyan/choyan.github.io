(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5810:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Montserrat_Alternates_3e1da3', '__Montserrat_Alternates_Fallback_3e1da3'","fontWeight":400,"fontStyle":"normal"},
	"className": "__className_3e1da3"
};


/***/ }),

/***/ 9893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ devices)
/* harmony export */ });
const breakPoints = {
    mobileL: "576px",
    tabletM: "768px",
    desktopM: "992px",
    tabletL: "1024px",
    desktopL: "1200px"
};
const devices = {
    mobileL: `(max-width: ${breakPoints.mobileL})`,
    tabletM: `(max-width: ${breakPoints.tabletM})`,
    desktopM: `(max-width: ${breakPoints.desktopM})`,
    tabletL: `(max-width: ${breakPoints.tabletL})`,
    desktopL: `(max-width: ${breakPoints.desktopL})`
};


/***/ }),

/***/ 8476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
;// CONCATENATED MODULE: external "react-transition-group"
const external_react_transition_group_namespaceObject = require("react-transition-group");
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Layout/Transition/styles.ts


const TIMEOUT = "250ms";
const transitionStyles = {
    entering: {
        position: `absolute`,
        opacity: 0,
        transform: `translateX(50px)`
    },
    entered: {
        transition: `opacity ${TIMEOUT} ease, transform ${TIMEOUT} ease`,
        opacity: 1,
        transform: `translateX(0px)`,
        animation: "blink .3s linear 2"
    },
    exiting: {
        transition: `opacity ${TIMEOUT} ease, transform ${TIMEOUT} ease`,
        opacity: 0,
        transform: `translateX(-50px)`
    }
};
const StyledTransitionGroup = external_styled_components_default()(external_react_transition_group_namespaceObject.TransitionGroup).withConfig({
    componentId: "sc-9e16b66d-0"
})`
  position: relative;
`;

;// CONCATENATED MODULE: ./components/Layout/Transition/index.tsx



const Transition_TIMEOUT = 250;
const Transition = ({ children , location  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledTransitionGroup, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_transition_group_namespaceObject.Transition, {
            timeout: {
                enter: Transition_TIMEOUT,
                exit: Transition_TIMEOUT
            },
            children: (status)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        ...transitionStyles[status]
                    },
                    children: children
                })
        }, location)
    });
};

// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"styles/globalStyles.ts","import":"Montserrat_Alternates","arguments":[{"weight":"400"}],"variableName":"montserrat"}
var globalStyles_ts_import_Montserrat_Alternates_arguments_weight_400_variableName_montserrat_ = __webpack_require__(5810);
var globalStyles_ts_import_Montserrat_Alternates_arguments_weight_400_variableName_montserrat_default = /*#__PURE__*/__webpack_require__.n(globalStyles_ts_import_Montserrat_Alternates_arguments_weight_400_variableName_montserrat_);
// EXTERNAL MODULE: ./lib/displayDevice.ts
var displayDevice = __webpack_require__(9893);
;// CONCATENATED MODULE: ./styles/globalStyles.ts



const GlobalStyle = external_styled_components_.createGlobalStyle`
    body {
      margin:0;
      padding:0;
      border: 0;
      outline: 0;
      overflow-x: hidden;
      font-family: ${(globalStyles_ts_import_Montserrat_Alternates_arguments_weight_400_variableName_montserrat_default()).style.fontFamily};
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }

    * {
      box-sizing: border-box;
      border: 0 solid;
    }

    html {
        scroll-behavior: smooth;
    }

    #__next {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    a {
      text-decoration: none;
      text-align: initial;
      outline: none;
      font-size: 1.125rem;
    }

    button {
      padding: 0;
      line-height: inherit;
      color: inherit;
      cursor: pointer;
    }

    input,
    textarea {
      border: 0;
      transition: all 0.3s ease-in-out;
      outline: none;
      width: 100%;
      padding: 1rem 1.25rem;
    }

    h2, h3, h4, h5 {
      line-height: 35px;
    }

    h1 {
      font-weight: 600;
      letter-spacing: 0.025rem;
      margin-bottom: 1rem;
      font-size: 2.8125rem;

      @media ${displayDevice/* devices.tabletL */.H.tabletL} {
        font-size: 2.375rem;
      }

      @media ${displayDevice/* devices.mobileL */.H.mobileL} {
        font-size: 1.75rem;
      }
    }

    h3 {
      margin-bottom: 1rem;
      font-weight: 600;
      font-size: 2rem;

      @media ${displayDevice/* devices.tabletL */.H.tabletL} {
        font-size: 1.75rem;
      }

      @media ${displayDevice/* devices.mobileL */.H.mobileL} {
        font-size: 1.25rem;
      }
    }

    h4 {
      margin-bottom: 1rem;
      font-weight: 600;
      font-size: 1.25rem;
    }

    p, li {
      line-height: 28px;
    }

    p, h2, button {
      font-weight: 400;
      font-size: 1.125rem;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
`;

// EXTERNAL MODULE: ./styles/nprogress.css
var nprogress = __webpack_require__(5527);
;// CONCATENATED MODULE: ./pages/_app.tsx






const NProgress = __webpack_require__(808);
NProgress.configure({
    showSpinner: false
});
let progressBarTimeout;
const startProgressBar = ()=>{
    clearTimeout(progressBarTimeout);
    progressBarTimeout = setTimeout(NProgress.start, 200);
};
const stopProgressBar = ()=>{
    clearTimeout(progressBarTimeout);
    NProgress.done();
};
router_default().events.on("routeChangeStart", startProgressBar);
router_default().events.on("routeChangeComplete", stopProgressBar);
router_default().events.on("routeChangeError", stopProgressBar);
function App({ Component , pageProps , router  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_next_themes_.ThemeProvider, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(GlobalStyle, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Transition, {
                location: router.pathname,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}


/***/ }),

/***/ 5527:
/***/ (() => {



/***/ }),

/***/ 1162:
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 808:
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
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
var __webpack_exports__ = (__webpack_exec__(8476));
module.exports = __webpack_exports__;

})();