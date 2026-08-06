---
title: BPOM
description: BPOM product registration data, cached 24h.
---

Base path: `/api/v1/bpom`

## Endpoints

| Method | Path | Query | Description |
| --- | --- | --- | --- |
| GET | `/` | `q` (min 2), `limit` (default 50, max 200), `offset` | Search products. |
| GET | `/:nie` | — | Product by NIE (e.g. `BPOM`-style code, uppercased). |

Responses include `meta.attribution` (`Sumber: BPOM RI`), `refreshed`, `cached_at`, and `upstream_error` when a refresh failed but cache was served.

## Errors

- `VALIDATION_ERROR` (400) — short query or malformed NIE.
- `UPSTREAM_ERROR` (502) — BPOM unreachable and no cache.
- `NOT_FOUND` (404) — NIE not found.
