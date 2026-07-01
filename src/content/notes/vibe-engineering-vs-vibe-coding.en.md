---
title: 'Vibe Engineering is more than asking a model to write code'
publishDate: 2025-12-15
tags: [AI, Software Engineering, Codex, Thoughts]
type: 'thought'
source: 'My notes from a public OpenAI forum presentation'
summary: 'Vibe Coding asks whether code runs. Vibe Engineering asks whether planning, architecture, tests, documentation, and long-term maintenance work together.'
visibility: 'public'
locale: 'en-US'
translationKey: 'vibe-engineering-vs-vibe-coding'
---

I saw an internal presentation called Vibe Engineering.

The biggest difference from Vibe Coding was not how much code the model wrote. It was the move from “produce code that runs” to “complete a real engineering delivery.” People remain responsible for every line entering production while using AI Agents deeply across planning, architecture, debugging, tests, and documentation.

In public examples, Codex could work for hours and push scaffolding, test systems, comparison checks, and documentation towards a CI-ready result. The final Diff might not be large because much of the time was spent running tests, fixing tests, and verifying again.

Several methods stood out:

1. Ask AI for readable, inspectable artefacts, not only executable code.
2. Explore several solutions in parallel, then let a person choose the one that fits the goal and taste.
3. Use long-term goals and constraints instead of a stream of disconnected prompts.
4. Write documentation and tests for both humans and the next Agent entering the codebase.

One line stayed with me: if you do not want to read the output yourself, it will not be useful to an AI Agent either.

People have not disappeared. The work is shifting from manually writing every line towards design, judgement, communication, verification, and review.
