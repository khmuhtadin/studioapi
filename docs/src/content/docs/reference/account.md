---
title: Account & billing
description: Session-authenticated account, keys, usage, and billing endpoints.
---

All endpoints require `Authorization: Bearer <jwt>`.

## Auth

| Method | Path | Description |
| --- | --- | --- |
| POST | `/auth/register` | Register (Turnstile + email verification). |
| POST | `/auth/login` | Login (Turnstile). |
| GET | `/auth/me` | Current user. |
| GET | `/auth/verify-email` | Verify email (redirects to dashboard). |
| POST | `/auth/resend-verification` | Resend verification (1/min). |
| GET | `/auth/config` | Public feature config. |

## User

| Method | Path | Description |
| --- | --- | --- |
| GET | `/user/keys` | List API keys. |
| POST | `/user/keys` | Create key (verified email required). |
| DELETE | `/user/keys/:id` | Revoke key. |
| GET | `/user/usage` | Aggregated monthly usage. |

## Billing

| Method | Path | Description |
| --- | --- | --- |
| GET | `/billing/plans` | Public plan catalog. |
| POST | `/billing/subscribe` | Create Sumopod subscription invoice. |
| POST | `/billing/topup` | Create pay-as-you-go credit invoice. |
| POST | `/billing/webhook` | Sumopod webhook (signature-verified). |
| GET | `/billing/status` | Active subscription + credit balance. |
| GET | `/billing/credits` | Credit balance and ledger. |

## Example

```bash
curl https://waiting-weekly-boys-masters.trycloudflare.com/auth/me \
  -H "Authorization: Bearer $TOKEN"
```

```json
{ "data": { "id": "user_...", "email": "you@example.com", "name": "You", "plan": "free", "status": "active", "email_verified": true } }
```

## Errors

- `EMAIL_NOT_VERIFIED` (403) — key creation before verification.
- `NO_SUBSCRIPTION` (404) — billing/status without active subscription.
- `PAYMENT_NOT_CONFIGURED` (503) — Sumopod not configured.
- `INVALID_SIGNATURE` (401) — webhook verification failed.
