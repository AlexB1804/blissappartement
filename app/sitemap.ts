import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://blissappartement.fr",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://blissappartement.fr/port-grimaud",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://blissappartement.fr/risoul",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://blissappartement.fr/aix-en-provence",
      lastModified: new Date(),
      priority: 0.9,
    },
  ];
}