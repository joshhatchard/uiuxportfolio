import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/.next", "/api"],
    },
    sitemap: "https://joshhatchard.com/sitemap.xml",
  };
}
