"use strict";
(() => {
var exports = {};
exports.id = 489;
exports.ids = [489];
exports.modules = {

/***/ 9819:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 4706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var lib_spotify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7108);

async function handler(req, res) {
    const response = await (0,lib_spotify__WEBPACK_IMPORTED_MODULE_0__/* .getNowPlaying */ .e)();
    if (response.status === 204 || response.status > 400) {
        return res.status(200).json({
            isPlaying: false
        });
    }
    const song = await response.json();
    if (song.item === null) {
        return res.status(200).json({
            isPlaying: false
        });
    }
    const isPlaying = song.is_playing;
    const title = song.item.name;
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;
    const artist = song.item.artists.map((artistItem)=>artistItem.name).join(", ");
    const artistUrl = song.item.artists.map((artistItem)=>artistItem.external_urls.spotify);
    res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=30");
    return res.status(200).json({
        album,
        albumImageUrl,
        artist,
        isPlaying,
        songUrl,
        artistUrl,
        title
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [108], () => (__webpack_exec__(4706)));
module.exports = __webpack_exports__;

})();