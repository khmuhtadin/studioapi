---
title: Wilayah
description: Indonesian administrative regions — provinces, regencies, districts, villages.
---

Base path: `/api/v1/wilayah`

## Endpoints

| Method | Path | Query | Description |
| --- | --- | --- | --- |
| GET | `/provinsi` | `page`, `per_page` | List provinces (default 20, max 100). |
| GET | `/provinsi/:id` | — | Province by id. |
| GET | `/kabupaten` | `provinsi_id`, `page`, `per_page` | Regencies, optionally filtered. |
| GET | `/kabupaten/:id` | — | Regency by id. |
| GET | `/kecamatan` | `kabupaten_id`, `page`, `per_page` | Districts. |
| GET | `/kecamatan/:id` | — | District by id. |
| GET | `/kelurahan` | `kecamatan_id`, `page`, `per_page` | Villages. |
| GET | `/kelurahan/:id` | — | Village by id. |
| GET | `/search` | `q` (min 2 chars), `page`, `per_page` | Search all levels. |

## Example

```bash
curl "https://use.studioapi.dev/api/v1/wilayah/provinsi?per_page=2" \
  -H "x-api-key: $STUDIOAPI_KEY"
```

```json
{
  "data": [
    { "id": "11", "code": "11", "name": "Aceh", "alt_name": "Nanggroe Aceh Darussalam", "lat": 4.6951, "lng": 96.7494, "is_active": 1 }
  ],
  "meta": { "total": 34, "page": 1, "per_page": 2, "total_pages": 17 }
}
```

Search returns `id`, `name`, `alt_name`, and `level` (`provinsi` / `kabupaten` / `kecamatan` / `kelurahan`).

## Errors

- `INVALID_QUERY` (400) — search `q` shorter than 2 characters.
- `NOT_FOUND` (404) — unknown id or endpoint.
