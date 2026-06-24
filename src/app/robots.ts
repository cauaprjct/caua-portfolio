import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_CURRENT_SITE_URL || "https://portifolio-caua.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
