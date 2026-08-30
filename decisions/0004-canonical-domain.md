# ADR 0004 — Canonical Domain

**Status:** Accepted

## Decision

`casa1569.com.au` is the canonical domain for the CASA 1569 website.
`casa1569.com` is kept permanently — not released — but never serves an
independent copy of the site: every request to it (including its `www`
subdomain, and `www.casa1569.com.au`) redirects permanently (308) to the
bare canonical domain, preserving path and query string.

Both domains are registered as of this decision.

## Why

- CASA 1569 is initially an Australian business; `.com.au` signals that
  correctly to customers, suppliers and search engines.
- `casa1569.com` is retained as protection against squatting and as a
  ready asset if CASA expands beyond Australia later — but running two
  live copies of the site would split SEO authority and create
  duplicate-content risk, hence the redirect rather than a second
  deployment.

## Implementation

`website/src/proxy.ts` performs the redirect at the application's
network boundary, so both domains can be attached to the same
deployment without any DNS-level redirect configuration. See
`website/README.md` for the exact hostnames covered.

## Consequence

All canonical metadata, the sitemap, robots.txt and Open Graph tags use
`https://casa1569.com.au` (`website/src/lib/site-config.ts`,
`siteConfig.url`). If this decision changes, update that single source
of truth plus this ADR — do not hardcode the domain anywhere else.
