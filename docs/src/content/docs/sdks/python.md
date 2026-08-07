---
title: Python
description: Call StudioAPI from Python with requests.
---

```python
import os
import requests

KEY = os.environ["STUDIOAPI_KEY"]
BASE = "https://waiting-weekly-boys-masters.trycloudflare.com/api/v1"

def api(path: str, **params):
    res = requests.get(f"{BASE}{path}", headers={"x-api-key": KEY}, params=params, timeout=15)
    body = res.json()
    if not res.ok:
        raise RuntimeError(body["error"]["message"])
    return body["data"], body.get("meta")

data, meta = api("/wilayah/provinsi", per_page=5)
print(data[0]["name"], meta["total"])
```
