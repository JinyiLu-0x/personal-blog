---
title: 'Personal Blog & Knowledge Publishing System'
description: 'A lightweight public portfolio for projects, long-form writing, and short learning notes.'
publishDate: 2026-06-28
techStack: [Astro, TypeScript, UnoCSS]
role: 'Design, content architecture, and implementation'
status: 'building'
tags: [Web, Learning, Tools]
featured: false
order: 4
locale: 'en-US'
translationKey: 'personal-knowledge-site'
relatedLinks:
  - title: 'From a Blog to a Personal Knowledge System'
    href: '/en/blog/building-a-knowledge-site'
  - title: 'Why Blog, Projects, and Notes are separate'
    href: '/en/notes/content-types'
---

## Background

This project brings personal work, technical writing, and short notes into one lightweight and maintainable public website. It serves as both a portfolio and a publishing system for an ongoing learning process.

## Problem

Long-form articles, project evidence, and temporary learning records have different information densities. Combining all of them in a Blog makes it difficult for visitors to decide what to read.

## Implementation

- Used Astro Content Collections to manage Blog, Projects, and Notes.
- Applied shared design tokens for a consistent grey-blue visual system.
- Preserved static generation, RSS, Search, TOC, and SEO.
- Stored Chinese and English as linked content files using `locale` and `translationKey`.

## Result

The first stage provides a clear public content structure and a foundation for future growth without introducing a CMS, database, or private workflow.

## Reflection

Stabilising the public information architecture and reading experience before adding automation is the project's most important scope decision.
