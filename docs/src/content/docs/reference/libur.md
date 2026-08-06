---
title: Libur
description: Indonesian public holidays.
---

Base path: `/api/v1/libur`

## Endpoints

| Method | Path | Query | Description |
| --- | --- | --- | --- |
| GET | `/` | `tahun`, `bulan` | List holidays ordered by date. |
| GET | `/upcoming` | — | Next 10 holidays from today. |
| GET | `/:id` | — | Holiday by id. |

## Example

```bash
curl "https://use.studioapi.dev/api/v1/libur?tahun=2026&bulan=01" \
  -H "x-api-key: $STUDIOAPI_KEY"
```

Response items: `id`, `date`, `name`, `type` (`nasional` / `cuti-bersama`), `is_joint_leave`, `description`, `source`, `year`, `is_active`.

## Errors

- `NOT_FOUND` (404) — unknown holiday id.
