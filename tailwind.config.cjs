/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        zinc: {
          '--tw-prose-pre-bg': 'transparent',
          '--tw-prose-headings': 'white',
          '--tw-prose-links': 'white',
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
