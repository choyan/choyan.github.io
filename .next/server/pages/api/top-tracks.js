"use strict";
(() => {
var exports = {};
exports.id = 727;
exports.ids = [727];
exports.modules = {

/***/ 9819:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 5899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var lib_spotify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7108);

async function handler(req, res) {
    const response = await (0,lib_spotify__WEBPACK_IMPORTED_MODULE_0__/* .getTopTracks */ .V)();
    const { items  } = await response.json();
    const tracks = items.map((track)=>({
            artist: track.artists.map((_artist)=>_artist.name).join(", "),
            songUrl: track.external_urls.spotify,
            title: track.name
        }));
    res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=43200");
    return res.status(200).json(tracks);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [108], () => (__webpack_exec__(5899)));
module.exports = __webpack_exports__;

})();