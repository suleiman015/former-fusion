import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string().transform((str) => new Date(str)),
    description: z.string().optional(),
    excerpt: z.string().optional(),
    tag: z.string().default("Article"),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
