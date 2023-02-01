import { defineConfig } from "astro/config";

// https://astro.build/config
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
  ],
});
