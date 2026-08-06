---
title: Errors
description: Every StudioAPI error code, status, and troubleshooting note.
---

## Common codes

| Code | Status | Meaning |
| --- | --- | --- |
| `MISSING_API_KEY` | 401 | `x-api-key` header required. |
| `INVALID_API_KEY` | 401 | API key not found or revoked. |
| `REVOKED_API_KEY` | 401 | Key revoked. |
| `RATE_LIMIT_EXCEEDED` | 429 | Requests/second exceeded for the plan. |
| `QUOTA_EXCEEDED` | 402 | Monthly quota exceeded. |
| `INSUFFICIENT_CREDITS` | 402 | Quota exceeded and credit balance empty. |
| `PAYMENT_REQUIRED` | 402 | x402 offer issued (see [x402](/authentication/x402)). |
| `VALIDATION_ERROR` | 400 | Missing or invalid parameter. |
| `INVALID_QUERY` | 400 | Search query too short or malformed. |
| `NOT_FOUND` | 404 | Resource not found. |
| `UPSTREAM_ERROR` | 502 | Upstream data provider failed and no cache exists. |
| `TURNSTILE_REQUIRED` | 400 | Turnstile token required. |
| `TURNSTILE_FAILED` | 403 | Turnstile verification failed. |
| `EMAIL_EXISTS` | 409 | Email already registered. |
| `EMAIL_NOT_VERIFIED` | 403 | Verified email required. |
| `INVALID_CREDENTIALS` | 401 | Bad email or password. |
| `ACCOUNT_SUSPENDED` | 403 | Account suspended. |
| `UNAUTHORIZED` / `INVALID_TOKEN` | 401 | Bad or expired JWT. |
| `FORBIDDEN` | 403 | Admin route for non-admin. |
| `PAYMENT_NOT_CONFIGURED` | 503 | Sumopod not configured. |
| `PAYMENT_PROVIDER_ERROR` | 502 | Sumopod payment link failed. |
| `INVALID_SIGNATURE` | 401 | Webhook signature invalid. |
| `RATE_LIMITED` | 429 | Utility dummy-generator per-minute limit (60/min). |

## Validation details

- `wilayah/search`, `kodepos/search`, `cuaca/search`: `q` minimum 2 characters.
- `sekolah/search`: `q` minimum 3 characters.
- `alkitab/search`: `q` minimum 3 characters.
- `kurs` / `kurs-bi`: ISO 4217 codes; history range max 366 days.
- `hijriah/konversi`: `tanggal` must be `YYYY-MM-DD`; supported year 2026.
- `astronomi`: `lat` ±90, `lon` ±180.

## Upstream errors

Endpoints backed by live providers (cuaca, peringatan-dini, kurs, kurs-bi, halal, bpom) return `UPSTREAM_ERROR` (502) only when no cached data exists. If stale cache is available, the cached response is served instead.
