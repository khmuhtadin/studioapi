---
title: Overview
description: StudioAPI unifies 30+ Indonesian public data sources behind one consistent, agent-ready API.
---

StudioAPI turns 30+ Indonesian public data sources into one consistent, agent-ready API. One key, one contract, one bill — for your product and every AI agent you ship.

## Why StudioAPI

- **One contract.** Every source normalizes to the same response envelope, pagination, and error format. Your integration never changes when a source changes.
- **Agent-ready.** Every endpoint is available as an MCP tool and OpenAI-compatible function schema, with streaming and x402 pay-per-call for agents.
- **Resilient.** Multi-source failover, edge caching, and health checks route around outages before they reach you.
- **Operable.** Per-key budgets, rate ceilings, audit logs, and consolidated billing — built for B2B SaaS.

## Core facts

- API base URL: `https://waiting-weekly-boys-masters.trycloudflare.com`
- Dashboard: `https://studioapi-app.pages.dev`
- Product home: `https://studioapi.dev`
- Status: `https://status.studioapi.dev`
- Repository: `https://github.com/khmuhtadin/studioapi`

## What you can build

Wilayah, cuaca, gempa, kurs, kurs BI, halal, BPOM, KBBI, Quran, Alkitab, OJK, sekolah, kampus, rumah sakit, kodepos, plat nomor, UMP, libur, sholat, hijriah, astronomi, validasi format, and developer utilities — all behind `x-api-key`.

## Security & compliance

- API keys are stored as SHA-256 hashes; the raw key is shown once at creation.
- Session tokens are HMAC-SHA256 JWTs with 7-day expiry.
- Bot protection (Cloudflare Turnstile) guards registration and login.
- x402 receipts are single-use and recorded server-side.
- Admin actions are audited; non-admin users cannot reach admin routes.
