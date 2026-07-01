---
title: 'FlowMind: my first independent full-stack build log'
publishDate: 2025-08-18
updatedDate: 2025-08-29
tags: [Project, Web, React, Node.js, MongoDB, AI]
type: 'thought'
summary: 'From getting a React frontend running in four hours to connecting Express, MongoDB, Render, Atlas, and Netlify: my first complete frontend-backend workflow.'
visibility: 'public'
locale: 'en-US'
translationKey: 'flowmind-fullstack-build-log'
---

## 18 August: get the frontend running first

A four-hour crash course in React. The backend was not connected yet. I wanted to build an AI assistant, but the frontend was mostly running and already deployed.

Cursor and Claude Code helped most at this stage. I built login, tasks, Ideas, and Drafts, and reserved the interaction point for AI Parse. It was unfinished, but it was the first time an idea had turned into something clickable so quickly.

## 29 August: connecting a full backend for the first time

FlowMind became my first independent full-stack project. After two days learning React the week before, I spent one evening connecting the frontend to a backend, MongoDB, and an online database. It was not written correctly in one attempt: first make it run, then improve the structure.

### Backend

I moved from a few loose JavaScript endpoints to Express routes for `/api/auth`, `/api/users`, and `/api/ai`, with Helmet, rate limiting, CORS, Cookie Parser, 404 handling, and shared error handling. Ports and database connections moved into environment variables, with `/health` for checks.

### Frontend and MongoDB

Vite proxied `/api` locally. I fixed blank screens from missing icon exports, empty-input login, and inconsistent authentication by standardising token checks. Express 5 conflicted with the old sanitising middleware, so I replaced it with targeted cleaning of `req.body` and `req.params`.

### Deployment

The frontend went to Netlify, backend to Render, and database to Atlas. I dealt with SPA refresh 404s, cloud code still calling localhost, Render environment variables, CORS for the Netlify domain, and reset links pointing locally.

The production path became Netlify frontend → Render backend → Atlas database. It is simple in hindsight, but it was the first time I properly understood the difference between “runs locally” and “works end to end online.”
