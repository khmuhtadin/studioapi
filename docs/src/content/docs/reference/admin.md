---
title: Admin
description: Admin-only platform management endpoints.
---

All admin endpoints require a JWT with the `is_admin` claim (server-verified role) and return `403 FORBIDDEN` otherwise.

## Endpoints

| Method | Path | Description |
| --- | --- | --- |
| GET | `/admin/stats` | Platform totals (users, revenue, calls). |
| GET | `/admin/users` | Paginated users (filter `plan`, `status`). |
| GET | `/admin/users/:id` | User detail with keys, subscription, invoices, usage. |
| PATCH | `/admin/users/:id` | Update status/plan. |
| PATCH | `/admin/users/bulk` | Bulk update (max 100, skips self). |
| GET | `/admin/keys` | Paginated API keys. |
| DELETE | `/admin/keys/:id` | Revoke key. |
| GET | `/admin/invoices` | Paginated invoices with failure reasons. |
| GET | `/admin/traffic` | Traffic by product, day, endpoint. |
| GET | `/admin/data-health` | Row counts and cron freshness. |
| POST | `/admin/deploy-frontend` | Trigger GitHub Actions deploy (requires `GITHUB_TOKEN`). |

## Errors

- `UNAUTHORIZED` (401) — missing/invalid token.
- `FORBIDDEN` (403) — non-admin caller.
