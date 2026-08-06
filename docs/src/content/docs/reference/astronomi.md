---
title: Astronomi
description: Computed solar, twilight, moon, and eclipse data (NOAA/USNO formulas).
---

Base path: `/api/v1/astronomi`

## Endpoints

| Method | Path | Query | Description |
| --- | --- | --- | --- |
| GET | `/sun` | `lat`, `lon` (required), `tanggal`, `tz` | Sunrise/sunset/solar noon. |
| GET | `/twilight` | `lat`, `lon` (required), `tanggal`, `tz` | Civil/nautical/astronomical twilight. |
| GET | `/moon` | `tanggal` | Moon phase. |
| GET | `/moon/next` | `tanggal`, `count` (default 4, max 12) | Next major moon phases. |
| GET | `/gerhana` | `tanggal`, `days` (default 365, max 1825) | Approximate upcoming eclipses. |

All results include `meta.source` (`Computed (NOAA/USNO)`); sun/twilight include a ±2-minute disclaimer.

## Errors

- `VALIDATION_ERROR` (400) — missing `lat`/`lon`, out-of-range coordinates, or invalid date.
