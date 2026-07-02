# AGENTS.md

# Personal Blog Project Instructions

## 1. Project Goal

This project is a personal blog and portfolio site based on Astro Theme Pure.

The goal is to build a clean, lightweight, visually polished personal website for:

1. showing my projects
2. publishing technical blog posts
3. collecting short notes and external links
4. presenting my learning process
5. supporting future bilingual content
6. serving as a portfolio for interviews

This is not only a normal blog. It should feel like a personal knowledge publishing system with a strong portfolio direction.

The first version should focus on the public website. Do not build a complex private dashboard, CMS, database, WeChat crawler, AI agent, Todo system, or Timeline in the first stage.

---

## 2. Base Template

The project is based on Astro Theme Pure.

Reference:

https://astro-pure.js.org/

GitHub:

https://github.com/cworld1/astro-theme-pure

Before making changes, inspect the existing project structure carefully.

Understand:

1. routing
2. layout components
3. content collections
4. theme configuration
5. navigation configuration
6. styling system
7. blog structure
8. project structure
9. search, RSS, SEO, Open Graph, TOC and other existing features

Prefer reusing the template’s existing architecture instead of rewriting everything.

---

## 3. Visual References

The main base should be Astro Theme Pure.

Other visual references:

1. Joye Huang personal site
   https://www.joyehuang.me/

2. Samuel QZQ personal site
   https://www.qzq.at/

Use these as inspiration only. Do not copy their content, personal branding, private details, or exact layout.

### 3.1 Astro Theme Pure

Use Astro Theme Pure as the primary design and code reference.

Learn from:

1. clean typography
2. comfortable reading density
3. blog layout
4. project layout
5. spacing
6. card structure
7. content hierarchy
8. lightweight interaction

### 3.2 Joye Huang Reference

Use Joye Huang’s site as inspiration for:

1. personal homepage atmosphere
2. subtle command line feeling
3. server or terminal style presentation
4. sticky navigation feeling
5. light gradients
6. thin border cards
7. calm interaction design

Do not copy it directly.

### 3.3 Samuel QZQ Reference

Use Samuel QZQ’s site as inspiration for:

1. light motion
2. personal identity expression
3. interesting homepage interaction

Do not overuse animation.

### 3.4 Liquid Glass Reference

When the user requests a liquid glass or Liquid Glass effect, inspect and use this implementation as the primary technical and visual reference:

https://liquid-glass.ybouane.com/

GitHub:

https://github.com/ybouane/liquidglass

Liquid glass should not be approximated with opacity and backdrop blur alone. Preserve the reference's key qualities where appropriate:

1. background refraction
2. restrained chromatic aberration
3. edge and specular highlights
4. Fresnel-style rim lighting
5. rounded bevel depth
6. background-aware tint and contrast

Adapt brightness and tint to the actual page background. On this site's light grey-blue background, prefer clear, bright glass instead of a dark smoky surface. Keep a readable CSS fallback, respect reduced motion, and avoid applying expensive real-time effects to many elements at once.

---

## 4. Visual Direction

The overall style should be grey blue.

Keywords:

1. grey blue
2. clean
3. calm
4. low saturation
5. technical but not cyberpunk
6. soft contrast
7. readable
8. portfolio friendly

Avoid:

1. overly bright blue
2. too many colors
3. heavy gradients
4. excessive animation
5. too many emoji
6. cluttered cards
7. inconsistent colors between pages

All pages should share the same design tokens.

Create or adjust tokens for:

1. background
2. surface
3. primary
4. muted text
5. border
6. hover state
7. link color
8. card background
9. code block
10. terminal card

---

## 5. Motion and Hover Rules

The current interaction should feel consistent across the whole site.

Do not make only the header interactive.

Apply a consistent hover language to:

1. navigation links
2. project cards
3. blog cards
4. notes cards
5. buttons
6. external links
7. tag chips

Use subtle effects:

1. small translate movement
2. border highlight
3. soft background change
4. opacity change
5. soft shadow
6. slight gradient shift

Use performant animation properties such as `transform` and `opacity`.

Respect `prefers-reduced-motion`.

If the user disables motion, all content must remain readable and complete.

---

## 6. Homepage Direction

The homepage should feel like a personal portfolio, not just a list of posts.

The homepage should include:

1. short personal introduction
2. current focus areas
3. featured projects
4. latest blog posts
5. latest notes
6. GitHub link
7. command line or server style section
8. language switch placeholder
9. short explanation of the site purpose

The homepage should communicate:

1. who I am
2. what I build
3. what I am learning
4. what visitors should click next

