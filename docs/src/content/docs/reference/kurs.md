---
title: Kurs
description: Foreign exchange rates via Frankfurter.
---

Base path: `/api/v1/kurs`

## Endpoints

| Method | Path | Query | Description |
| --- | --- | --- | --- |
| GET | `/latest` | `base` (default USD), `target` (default IDR) | Latest rate. |
| GET | `/history` | `base`, `target`, `start`, `end` (YYYY-MM-DD) | Rate history, max 366 days. |

Currency codes must be ISO 4217 (e.g. `USD`, `IDR`) and different from each other.

## Errors

- `VALIDATION_ERROR` (400) — invalid codes, same pair, missing/invalid dates, or range > 366 days.
- `UPSTREAM_ERROR` (502) — provider unreachable and no cache.
- `NOT_FOUND` (404) — no rate found.
