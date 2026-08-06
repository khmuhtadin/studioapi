---
title: Troubleshooting
description: Common errors and how to fix them.
---

## `401 INVALID_API_KEY`

- Confirm the key is copied exactly (keys are shown once at creation).
- Confirm the key is not revoked.
- Confirm you are sending the `x-api-key` header, not `Authorization`.

## `429 RATE_LIMIT_EXCEEDED`

You exceeded the plan's requests/second. Back off or upgrade:

- Free: 10 req/s
- Pro: 20 req/s
- Business: 60 req/s
- Custom: 100 req/s

## `402 QUOTA_EXCEEDED` / `INSUFFICIENT_CREDITS`

Included monthly quota is exhausted. Options:

- Add credits in the dashboard (`/billing/credits`).
- Upgrade the plan.
- If enabled, pay per request via x402 (see [x402](/authentication/x402)).

## `502 UPSTREAM_ERROR`

The live provider (BMKG, Frankfurter, BI, BPJPH, BPOM) was unreachable and no cache existed. Retry shortly — cached data is served when available.

## `403 EMAIL_NOT_VERIFIED`

Verify your email first: open the link sent at registration, or use `POST /auth/resend-verification`.

## `400 VALIDATION_ERROR`

Check the documented query/body requirements. Common causes:

- Search `q` too short (2 or 3 characters, endpoint-dependent).
- Dates not `YYYY-MM-DD`.
- Currency codes not ISO 4217.
- `lat` outside ±90 or `lon` outside ±180.

## Turnstile errors

- `TURNSTILE_REQUIRED` — a token must be included on register/login.
- `TURNSTILE_FAILED` — token invalid/expired; refresh the widget and retry.

## Webhook issues

Sumopod webhooks return `401 INVALID_SIGNATURE` when the token or Svix signature is wrong. Verify `SUMOPOD_WEBHOOK_TOKEN` / `SUMOPOD_WEBHOOK_SECRET` match the provider configuration.

## Still stuck?

- Check [status](https://status.studioapi.dev).
- Open a GitHub issue on [studioapi](https://github.com/khmuhtadin/studioapi).
- Email [hello@studioapi.dev](mailto:hello@studioapi.dev).