---

## 7. Command Line / Server Style Section

Add a lightweight command line or server status style section.

This section should be inspired by Joye Huang’s homepage feeling, but should not copy it.

It can look like a terminal card or server panel.

Example content direction:

```text
> whoami
Moz / Jinyi Lu

> focus
AI Agents, Web Development, Product Thinking, Learning Systems

> currently
Building a personal blog and knowledge publishing system

> links
GitHub, Projects, Notes, Blog
```

Design requirements:

1. grey blue theme
2. subtle border
3. soft background
4. readable text
5. minimal animation
6. no fake complex terminal
7. no real AI API connection in the first version

---

## 8. Agent / CLI Style Module

The site can include a small AI Agent or CLI inspired module.

Purpose:

To show interest in AI agents, personal knowledge systems and workflow automation.

First version only needs a visual section. It should not call any AI API.

Possible title:

`Evidence-based Profile`

Possible explanation:

This section can later summarize my skills from published projects, blog posts and approved notes.

Rules:

1. do not use private content
2. do not use emotional diary content
3. do not use unreviewed material
4. do not exaggerate ability
5. every future skill claim should be supported by evidence
6. do not infer ability from MBTI or personality labels

---

## 9. Navigation

Use a simple public navigation.

Required top level pages:

1. Home
2. Blog
3. Projects
4. Notes
5. About

Optional later pages:

1. Learning
2. Clippings
3. Resume

Do not make the navigation too complex in the first version.

---

## 10. Top Bar

Add my GitHub link to the right side of the top bar.

Requirements:

1. use GitHub icon or clear text
2. keep it visually aligned with the existing theme
3. work on desktop and mobile
4. store the GitHub URL in site config
5. do not hardcode the URL in many files

Use placeholder if the final URL is not provided:

```ts
github: "https://github.com/YOUR_USERNAME"
```

---

## 11. Blog

Blog is for original long form content.

Content types:

1. technical articles
2. project write ups
3. learning summaries
4. interview related technical notes
5. reflections on building things

Requirements:

1. keep Astro Theme Pure’s reading experience
2. keep or improve tags
3. keep dates
4. keep table of contents if available
5. keep search if available
6. keep RSS and SEO if available
7. make article detail pages match the grey blue theme
8. avoid visual mismatch between listing pages and detail pages

---

## 12. Projects

Projects are for portfolio and interview evidence.

Each project card should include:

1. project name
2. short description
3. tech stack
4. role
5. status
6. GitHub or demo link if available
7. related blog or notes link if available

Project detail pages can include:

1. Background
2. Problem
3. My Role
4. Tech Stack
5. Implementation
6. Result
7. Reflection
8. Links

The tone should be professional and evidence based.

Avoid exaggerated marketing language.

---

## 13. Notes

Add a Notes section.

Notes are not Docs.

Notes are for:

1. short thoughts
2. learning fragments
3. external links
4. saved resources
5. quick technical observations
6. comments on articles
7. things I marked for later

Notes should support external link cards.

Each note can include:

1. title
2. date
3. tags
4. external link
5. source
6. summary
7. my comment
8. type
9. visibility

Possible note types:

1. original thought
2. external link
3. clipping
4. learning note
5. project note

In the first version, manual notes are enough. Do not build automatic scraping.

---

## 14. Tags and Filtering

The site should support tag based browsing.

Do not create too many top level pages.

Use tags to organize content across Blog, Projects and Notes.

Important tags may include:

1. AI
2. Web
3. Agents
4. Product
5. Career
6. Learning
7. Cybersecurity
8. Salesforce
9. Cloud
10. Tools

Tag UI should be clean and icon based if needed.

Avoid using too many emoji.

---

## 15. Chinese and English Switching

Bilingual support is important, but the first version can reserve the structure first.

Requirements:

1. add a language switch entry or placeholder
2. do not call AI translation on every page visit
3. do not use browser style real time translation
4. future translation should be saved as content
5. Chinese and English versions should be linked by content key or slug
6. media, code and links should not be lost during translation

Future translation workflow:

1. write or update Chinese content
2. manually trigger English generation
3. save the English version
4. display the saved English version when switching language
5. regenerate only when source content changes

Do not implement the full AI translation system in the first version unless explicitly asked.

---

## 16. WeChat and Content Migration

I used to write many thoughts in WeChat because it was convenient.

Long term, I want to gradually move selected valuable content into this site.

However, do not build a WeChat crawler in the first version.

First version should only prepare the content structure.

The system should eventually support:

