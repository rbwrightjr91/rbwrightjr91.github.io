// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/richard.wright/Documents/git/rbwrightjr91.github.io/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-index-js": preferDefault(require("/Users/richard.wright/Documents/git/rbwrightjr91.github.io/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/richard.wright/Documents/git/rbwrightjr91.github.io/.cache/json/layout-index.json"),
  "index.json": require("/Users/richard.wright/Documents/git/rbwrightjr91.github.io/.cache/json/index.json")
}