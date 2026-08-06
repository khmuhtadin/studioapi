# Required DNS / Cloudflare actions

These are the only remaining production blockers. They require access to the
Cloudflare DNS zone for `studioapi.dev` (the wrangler token used in this
environment does not include `Zone.DNS` permission, and no broader token was
available).

## 1. Landing page custom domain (`studioapi.dev`)

The landing page is deployed to the Cloudflare Pages project `studioapi`
(live at `https://studioapi.pages.dev`). The custom domain
`studioapi.dev` is attached to that project but its status is `pending`
because DNS still points elsewhere.

In the Cloudflare DNS zone for `studioapi.dev`:

| Type | Name | Content | Proxy |
| --- | --- | --- | --- |
| CNAME | `studioapi.dev` | `studioapi.pages.dev` | Proxied |
| CNAME | `www.studioapi.dev` | `studioapi.pages.dev` | Proxied |

Add a Bulk Redirect rule (or Pages redirect): `www.studioapi.dev/*` →
`https://studioapi.dev/$1` (301). Pages serves the apex directly after the
CNAME is added and the domain status flips to `active`.

## 2. API hostname (`use.studioapi.dev`)

The API is ready behind Nginx Proxy Manager (proxy host id 24 →
`172.22.0.6:8080`, WebSockets on). DNS is the only missing piece:

| Type | Name | Content | Proxy |
| --- | --- | --- | --- |
| A | `use.studioapi.dev` | `168.110.208.0` | DNS only |

After DNS propagates, request a Let's Encrypt certificate in Nginx Proxy
Manager for `use.studioapi.dev` (or add it via the dashboard) and enable
`Force SSL`. The backend already defaults OAuth callback URIs to
`https://use.studioapi.dev/auth/{google,github}/callback`.

The old `api.studiooapi.dev` hostname does not exist in the codebase or DNS;
no compatibility proxy is needed.

## 3. Documentation hostname (`docs.studioapi.dev`)

Documentation is deployed to the Pages project `studioapi-docs` (live at
`https://studioapi-docs.pages.dev`). Add:

| Type | Name | Content | Proxy |
| --- | --- | --- | --- |
| CNAME | `docs.studioapi.dev` | `studioapi-docs.pages.dev` | Proxied |

Then attach `docs.studioapi.dev` as a custom domain on the
`studioapi-docs` Pages project.

## After DNS is fixed

1. `curl https://studioapi.dev` should return the StudioAPI landing page
   (title `StudioAPI — one unified API for every source`).
2. `curl https://use.studioapi.dev/health` should return
   `{"status":"ok",...}`.
3. `curl https://docs.studioapi.dev/overview/` should return the docs page.
4. `curl -I https://www.studioapi.dev` should 301 to `https://studioapi.dev/`.
