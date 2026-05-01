import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const ctfCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/ctf' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    ctfPlatform: z.enum(['HackTheBox', 'VulnHub', 'TryHackMe', 'PicoCTF', 'CTFtime', 'Other']),
    difficulty: z.enum(['easy', 'medium', 'hard']).optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const bugbountyCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/bugbounty' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  ctf: ctfCollection,
  bugbounty: bugbountyCollection,
  blog: blogCollection,
};