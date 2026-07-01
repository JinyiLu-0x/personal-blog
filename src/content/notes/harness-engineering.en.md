---
title: 'From Prompt and Context to Harness Engineering'
publishDate: 2026-03-30
tags: [AI, Agent, Thoughts]
type: 'thought'
source: 'Anthropic engineering blog and my own notes'
summary: 'Agent performance depends not only on the model and prompt, but on an environment of tools, constraints, feedback loops, and independent verification.'
bookmarked: true
visibility: 'public'
locale: 'en-US'
translationKey: 'harness-engineering'
---

Anthropic’s engineering blog introduced the idea of Harness Engineering. The conclusion first:

> Do not wait for the next generation of models. Build the Harness now.

## Three shifts

Prompt Engineering was about how to speak to a model. Context Engineering was about showing it the right information. Harness Engineering is about building the Agent’s whole working environment: orchestration, tools, constraints, feedback loops, and output verification.

## Two hard problems

One is context anxiety. When a long task approaches the context limit, the model starts finishing too early, like a student rushing an exam.

The other is self-evaluation bias. An Agent reviewing its own work nearly always thinks it did well—like a student grading their own essay.

## Possible solutions

Context anxiety can be handled with a Context Reset: clear the context and provide a fresh page instead of endlessly compressing history.

For evaluation bias, separate doing from judging. A strict independent evaluator is easier to improve than asking the producer to reflect harder.

## Three-Agent structure

The Planner plans, the Generator executes, and the Evaluator judges. The Evaluator can use Playwright to test a page, score it, and send feedback back to the Generator.

This division of work reminds me of comparisons between OpenClaw and old administrative systems. Samuel had already discussed a similar separation when talking about Manus, though this three-Agent version is relatively clean.