1. manually migrated WeChat moments
2. public account article links
3. screenshots
4. external links
5. my own comments
6. source attribution
7. distinction between original writing, quoted content and personal commentary

Rules:

1. do not migrate everything
2. only selected content should be public
3. emotional private content should not be public
4. private content should not be used for skill summaries
5. third party articles should not be mirrored publicly without permission
6. public display should prefer title, source, summary, original link and my comment

For the first version, Notes and Blog content structure is enough.

---

## 17. Saved and Learn Later

Long term, I want a simple way to mark content.

Only use two business categories:

1. Saved
2. Learn Later

Saved means I may want to read, cite or revisit it.

Learn Later means it may become a learning task in the future.

Do not create many emoji based categories.

Use simple icons such as bookmark and lightbulb.

In the first version, this can be represented through note type or tags.

Do not build a full Todo or Timeline system in the first version.

---

## 18. Comments

If the template already has a comment system, inspect it first.

Rules:

1. do not introduce heavy dependencies just for comments
2. if comments are visually weak, hide or disable them for now
3. blog and project presentation has higher priority
4. comments can be a future enhancement

---

## 19. Open Source Compliance

Because this project is based on Astro Theme Pure, handle open source compliance carefully.

Before making legal or attribution changes, inspect the current repository license.

Requirements:

1. keep the original LICENSE file if required
2. keep required copyright notices
3. add `THIRD_PARTY_NOTICES.md` if appropriate
4. mention in README that this project is based on Astro Theme Pure
5. replace original author profile, avatar, posts and projects with my own content
6. do not imply the original author endorses my site

Suggested README wording:

```md
This personal site is built based on Astro Theme Pure and customized for my portfolio and knowledge publishing workflow.
```

---

## 20. Implementation Workflow

Always work in this order.

### Step 1: Inspect

Before editing code, inspect:

1. package manager
2. project structure
3. routes
4. content collections
5. site config
6. navigation config
7. theme config
8. components
9. global styles
10. existing blog and project data
11. i18n support if any
12. comment system if any

### Step 2: Plan

Before making major changes, output a concise implementation plan.

The plan should include:

1. files to modify
2. files to add
3. features to keep
4. default content to replace
5. visual token changes
6. Notes implementation approach
7. GitHub link implementation
8. language switch approach
9. open source notice approach
10. local preview and validation steps

Wait for confirmation before large changes.

### Step 3: Implement

When implementing:

1. reuse existing components where possible
2. keep changes small and understandable
3. avoid unnecessary dependencies
4. do not rebuild the whole template
5. do not add backend systems in the first version
6. do not hardcode repeated personal data
7. keep styles consistent
8. keep responsive design working
9. preserve existing useful template features

### Step 4: Validate

After changes, run the appropriate checks.

Usually:

```bash
npm install
npm run dev
npm run build
```

If the project uses a different package manager, follow the repository setup.

Report:

1. what changed
2. what files changed
3. what was added
4. what was intentionally left for later
5. how to preview locally
6. any errors or limitations

---

## 21. First Version Acceptance Criteria

The first version is acceptable only if:

1. the site runs locally
2. the homepage is clearly customized
3. the visual style is grey blue and consistent
4. Blog works
5. Projects works
6. Notes exists
7. About exists
8. GitHub link is visible in the top bar
9. homepage has a command line or server style section
10. page detail styles match the main theme
11. language switch is available or clearly reserved
12. open source attribution is handled
13. no private dashboard is added
14. no WeChat crawler is added
15. no AI translation backend is added
16. no Todo or Timeline system is added
17. no unnecessary heavy dependencies are added

---

## 22. Priority

Highest priority:

1. Astro Theme Pure based customization
2. grey blue visual system
3. homepage redesign
4. Blog, Projects, Notes, About
5. GitHub link
6. command line or server style section
7. consistent hover style
8. open source attribution

Medium priority:

1. language switch placeholder
2. external link cards in Notes
3. Agent or CLI style visual module
4. tag filtering
5. comment system evaluation

Low priority for later:

1. Payload CMS
2. database
3. Cloudflare R2
4. private dashboard
5. WeChat import
6. AI translation
7. AI agent skill extraction
8. Todo
9. Timeline
10. browser extension
11. mobile shortcut

---

## 23. Core Instruction

When in doubt, prioritize:

1. clean public portfolio
2. consistent grey blue design
3. Astro Theme Pure compatibility
4. readable content
5. small maintainable changes
6. future extensibility

Do not overbuild.

Do not add private workflow features in the first version.

Do not turn the site into a complicated app too early.

First make the public blog and portfolio beautiful, stable and easy to deploy.
