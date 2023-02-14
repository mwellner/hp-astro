import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()),
    cover: z
      .object({
        src: z.string(),
        alt: z.string(),
        aspectRatio: z.string().optional(),
      })
      .optional(),
    pubDate: z.date(),
    language: z.enum(["en", "de"]),
    author: z.string().default("Mathias Wellner"),
  }),
});

const theaterCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    location: z.string(),
    date: z.date(),
    director: z.string(),
    producer: z.string(),
    cover: z.object({
      src: z.string(),
      alt: z.string(),
      aspectRatio: z.string().optional(),
    }),
    images: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          aspectRatio: z.string().optional(),
        })
      )
      .optional(),
    roles: z.array(
      z.object({
        role: z.string(),
        actor: z.string(),
      })
    ),
  }),
});

export const collections = {
  blog: blogCollection,
  theater: theaterCollection,
};
