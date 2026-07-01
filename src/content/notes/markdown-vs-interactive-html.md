---
title: '知识整理：Markdown 还是交互式 HTML'
publishDate: 2026-05-10
tags: [网站开发, 想法, 工具, Markdown, 外部链接]
type: 'thought'
externalUrl: 'https://www.xiaohongshu.com/discovery/item/69fec9af0000000035025d21'
source: '公开产品讨论与个人使用记录'
summary: '交互式 HTML 适合解释空间、网络等动态概念；Markdown 更轻、更易维护，也更适合进入长期知识库。'
comment: '如果用户还需要继续整合和修改内容，我通常优先选择 Markdown，并在需要关系图时加入 Mermaid。'
visibility: 'public'
locale: 'zh-CN'
---

此前用 Claude 的时候也是，只是梳理知识点，莫名其妙就出来一个可交互的 HTML。真导出成 Artifact，又不会跟 Chat 界面一样渲染得那么好。相比 Markdown 文档，搞一套前端真的慢好多。

Gemini 也有类似组件，但是一不能直接本地打开，二格式有点诡异，做得也明显没有 Claude 顺手。

这个“动不动导出 HTML”的情况我后来想起来了：25 年大概七八月 Claude 最火的时候，本来就是 Claude 家的传统艺能。当时问几个问题，一言不合就开始疯狂写网页整合，还能一键 Deploy。那段时间我的笔记里有很多 URL，特别是网络这块，子网划分用可交互页面展示确实很直观。

不过我现在还是感觉 Markdown + Mermaid 好使。Markdown 更容易在 Obsidian、本地编辑器和 Git 仓库之间移动，标题、强调、代码块和链接已经覆盖了多数学习场景，Mermaid 还能补流程图和关系图。跳转目录用 Obsidian 插件也能实现。

我的选择标准是：

- 需要快速扫读、后续编辑和长期维护：优先 Markdown；
- 需要操作、动画或空间化解释：考虑 HTML；
- 同一内容可能反复更新：先保存结构化文本，再决定是否生成交互版本；
- 复用某种视觉风格：把样式提炼成组件或 skill，而不是每次重新生成整套网页。

HTML 的优势是交互体验，Markdown 的优势是轻量和好维护。二者不是互相替代，而是承担不同层级的表达。`**xxx**` 总比每次写一遍 `font-weight` 方便吧。
