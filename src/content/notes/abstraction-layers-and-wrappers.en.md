---
title: 'A “wrapper” can also be understood as an abstraction layer'
publishDate: 2025-10-21
tags: [Thoughts, Web, Computer Science, External link]
type: 'thought'
externalUrl: 'https://x.com/lxfater/status/1979889663143027030'
source: 'Public post by 铁锤人 (@lxfater)'
summary: 'Looking from Next.js and React down through JavaScript and lower layers, a “wrapper” can also be understood as abstraction and packaging at different levels.'
visibility: 'public'
locale: 'en-US'
translationKey: 'abstraction-layers-and-wrappers'
---

The original post says:

> Everything is a “wrapper”:<br>
> Next.js is a wrapper around React<br>
> React is a wrapper around JavaScript<br>
> JavaScript is a wrapper around C++<br>
> C++ is a wrapper around assembly<br>
> Assembly is a wrapper around zeros and ones<br>
> Zeros and ones are a wrapper around voltage<br>
> Voltage is a wrapper around electrons<br>
> Electrons are a wrapper around quantum fields<br>
> Quantum fields are a wrapper around mathematics<br>
> Mathematics is a wrapper around logic<br>
> Logic is a wrapper around thought<br>
> Thought is a wrapper around neurons<br>
> Neurons are a wrapper around biology<br>
> Biology is a wrapper around chemistry<br>
> Chemistry is a wrapper around physics<br>
> Physics is a wrapper around regularities<br>
> Regularities are a wrapper around patterns<br>
> Patterns are a wrapper around perception<br>
> Perception is a wrapper around consciousness<br>
> Consciousness is a wrapper around the “unknown”

I read “wrapper” here as an abstraction layer.

Next.js adds routing, rendering, and engineering conventions to React. React turns direct DOM manipulation into components and state. JavaScript hides lower-level memory and instruction details. Each layer is not simply copying the layer below; it chooses which complexity to hide and which interface to provide.

So “is it a wrapper?” is not a particularly useful way to judge a tool. Better questions are: what does it encapsulate, what does it add, and does the abstraction make the task simpler?
