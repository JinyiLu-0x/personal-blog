---
title: 'OpenClaw、Coding Agent 与 Pi'
publishDate: 2026-02-22
tags: [AI, Agent, OpenClaw, 工具, 外部链接]
type: 'thought'
externalUrl: 'https://lucumr.pocoo.org/2026/1/31/pi/'
source: 'Armin Ronacher 的 Pi 文章与公开讨论'
summary: '普通模型像引擎，Coding Agent 是专用引擎，OpenClaw 更像把引擎、方向盘、权限、Skills 和调度装进一辆整车。'
comment: '类比只用于区分产品层级；安全、权限和生态仍然需要单独判断。'
visibility: 'public'
locale: 'zh-CN'
---

看到一个区分 OpenClaw 和 Claude Code 等工具的类比。

GPT、Grok、Gemini 更像通用引擎；Claude Code、Codex 这类 Coding Agent 是写代码的引擎；OpenClaw 更像把引擎装进电脑，再补上方向盘、油门、权限、定时任务和 Skills 的整车。

自己用 LangGraph、CrewAI 加 Cron 当然也能搭出类似结构，但要花时间处理权限、安全、聊天桥接和技能生态。OpenClaw 的产品价值不只是“模型会不会写”，而是把这些连接层先装起来。

另外，OpenClaw 底层的 Pi 也值得单独看。与其一上来就读整个 OpenClaw，不如先理解这个更小的 Coding Agent：它怎样组织工具、上下文和执行循环。

这也提醒我，评价一个 Agent 产品时不能只看模型。真正拉开体验差异的，经常是模型外面的 Harness、工具、权限和交互。
