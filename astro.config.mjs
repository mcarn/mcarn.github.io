// @ts-check
import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import mdx from "@astrojs/mdx"
import markdoc from "@astrojs/markdoc"
import playformCompress from "@playform/compress"
import { visualizer } from "rollup-plugin-visualizer"
import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
  site: "https://mcarn.github.io",
  output: "static",
  vite: {
    css: {
      transformer: "lightningcss",
    },
    plugins: [
      tailwindcss(),
      visualizer({
        emitFile: true,
        filename: "stats.html",
      }),
    ],
    build: {
      sourcemap: true,
      manifest: true,
      rollupOptions: {
        output: {
          // path names relative to `outDir`
          entryFileNames: 'js/[name]-[hash].js',
          chunkFileNames: 'js/chunks/[name]-[hash].js',
          assetFileNames: 'static/[name]-[hash][extname]',
        },
      },
    },
  },
  integrations: [sitemap(), mdx(), markdoc(), playformCompress()],
})
