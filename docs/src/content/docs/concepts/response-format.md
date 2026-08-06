---
title: Response format
description: The StudioAPI response envelope and error format.
---

Every successful response uses a consistent envelope:

```json
{
  "data": { },
  "meta": { }
}
```

- `data` — the payload (object, array, or scalar).
- `meta` — present for paginated or attributed responses (pagination, source attribution, cache info).

Errors use:

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Holiday not found"
  }
}
```

Some endpoints (validasi, util, hijriah, kurs-bi, halal, bpom) add `meta.disclaimer` or `meta.attribution` alongside `data`.

## Booleans and dates

- SQLite-era `0/1` booleans are normalized to `true/false` in PostgreSQL-backed responses.
- Dates use ISO-8601 (`YYYY-MM-DD` for dates, `YYYY-MM-DDTHH:mm:ss.sssZ` for timestamps).
