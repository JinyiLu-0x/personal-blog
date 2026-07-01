---
title: 'Raspberry Pi Private Cloud'
description: 'A self-hosted private cloud with secure remote access, built on a Raspberry Pi and Linux web stack.'
publishDate: 2025-06-01
techStack:
  - Linux
  - Raspberry Pi
  - Nextcloud
  - Apache
  - PHP
  - MySQL
  - Tailscale
role: 'Infrastructure design, configuration, and deployment'
status: 'complete'
tags:
  - Cloud
  - Cybersecurity
  - Tools
featured: false
order: 3
locale: 'en-US'
translationKey: 'raspberry-pi-private-cloud'
links:
  demo: 'https://www.youtube.com/watch?v=KnhX3dvZU6g'
relatedLinks:
  - title: 'Backup demo video'
    href: 'https://www.bilibili.com/video/BV1SbeAzfECh/'
---

## Background

This project builds a private cloud on a Raspberry Pi 4B using Nextcloud and a conventional Linux web stack.

## My Role

I handled the hardware setup, operating-system configuration, web services, database setup, and network security.

## Implementation

- Deployed Nextcloud with Apache, PHP, and MySQL on Linux.
- Configured the device, services, storage, and database as an integrated system.
- Added secure remote access through Tailscale VPN.
- Connected multiple devices without exposing the service through public NAT mapping.

## Result

The final system provides remotely accessible personal cloud storage while keeping the deployment self-hosted and avoiding direct public port exposure.
