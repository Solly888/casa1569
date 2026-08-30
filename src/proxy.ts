import { NextResponse, type NextRequest } from "next/server";
import { siteConfig } from "@/lib/site-config";

/**
 * casa1569.com.au is the canonical domain. casa1569.com is a secondary
 * domain CASA also controls and should redirect here permanently, rather
 * than serving a duplicate copy of the site. When both domains point at
 * this deployment, this proxy performs that redirect; if only the
 * canonical domain is attached, it's a no-op.
 */
const canonicalHostname = new URL(siteConfig.url).hostname;

export function proxy(request: NextRequest) {
  const host = request.headers.get("host");

  if (host && (host === siteConfig.secondaryDomain || host === `www.${siteConfig.secondaryDomain}`)) {
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
