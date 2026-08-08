# Gated API Research — 5 most useful integrations for StudioAPI

Research date: 2026-08-08. Goal: find gated, valuable APIs that are easy to
integrate and can be resold or embedded as StudioAPI products.

Ranking criteria: real value to B2B customers, ease of integration, clear
access path (gated but reachable), and a viable resell/commission model.

## 1. RajaOngkir (courier / shipping rates) — easiest & most resell-ready

- **What**: Indonesian multi-courier rate calculator + shipment + tracking
  (JNE, J&T, SiCepat, Pos, TIKI, etc.).
- **Access**: gated — create an account at rajaongkir.com; REST API key-based.
- **Integration**: one `POST /cost` with origin/destination/weight returns all
  courier rates. Trivial to wrap behind StudioAPI's `/kurir` endpoint.
- **Resell model**: explicitly supports margin markup — "bebas atur margin
  ongkir" (set your own shipping margin). StudioAPI can charge per lookup or
  per shipment and keep the difference.
- **Why it wins**: instant demand (every Indonesian e-commerce/OMS needs
  shipping rates), simple REST, and the provider itself markets resellers.

## 2. WhatsApp Business Cloud API (messaging / OTP / notifications)

- **What**: official Meta API for WhatsApp Business messaging — utility,
  authentication (OTP), marketing templates, catalogs.
- **Access**: self-service Meta developer account; app + WhatsApp Business
  Account approval. Gated by Meta review, but no enterprise contract needed.
- **Integration**: REST + webhooks, long-lived token, template approval.
  StudioAPI can expose it as `/whatsapp` (send template, OTP, status).
- **Resell model**: Meta charges per conversation (template/utility pricing);
  providers add platform fees. Easy to bill per message.
- **Why it wins**: huge B2B demand (OTP + customer care), official API means
  no ban risk, and per-message pricing maps cleanly to StudioAPI metering.

## 3. Biteship (logistics aggregator / fulfillment)

- **What**: courier aggregation (rates, booking, labels, live tracking) +
  warehouse/fulfillment for e-commerce.
- **Access**: gated via account; API key-based REST; "Mulai Gratis" tier.
- **Integration**: modern REST with clear docs; `GET /v1/rates`,
  `POST /v1/orders`, tracking endpoints. Wraps cleanly behind StudioAPI.
- **Resell model**: aggregator pricing with margin on shipping; paid tiers for
  volume. StudioAPI can resell rates/booking and add platform fee.
- **Why it wins**: one integration covers many couriers (vs RajaOngkir's
  coverage), plus labels and tracking — more product surface per integration.

## 4. Midtrans (payments / checkout)

- **What**: Indonesian payment gateway — Snap Checkout, Core API, VA, QRIS,
  e-wallets, retail outlets, pay-later.
- **Access**: gated — business registration + sandbox keys; docs are public
  (`docs.midtrans.com`) and comprehensive.
- **Integration**: Snap is a hosted checkout (quick), Core API is full REST;
  webhooks for status. StudioAPI can expose `/payment` with Midtrans under
  the hood.
- **Resell model**: Midtrans charges per-transaction fees; resellers/platforms
  add their own pricing. StudioAPI can charge per successful payment.
- **Why it wins**: payments are the highest-value B2B need after data;
  onboarding is fast (no enterprise negotiation), and docs are excellent.

## 5. Shopee Open Platform (marketplace seller API)

- **What**: seller tools — product upload, order management, logistics,
  shop/chat, promotions across 8+ markets.
- **Access**: gated — Open Platform account + app approval + seller
  credentials. Heaviest onboarding of the five.
- **Integration**: OpenAPI with auth (partner/shop keys), webhooks; docs at
  `open.shopee.com`.
- **Resell model**: service providers build multi-seller tools and charge
  SaaS fees; Shopee explicitly supports a "Service Market" for third parties.
- **Why it wins**: the biggest marketplace in SEA — seller tooling is a
  proven B2B SaaS category (product listing, order sync, analytics).

## Why OTA/travel was deprioritized (for now)

- Amadeus self-service portal was decommissioned (2026-07-17) — now only
  Enterprise API with sales contact.
- Skyscanner/Booking/Expedia/Agoda require partner agreements (captchas,
  enterprise sales, NDA) — high friction, not "easy to integrate".
- RapidAPI hosts third-party travel wrappers, but they are unofficial and
  legal/ToS risky for reselling.

## Suggested next steps

1. Start with **RajaOngkir** — smallest integration, clearest resell margin.
2. Add **WhatsApp Cloud** for OTP/messaging (self-service, per-message).
3. Add **Biteship** for broader logistics surface.
4. Add **Midtrans** for payments.
5. Add **Shopee Open** when ready for marketplace seller tools.

Each maps to a new StudioAPI product line (e.g. `/kurir`, `/whatsapp`,
`/payment`, `/marketplace`) reusing the existing key/auth/rate-limit/usage
infrastructure.
