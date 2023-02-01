import { defineConfig } from "astro/config";

// https://astro.build/config
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "dark-plus",
      langs: ["sql", "javascript", "c#"],
      wrap: true,
    },
  },
  integrations: [
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    astroI18next(),
  ],
});
