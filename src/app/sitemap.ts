import type { MetadataRoute } from "next";
import { blogPosts } from "@/config/blog-data";

const baseUrl =
  process.env.NEXT_PUBLIC_CURRENT_SITE_URL || "https://portifolio-caua.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...blogUrls,
  ];
}
