---
title: Plates
description: Indonesian vehicle license plate codes.
---

Base path: `/api/v1/plates`

## Endpoints

| Method | Path | Description |
| --- | --- | --- |
| GET | `/` | All active plate codes. |
| GET | `/:code` | Plate by code (case-insensitive, e.g. `B`, `DK`). |

## Errors

- `NOT_FOUND` (404) — unknown plate code.
