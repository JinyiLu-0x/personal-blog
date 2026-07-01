import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

function removeDupsAndLowerCase(array: string[]) {
  if (!array.length) return array
  const lowercaseItems = array.map((str) => str.trim().toLowerCase()).filter(Boolean)
  const distinctItems = new Set(lowercaseItems)
  return Array.from(distinctItems)
}

// Define blog collection
const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  // Required
  schema: ({ image }) =>
    z.object({
      // Required
      title: z.string().max(60),
      description: z.string().max(160),
      publishDate: z.coerce.date(),
      // Optional
      updatedDate: z.coerce.date().optional(),
      heroImage: z
        .object({
          src: image(),
          alt: z.string().optional(),
          inferSize: z.boolean().optional(),
          width: z.number().optional(),
          height: z.number().optional(),

          color: z.string().optional()
        })
        .optional(),
      tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
      language: z.string().optional(),
      locale: z.enum(['zh-CN', 'en-US']).default('zh-CN'),
      translationKey: z.string().optional(),
      draft: z.boolean().default(false),
      // Special fields
      comment: z.boolean().default(true)
    })
})

// Keep Astro Theme Pure's docs collection available, while its public navigation stays hidden.
const docs = defineCollection({
  loader: glob({ base: './src/content/docs', pattern: '**/*.{md,mdx}' }),
  schema: () =>
    z.object({
      title: z.string().max(60),
      description: z.string().max(160),
      publishDate: z.coerce.date().optional(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
      draft: z.boolean().default(false),
      order: z.number().default(999)
    })
})

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: () =>
    z.object({
      title: z.string().max(60),
      description: z.string().max(180),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      techStack: z.array(z.string()).default([]),
      role: z.string(),
      status: z.enum(['building', 'active', 'maintained', 'complete', 'archived', 'concept']),
      tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
      links: z
        .object({
          github: z.url().optional(),
          demo: z.url().optional()
        })
        .default({}),
      relatedLinks: z.array(z.object({ title: z.string(), href: z.string() })).default([]),
      featured: z.boolean().default(false),
      order: z.number().default(999),
      locale: z.enum(['zh-CN', 'en-US']).default('zh-CN'),
      translationKey: z.string().optional(),
      draft: z.boolean().default(false)
    })
})

const notes = defineCollection({
  loader: glob({ base: './src/content/notes', pattern: '**/*.{md,mdx}' }),
  schema: () =>
    z
      .object({
        title: z.string().max(80),
        publishDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
        type: z.enum(['thought', 'external-link', 'clipping', 'learning', 'project']),
        externalUrl: z.url().optional(),
        source: z.string().optional(),
        summary: z.string().max(240),
        comment: z.string().max(500).optional(),
        bucket: z.enum(['saved', 'learn-later']).optional(),
        bookmarked: z.boolean().default(false),
        important: z.boolean().default(false),
        visibility: z.enum(['public', 'unlisted']).default('public'),
        locale: z.enum(['zh-CN', 'en-US']).default('zh-CN'),
        translationKey: z.string().optional(),
        draft: z.boolean().default(false)
      })
      .refine((note) => note.type !== 'external-link' || Boolean(note.externalUrl), {
        message: 'External link notes require externalUrl',
        path: ['externalUrl']
      })
})

export const collections = { blog, docs, projects, notes }
