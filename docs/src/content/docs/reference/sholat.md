---
title: Sholat
description: Prayer times for Indonesian cities.
---

Base path: `/api/v1/sholat`

## Endpoints

| Method | Path | Query | Description |
| --- | --- | --- | --- |
| GET | `/list-kota` | — | Distinct regencies with prayer data. |
| GET | `/` | `kabupaten_id` (required), `tanggal` (default today) | Daily prayer times. |
| GET | `/monthly` | `kabupaten_id`, `tahun`, `bulan` (required) | Monthly prayer times. |

## Example

```bash
curl "https://use.studioapi.dev/api/v1/sholat?kabupaten_id=6171&tanggal=2026-07-01" \
  -H "x-api-key: $STUDIOAPI_KEY"
```

Response fields: `regency_id`, `date`, `imsyak`, `shubuh`, `terbit`, `dhuha`, `dzuhur`, `ashr`, `maghrib`, `isya`, `source`.

## Errors

- `VALIDATION_ERROR` (400) — missing `kabupaten_id` or monthly params.
- `NOT_FOUND` (404) — no data for the requested date/region.
