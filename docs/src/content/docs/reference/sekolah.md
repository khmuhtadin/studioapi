---
title: Sekolah
description: Indonesian schools directory.
---

Base path: `/api/v1/sekolah`

## Endpoints

| Method | Path | Query | Description |
| --- | --- | --- | --- |
| GET | `/` | `provinsi_id`, `kabupaten_id`, `jenis`, `status`, `page`, `per_page` | List schools (max 200/page). |
| GET | `/search` | `q` (min 3 chars) | Search by name, limit 50. |
| GET | `/:npsn` | — | School by NPSN with province/regency names. |

## Example

```bash
curl "https://use.studioapi.dev/api/v1/sekolah?provinsi_id=32" \
  -H "x-api-key: $STUDIOAPI_KEY"
```

## Errors

- `VALIDATION_ERROR` (400) — search `q` shorter than 3 characters.
- `NOT_FOUND` (404) — NPSN not found.
