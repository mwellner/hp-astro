import { z, defineCollection } from "astro:content";
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    pubDate: z.date(),
    language: z.enum(["en", "de"]),
    author: z.string().default("Mathias Wellner"),
  }),
});

export const collections = {
  blog: blogCollection,
};
