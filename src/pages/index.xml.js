import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get() {
  const posts = await getCollection("blog");
  return rss({
    title: "Mathias Wellner",
    description: "Persönliche Webseite",
    site: "https://mwellner.de",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `${post.data.language === "en" ? "en/" : ""}${post.slug}`,
    })),
    customData: `<language>de-de</language>`,
  });
}
