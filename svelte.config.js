const preprocess = require('svelte-preprocess')

// eslint-disable-next-line no-undef
module.exports = {
  preprocess: [
    preprocess({
      sourceMap: true
    }),
  ]
}
