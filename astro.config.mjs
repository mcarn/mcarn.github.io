import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import markdoc from "@astrojs/markdoc"
import mdx from "@astrojs/mdx"
import robotsTxt from "astro-robots-txt"

import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
	site: "https://mcarn.github.io",
	compressHTML: true,
	output: "static",
	integrations: [tailwind(), sitemap(), markdoc(), mdx(), robotsTxt(), icon()],
})
