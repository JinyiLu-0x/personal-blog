---
title: 'Claude Code + Remotion Skill 做视频'
publishDate: 2026-01-24
tags: [AI, 视频, Remotion, Claude Code, 工具]
type: 'thought'
source: 'Remotion 社区与公开案例'
summary: '把 Remotion Skill 装进 Claude Code 后，可以先生成多组视频方案，再由人挑选、继续迭代和补音乐。'
comment: '目前只是待体验的工作流，不作为熟练能力展示。'
visibility: 'public'
locale: 'zh-CN'
---

看到 Claude Code + Remotion 的工作流。

源文件里记的是完整两行：

```text
npx skills add remotion-dev/skills
use remotion skill create a video about how to install claude code
```

另一个公开案例的流程也很直接：安装 Skill，研究产品，先做十个 Demo，人看完以后选一个喜欢的方向，再生成十个相似版本，最后补音乐。

这里有意思的不是“一句话自动生成成片”，而是 Skill 把动画实现方式、组件和可复用规则放进了 Agent 的工作环境里。人负责选择品味和方向，Agent 负责批量探索与修改。

这个思路后来也连接到了我 6 月 27 日记下来的 Remotion + HyperFrames 工作流：[AI 工具与工作流观察清单](/notes/ai-tools-and-workflow-watchlist)。
