---
title: 'Low-saturation, readable UI rules'
publishDate: 2025-12-04
tags: [Design, UI, Web, Thoughts, External link]
type: 'thought'
externalUrl: 'https://medium.muz.li/how-to-make-interfaces-clear-pleasant-and-not-annoying-b3cff61e030f'
source: 'My notes from a design discussion and an external UI/UX article'
summary: 'Build hierarchy in greyscale first, then add a few low-saturation colours. Keep typography consistent, reduce text effects, and use spacing to improve long-form readability.'
comment: 'These rules later became the basis of the grey-blue visual direction for my personal site.'
visibility: 'public'
locale: 'en-US'
translationKey: 'low-saturation-ui-guidelines'
---

Some notes on frontend taste after talking with an art student from a top university.

## Colour

- Keep the overall palette to roughly three main colours, low in saturation and generally grey.
- Establish black, white, and greyscale hierarchy first, then check that it remains clear after colour is added.
- Grey text on a coloured background can borrow a little of the background hue instead of using a harsh neutral grey.
- Use colour to distinguish hierarchy, not to add decoration everywhere.

## Typography

- Use one main typeface globally, with a secondary face only for small functional areas.
- Prefer readable sans-serif type for English body text.
- Make headings slightly larger and body text lighter; build hierarchy through size, weight, and spacing.
- Avoid shadows, outlines, glows, and other text effects in normal use.

## Tips and long text

- Step instructions can use a `1/n` pattern so progress is clear.
- Put long tips inside a complete greyscale container.
- Increase line height, letter spacing, padding, and whitespace for scanning.
- Keep cards, buttons, and inputs consistent in radius, borders, and hover behaviour.

The goal is minimal, rational, and highly readable: establish information hierarchy before visual personality.

I later saved an article about making interfaces clear, pleasant, and unobtrusive. It belongs with these rules, so I did not create another nearly identical UI note.

## Copyable prompt

```text
Your role is a professional UI/UX designer focused on logic, minimal aesthetics, and readability. Your output should be visually clean, structurally clear, strongly hierarchical, and consistent.

Using the UI rules below, generate a design specification covering page structure, layout, information hierarchy, colour logic, typography, component styling, and the presentation of tips.

[Colour]
- Use three low-saturation main colours with an overall grey direction.
- Build from a greyscale system and keep hierarchy clear in a black-and-white contrast test.
- On coloured backgrounds, foreground greys should borrow the background hue rather than using pure grey.

[Typography]
- Use one global primary typeface; a secondary face may appear in small emphasis areas without breaking consistency.
- Use readable sans-serif type for English body copy.
- Headings should be slightly larger and clearly layered; body text should remain light and easy to read.
- Do not add shadows, outlines, or glow effects to text.

[Tips]
- For steps, use a clear 1/n sequence.
- For long tips, use one greyscale container with increased line height, letter spacing, padding, and whitespace.

Describe:
1. overall layout and information hierarchy;
2. colour logic for each visual region;
3. typography and typesetting hierarchy;
4. common component styles for cards, buttons, inputs, and tip containers;
5. how tips appear in the interface;
6. a concise summary of the minimal, low-saturation, highly readable visual style.

Always keep the result minimal, rational, and visually polished.
```
