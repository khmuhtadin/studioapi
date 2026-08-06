---
title: OAuth (Google / GitHub)
description: Sign in with Google or GitHub through the dashboard.
---

StudioAPI supports Google and GitHub OAuth for account creation and sign-in.

## Flow

1. Dashboard links to `https://use.studioapi.dev/auth/google` or `/auth/github`.
2. The provider authorizes and redirects back to `https://use.studioapi.dev/auth/{provider}/callback`.
3. The backend validates state, fetches the verified profile, upserts the user, and redirects to the dashboard with a JWT in the URL fragment:

```text
https://app.studioapi.dev/oauth/callback#token=<jwt>
```

## Requirements

- Google: the account must return a verified email.
- GitHub: the user must have a primary verified email and grant `read:user user:email` scope.
- Callback URIs are configured with `GOOGLE_REDIRECT_URI` and `GITHUB_REDIRECT_URI`.

## Redirect URIs (current)

- Google: `https://use.studioapi.dev/auth/google/callback`
- GitHub: `https://use.studioapi.dev/auth/github/callback`

## Security

- OAuth state is a signed cookie (`HttpOnly`, `Secure`, `SameSite=Lax`, 10-minute TTL).
- New OAuth users are created with `email_verified = true` and the OAuth subject stored as the password hash placeholder.
- Suspended accounts are rejected at login.
