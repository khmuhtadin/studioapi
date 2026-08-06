---
title: Turnstile
description: Cloudflare Turnstile bot protection on register and login.
---

When enabled, registration and login require a Cloudflare Turnstile token.

## Flow

1. The dashboard renders a Turnstile widget with action `turnstile-spin-v2` using the site key from `GET /auth/config`.
2. The client sends the token as `turnstileToken` in the register/login body.
3. The backend calls the canonical siteverify endpoint:

```text
POST https://challenges.cloudflare.com/turnstile/v0/siteverify
```

with `secret`, `response`, and `remoteip`, and only proceeds when `success === true` and the action matches.

## Config endpoint

```bash
curl https://use.studioapi.dev/auth/config
```

```json
{
  "data": {
    "turnstile_site_key": "0x...",
    "turnstile_required": true,
    "google_oauth_enabled": true,
    "github_oauth_enabled": true
  }
}
```

## Errors

| Code | Status | Meaning |
| --- | --- | --- |
| `TURNSTILE_REQUIRED` | 400 | Token missing when required. |
| `TURNSTILE_FAILED` | 403 | Token invalid or action mismatch. |
