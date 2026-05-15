import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

function absoluteUrl(path: string) {
  const base =
    siteConfig.url?.replace(/\/+$/, "") || "https://suyashnande.com";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly" },
    {
      url: absoluteUrl("/case-studies"),
      lastModified: now,
      changeFrequency: "weekly",
    },
    {
      url: absoluteUrl("/case-studies/uhg-ai-qa-platform"),
      lastModified: now,
      changeFrequency: "monthly",
    },
    { url: absoluteUrl("/experience"), lastModified: now, changeFrequency: "yearly" },
    { url: absoluteUrl("/projects"), lastModified: now, changeFrequency: "monthly" },
    { url: absoluteUrl("/resume"), lastModified: now, changeFrequency: "yearly" },
    { url: absoluteUrl("/writing"), lastModified: now, changeFrequency: "monthly" },
  ];
}
