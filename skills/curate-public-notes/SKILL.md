---
name: curate-public-notes
description: Convert raw diaries, Obsidian notes, social-post drafts, screenshots, clippings, and mixed-source research into privacy-safe Astro Notes content. Use when migrating personal records into this repository while preserving the author's meaning, distinguishing quotations from original thoughts, minimizing edits, anonymizing sensitive details, and validating the Notes content schema.
---

# Curate Public Notes

Turn selected raw records into public Notes while keeping the author's original wording, rhythm, detail, and personality. The source text is canonical; privacy editing is not permission to rewrite it into generic AI prose.

## Workflow

1. Read the source instructions and every dated entry before editing.
2. Inspect every referenced image. Extract relevant user-authored text; do not assume screenshots are original work.
3. Classify each idea as `original`, `third-party`, or `mixed` without changing its voice.
4. Recover each Note's own reasoning chain from the source: what triggered the thought, what examples were compared, why the author connected them, and where the author remained uncertain.
5. Add titles, headings, paragraphs, lists, quotes, and image placement around the original text.
6. Apply only the minimum privacy, civility, and attribution edits required.
7. Preserve reusable prompts as copyable fenced code blocks instead of paraphrasing them or treating them as quotations.
8. When a screenshot contains the author's older public post or comment that belongs to a different date or idea, extract it into a standalone Note using that original date when safe.
9. Preserve dates; use `updatedDate` for later corrections to the same idea.
10. Write files under `src/content/notes/` using the schema in `src/content.config.ts`.
11. Run `bun run check` and `bun run build`.
12. Keep changes local for review unless the user explicitly requests commit, push, or deployment.

## Editing Rules

- Copy the original sentences and paragraphs by default. Do not replace them with a summary merely because a cleaner rewrite is possible.
- Preserve slang, first-person phrasing, uncertainty, tool names, specific observations, sentence rhythm, and harmless emoji when they carry personality.
- Match the author's natural rhythm: short judgments, conversational transitions, occasional English terms, and direct first-person reasoning. The result should sound written by the author, not like a report or documentary subtitle.
- Do not put editing-process narration into the public body. Avoid phrases such as “当时截图里我自己写了一句”, “这条记录的意义是”, “这条原始记录不长”, or “这里先保留”. Present the thought itself.
- Allow only light reassembly: add headings, split long paragraphs, reorder closely related fragments, fix obvious errors, and remove repetition.
- Use bullet points when technical details, choices, constraints, or comparisons would otherwise make a paragraph hard to follow. Keep reflective passages in prose.
- Use emoji sparingly and semantically. Prefer the author's existing markers such as `🐎` for marked items, `⭐` for important items, or a single topic cue such as `📈`; do not add decorative emoji to every heading or paragraph.
- Redact or soften only the exact clause that creates privacy, abuse, legal, or public-safety risk. Keep the surrounding text unchanged.
- Remove direct personal attacks, insults, mockery, and claims that cannot safely be attributed. If an entire entry depends on attacking an identifiable person, omit the entry instead of rewriting it into a different idea.
- Delete isolated negative, anxious, self-deprecating, or catastrophizing passages when they add no substantive meaning. Do not rewrite them into motivational prose.
- Do not turn fragments into confident conclusions. Preserve phrases such as “我觉得”“可能”“先放着”“我不确定”.
- When several companies or founders are part of the reasoning, keep their distinct roles and backgrounds but anonymize them consistently as Company A, Company B, and so on.
- Distinguish tools the author has used from tools merely seen, saved, or planned. Never turn a watchlist item into hands-on experience.
- Do not over-polish into marketing, documentation, or generic AI language.

## Quotes and Highlights

- Do not turn the author's own sentence into a quotation merely because it was marked `可以highlight`. Highlighting is emphasis, not attribution.
- Use a Markdown blockquote only for genuinely quoted wording, or when the source clearly marks a third-party statement as a quotation.
- Do not include prompt-like lead-ins such as “以下是我个人想法” inside a quote; quote only the actual quoted content that follows.
- Remove generic exposition lead-ins such as “以下是公开摘要” or “以下是我的理解” unless the phrasing itself is part of the author's intended public voice.
- Keep the author's highlighted original thought as ordinary prose unless a separate emphasis treatment is explicitly requested.
- Keep quoted wording intact except for necessary privacy redaction.

## Privacy Rules

- Remove or generalize names, handles, faces, schools, employers, ages, nationalities, immigration details, private conversations, family details, precise locations, account information, and identifiable relationship context.
- Replace prestige labels and specific institutions with neutral descriptions only when the distinction is necessary.
- Exclude any passage the user marks private. Do not preserve it as an example, quote, hidden comment, or skill reference.
- Describe compliant learning workflows only. State that AI assistance is used where permitted and that the author reviews and verifies the result.
- Do not expose course-specific instructions, assessment answers, or operational detail that could imply unauthorized assistance.

## Attribution and Images

- For third-party material, retain the source, the original link when available, and the author's own surrounding commentary. Do not erase the author's commentary in favor of a neutral summary.
- Separate source material from commentary through headings, frontmatter, links, and wording, but avoid generic lead-ins such as “公开资料摘要” or “以下是我的观察” in the public body unless the author explicitly wrote them as publishable text.
- Treat phrases such as “某人的排版” as reposted material unless the source proves otherwise.
- Reuse relevant source images when they carry context, evidence, layout, or the author's own writing.
- Do not add screenshots merely as supporting evidence when the prose already communicates the idea. Every displayed image must contribute information that would otherwise be lost.
- Keep public creator names when the user explicitly approves them. Otherwise mask only the identifying face, handle, name, school, location, or private-chat identity; preserve the rest of the screenshot.
- Do not remove all images merely because some require redaction. If an image can be made safe with a small mosaic, edit it and keep it.
- If an image contains mostly private or hostile content, omit that image rather than reconstructing it.
- Add descriptive alt text and label third-party screenshots as source material.

## Astro Notes Mapping

- Use `type: thought` for migrated personal Notes unless the user explicitly requests another type.
- Add the `external-link` tag whenever a Note contains an external URL, even when its type remains `thought`.
- Provide `externalUrl` and `source` when there is one main external source.
- Use `bucket: saved` for specially saved Notes. Show a star icon at the right of the card; do not change the whole card background.
- Use `bucket: learn-later` for marked items or tools that still need hands-on verification. Show a bookmark icon at the right of the card.
- `clipping`: a short attributed excerpt or saved item; avoid copying substantial text.
- `project`: a project-specific observation.
- Use `visibility: public` only after sanitization. For local review, keep the repository unpushed until approval.
- Keep `summary` under 240 characters and `comment` under 500 characters.
- Use stable lowercase filenames and focused tags.

## Final Review

Check every note for:

- preserved meaning with minimal rewriting;
- clear separation of source and personal commentary;
- no private or identifying details;
- no unsupported certainty or investment advice;
- no raw third-party screenshot used as if it were original;
- valid frontmatter and working external links;
- original wording remains recognizably the author's rather than a synthesized rewrite;
- explicit quote and highlight markers are reflected in the layout;
- useful images have been retained, with only necessary regions masked;
- no content explicitly excluded by the user.
