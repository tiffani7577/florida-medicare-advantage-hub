import { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { floridaCities as cities } from "@/lib/cities";
import { medigapCities, medigapComparisons } from "@/lib/medigap";

const BASE = "https://www.floridamedicareadvantagehub.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE}/medicare-advantage`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE}/medicare-supplement`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE}/dual-eligible`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE}/florida`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.5 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.6 },
  ];

  const articlePages = articles.map((a) => ({
    url: `${BASE}/blog/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const cityPages = cities.map((c) => ({
    url: `${BASE}/florida/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const medigapPagesList = [...medigapCities, ...medigapComparisons].map((p) => ({
    url: `${BASE}/medigap/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...articlePages, ...cityPages, ...medigapPagesList];
}
