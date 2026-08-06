---
title: Rate limits & quotas
description: Per-plan request limits, monthly quotas, credits, and x402.
---

## Plans

| Plan | Requests/second | Included monthly quota |
| --- | --- | --- |
| Free | 10 | 1,000 |
| Pro | 20 | 50,000 |
| Business | 60 | 250,000 |
| Custom | 100 | Unlimited (per contract) |

## How enforcement works

1. **Rate limit** — per-second window per key. Exceeding returns `429 RATE_LIMIT_EXCEEDED`.
2. **Monthly quota** — successful (2xx) requests count against the key's monthly quota (`quota:<key>:<yyyy-mm>`).
3. **Credits** — direct keys that exhaust included quota debit 1 credit per successful request from `user_credit_balances`.
4. **x402** — when quota and credits are exhausted and x402 is enabled, a `402` offer is issued.

## RapidAPI

The RapidAPI-compatible surface (`/rapidapi/v1`) uses `X-RapidAPI-Proxy-Secret`, `X-RapidAPI-User`, and `X-RapidAPI-Subscription` headers, maps subscriptions to plans, and enforces the same quota rules without credits.

## Usage visibility

- `GET /user/usage` aggregates monthly usage per API product for the authenticated user.
- `GET /billing/credits` returns balance and ledger.
- Admin sees per-user and platform traffic in `/admin/traffic` and `/admin/data-health`.
