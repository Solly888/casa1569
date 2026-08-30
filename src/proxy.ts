import { NextResponse, type NextRequest } from "next/server";
import { siteConfig } from "@/lib/site-config";

/**
 * casa1569.com.au is the canonical domain — CASA is initially an
 * Australian business. casa1569.com is a secondary domain CASA also
 * controls and keeps permanently (valuable protection if CASA expands
 * internationally later), but it should never serve its own copy of the
 * site: every request to it (and to www on either domain) 308-redirects
 * to the canonical host, preserving the path and query string. When both
 * domains point at this deployment, this proxy performs that redirect;
 * if only the canonical domain is attached, it's a no-op.
 */
const canonicalHostname = new URL(siteConfig.url).hostname;
const redirectHosts = new Set([
  siteConfig.secondaryDomain,
  `www.${siteConfig.secondaryDomain}`,
  `www.${canonicalHostname}`,
]);

export function proxy(request: NextRequest) {
  const host = request.headers.get("host");

  if (host && redirectHosts.has(host)) {
    const url = new URL(request.url);
    url.hostname = canonicalHostname;
    url.port = "";
    url.protocol = "https:";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
