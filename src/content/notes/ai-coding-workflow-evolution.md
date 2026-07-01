---
title: '我的 AI Coding 工作流演进'
publishDate: 2026-03-30
tags: [AI, 工具, 工作流, 外部链接]
type: 'thought'
externalUrl: 'https://mp.weixin.qq.com/s/h_bnt6YFaLHSDgKSoFb6SA'
source: 'Context Engineering 公开文章与个人使用记录'
summary: '从聊天窗口复制代码，到 IDE 内协作、浏览器原型和本地 Agent，工具的变化本质上是上下文与执行环境不断靠近。'
comment: '比起追逐单个模型，我更在意工具能否理解项目、读取必要上下文，并让我方便地核对和接管。'
bookmarked: true
important: true
visibility: 'public'
locale: 'zh-CN'
---

和下午发的东西一个道理，先 mark：

**Prompt → Context → Harness**

Context 我依稀记得是去年大概七八月很火的概念。按这个迭代速度回头看，我自己的 Vibe Coding 历程也还蛮有意思：

- 最早是 24 年直接 ChatGPT 复制粘贴到 VS Code。Debug 不好使，这个其实也跟 Context 有关系。
- 后来开始用 Cursor 这种内置模型的 IDE，也直接用 Copilot，模型终于不只是隔着聊天框猜代码。
- 25 年七八月左右，Claude 从直接 Chat 变成了“左边聊天、右边网页”，还能一键部署。第一次看到的时候确实完全被惊艳到，后来又有了针对 Project 的 Chat，可以整合对话和背景。
- 25 年底 Google AI Studio 跟 Claude 是一个道理，但当时 Gemini 更新很大，也支持一键 Push 到 GitHub。算是更升级，不过还是网页版。
- 再后来是 Google 的 Antigravity，本质上又回到了 IDE，UI 和 VS Code 很像。前者额度少了以后我用这个更多，不过它有时会出现幻觉，开始乱改，所以还是要盯 Diff。
- 26 年初开始用 Codex。这个实话说很惊艳：既有 Claude Project Chat 那种整合感，也有一键 Push 到 GitHub 的功能。整体设计很简洁，把 Chat 和 IDE 又分开了，需要细改时可以直接跳转 VS Code。我个人目前用起来最顺手，而且项目范围比较清楚。

以上算本人 Vibe Coding 的一点小心得。各家公司特色都很明显：工具从“给我一段代码”，慢慢变成“理解项目、调用工具、完成任务、让我确认”。

确实，Context Engineering 去年火过。现在再看，它不是一个过时的中间概念，而是后面 Harness 和 Agent 工作流的基础。

更早的 Context 记录在这里：[Context Engineering 早期记录：上下文 AI](/notes/context-ai-early-note)。Harness 相关的外部文章整理则放在：[从 Prompt、Context 到 Harness Engineering](/notes/harness-engineering)。
