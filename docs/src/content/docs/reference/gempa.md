---
title: Gempa
description: Earthquake information from BMKG.
---

Base path: `/api/v1/gempa`

## Endpoints

| Method | Path | Query | Description |
| --- | --- | --- | --- |
| GET | `/terkini` | — | Latest 15 earthquakes. |
| GET | `/dirasakan` | — | Latest 15 felt earthquakes. |
| GET | `/history` | `start`, `end` (required, YYYY-MM-DD) | Up to 100 events in range. |

## Example

```bash
curl "https://use.studioapi.dev/api/v1/gempa/terkini" \
  -H "x-api-key: $STUDIOAPI_KEY"
```

Response fields: `id`, `datetime`, `magnitude`, `depth_km`, `lat`, `lng`, `region`, `potential`, `is_felt`, `felt_areas`, `source`.

## Errors

- `VALIDATION_ERROR` (400) — history missing `start` or `end`.
