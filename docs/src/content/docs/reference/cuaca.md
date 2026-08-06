---
title: Cuaca
description: BMKG weather forecasts cached on demand.
---

Base path: `/api/v1/cuaca`

## Endpoints

| Method | Path | Query | Description |
| --- | --- | --- | --- |
| GET | `/` | `adm4` or `kabupaten_id` (required) | Forecast for a village (adm4) or representative village of a regency. |
| GET | `/search` | `q` (min 2 chars), `page`, `per_page` | Search wilayah for weather locations. |

## Example

```bash
curl "https://use.studioapi.dev/api/v1/cuaca?adm4=31.74.03.1001" \
  -H "x-api-key: $STUDIOAPI_KEY"
```

Responses are normalized: `provinsi`, `kotkab`, `kecamatan`, `desa`, `datetime`, `weather`, `weather_code`, `temperature_c`, `humidity_percent`, `precipitation_mm`, `wind_speed`, `visibility_m`, `source` (`BMKG`).

## Errors

- `VALIDATION_ERROR` (400) — neither `adm4` nor `kabupaten_id`.
- `NOT_FOUND` (404) — no representative village.
- `UPSTREAM_ERROR` (502) — BMKG unreachable and no cache.
