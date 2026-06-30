---
title: 'From a Blog to a Personal Knowledge System'
publishDate: 2026-06-28
description: 'The information architecture, scope decisions, and implementation principles behind the first version of this site.'
tags:
  - Astro
  - Web
  - Learning
language: 'English'
locale: 'en-US'
translationKey: 'building-a-knowledge-site'
---

A personal website can be more than a list of posts. It can clearly answer three questions: what I build, what I am learning, and which ideas are worth exploring further.

## Three public content types

- **Blog** contains complete technical articles, project retrospectives, and learning summaries.
- **Projects** provides portfolio evidence, with emphasis on the problem, my role, implementation, and outcomes.
- **Notes** preserves short observations, external links, learning fragments, and ideas that do not yet need a long article.

Tags connect these content types while each retains an appropriate reading density.

## First-version boundaries

The first version focuses only on the public website. It does not include a CMS, database, private dashboard, automated collection, or real-time AI translation. This boundary allows the design and content structure to stabilise first.

## Technical choices

The site keeps Astro Theme Pure's layout, Search, RSS, SEO, TOC, and Markdown/MDX support. It adds a shared grey-blue visual system and dedicated Projects and Notes collections.

Chinese and English content is stored in separate files connected through a `translationKey`. No translation service runs when a visitor opens a page.
