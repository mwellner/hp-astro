import { defineConfig } from "astro/config";

// https://astro.build/config
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import astroI18next from "astro-i18next";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "dark-plus",
      langs: ["sql", "javascript", "c#"],
      wrap: true,
    },
  },
  site: "https://mwellner.de",
  integrations: [
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    astroI18next(),
    sitemap({
      i18n: {
        defaultLocale: "de",
        locales: {
          en: "en-US",
          de: "de-DE",
        },
      },
    }),
  ],
});
