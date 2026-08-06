---
title: Kurs BI
description: Bank Indonesia exchange rates.
---

Base path: `/api/v1/kurs-bi`

## Endpoints

| Method | Path | Query | Description |
| --- | --- | --- | --- |
| GET | `/latest` | `currencies` (comma-separated, default `USD,EUR,SGD`) | Latest transaksi rates. |
| GET | `/history` | `currency` (default USD), `start`, `end` | Rate history, max 366 days. |

Responses include `meta.attribution` (`Sumber: Bank Indonesia`), `source`, and `rate_type: "transaksi"`.

## Errors

- `VALIDATION_ERROR` (400) — invalid currency/date or range > 366 days.
- `UPSTREAM_ERROR` (502) — provider unreachable and no cache.
- `NOT_FOUND` (404) — no data.
