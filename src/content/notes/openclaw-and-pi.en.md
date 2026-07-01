---
title: 'OpenClaw, Coding Agents, and Pi'
publishDate: 2026-02-22
tags: [AI, Agent, OpenClaw, Tools, External link]
type: 'thought'
externalUrl: 'https://lucumr.pocoo.org/2026/1/31/pi/'
source: 'Armin Ronacher’s article on Pi and public discussion'
summary: 'A normal model is an engine, a Coding Agent is a specialised engine, and OpenClaw is closer to a whole vehicle with controls, permissions, Skills, and scheduling.'
visibility: 'public'
locale: 'en-US'
translationKey: 'openclaw-and-pi'
---

I saw a useful analogy for distinguishing OpenClaw from tools such as Claude Code.

GPT, Grok, and Gemini are general engines. Claude Code and Codex are engines specialised for coding. OpenClaw is more like putting the engine inside a computer and adding the steering wheel, accelerator, permissions, scheduled tasks, and Skills to make a complete vehicle.

You can build similar structures with LangGraph, CrewAI, and Cron, but permissions, security, chat bridges, and the skill ecosystem all take time. OpenClaw’s product value is not simply whether the model can write; it is that these connection layers arrive assembled.

Pi, underneath OpenClaw, is also worth looking at separately. Rather than reading all of OpenClaw first, it may be easier to understand the smaller Coding Agent and how it organises tools, context, and the execution loop.

This is another reminder that an Agent product cannot be judged by the model alone. The Harness, tools, permissions, and interaction around the model often create the real experience gap.
