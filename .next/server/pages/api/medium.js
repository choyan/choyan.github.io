"use strict";
(() => {
var exports = {};
exports.id = 74;
exports.ids = [74];
exports.modules = {

/***/ 388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler),
/* harmony export */   "mediumUserUrl": () => (/* binding */ mediumUserUrl)
/* harmony export */ });
const mediumUserUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@lashakakabadze`;
async function handler(req, res) {
    try {
        if (req.method === "GET") {
            const mediumStories = await fetch(mediumUserUrl);
            const stories = await mediumStories.json();
            res.setHeader("Cache-Control", "public, s-maxage=1200, stale-while-revalidate=600");
            return res.status(200).json({
                feed: stories.items
            });
        }
    } catch (e) {
        return res.status(500).json({
            message: e.message
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(388));
module.exports = __webpack_exports__;

})();