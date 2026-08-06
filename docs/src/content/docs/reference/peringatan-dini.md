---
title: Peringatan Dini
description: Early weather warnings from BMKG CAP RSS.
---

Base path: `/api/v1/peringatan-dini`

## Endpoints

| Method | Path | Query | Description |
| --- | --- | --- | --- |
| GET | `/` | `provinsi`, `page`, `per_page` | Active warnings, newest first. |

Response fields: `alert_id`, `event`, `province`, `area`, `headline`, `description`, `instruction`, `category`, `urgency`, `severity`, `certainty`, `effective`, `expires`, `published_at`, `link`, `source`.

## Errors

- `UPSTREAM_ERROR` (502) — BMKG unreachable and no cached warnings.
