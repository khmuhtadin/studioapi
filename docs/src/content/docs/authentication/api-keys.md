---
title: API keys
description: Authenticate public data endpoints with an x-api-key header.
---

Every data endpoint under `/api/v1` and `/rapidapi/v1` requires an API key sent as the `x-api-key` header.

## Creating a key

Keys are created in the dashboard (**API Keys** → create). A verified email is required. The raw key is returned once and never shown again.

```http
x-api-key: aip_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## Using a key

```bash
curl https://use.studioapi.dev/api/v1/libur \
  -H "x-api-key: $STUDIOAPI_KEY"
```

## Key lifecycle

- **Revoke** from the dashboard — revoked keys stop working immediately.
- **Scoping** — keys belong to one user; admin can set plan and rate limits per key.
- **Hashing** — StudioAPI stores only `sha256(key)`; the raw key is never retrievable after creation.

## Errors

| Code | Status | Meaning |
| --- | --- | --- |
| `MISSING_API_KEY` | 401 | No `x-api-key` header. |
| `INVALID_API_KEY` | 401 | Key not found or revoked. |
| `REVOKED_API_KEY` | 401 | Key exists but is revoked. |
| `RATE_LIMIT_EXCEEDED` | 429 | Exceeded requests/second for the plan. |
| `QUOTA_EXCEEDED` | 402 | Monthly included quota exhausted and no credits/x402 path. |
| `INSUFFICIENT_CREDITS` | 402 | Quota exhausted and credit balance is empty. |
| `PAYMENT_REQUIRED` | 402 | x402 offer issued; see [x402](/authentication/x402). |
