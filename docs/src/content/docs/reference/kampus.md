---
title: Kampus
description: Indonesian universities directory.
---

Base path: `/api/v1/kampus`

## Endpoints

| Method | Path | Query | Description |
| --- | --- | --- | --- |
| GET | `/` | `provinsi_id`, `kabupaten_id`, `jenis`, `kelompok`, `page`, `per_page` | List universities (max 200/page). |
| GET | `/search` | `q` (min 2 chars) | Search by name or short name, limit 50. |
| GET | `/:id` | — | University by id with province/regency names. |

## Errors

- `VALIDATION_ERROR` (400) — search `q` shorter than 2 characters.
- `NOT_FOUND` (404) — id not found.
