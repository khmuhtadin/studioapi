---
title: UMP
description: Indonesian minimum provincial wages (1997–2025).
---

Base path: `/api/v1/ump`

## Endpoints

| Method | Path | Query | Description |
| --- | --- | --- | --- |
| GET | `/` | `year`, `province_name`, `min_salary`, `max_salary`, `page`, `per_page` | Paginated wages, latest year first. |
| GET | `/:province_code` | `page`, `per_page` | All years for a province. |
| GET | `/:province_code/:year` | — | Single record. |

## Errors

- `VALIDATION_ERROR` (400) — year not numeric.
- `NOT_FOUND` (404) — no data for province/year.
