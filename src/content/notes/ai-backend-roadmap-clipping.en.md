---
title: 'AI and backend knowledge roadmap'
publishDate: 2026-01-04
tags: [AI, Backend, Learning path, External material]
type: 'thought'
source: 'A third-party public roadmap; the original link was not saved'
summary: 'A saved AI/LLM and backend engineering roadmap, moving from fundamentals through training, Agents, deployment, security, databases, and distributed systems.'
comment: 'This checklist is entirely third-party material, not my original work or a claim that I have mastered every item. The original source still needs to be recovered.'
visibility: 'public'
locale: 'en-US'
translationKey: 'ai-backend-roadmap-clipping'
---

Someone else compiled this entire list. I saved it not because reading a roadmap means I have “mastered AI” or “become a backend engineer,” but because it is useful for checking gaps.

## AI / LLM path

- LLMs, Transformers, pretraining, fine-tuning, and inference;
- linear algebra, probability, statistics, optimisation, and loss functions;
- Python, Jupyter, PyTorch / TensorFlow;
- data cleaning, tokenisation, embeddings, and positional encoding;
- Attention, FFN, LayerNorm, residuals, and masks;
- SFT, RLHF / RLAIF, and DPO;
- long context, vector retrieval, and RAG;
- tool calling, Agents, permissions, and sandboxes;
- LoRA, quantisation, distillation, KV Cache, and serving;
- evaluation, safety, observability, cost, and real applications.

## Backend path

- one backend language and its engineering tools;
- Linux, Git, HTTP, DNS, cookies, caching, and CORS;
- frameworks, APIs, databases, SQL, indexes, transactions, and ORMs;
- Redis, authentication, concurrency, and message queues;
- distributed systems, microservices, and observability;
- security, testing, performance, Docker, Kubernetes, and cloud services;
- incident handling, SLO / SLI, gradual rollout, rollback, and maintainability.

It is a map, not evidence of learning. Real competence still needs courses, documentation, code, and project evidence.

## Original version

```text
Introduction to large language models (LLMs): Transformers, pretraining/fine-tuning, inference
↓
Mathematics and foundations: linear algebra, probability, statistics, optimisation, vectors, gradients, loss functions
↓
Python and the deep-learning toolchain: Python, Jupyter, virtual environments, dependency management
↓
Deep-learning frameworks: PyTorch / TensorFlow, automatic differentiation, tensors, training loops
↓
Data and corpora: cleaning, deduplication, privacy removal, labelling, versioning, and quality
↓
NLP foundations: tokenisation, vocabulary, embeddings, positional encoding, language-modelling tasks
↓
Transformer core: Self-Attention, FFN, LayerNorm, residuals, Mask
↓
Model scale and training strategy: batch size, learning rate, scheduling, mixed precision, gradient accumulation, parallel training
↓
Pretraining: Causal LM / Masked LM, training objectives, sampling strategy, debiasing, filtering
↓
Alignment and instruction tuning: SFT, RLHF/RLAIF, DPO, preference data, reward models
↓
Inference and decoding: Greedy/Beam/Sampling, Temperature/Top-p, repetition penalties
↓
Context and long text: context windows, RoPE/extensions, long-sequence attention, chunking, summaries
↓
Embeddings and vector retrieval: embeddings, similarity, ANN, vector databases/indexes
↓
RAG: chunking, retrieval/reranking, citations, hallucination reduction, evaluation
↓
Tool calling and Agents: function calling, planning/reflection, tool reliability, permissions, sandboxes
↓
Fine-tuning and parameter efficiency: Full FT, LoRA/QLoRA, Adapter, data recipes, overfitting
↓
Compression and deployment optimisation: INT8/INT4 quantisation, distillation, pruning, KV Cache, parallel inference
↓
Serving engineering: throughput/latency, batching, streaming, queues, rate limits, caching
↓
Evaluation: offline benchmarks, task sets, red teaming, online A/B tests, user-feedback loops
↓
Safety and compliance: jailbreaks, prompt injection, leakage prevention, content safety, privacy, copyright
↓
Observability and cost: logs, metrics, tracing, token cost, GPU utilisation, SLOs
↓
Applications: support, search, writing, code, workflow orchestration, knowledge-base operations, quality controls
↓
Frontiers: multimodality, MoE, long context, model editing, continual learning, synthetic data

Congratulations, you now understand the core knowledge of large language models.

---
Backend

Computer science foundations: networks / operating systems / data structures and algorithms
↓
One backend language and ecosystem: Java / Go / Python / Node.js / C#, etc.
↓
Development tools and engineering: IDE, package management, logging, configuration, debugging
↓
Linux foundations and command line
↓
Git and collaboration: branches, PRs, code review
↓
Web foundations: HTTP/HTTPS, DNS, cookies, caching, CORS
↓
Framework and architecture basics: MVC, dependency injection, middleware
↓
API design: REST / GraphQL / gRPC, versioning, OpenAPI/Swagger
↓
Databases: MySQL/PostgreSQL, SQL, indexes, transactions, locks
↓
ORMs and database migrations
↓
Caching: Redis, caching strategies, eviction, distributed locks
↓
Authentication and authorisation: Session/JWT/OAuth2, RBAC/ABAC, permission models
↓
Concurrency and async: threads/coroutines, event loops, queues, backpressure
↓
Message queues and event-driven systems: Kafka/RabbitMQ/RocketMQ, idempotency, retries, ordering
↓
Distributed-systems foundations: CAP, consistency, service discovery, load balancing
↓
Microservices and service governance: circuit breaking, rate limits, degradation, retries, timeouts, tracing
↓
Observability: logs, metrics, tracing, alerts
↓
Security: input validation, SQL injection, XSS/CSRF, replay prevention, secret management
↓
Testing: unit/integration/contract tests, test data, isolation
↓
Performance and stability: profiling, hotspots, connection pools, N+1, capacity planning
↓
Deployment and operations: CI/CD, Docker, Kubernetes, rolling releases, rollback
↓
Cloud and infrastructure: object storage, CDN, RDS, messaging, IAM
↓
Incident response: diagnosis, retrospectives, SLO/SLI, gradual rollout, feature switches
↓
Code quality and maintainability: layering, DDD/modularity, reusable components, documentation

Congratulations, now you are a backend engineer.
```
