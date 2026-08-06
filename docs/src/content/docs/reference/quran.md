---
title: Quran
description: Quran surahs metadata and audio links.
---

Base path: `/api/v1/quran`

## Endpoints

| Method | Path | Description |
| --- | --- | --- |
| GET | `/list-surah` | All 114 surahs ordered by number. |
| GET | `/surah/:id` | Surah by number (1–114). |

Response fields: `id`, `name` (Arabic), `name_latin`, `name_arabic`, `name_translation`, `number_of_ayahs`, `revelation_place`, `revelation_order`, `audio_url`.

## Errors

- `VALIDATION_ERROR` (400) — surah number outside 1–114.
- `NOT_FOUND` (404) — surah missing.
