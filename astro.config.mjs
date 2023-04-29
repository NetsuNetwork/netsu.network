import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import vercel from "@astrojs/vercel/serverless"
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind({
    config: {
      applyAstroPreset: false,
      applyBaseStyles: true
    }
  })],
  output: 'server',
  adapter: vercel()
});