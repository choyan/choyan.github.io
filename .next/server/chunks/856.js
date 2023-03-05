"use strict";
exports.id = 856;
exports.ids = [856];
exports.modules = {

/***/ 3856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$0": () => (/* binding */ Section),
/* harmony export */   "K3": () => (/* binding */ SectionGrid),
/* harmony export */   "PQ": () => (/* binding */ StyledContainer),
/* harmony export */   "Uq": () => (/* binding */ SectionWrapper),
/* harmony export */   "kC": () => (/* binding */ Flex),
/* harmony export */   "o_": () => (/* binding */ StyledHTML),
/* harmony export */   "or": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_displayDevice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9893);
/* harmony import */ var lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3095);



const Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
    componentId: "sc-56d12079-0"
})`
  display: grid;
  grid-template-columns:
    minmax(6rem, auto) minmax(0, 78rem)
    minmax(6rem, auto);
  grid-gap: calc(12rem * 0.75) 0;
  gap: calc(12rem * 0.75) 0;

  @media ${lib_displayDevice__WEBPACK_IMPORTED_MODULE_1__/* .devices.desktopM */ .H.desktopM} {
    grid-template-columns:
      minmax(4.5rem, auto) minmax(0, 78rem)
      minmax(4.5rem, auto);
  }

  @media ${lib_displayDevice__WEBPACK_IMPORTED_MODULE_1__/* .devices.tabletM */ .H.tabletM} {
    grid-template-columns:
      minmax(3rem, auto) minmax(0, 78rem)
      minmax(3rem, auto);
  }

  @media ${lib_displayDevice__WEBPACK_IMPORTED_MODULE_1__/* .devices.mobileL */ .H.mobileL} {
    display: grid;
    grid-template-columns:
      minmax(1.5rem, auto) minmax(0, 78rem)
      minmax(1.5rem, auto);
    grid-gap: 3rem 0;
    gap: 3rem 0;
  }
`;
const SectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-56d12079-1"
})`
  display: grid;
  grid-column: 2;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 3rem;
  gap: 3rem;
  grid-auto-flow: dense;

  @media ${lib_displayDevice__WEBPACK_IMPORTED_MODULE_1__/* .devices.tabletM */ .H.tabletM} {
    grid-template-columns: none;
    grid-gap: 0;
    gap: 0;
  }
`;
const SectionGrid = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-56d12079-2"
})`
  grid-column: 1/13;
  display: grid;
`;
const Flex = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-56d12079-3"
})`
  display: flex;
  align-items: ${({ align  })=>align ? align : "center"};
  justify-content: ${({ justify  })=>justify ? justify : "space-between"};
  flex-direction: ${({ direction  })=>direction ? direction : "row"};
`;
const StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-56d12079-4"
})`
  position: relative;
  width: 100%;
  max-width: 56rem;
  margin: 0 auto;
`;
const Main = styled_components__WEBPACK_IMPORTED_MODULE_0___default().main.withConfig({
    componentId: "sc-56d12079-5"
})`
  margin: 2rem auto;
  max-width: 55rem;
  width: 100%;

  h2 {
    margin-bottom: 4rem;
  }
`;
const StyledHTML = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle` 
  body {
      background-color: ${({ darkTheme  })=>darkTheme ? lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_BLACK */ .Sx : lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_WHITE */ .Yf};

    strong, .color-black {
      color: ${({ darkTheme  })=>darkTheme ? lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_WHITE */ .Yf : lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_BLACK */ .Sx};
      &:hover {
        text-decoration: none;
        outline: none;
      }
    }

    pre {
      background-color: ${({ darkTheme  })=>darkTheme ? lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_DARK_CREAM */ .H6 : lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_LIGHT_CREAM */ .bO};
      color: ${lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_BLACK */ .Sx};

      strong {
          color: ${lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_BLACK */ .Sx};
      }
    }

    button {
        background-color: ${({ darkTheme  })=>darkTheme ? lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_WHITE */ .Yf : lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_BLACK */ .Sx};
        color: ${({ darkTheme  })=>darkTheme ? lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_BLACK */ .Sx : lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_WHITE */ .Yf};
    }

    h2, h5 {
      color: ${({ darkTheme  })=>darkTheme ? lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_LIGHT_GRAY */ .RE : lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_BLACK */ .Sx};
    }
    
    a {
      color: ${({ darkTheme  })=>darkTheme ? lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_WHITE */ .Yf : lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_BLUE */ .pI};
    }

    ul, p, span {
      color: ${({ darkTheme  })=>darkTheme ? lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_DARK_GRAY */ .TP : lib_colorPalette__WEBPACK_IMPORTED_MODULE_2__/* .COLOR_BLACK */ .Sx};
    }
    
    a:hover, .active {
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 6px;
    }
}`;


/***/ }),

/***/ 3095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H6": () => (/* binding */ COLOR_DARK_CREAM),
/* harmony export */   "MS": () => (/* binding */ COLOR_SPOTIFY_GREEN),
/* harmony export */   "RE": () => (/* binding */ COLOR_LIGHT_GRAY),
/* harmony export */   "Sx": () => (/* binding */ COLOR_BLACK),
/* harmony export */   "TP": () => (/* binding */ COLOR_DARK_GRAY),
/* harmony export */   "Yf": () => (/* binding */ COLOR_WHITE),
/* harmony export */   "bO": () => (/* binding */ COLOR_LIGHT_CREAM),
/* harmony export */   "ow": () => (/* binding */ COLOR_MEDIUM_GRAY),
/* harmony export */   "pI": () => (/* binding */ COLOR_BLUE)
/* harmony export */ });
/* unused harmony export COLOR_GRAY */
const COLOR_BLACK = "#000";
const COLOR_WHITE = "#fafafa";
const COLOR_GRAY = "#787f85";
const COLOR_DARK_GRAY = "#999";
const COLOR_MEDIUM_GRAY = "#333333";
const COLOR_SPOTIFY_GREEN = "#1DB954";
const COLOR_LIGHT_GRAY = "#e5e7eb";
const COLOR_BLUE = "#3B82F6";
const COLOR_LIGHT_CREAM = "rgba(210, 199, 157, 0.2)";
const COLOR_DARK_CREAM = "rgba(239, 234, 218, 1)";


/***/ }),

/***/ 9893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

};
;