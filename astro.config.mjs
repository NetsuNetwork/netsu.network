import svelte from '@astrojs/svelte';
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  output: 'server',
  adapter: netlify()
});