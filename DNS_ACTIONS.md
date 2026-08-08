# DNS records to add in Cloudflare

Zone `studioapi.dev` is active in Cloudflare and all server-side wiring is
ready. The automation token used in this environment cannot create DNS
records (`Zone.DNS` permission missing, API returns code 10000). Add these
records in Cloudflare Dashboard → `studioapi.dev` → DNS → Records:

| Type | Name | Content | Proxy | Purpose |
| --- | --- | --- | --- | --- |
| CNAME | `studioapi.dev` | `studioapi.pages.dev` | Proxied | Landing page |
| CNAME | `www.studioapi.dev` | `studioapi.pages.dev` | Proxied | 301 → apex via `_redirects` |
| CNAME | `docs.studioapi.dev` | `studioapi-docs.pages.dev` | Proxied | Documentation |
| A | `use.studioapi.dev` | `168.110.208.0` | DNS only | API hostname |

For `studioapi.dev` and `www`, if an existing A/AAAA record points at
Cloudflare proxy IPs, replace it with the CNAME above (Cloudflare performs
CNAME flattening for the apex).

## After DNS propagates

1. Landing (`studioapi.pages.dev`) and docs (`studioapi-docs.pages.dev`)
   custom domains flip from `pending` to `active` automatically.
2. `use.studioapi.dev` resolves to this server. Then request a Let's Encrypt
   certificate for `use.studioapi.dev` in Nginx Proxy Manager (proxy host
   id 24 already forwards to the API) and enable Force SSL.
3. Update Google/GitHub OAuth Apps with callback
   `https://use.studioapi.dev/auth/{google,github}/callback` if API traffic
   should use the canonical `use` hostname (dashboard currently runs
   same-origin on `https://app.studioapi.dev`, which is already live).

## Verification

```sh
curl -I https://www.studioapi.dev/          # 301 → https://studioapi.dev/
curl https://studioapi.dev/                  # landing page
curl https://docs.studioapi.dev/overview/    # docs
curl https://use.studioapi.dev/health        # {"status":"ok",...}
curl https://app.studioapi.dev/health        # already live
```
