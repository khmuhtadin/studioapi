---
title: OJK
description: OJK investment products, apps, and illegal listings.
---

Base path: `/api/v1/ojk`

## Endpoints

| Method | Path | Query | Description |
| --- | --- | --- | --- |
| GET | `/products` | `name`, `limit` (default 50, max 200), `offset` | Legal mutual funds. |
| GET | `/products/:id` | — | Product by id. |
| GET | `/apps` | `name`, `limit`, `offset` | Legal investment apps. |
| GET | `/apps/:id` | — | App by id. |
| GET | `/illegals` | `name`, `limit`, `offset` | Illegal listings (JSON fields parsed). |
| GET | `/illegals/:id` | — | Illegal listing by id. |

## Errors

- `VALIDATION_ERROR` (400) — id not a positive integer.
- `NOT_FOUND` (404) — resource not found.
