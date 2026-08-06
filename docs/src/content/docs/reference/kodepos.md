---
title: Kodepos
description: Indonesian postal code lookup joined with the wilayah hierarchy.
---

Base path: `/api/v1/kodepos`

## Endpoints

| Method | Path | Query | Description |
| --- | --- | --- | --- |
| GET | `/` | `provinsi_id`, `kabupaten_id`, `kecamatan_id`, `page`, `per_page` | Paginated postal codes. |
| GET | `/search` | `q` (min 2 chars), `page`, `per_page` | Search by village name or postal code. |
| GET | `/:id` | — | Entry by synthetic id `kp_<code>` (code without dots). |

Response includes `village_code`, `village_name`, `district_code`, `district_name`, `regency_code`, `regency_name`, `province_code`, `province_name`, `postal_code`, `is_active`.

## Errors

- `INVALID_QUERY` (400) — search `q` shorter than 2 characters.
- `NOT_FOUND` (404) — unknown id.
