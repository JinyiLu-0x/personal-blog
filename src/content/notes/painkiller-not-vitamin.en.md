---
title: 'Build a painkiller—and do not make users enter an API key'
publishDate: 2025-12-15
tags: [Product, AI, UX, Thoughts]
type: 'thought'
source: 'Public product discussion and my own mark'
summary: 'A small tool should solve a clear pain. Once ordinary users must obtain and enter an API key, the product has already chosen to lose many of them.'
important: true
visibility: 'public'
locale: 'en-US'
translationKey: 'painkiller-not-vitamin'
---

Differentiation should be a painkiller, not a vitamin.

Technical people easily build a general tool first and ask users to invent the use case. If the problem is not painful, more features only make it novel for a while.

A more concrete judgement: once a product requires users to enter their own API key, it has already abandoned a large part of the ordinary-user market. That can be normal for an early developer product, but a mass-market user should not need to understand providers, quotas, and key management before doing the task.

This is even more obvious in China, where registration, real-name verification, payment, network access, balances, quotas, and provider switching can all add friction. Passing those steps to users is not “more freedom”; it is moving integration cost back onto them.

A better structure would offer:

- a built-in model and quota that work immediately;
- provider switching or personal API keys for advanced users;
- compatible local models for privacy- or cost-sensitive users;
- clear information about cost, capability, and where data goes.

“Build an Agent, not a Tool” does not mean adding an Agent everywhere. It means not throwing the entire workflow back to the user.
