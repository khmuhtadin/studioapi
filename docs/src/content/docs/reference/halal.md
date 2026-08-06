---
title: Halal
description: Halal supervisor data from BPJPH, cached 24h.
---

Base path: `/api/v1/halal`

## Endpoints

| Method | Path | Query | Description |
| --- | --- | --- | --- |
| GET | `/` | `q` (min 2), `limit` (default 50, max 200), `offset` | Search halal supervisors. |
| GET | `/:id` | — | Supervisor by UUID `id_penyelia`. |

Responses include `meta.attribution` (`Sumber: BPJPH`), `refreshed`, `cached_at`, and a disclaimer.

## Errors

- `VALIDATION_ERROR` (400) — short query or non-UUID id.
- `UPSTREAM_ERROR` (502) — BPJPH unreachable and no cache.
- `NOT_FOUND` (404) — id not found.
