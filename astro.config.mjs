// @ts-check
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import rehypePrism from "rehype-prism-plus";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  markdown: {
    rehypePlugins: [rehypePrism],
  },
});
