import mdx from '@astrojs/mdx'
import netlify from '@astrojs/netlify/functions'
import svelte from '@astrojs/svelte'
import { defineConfig } from 'astro/config'

import prefetch from '@astrojs/prefetch'

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    mdx({
      syntaxHighlighting: 'shiki',
      shikiConfig: {
        theme: 'min-dark',
      },
    }),
    prefetch({
      throttle: 2,
    }),
  ],
  output: 'server',
  adapter: netlify(),
})
