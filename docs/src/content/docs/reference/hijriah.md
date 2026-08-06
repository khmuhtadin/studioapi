---
title: Hijriah
description: Indonesian Hijri calendar (Kemenag) for 2026.
---

Base path: `/api/v1/hijriah`

## Endpoints

| Method | Path | Query | Description |
| --- | --- | --- | --- |
| GET | `/konversi` | `tanggal` (YYYY-MM-DD, required) | Convert Gregorian to Hijri. |
| GET | `/kalender` | `tahun` (supported: 2026) | Full year calendar. |

Responses include `meta.attribution`, `source` (`Kementerian Agama RI`), and a MABIMS disclaimer.

## Errors

- `VALIDATION_ERROR` (400) — invalid date or unsupported year.
- `NOT_FOUND` (404) — date/year not in calendar.
