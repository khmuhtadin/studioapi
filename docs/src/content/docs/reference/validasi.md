---
title: Validasi
description: Structural format validation for NIK, NPWP, phone, bank accounts.
---

Base path: `/api/v1/validasi`

## Endpoints

| Method | Path | Body / Query | Description |
| --- | --- | --- | --- |
| GET | `/bank` | — | List supported banks. |
| GET | `/bank/:code` | — | Bank by code or alias. |
| POST | `/nik` | `{"nik":"..."}` | Validate NIK format. |
| POST | `/npwp` | `{"npwp":"..."}` | Validate NPWP (15/16 digits). |
| POST | `/telepon` | `{"telepon":"..."}` or `{"phone":"..."}` | Normalize Indonesian phone. |
| POST | `/rekening` | `{"bank_code":"...","account_number":"..."}` | Validate account number length/format. |

All responses include `meta.disclaimer`: structural validation only, not an official database check.
