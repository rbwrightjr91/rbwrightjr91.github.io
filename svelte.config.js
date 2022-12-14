import adapter from 'svelte-adapter-github'
import { vitePreprocess } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: 'dist',
      assets: 'dist',
      domain: 'rbwrightjr91.dev',
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '' : '',
    },
    csp: {
      directives: {
        'upgrade-insecure-requests': true,
      },
    },
  },
}

export default config
