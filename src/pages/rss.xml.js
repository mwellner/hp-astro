import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
  return rss({
    title: "Mathias Wellner",
    description: "My journey learning Astro",
    site: "https://mwellner.de",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.mdx")),
    customData: `<language>de-de</language>`,
  });
}