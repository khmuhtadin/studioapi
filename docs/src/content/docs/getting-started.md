---
title: Quickstart
description: Create an API key and make your first StudioAPI request in under two minutes.
---

## 1. Create an account

1. Open the [dashboard](https://app.studioapi.dev/register).
2. Register with email + password or continue with Google / GitHub.
3. Verify your email (a link is sent to your inbox).

## 2. Create an API key

After verification, open **API Keys** in the dashboard and create a key. The raw key is displayed once — copy it and store it securely. StudioAPI only stores the SHA-256 hash of your key.

## 3. Make your first request

```bash
curl https://use.studioapi.dev/api/v1/wilayah/provinsi \
  -H "x-api-key: $STUDIOAPI_KEY"
```

```js
// JavaScript
const res = await fetch('https://use.studioapi.dev/api/v1/wilayah/provinsi', {
  headers: { 'x-api-key': process.env.STUDIOAPI_KEY },
});
const body = await res.json();
```

```python
# Python
import requests

res = requests.get(
    "https://use.studioapi.dev/api/v1/wilayah/provinsi",
    headers={"x-api-key": os.environ["STUDIOAPI_KEY"]},
)
data = res.json()
```

## 4. Read the response

```json
{
  "data": [
    {
      "id": "11",
      "code": "11",
      "name": "Aceh",
      "alt_name": "Nanggroe Aceh Darussalam",
      "lat": 4.6951,
      "lng": 96.7494,
      "is_active": 1
    }
  ],
  "meta": {
    "total": 34,
    "page": 1,
    "per_page": 20,
    "total_pages": 2
  }
}
```

That's it. Explore the [API reference](/reference/wilayah) for every endpoint.
