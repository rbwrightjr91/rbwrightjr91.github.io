import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite'
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md', '.svx'],
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [vitePreprocess(), mdsvex({ extensions: ['md', '.svx'] })],
  kit: {
    adapter: adapter(),
    csp: {
      directives: {
        'upgrade-insecure-requests': true,
      },
    },
  },
}

export default config
