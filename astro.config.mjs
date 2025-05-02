// @ts-check
import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import mdx from "@astrojs/mdx"
import markdoc from "@astrojs/markdoc"
import tailwindcss from "@tailwindcss/vite"
import playformCompress from "@playform/compress"

// https://astro.build/config
export default defineConfig({
  site: "https://mcarn.github.io",
  vite: {
    plugins: [tailwindcss()],
    build: {
      sourcemap: true,
    },
  },
  integrations: [sitemap(), mdx(), markdoc(), playformCompress()],
})
