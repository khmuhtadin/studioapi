---
title: Util
description: Developer utilities — rupiah, dummy data, QRIS.
---

Base path: `/api/v1/util`

## Endpoints

| Method | Path | Body | Description |
| --- | --- | --- | --- |
| POST | `/rupiah/format` | `{"amount":1500000}` | Format as rupiah. |
| POST | `/rupiah/parse` | `{"text":"Rp 1.500.000"}` | Parse rupiah string. |
| POST | `/rupiah/terbilang` | `{"amount":1100}` | Convert to Indonesian words. |
| POST | `/dummy/nik` | `{province_code?, gender?, birth_date?}` | Generate synthetic NIK (rate-limited 60/min). |
| POST | `/dummy/npwp` | `{format?: "legacy_15"\|"nik_16"}` | Generate synthetic NPWP. |
| POST | `/dummy/telepon` | `{operator?}` | Generate synthetic phone. |
| POST | `/qris/parse` | `{"payload":"000201..."}` | Parse QRIS payload (CRC-validated). |
| POST | `/qris/to-dynamic` | `{"payload":"...","amount":50000,"fee":0}` | Convert to dynamic QRIS. |

Dummy generators return `meta.disclaimer` (synthetic data for testing).

## Errors

- `VALIDATION_ERROR` (400) — invalid amount/format/payload.
- `RATE_LIMITED` (429) — dummy generator exceeded 60/min.
