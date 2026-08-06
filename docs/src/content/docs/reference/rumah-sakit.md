---
title: Rumah Sakit
description: Indonesian hospitals directory.
---

Base path: `/api/v1/rumah-sakit`

## Endpoints

| Method | Path | Query | Description |
| --- | --- | --- | --- |
| GET | `/` | `provinsi_id`, `kabupaten_id`, `jenis`, `kelas`, `page`, `per_page` | List hospitals (max 200/page). |
| GET | `/search` | `q` (min 2 chars) | Search by name, limit 50. |
| GET | `/:id` | — | Hospital by id with province/regency names. |

## Errors

- `VALIDATION_ERROR` (400) — search `q` shorter than 2 characters.
- `NOT_FOUND` (404) — id not found.
