import type { CollectionEntry } from 'astro:content'
import { getCollection } from 'astro:content'
import type { SiteLocale } from '@/i18n/ui'

export type TaggedContentType = 'blog' | 'project' | 'note'

export interface TaggedContentItem {
  id: string
  type: TaggedContentType
  title: string
  description: string
  date: Date
  tags: string[]
  href: string
}

const byNewest = <T extends { data: { publishDate: Date; updatedDate?: Date } }>(a: T, b: T) =>
  (b.data.updatedDate ?? b.data.publishDate).valueOf() -
  (a.data.updatedDate ?? a.data.publishDate).valueOf()

export const getPublishedBlogPosts = async (locale?: SiteLocale) => {
  const posts = await getCollection(
    'blog',
    ({ data }) => !data.draft && (!locale || data.locale === locale)
  )
  return posts.sort(byNewest)
}

export const getPublicProjects = async (locale?: SiteLocale) => {
  const projects = await getCollection(
    'projects',
    ({ data }) => !data.draft && (!locale || data.locale === locale)
  )
  return projects.sort((a, b) => a.data.order - b.data.order || byNewest(a, b))
}

export const getPublicNotes = async (locale?: SiteLocale) => {
  const notes = await getCollection(
    'notes',
    ({ data }) =>
      !data.draft && data.visibility === 'public' && (!locale || data.locale === locale)
  )
  return notes.sort(byNewest)
}

export const getCanonicalId = (entry: { id: string; data: { translationKey?: string } }) =>
  entry.data.translationKey ?? entry.id

export const getAllTaggedContent = async (
  locale: SiteLocale = 'zh-CN'
): Promise<TaggedContentItem[]> => {
  const prefix = locale === 'en-US' ? '/en' : ''
  const [posts, projects, notes] = await Promise.all([
    getPublishedBlogPosts(locale),
    getPublicProjects(locale),
    getPublicNotes(locale)
  ])

  return [
    ...posts.map((post) => ({
      id: getCanonicalId(post),
      type: 'blog' as const,
      title: post.data.title,
      description: post.data.description,
      date: post.data.updatedDate ?? post.data.publishDate,
      tags: post.data.tags,
      href: `${prefix}/blog/${getCanonicalId(post)}`
    })),
    ...projects.map((project) => ({
      id: getCanonicalId(project),
      type: 'project' as const,
      title: project.data.title,
      description: project.data.description,
      date: project.data.updatedDate ?? project.data.publishDate,
      tags: project.data.tags,
      href: `${prefix}/projects/${getCanonicalId(project)}`
    })),
    ...notes.map((note) => ({
      id: getCanonicalId(note),
      type: 'note' as const,
      title: note.data.title,
      description: note.data.summary,
      date: note.data.updatedDate ?? note.data.publishDate,
      tags: note.data.tags,
      href: `${prefix}/notes/${getCanonicalId(note)}`
    }))
  ].sort((a, b) => b.date.valueOf() - a.date.valueOf())
}

export const getTagsWithCount = (items: TaggedContentItem[]) =>
  [
    ...items
      .flatMap((item) => item.tags)
      .reduce(
        (counts, tag) => counts.set(tag, (counts.get(tag) ?? 0) + 1),
        new Map<string, number>()
      )
  ].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))

export type BlogEntry = CollectionEntry<'blog'>
export type ProjectEntry = CollectionEntry<'projects'>
export type NoteEntry = CollectionEntry<'notes'>
