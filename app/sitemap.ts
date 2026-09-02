import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.blissappartement.fr",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://www.blissappartement.fr/port-grimaud",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://www.blissappartement.fr/risoul",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://www.blissappartement.fr/aix-en-provence",
      lastModified: new Date(),
      priority: 0.9,
    },
  ];
}