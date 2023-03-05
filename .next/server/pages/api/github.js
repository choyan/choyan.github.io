"use strict";
(() => {
var exports = {};
exports.id = 713;
exports.ids = [713];
exports.modules = {

/***/ 9338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
async function handler(req, res) {
    try {
        if (req.method === "GET") {
            const userReposResponse = await fetch("https://api.github.com/users/choyan/repos?per_page=10");
            const repositories = await userReposResponse.json();
            const mine = repositories.filter((repo)=>!repo.fork);
            const popular = mine.filter((count)=>count.stargazers_count > 30).map((repo)=>({
                    htmlUrl: repo.html_url,
                    name: repo.name.substring(0, 65),
                    stars: repo.stargazers_count,
                    description: repo.description
                }));
            res.setHeader("Cache-Control", "public, s-maxage=1200, stale-while-revalidate=600");
            return res.status(200).json({
                popular
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
var __webpack_exports__ = (__webpack_exec__(9338));
module.exports = __webpack_exports__;

})();