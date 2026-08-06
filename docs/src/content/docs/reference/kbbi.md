---
title: KBBI
description: Indonesian dictionary (Kamus Besar Bahasa Indonesia).
---

Base path: `/api/v1/kbbi`

## Endpoints

| Method | Path | Query | Description |
| --- | --- | --- | --- |
| GET | `/search` | `q` (required), `page`, `per_page` | Search words. |
| GET | `/word/:word` | — | Exact word entries. |
| GET | `/random` | `count` (default 1, max 20) | Random entries. |

Entries with `type: 1` have HTML entities decoded in `arti`.

## Errors

- `VALIDATION_ERROR` (400) — missing query.
- `NOT_FOUND` (404) — word not found.
