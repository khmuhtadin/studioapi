import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    head: z.array(z.any()).default([]),
  }),
});

export const collections = { docs };
