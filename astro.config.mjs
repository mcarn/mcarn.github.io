import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import robotsTxt from "astro-robots-txt";
import icon from "astro-icon";
import react from "@astrojs/react";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://mcarn.github.io",
  compressHTML: true,
  output: "static",
  integrations: [tailwind(), sitemap(), mdx(), robotsTxt(), icon(), react(), compress()]
});