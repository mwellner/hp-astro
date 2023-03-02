import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get() {
  let posts = await getCollection("blog");
  posts = posts.slice(-25);
  return rss({
    title: "Mathias Wellner",
    description: "Persönliche Webseite",
    site: "https://mwellner.de",
    items: posts.map((post) => {
      return {
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description || "",
        customData: `<language>${
          post.data.language === "en" ? "en-us" : "de-de"
        }</language>`,
        link: `${post.data.language === "en" ? "en/" : ""}${post.slug}`,
      };
    }),
  });
}
