---
title: Alkitab
description: Indonesian Bible (66 books, ~31k verses).
---

Base path: `/api/v1/alkitab`

## Endpoints

| Method | Path | Query | Description |
| --- | --- | --- | --- |
| GET | `/books` | — | All books. |
| GET | `/books/:testament` | — | Books filtered by `PL` or `PB`. |
| GET | `/passage/:bookAbbr/:chapter` | — | Verses in a chapter. |
| GET | `/verse/:bookAbbr/:chapter/:verse` | — | Single verse. |
| GET | `/search` | `q` (min 3), `limit` (default 20, max 100), `offset` | Full-text search. |

Book lookup is case-insensitive by abbreviation or name (e.g. `kej` or `kejadian`).

## Errors

- `VALIDATION_ERROR` (400) — invalid testament, chapter/verse, or short query.
- `NOT_FOUND` (404) — book, chapter, verse, or no search results.
