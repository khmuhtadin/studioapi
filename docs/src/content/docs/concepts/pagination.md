---
title: Pagination
description: Page through list endpoints with page and per_page.
---

List endpoints accept `page` and `per_page` query parameters. Defaults and maximums vary per endpoint; `per_page` is clamped to the endpoint maximum.

```text
GET /api/v1/wilayah/provinsi?page=2&per_page=10
```

```json
{
  "data": [ ],
  "meta": {
    "total": 34,
    "page": 2,
    "per_page": 10,
    "total_pages": 4
  }
}
```

## Pagination styles

- Most list endpoints use `page` / `per_page` (defaults 20, max 100 or 200).
- `ojk`, `alkitab/search`, and `halal`/`bpom` use `limit` / `offset` (default 50, max 200).
- `alkitab/search` supports `limit` / `offset` with page derived as `floor(offset / limit) + 1`.
