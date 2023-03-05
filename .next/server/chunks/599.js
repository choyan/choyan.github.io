"use strict";
exports.id = 599;
exports.ids = [599];
exports.modules = {

/***/ 3599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Container)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Layout/Navigation/index.tsx




const Navigation = ({ href , text  })=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledLink, {
        href: href,
        legacyBehavior: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: router.pathname == href ? "active" : "",
            rel: "noopener noreferrer",
            children: text
        })
    });
};
const StyledLink = external_styled_components_default()((link_default())).withConfig({
    componentId: "sc-1e0b941b-0"
})`
  text-transform: capitalize;
`;

// EXTERNAL MODULE: ./lib/colorPalette.ts
var colorPalette = __webpack_require__(3095);
// EXTERNAL MODULE: ./lib/displayDevice.ts
var displayDevice = __webpack_require__(9893);
// EXTERNAL MODULE: ./components/Layout/Container/styles.ts
var styles = __webpack_require__(3856);
;// CONCATENATED MODULE: ./components/Layout/Header/styles.ts




const StickyNav = external_styled_components_default().nav.withConfig({
    componentId: "sc-2c0821a6-0"
})`
  position: sticky;
  z-index: 10;
  top: 0;
  background-color: ${({ darkTheme  })=>darkTheme ? colorPalette/* COLOR_BLACK */.Sx : colorPalette/* COLOR_WHITE */.Yf};

  a {
    color: ${({ darkTheme  })=>darkTheme ? colorPalette/* COLOR_DARK_GRAY */.TP : colorPalette/* COLOR_BLACK */.Sx};
    transition: all 0.3s;

    &:hover {
      color: ${({ darkTheme  })=>darkTheme ? colorPalette/* COLOR_WHITE */.Yf : colorPalette/* COLOR_BLACK */.Sx};
    }
  }

  .active {
    color: ${({ darkTheme  })=>darkTheme ? colorPalette/* COLOR_WHITE */.Yf : colorPalette/* COLOR_BLACK */.Sx};
  }

  button {
    padding: 0.75rem;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background-color: ${({ darkTheme  })=>darkTheme ? colorPalette/* COLOR_WHITE */.Yf : colorPalette/* COLOR_BLACK */.Sx};
  }
`;
const Wrapper = external_styled_components_default()(styles/* Flex */.kC).withConfig({
    componentId: "sc-2c0821a6-1"
})`
  position: relative;
  padding: 3rem 0;

  a:not(:first-child) {
    padding: 1rem;
  }

  a:first-child {
    padding-right: 1rem;
  }

  @media ${displayDevice/* devices.mobileL */.H.mobileL} {
    padding: 2rem 0;

    a:last-child {
      display: none;
    }
  }
`;

;// CONCATENATED MODULE: ./components/Layout/Header/index.tsx




const Header = ({ darkTheme , changeTheme  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(StickyNav, {
        darkTheme: darkTheme,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wrapper, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {
                        href: "/",
                        text: "Home"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: changeTheme,
                    "aria-label": "change-theme",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: darkTheme ? colorPalette/* COLOR_BLACK */.Sx : colorPalette/* COLOR_WHITE */.Yf,
                        stroke: darkTheme ? colorPalette/* COLOR_BLACK */.Sx : colorPalette/* COLOR_WHITE */.Yf,
                        children: darkTheme ? /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        })
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/Layout/ScrollToTop/styles.ts


const ScrollUpContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-8bc11b34-0"
})`
  padding: 12px 13px;
  width: max-content;
  cursor: pointer;
  background-color: ${({ darkTheme  })=>darkTheme ? colorPalette/* COLOR_WHITE */.Yf : colorPalette/* COLOR_BLACK */.Sx};
  text-align: center;
  align-items: center;
  display: flex;
  border-radius: 50%;

  svg {
    width: 15px;
    height: 15px;

    path {
      stroke: ${({ darkTheme  })=>darkTheme ? colorPalette/* COLOR_BLACK */.Sx : colorPalette/* COLOR_WHITE */.Yf};
    }
  }
`;

;// CONCATENATED MODULE: ./components/Layout/ScrollToTop/index.tsx


const ScrollToTop = ({ darkTheme  })=>{
    const scrollUp = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(ScrollUpContainer, {
        onClick: scrollUp,
        darkTheme: darkTheme,
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 9.887 5.943",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                id: "Path_157",
                "data-name": "Path 157",
                d: "M6502.544,2805l3.529,3.53-3.529,3.529",
                transform: "translate(-2803.586 6507.073) rotate(-90)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                fill: "none"
            })
        })
    });
};
/* harmony default export */ const Layout_ScrollToTop = (ScrollToTop);

;// CONCATENATED MODULE: ./components/NowPlaying/styles.ts



const FlexContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-19a4a2ca-0"
})`
  width: 100%;
  display: flex;
  margin: 2rem 0;
  align-items: center;
  flex-direction: row;
  align-items: center;

  @media ${displayDevice/* devices.tabletM */.H.tabletM} {
    flex-direction: row-reverse;
    align-items: flex-start;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 1rem;

    path {
      fill: ${colorPalette/* COLOR_SPOTIFY_GREEN */.MS};
    }
  }

  p {
    margin: 0;
  }
`;
const PlayingWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-19a4a2ca-1"
})`
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 100%;
  display: inline-flex;
  white-space: normal;

  span {
    margin: 0 0.5rem;
    font-size: 1.25rem;
  }

  @media ${displayDevice/* devices.tabletM */.H.tabletM} {
    flex-direction: column;
    align-items: flex-start;

    p {
      margin-top: 0.5rem;
    }

    span {
      display: none;
    }
  }
`;

;// CONCATENATED MODULE: ./components/Layout/Footer/styles.tsx




const FooterContainer = external_styled_components_default().footer.withConfig({
    componentId: "sc-9e128916-0"
})`
  margin-bottom: 2rem;

  hr {
    width: 100%;
    margin-bottom: 1rem;
    border-top-width: 1px;
    height: 0;
    border-color: ${({ darkTheme  })=>darkTheme ? colorPalette/* COLOR_BLACK */.Sx : colorPalette/* COLOR_LIGHT_GRAY */.RE};
  }

  a {
    color: ${({ darkTheme  })=>darkTheme ? colorPalette/* COLOR_DARK_GRAY */.TP : colorPalette/* COLOR_BLACK */.Sx};
    transition: all 0.3s;

    &:hover {
      color: ${({ darkTheme  })=>darkTheme ? colorPalette/* COLOR_WHITE */.Yf : colorPalette/* COLOR_BLACK */.Sx};
    }
  }

  .active {
    color: ${({ darkTheme  })=>darkTheme ? colorPalette/* COLOR_WHITE */.Yf : colorPalette/* COLOR_BLACK */.Sx};
  }

  ${PlayingWrapper} {
    a {
      color: ${({ darkTheme  })=>darkTheme ? colorPalette/* COLOR_LIGHT_GRAY */.RE : colorPalette/* COLOR_BLACK */.Sx};
    }
  }
`;
const GridContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-9e128916-1"
})`
  padding-bottom: 4rem;
  gap: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media ${displayDevice/* devices.tabletM */.H.tabletM} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const FlexLinks = external_styled_components_default().div.withConfig({
    componentId: "sc-9e128916-2"
})`
  flex-direction: column;
  display: flex;

  a {
    margin-top: 1rem;
  }
`;

;// CONCATENATED MODULE: ./components/Layout/Footer/index.tsx





const ExternalLink = ({ href , children  })=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: href,
        children: children
    });
const Footer = ({ darkTheme  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(FooterContainer, {
        darkTheme: darkTheme,
        children: /*#__PURE__*/ jsx_runtime_.jsx(styles/* StyledContainer */.PQ, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles/* Flex */.kC, {
                justify: "center",
                direction: "column",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(FlexLinks, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {
                                    href: "/",
                                    text: "Home"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FlexLinks, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(ExternalLink, {
                                        href: "https://twitter.com/ch0yan",
                                        children: "Twitter"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ExternalLink, {
                                        href: "https://github.com/choyan",
                                        children: "GitHub"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ExternalLink, {
                                        href: "https://www.linkedin.com/in/choyan/",
                                        children: "LinkedIn"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Layout_ScrollToTop, {
                        darkTheme: darkTheme
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/Layout/Container/index.tsx








function Container({ children , ...customMeta }) {
    const router = (0,router_.useRouter)();
    const meta = {
        title: "Zahidul Hossain – Front-end Engineer",
        description: `React developer, JavaScript enthusiast, and freelancer.`,
        image: "https://www.adrinlol.com/assets/png/Thumbnail.png",
        type: "website",
        ...customMeta
    };
    const [mounted, setMounted] = (0,external_react_.useState)(false);
    const { resolvedTheme , setTheme  } = (0,external_next_themes_.useTheme)();
    const darkTheme = resolvedTheme === "dark";
    (0,external_react_.useEffect)(()=>setMounted(true), []);
    const changeTheme = ()=>{
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "robots",
                        content: "follow, index"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: meta.description,
                        name: "description"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: `https://adrinlol.com${router.asPath}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "canonical",
                        href: `https://adrinlol.com${router.asPath}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: meta.type
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:site_name",
                        content: "Zahidul Hossain"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: meta.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: meta.image
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image:alt",
                        content: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:site",
                        content: "@ch0yan"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:title",
                        content: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:description",
                        content: meta.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:image",
                        content: meta.image
                    }),
                    meta.date && /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "article:published_time",
                        content: meta.date
                    })
                ]
            }),
            mounted && /*#__PURE__*/ jsx_runtime_.jsx(styles/* Section */.$0, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(styles/* SectionWrapper */.Uq, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(styles/* SectionGrid */.K3, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles/* StyledContainer */.PQ, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(styles/* StyledHTML */.o_, {
                                    darkTheme: darkTheme
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                                    changeTheme: changeTheme,
                                    darkTheme: darkTheme
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(styles/* Main */.or, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(styles/* StyledContainer */.PQ, {
                                        children: children
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
                                    darkTheme: darkTheme
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
}


/***/ })

};
;