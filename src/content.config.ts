import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Orangesoft Team'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    readingTime: z.number().optional(),
  }),
});

export const collections = { insights };
