---
title: 'AI 与后端知识路径清单'
publishDate: 2026-01-04
tags: [AI, 后端, 学习路径, 外部资料]
type: 'thought'
source: '第三方公开整理，原始记录未保存具体链接'
summary: '保存的一份 AI/LLM 与后端工程知识路径，从基础概念一路列到训练、Agent、部署、安全、数据库和分布式系统。'
comment: '这份清单完全来自第三方，不是我的原创，也不代表每一项都已经掌握；原始来源待补。'
visibility: 'public'
locale: 'zh-CN'
---

这份内容完全是别人整理的。我保存它，不是因为看完一张路线图就“掌握了 AI”或者“成为后端工程师”，而是它适合用来检查知识缺口。

## AI / LLM 路径

大致从这些部分展开：

- LLM、Transformer、预训练、微调和推理；
- 线性代数、概率统计、优化与损失函数；
- Python、Jupyter、PyTorch / TensorFlow；
- 数据清洗、Tokenization、Embedding 与位置编码；
- Attention、FFN、LayerNorm、残差与 Mask；
- SFT、RLHF / RLAIF、DPO；
- 长上下文、向量检索、RAG；
- 工具调用、Agent、权限与沙箱；
- LoRA、量化、蒸馏、KV Cache 与 Serving；
- 评测、安全、可观测性、成本与应用落地。

## 后端路径

另一部分从计算机基础开始，继续到：

- 一门后端语言与工程工具；
- Linux、Git、HTTP、DNS、Cookie、缓存和 CORS；
- 框架、API、数据库、SQL、索引、事务和 ORM；
- Redis、鉴权、并发、消息队列；
- 分布式系统、微服务、可观测性；
- 安全、测试、性能、Docker、Kubernetes 与云服务；
- 故障处理、SLO / SLI、灰度、回滚和可维护性。

它更像地图，不是学习成果。真正掌握仍然需要课程、文档、代码和项目证据。

## 原文版本

```text
大语言模型（LLM）入门认知（什么是 Transformer、预训练/微调、推理）
↓
数学与基础能力（线性代数/概率统计/优化；向量、梯度、损失函数）
↓
Python 与深度学习工具链（Python、Jupyter、虚拟环境、依赖管理）
↓
深度学习框架（PyTorch / TensorFlow；自动微分、张量、训练循环）
↓
数据与语料（数据清洗、去重、脱敏、标注；数据版本与数据质量）
↓
NLP 基础（Tokenization、词表、Embedding、位置编码；语言建模任务）
↓
Transformer 核心（Self-Attention、FFN、LayerNorm、残差、Mask）
↓
模型规模与训练策略（Batch/学习率/调度、混合精度、梯度累积、并行训练）
↓
预训练（Causal LM / Masked LM；训练目标、采样策略、去偏与过滤）
↓
对齐与指令化（SFT、RLHF/RLAIF、DPO；偏好数据与奖励模型）
↓
推理与解码（Greedy/Beam/Sampling、Temperature/Top-p、重复惩罚）
↓
上下文与长文本（上下文窗口、RoPE/扩展、长序列注意力、分块与摘要）
↓
嵌入与向量检索（Embeddings、相似度、ANN；向量数据库/索引）
↓
RAG 检索增强生成（切分、召回/重排、引用、幻觉抑制、评估）
↓
工具调用与 Agent（函数调用、规划/反思、工具可靠性、权限与沙箱）
↓
微调与参数高效（Full FT、LoRA/QLoRA、Adapter；数据配方与过拟合）
↓
压缩与部署优化（量化 INT8/INT4、蒸馏、剪枝；KV Cache、并行推理）
↓
Serving 工程（吞吐/延迟、批处理、流式输出、队列、限流、缓存）
↓
评测体系（离线基准、任务集、红队；在线 A/B、用户反馈闭环）
↓
安全与合规（越狱/提示注入、防泄漏、内容安全、隐私与版权）
↓
可观测性与成本（日志/指标/Tracing；Token 成本、GPU 利用率、SLO）
↓
应用落地（客服/搜索/写作/代码；工作流编排、知识库运营、质量守护）
↓
前沿方向（多模态、MoE、长上下文、模型编辑、持续学习、合成数据）

恭喜你，现在你掌握了大语言模型的核心知识了

---
后端相关

计算机基础（网络 / OS / 数据结构与算法）
↓
一门后端语言与生态（Java / Go / Python / Node.js / C# 等）
↓
开发工具与工程化（IDE、包管理、日志、配置、调试）
↓
Linux 基础与命令行
↓
Git 与协作流程（分支、PR、代码评审）
↓
Web 基础（HTTP/HTTPS、DNS、Cookie、缓存、CORS）
↓
框架与架构入门（MVC、依赖注入、中间件）
↓
API 设计（REST / GraphQL / gRPC，版本控制，OpenAPI/Swagger）
↓
数据库（关系型：MySQL/PostgreSQL；SQL、索引、事务、锁）
↓
ORM 与数据库迁移（Migrations）
↓
缓存（Redis：缓存策略、淘汰、分布式锁）
↓
认证与鉴权（Session/JWT/OAuth2、RBAC/ABAC、权限模型）
↓
并发与异步（线程/协程、事件循环、队列、背压）
↓
消息队列与事件驱动（Kafka/RabbitMQ/RocketMQ；幂等、重试、顺序）
↓
分布式系统基础（CAP、一致性、服务发现、负载均衡）
↓
微服务与服务治理（熔断、限流、降级、重试、超时、链路追踪）
↓
可观测性（日志、指标、Tracing；告警）
↓
安全（输入校验、SQL 注入、XSS/CSRF、防重放、密钥管理）
↓
测试（单元/集成/契约测试；测试数据与隔离）
↓
性能与稳定性（Profiling、热点、连接池、N+1、容量规划）
↓
部署与运维基础（CI/CD、容器 Docker、K8s、滚动发布、回滚）
↓
云服务与基础设施（对象存储、CDN、RDS、消息、权限/IAM）
↓
故障处理与应急（定位、复盘、SLO/SLI、灰度与开关）
↓
代码规范与可维护性（分层、DDD/模块化、可复用组件、文档）

恭喜你，现在你成为后端工程师了
```
