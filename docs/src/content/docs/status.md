---
title: API status
description: Public status endpoint and operational visibility.
---

## Health check

```bash
curl https://use.studioapi.dev/health
```

```json
{ "status": "ok", "timestamp": "2026-08-06T17:00:00Z" }
```

## What to monitor

- `/health` — process and database readiness.
- `/admin/data-health` — per-table row counts and cron freshness (admin only).
- `/admin/traffic` — traffic by product, day, and endpoint (admin only).
- `GET /auth/config` — feature flags (Turnstile, OAuth) are advertised publicly.

Public status page: `https://status.studioapi.dev` (planned).

## Incidents

Live-provider outages degrade specific endpoints (`502 UPSTREAM_ERROR` only when cache is empty); cached responses continue to serve during refreshes. Watch the status page and the repository for incident notes.
