---
title: '个人博客与知识发布系统'
description: '用于展示项目、长篇文章和学习笔记的轻量公开作品集。'
publishDate: 2026-06-28
techStack:
  - Astro
  - TypeScript
  - UnoCSS
role: '设计、内容架构与实现'
status: 'building'
tags:
  - Web
  - Learning
  - Tools
featured: false
order: 4
locale: 'zh-CN'
translationKey: 'personal-knowledge-site'
relatedLinks:
  - title: '从博客到个人知识发布系统'
    href: '/blog/building-a-knowledge-site'
  - title: '为什么把博客、项目和笔记分开'
    href: '/notes/content-types'
---

## 项目背景

这个项目把个人作品、技术文章和短笔记放进同一个轻量、可维护的公开网站中。它既是作品集，也是持续记录学习过程的知识发布系统。

## 问题

长文章、项目证据和临时学习记录有不同的信息密度。如果把它们全部混在博客中，访客很难快速判断应该阅读什么。

## 实现过程

- 使用 Astro Content Collections 管理博客、项目与笔记。
- 使用共享设计变量维持页面之间一致的灰蓝视觉。
- 保留静态生成、RSS、Search、TOC 与 SEO 等现有能力。
- 使用 `locale` 与 `translationKey` 关联中英文内容，不做运行时翻译。

## 项目结果

第一阶段提供清晰的公开内容结构和可继续扩展的基础，同时避免引入 CMS、数据库或私有工作流。

## 复盘

先把公开信息架构与阅读体验做稳定，再考虑自动化，是这个项目最重要的范围控制。
