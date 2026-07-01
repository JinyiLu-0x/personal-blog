---
title: 'FlowMind：第一次独立全栈开发记录'
publishDate: 2025-08-18
updatedDate: 2025-08-29
tags: [项目, 网站开发, React, Node.js, MongoDB, AI]
type: 'thought'
summary: '从四小时跑通 React 前端，到接入 Express、MongoDB、Render、Atlas 和 Netlify，记录 FlowMind 第一次完整的前后端联动。'
comment: '这是早期项目的真实开发记录，保留当时的实现路径和踩坑，不把 prototype 包装成成熟产品。'
visibility: 'public'
locale: 'zh-CN'
---

## 8 月 18 日：前端先跑起来

四小时速成 React。还没集成后端，打算做一个 AI 助理项目，但是前端已经基本跑通，也部署好了。

这个阶段最感谢 Cursor 和 Claude Code。页面先做出了登录、任务、Ideas 和 Drafts，AI Parse 也先把交互位置留了出来。虽然还是半成品，但已经第一次让我觉得：一个想法可以很快变成能点、能看的东西。

## 8 月 29 日：第一次完整接上后端

记录独立全栈开发的第一个项目：FlowMind。

上周花了两天自学 React，这周一个晚上完成了前端接入后端、连接 MongoDB，以及线上数据库的部署。过程不是“一次写对”，而是先让它跑起来，再逐步把结构改规范。

### 后端

最开始只是写几段 JavaScript 接口。能跑，但结构松散，也缺安全、限流和统一错误处理。

后来换成 Express，拆分 `/api/auth`、`/api/users` 和 `/api/ai` 路由，并加入 Helmet、Rate Limit、CORS、Cookie Parser、404 与错误处理。端口和数据库连接放进环境变量，再用 `/health` 做健康检查。

### 前端接入

本地开发先由 Vite 代理 `/api` 到本地后端。接入时遇到过图标缺失导致白屏、空输入也可以登录、认证逻辑不一致等问题，后来补齐导出并统一用 Token 判断。

### MongoDB

本地先连接 MongoDB。Express 5 与原来的 sanitize 中间件有兼容问题，于是改成自定义清理，只处理 `req.body` 和 `req.params`，既防注入，也不和 Express 5 冲突。

### 部署

前端部署到 Netlify，后端放到 Render，数据库迁到 Atlas。

这里踩了几个很具体的坑：

- SPA 子路由刷新会 404，需要 `_redirects`；
- 云端前端不能再请求 `localhost:5050`；
- Render 要配置端口、MongoDB URI、JWT Secret 和前端地址；
- 后端 CORS 必须放行 Netlify 域名；
- 邮件和重置链接不能继续指向本地地址。

最后的生产链路是：Netlify 前端 → Render 后端 → Atlas 数据库。注册、登录、刷新和跨域请求都重新走了一遍验证。

现在看这套东西当然不复杂，但它是我第一次真正把“本地能跑”和“线上完整联动”分开理解。
