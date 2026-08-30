import type { MetadataRoute } from "next";
import { siteConfig, journalEntries } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/house", "/origins", "/1569", "/partners", "/journal"];

  const staticEntries = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const journalRouteEntries = journalEntries.map((entry) => ({
    url: `${siteConfig.url}/journal/${entry.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...journalRouteEntries];
}
