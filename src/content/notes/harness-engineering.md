---
title: '从 Prompt、Context 到 Harness Engineering'
publishDate: 2026-03-30
tags: [AI, Agent, 想法]
type: 'thought'
source: 'Anthropic 工程博客与个人整理'
summary: 'Agent 的效果不只取决于模型和提示词，也取决于工具、约束、反馈循环与独立验证共同构成的运行环境。'
comment: '我更关注 Harness 如何把规划、执行和评价拆开，让长任务不只依赖模型的自我反思。'
bookmarked: true
visibility: 'public'
locale: 'zh-CN'
---

Anthropic 最新工程博客提出了一个新概念：Harness Engineering。先说结论，核心观点是：

> 不要等下一代模型，现在就做 Harness。

## 三次范式演进

第一阶段 Prompt Engineering，核心是怎么跟模型说话。

第二阶段 Context Engineering，核心是让模型看到正确的信息。

第三阶段 Harness Engineering，核心是给 Agent 搭建一整套工作环境：编排、工具、约束、反馈循环、输出验证。

## 两个硬伤

Anthropic 在实践中发现 AI Agent 有两个硬伤。

一个是上下文焦虑：长任务中 context window 快满了，模型就开始提前收尾，像考试快结束时乱写答案。

另一个是自我评价偏差：让 Agent 评价自己的工作，永远觉得自己做得不错，像学生改自己作文。

## 怎么解决

上下文焦虑用 Context Reset 解决：直接清空上下文换张白卷，比压缩历史更有效。

自我评价偏差则借鉴 GAN 的思路：把做事的和评判的分成两个 Agent，调一个独立评判者变严格，比让生产者自我反思容易得多。

## 三 Agent 架构

Planner 负责规划，Generator 负责执行，Evaluator 负责评判。Evaluator 可以用 Playwright 实际测试页面然后打分，再反馈给 Generator 迭代。

想起这个 Agent 架构，有人把 OpenClaw 和“三省六部”放在一起讲。这个分工情况倒是 Samuel 去年还是前年讲 Manus 的时候就说过，相比较这里提到的三 Agent 架构还算简洁。
