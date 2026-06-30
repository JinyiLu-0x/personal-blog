# Moz — Personal Blog & Portfolio

[简体中文](./README-zh-CN.md)

A bilingual personal portfolio and knowledge publishing site for projects, technical writing, learning notes, and the process behind building things.

## Highlights

- Portfolio-oriented homepage with selected projects, recent writing, notes, education, and skills.
- Dedicated Blog, Projects, Notes, About, Contact, Tags, Archives, and Search pages.
- English-first bilingual routing with a persistent site-wide language preference.
- File-based publishing through Astro Content Collections and typed frontmatter.
- Pagefind search with separate English and Chinese indexes, scoped content, and paginated results.
- Waline comments, reactions, and engagement-based view counting without importing template data.
- Responsive grey-blue visual system, consistent hover states, dark mode, and reduced-motion support.
- RSS, sitemap, SEO metadata, Open Graph cards, Markdown/MDX, syntax highlighting, math, and TOC support.

## Tech stack

- [Astro](https://astro.build/) 6 and TypeScript
- [Astro Theme Pure](https://github.com/cworld1/astro-theme-pure)
- [Bun](https://bun.sh/)
- [Pagefind](https://pagefind.app/)
- [Waline](https://waline.js.org/)
- Netlify-ready static deployment

## Project structure

```text
src/
├── components/       UI, navigation, comments, search, and content cards
├── content/          Blog posts, projects, notes, and retained theme docs
├── data/             Resume and portfolio data
├── i18n/             English and Chinese UI strings
├── layouts/          Shared page and content layouts
├── pages/            Routes, including the /en bilingual tree
└── utils/            Content and Waline helpers
```

## Local development

Requirements:

- Node.js 22.12 or newer
- Bun

```shell
git clone https://github.com/JinyiLu-0x/personal-blog.git
cd personal-blog
bun install
bun run dev
```

The development server does not generate a Pagefind index. To test production search locally:

```shell
bun run build
bun run preview
```

Useful checks:

```shell
bun run check
bun run build
```

## Publishing content

Content is file-based and requires no CMS or database:

- Blog posts: `src/content/blog/`
- Notes: `src/content/notes/`
- Projects: `src/content/projects/`

Markdown and MDX frontmatter controls title, dates, tags, visibility, project status, external links, locale, and translation keys. Listing, detail, tag, RSS, sitemap, and search output are generated during the build.

## Deployment

The repository includes `netlify.toml` and builds to `dist/`.

```shell
bun run build
```

For production, set `SITE_URL` to the public origin and configure a personally controlled Waline server before enabling permanent comment storage.

## Scope and privacy

The public site does not include a private dashboard, CMS, WeChat crawler, runtime AI translation, Todo system, or Timeline. Published learning and AI-workflow descriptions are intentionally high-level and assume compliance with course rules and content permissions.

## License and attribution

This is an independent personal repository based on [Astro Theme Pure](https://github.com/cworld1/astro-theme-pure), created and maintained by **CWorld (`cworld1`) and its contributors**. Thank you to the original project for providing the foundation used to build this site.

Astro Theme Pure is licensed under the Apache License 2.0. Required license and attribution materials are retained in [LICENSE](./LICENSE) and [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md). The original authors do not endorse this personal site.

If any published content, media, or attribution raises a copyright, privacy, or other rights concern, please contact [lujinyi2006@gmail.com](mailto:lujinyi2006@gmail.com). Relevant material will be reviewed and, where appropriate, removed or corrected.
