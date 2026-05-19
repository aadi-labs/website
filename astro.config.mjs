import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://aadilabs.com",
  integrations: [sitemap()],
  build: {
    format: "directory",
  },
});
