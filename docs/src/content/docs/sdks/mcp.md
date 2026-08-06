---
title: MCP
description: Expose StudioAPI endpoints as MCP tools for AI agents.
---

Every StudioAPI data endpoint maps cleanly to an MCP tool: the endpoint path becomes the tool, query parameters become arguments, and the response envelope becomes the tool result.

## Example mapping

| Endpoint | MCP tool | Arguments |
| --- | --- | --- |
| `GET /wilayah/provinsi` | `wilayah_provinsi` | `page?`, `per_page?` |
| `GET /wilayah/search?q=` | `wilayah_search` | `q`, `page?`, `per_page?` |
| `GET /cuaca?adm4=` | `cuaca` | `adm4?`, `kabupaten_id?` |
| `GET /gempa/terkini` | `gempa_terkini` | — |

The MCP server authenticates with the same `x-api-key`. Tools return the raw `data` payload plus `meta` as structured JSON, so agents can reason about sources, pagination, and freshness without extra glue.

## Status

The MCP surface is part of the roadmap; the REST contract is already agent-friendly (typed responses, stable envelope, `llms.txt`). See [the repository](https://github.com/khmuhtadin/studioapi) for the latest status.
