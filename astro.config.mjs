import netlify from '@astrojs/netlify/functions'
import svelte from '@astrojs/svelte'
import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    mdx({
      syntaxHighlighting: 'shiki',
      shikiConfig: { theme: 'min-dark' },
    }),
  ],
  output: 'server',
  adapter: netlify(),
})
