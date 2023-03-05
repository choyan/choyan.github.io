"use strict";
exports.id = 108;
exports.ids = [108];
exports.modules = {

/***/ 7108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ getTopTracks),
/* harmony export */   "e": () => (/* binding */ getNowPlaying)
/* harmony export */ });
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9819);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_0__);

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=20`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const getAccessToken = async ()=>{
    const response = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: querystring__WEBPACK_IMPORTED_MODULE_0___default().stringify({
            grant_type: "refresh_token",
            refresh_token
        })
    });
    return response.json();
};
const getNowPlaying = async ()=>{
    const { access_token  } = await getAccessToken();
    return fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
};
const getTopTracks = async ()=>{
    const { access_token  } = await getAccessToken();
    return fetch(TOP_TRACKS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
};


/***/ })

};
;