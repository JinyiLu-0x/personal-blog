---
title: 'Knowledge organisation: Markdown or interactive HTML?'
publishDate: 2026-05-10
tags: [Web, Thoughts, Tools, Markdown, External link]
type: 'thought'
externalUrl: 'https://www.xiaohongshu.com/discovery/item/69fec9af0000000035025d21'
source: 'Public product discussion and my own usage record'
summary: 'Interactive HTML is useful for dynamic ideas such as space and networks. Markdown is lighter, easier to maintain, and better suited to a long-term knowledge base.'
visibility: 'public'
locale: 'en-US'
translationKey: 'markdown-vs-interactive-html'
---

Claude used to do this too: I would only ask it to organise a few concepts and somehow end up with an interactive HTML page. Exporting it as an Artifact did not render as nicely as the chat interface, and building a frontend was much slower than producing a Markdown document.

Gemini has similar components, but they cannot always open locally and the formatting can feel strange. Claude handled this more smoothly.

I later remembered that “export HTML for everything” was almost a Claude tradition around mid-2025. Ask a few questions and it would build a whole webpage with one-click deployment. For networking topics, interactive subnet visualisations were genuinely useful.

Still, Markdown + Mermaid currently works better for me. Markdown moves easily among Obsidian, local editors, and Git. Headings, emphasis, code blocks, and links cover most study needs, while Mermaid adds flows and relationships.

My rule is:

- quick reading, later editing, and long-term maintenance: Markdown first;
- interaction, animation, or spatial explanation: consider HTML;
- frequently updated content: keep structured text first;
- repeated visual style: extract a component or Skill instead of rebuilding a page.

HTML provides interaction; Markdown provides lightness and maintainability. They belong at different layers. `**xxx**` is still easier than rewriting `font-weight` every time.
