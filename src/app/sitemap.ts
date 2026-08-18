import type { MetadataRoute } from "next";

import { INVESTIGACIONES_SLUGS, NOTICIAS_SLUGS, PERFILES_SLUGS } from "@/lib/legacy";

const SITE_URL = "https://mundopuerto.ar";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/investigaciones`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/consultivo`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/noticias`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/perfiles`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/tarjeta`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/tarjetaLeonardi`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/tarjetaMoro`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];

  const noticias = NOTICIAS_SLUGS.map<MetadataRoute.Sitemap[number]>((slug) => ({
    url: `${SITE_URL}/noticias/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const perfiles = PERFILES_SLUGS.map<MetadataRoute.Sitemap[number]>((slug) => ({
    url: `${SITE_URL}/perfiles/${slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  const investigaciones = INVESTIGACIONES_SLUGS.map<MetadataRoute.Sitemap[number]>((slug) => ({
    url: `${SITE_URL}/investigaciones/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...investigaciones, ...noticias, ...perfiles];
}
