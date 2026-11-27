import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";

const BASE_URL = "https://moderndigitallabs.co.zw";

// lastModified is set by hand to the date each page's content last really changed.
// (Using `new Date()` would tell Google every page changed on every deploy, so it learns to ignore the dates.)
// Update the date when you edit a page.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE_URL}/`, lastModified: "2026-11-27", changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/services`, lastModified: "2026-11-27", changeFrequency: "monthly", priority: 0.9 },
    ...SERVICES.map((s) => ({
      url: `${BASE_URL}/services/${s.slug}`,
      lastModified: s.updated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: `${BASE_URL}/zimdrive`, lastModified: "2026-11-27", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/zimdrive/privacy`, lastModified: "2026-06-03", changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/zimdrive/terms`, lastModified: "2026-06-03", changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/zimdrive/delete-account`, lastModified: "2026-06-03", changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/privacy`, lastModified: "2026-05-29", changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: "2026-05-29", changeFrequency: "yearly", priority: 0.3 },
  ];
}
