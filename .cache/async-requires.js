// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/richard.wright/Documents/git/rbwrightjr91.github.io/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/richard.wright/Documents/git/rbwrightjr91.github.io/.cache/json/layout-index.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/richard.wright/Documents/git/rbwrightjr91.github.io/.cache/json/index.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/richard.wright/Documents/git/rbwrightjr91.github.io/.cache/layouts/index.js")
}