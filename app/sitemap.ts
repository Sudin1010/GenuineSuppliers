import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const root = "https://www.genuinesuppliers.com.np";
  const staticRoutes = ["", "/services", "/projects", "/amc", "/about", "/careers", "/contact"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${root}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.8,
    })),
    ...projects.map((project) => ({
      url: `${root}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
