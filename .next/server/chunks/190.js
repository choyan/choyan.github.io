"use strict";
exports.id = 190;
exports.ids = [190];
exports.modules = {

/***/ 6899:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ Posts)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5941);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6965);
/* harmony import */ var lib_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7087);
/* harmony import */ var components_Posts_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9253);
/* harmony import */ var components_Layout_Container_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3856);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);
swr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Posts = ({ title  })=>{
    const { data  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])("/api/medium", lib_fetcher__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Posts_styles__WEBPACK_IMPORTED_MODULE_3__/* .Container */ .W2, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: title
            }),
            data?.feed?.map((item, id)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: `/blog/${(0,lib_helpers__WEBPACK_IMPORTED_MODULE_6__/* .convertToSlug */ .k)(item.title)}`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Posts_styles__WEBPACK_IMPORTED_MODULE_3__/* .Item */ .ck, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Container_styles__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Container_styles__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .kC, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "item-number",
                                                children: `${id < 9 ? "0" : ""}${id + 1}`
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                children: item.title.substring(0, 65)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: (0,lib_helpers__WEBPACK_IMPORTED_MODULE_6__/* .formatDate */ .p)(item.pubDate)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Posts_styles__WEBPACK_IMPORTED_MODULE_3__/* .PostsDescription */ .ue, {
                                dangerouslySetInnerHTML: {
                                    __html: item.description.substring(0, 300) + "..."
                                }
                            })
                        ]
                    })
                }, id);
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "ck": () => (/* binding */ Item),
/* harmony export */   "ue": () => (/* binding */ PostsDescription)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_colorPalette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3095);
/* harmony import */ var lib_displayDevice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9893);
/* harmony import */ var components_Layout_Container_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3856);




const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-eef5b71-0"
})`
  h4 {
    text-transform: capitalize;
  }

  p {
    margin: 0;
  }

  span {
    font-size: 1.125rem;
  }

  padding: 2rem 0;
`;
const Item = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-eef5b71-1"
})`
  padding: 1rem 0;
  border-bottom: 1px solid ${lib_colorPalette__WEBPACK_IMPORTED_MODULE_3__/* .COLOR_MEDIUM_GRAY */ .ow};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }

  h4 {
    margin: 0;
  }

  ${components_Layout_Container_styles__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .kC} {
    margin: 0.5rem 0;

    .item-number {
      margin-right: 0.5rem;
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none !important;

    @media ${lib_displayDevice__WEBPACK_IMPORTED_MODULE_1__/* .devices.tabletM */ .H.tabletM} {
      justify-content: flex-start;
      width: 100%;
    }
  }

  ${components_Layout_Container_styles__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .kC} {
    @media ${lib_displayDevice__WEBPACK_IMPORTED_MODULE_1__/* .devices.tabletM */ .H.tabletM} {
      flex-direction: column;
      align-items: flex-start;

      span {
        margin-bottom: 1rem;
        width: 100%;
      }

      .item-number {
        display: none;
      }
    }
  }
`;
const PostsDescription = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-eef5b71-2"
})`
  img,
  h2,
  h1,
  h3,
  figure,
  img {
    display: none;
  }
`;


/***/ }),

/***/ 6965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ fetcher)
/* harmony export */ });
async function fetcher(input, init) {
    const res = await fetch(input, init);
    return res.json();
}


/***/ }),

/***/ 7087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ convertToSlug),
/* harmony export */   "p": () => (/* binding */ formatDate)
/* harmony export */ });
const formatDate = (date)=>{
    return Intl.DateTimeFormat("en-GB").format(new Date(date));
};
const convertToSlug = (str)=>{
    return str.replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, " ").toLowerCase().replace(/^\s+|\s+$/gm, "").replace(/\s+/g, "-");
};


/***/ }),

/***/ 3190:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Paragraph": () => (/* binding */ Paragraph),
/* harmony export */   "default": () => (/* binding */ Blog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Layout_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3599);
/* harmony import */ var components_Posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6899);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Posts__WEBPACK_IMPORTED_MODULE_3__]);
components_Posts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Blog() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        title: "Blog - Zahidul Hossain",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "Blog"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Paragraph, {
                children: [
                    "In the recent years, I've found out that writing blogs is a great way to reinforce knowledge, as it helps me to write a clear documentation.",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "Initially, my blogs were intended for one audience - myself. But once I started more people people reading my articles, it was time to express my thoughts more clearly, organize my writing and read more about the particular topic I was writing about."
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Posts__WEBPACK_IMPORTED_MODULE_3__/* .Posts */ .V, {
                title: "All Stories"
            })
        ]
    });
}
const Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
    componentId: "sc-8e65f2f9-0"
})`
  br {
    content: "";
    margin: 1rem;
    display: block;
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;