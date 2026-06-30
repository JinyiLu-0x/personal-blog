---
title: 'Raspberry Pi 私有云'
description: '基于 Raspberry Pi 与 Linux Web 技术栈构建、支持安全远程访问的自托管私有云。'
publishDate: 2026-06-26
techStack: [Linux, Raspberry Pi, Nextcloud, Apache, PHP, MySQL, Tailscale]
role: '基础设施设计、配置与部署'
status: 'complete'
tags: [Cloud, Cybersecurity, Tools]
featured: false
order: 3
locale: 'zh-CN'
translationKey: 'raspberry-pi-private-cloud'
links:
  demo: 'https://www.youtube.com/watch?v=KnhX3dvZU6g'
relatedLinks:
  - title: '备份功能演示视频'
    href: 'https://www.bilibili.com/video/BV1SbeAzfECh/'
---

## 项目背景

该项目使用 Raspberry Pi 4B、Nextcloud 和常规 Linux Web 技术栈构建个人私有云。

## 我的角色

我负责硬件设置、操作系统配置、Web 服务、数据库部署和网络安全。

## 实现过程

- 在 Linux 上使用 Apache、PHP 和 MySQL 部署 Nextcloud。
- 将设备、服务、存储与数据库配置为完整系统。
- 通过 Tailscale VPN 提供安全远程访问。
- 在不开放公共 NAT port mapping 的情况下连接多个设备。

## 项目结果

最终系统提供可远程访问的个人云存储，同时保持自托管部署，并避免直接暴露公共端口。
