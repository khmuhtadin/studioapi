---
title: JavaScript / TypeScript
description: Call StudioAPI from Node, the browser, or TypeScript.
---

There is no official SDK package yet — the API is a plain HTTPS contract, so the recommended pattern is a thin typed client.

## Minimal client

```ts
const BASE = 'https://use.studioapi.dev/api/v1';

export async function api<T>(path: string, opts: { key: string; init?: RequestInit }) {
  const res = await fetch(`${BASE}${path}`, {
    ...opts.init,
    headers: { 'x-api-key': opts.key, ...(opts.init?.headers ?? {}) },
  });
  const body = await res.json();
  if (!res.ok) throw new Error(body?.error?.message ?? `HTTP ${res.status}`);
  return body as { data: T; meta?: Record<string, unknown> };
}

const provinsi = await api('/wilayah/provinsi', { key: process.env.STUDIOAPI_KEY! });
```

## Browser note

Never ship API keys to the browser. Proxy through your own backend or use session-authenticated endpoints (`/auth/*`, `/user/*`) with the Bearer token from the dashboard flow.
