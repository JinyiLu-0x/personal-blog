---
title: 'Antigravity 深度体验：Workflow、浏览器与并行 Agent'
publishDate: 2025-12-15
updatedDate: 2025-12-16
tags: [AI, Agent, 工具, 工作流, Antigravity]
type: 'thought'
summary: 'Antigravity 不只是一个套着 VS Code 外观的聊天框：Workflow、浏览器操作记录、任务拆分和多 Agent 并行更值得观察。'
comment: '这是当时的实际体验记录；产品能力、模型和额度以后可能已经变化。'
visibility: 'public'
locale: 'zh-CN'
---

深度体验了一下 Google 的 Antigravity。当时几乎免费，Gemini 3 Pro 和 Claude Opus 4.5 Thinking 都能用，额度也很高。

我主要用了三种方式：

## 把重复步骤做成 Workflow

官方支持把过去的步骤封装成 Workflow，之后直接调用。周报、内容选题、投放复盘、客户调研模板这类重复任务，都可以先固化。

## 浏览器自动化与操作记录

浏览器子 Agent 可以操作 Chrome，完成点击、滚动和输入。它还能保留操作记录，方便人复查，而不是只说“已经完成”。

## 把大任务拆开

它会先列任务，再分阶段做，每一段都给可检查的产出，例如表格、总结、链接和截图。也支持多个 Agent 并行，不需要一直盯着同一个窗口。

我当时的感觉是，它不只适合开发，也适合运营、产品和销售等需要浏览器与重复流程的工作。

后来我还是更常用 Codex，因为界面、项目边界和 Diff 体验更符合我的习惯。但 Antigravity 让我更早看到：AI 编程工具正在从“聊天写代码”变成 Workflow、浏览器、Artifacts 和多 Agent 共同组成的工作环境。
