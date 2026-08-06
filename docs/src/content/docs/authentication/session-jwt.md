---
title: Session JWT
description: Authenticate account, user, and billing endpoints with a Bearer token.
---

Account endpoints (`/auth/me`, `/user/*`, `/billing/*`, `/admin/*`) use an HMAC-SHA256 JWT sent as `Authorization: Bearer <token>`.

## Register

```bash
curl -X POST https://use.studioapi.dev/auth/register \
  -H 'Content-Type: application/json' \
  -d '{"email":"you@example.com","password":"a-secure-password","name":"You"}'
```

```json
{
  "data": {
    "id": "user_...",
    "email": "you@example.com",
    "email_verified": false
  },
  "email_verification_sent": true,
  "token": "eyJ..."
}
```

## Login

```bash
curl -X POST https://use.studioapi.dev/auth/login \
  -H 'Content-Type: application/json' \
  -d '{"email":"you@example.com","password":"a-secure-password"}'
```

## Use the token

```bash
curl https://use.studioapi.dev/auth/me \
  -H "Authorization: Bearer $TOKEN"
```

## Token details

- Algorithm: `HS256`
- TTL: 7 days
- Claims: `id`, `email`, `is_admin`, `iat`, `exp`
- Email verification tokens use a purpose-derived secret and cannot be replayed as session tokens.

## Error codes

| Code | Status | Meaning |
| --- | --- | --- |
| `MISSING_TOKEN` / `UNAUTHORIZED` | 401 | No or malformed Bearer token. |
| `INVALID_TOKEN` | 401 | Token signature invalid or expired. |
| `EMAIL_NOT_VERIFIED` | 403 | Verified email required before creating keys. |
| `FORBIDDEN` | 403 | Admin route accessed by a non-admin. |
