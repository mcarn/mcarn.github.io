// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import markdoc from '@astrojs/markdoc';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mcarn.github.io',
  integrations: [sitemap(), mdx(), markdoc()],
  vite: {
    plugins: [tailwindcss()],
  },
});