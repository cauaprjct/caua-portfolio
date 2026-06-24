import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/config/blog-data";
import { BlogPostContent } from "./BlogPostContent";

const baseUrl =
  process.env.NEXT_PUBLIC_CURRENT_SITE_URL || "https://portifolio-caua.vercel.app";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Artigo não encontrado" };
  }

  const url = `${baseUrl}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      siteName: "Cauã Alves - Dados, BI & Automação",
      locale: "pt_BR",
      images: [
        {
          url: "/og-image.webp",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/og-image.webp"],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    keywords: post.tags.join(", "),
    url: `${baseUrl}/blog/${post.slug}`,
    inLanguage: "pt-BR",
    author: {
      "@type": "Person",
      name: "Cauã Alves",
      url: "https://github.com/cauaprjct",
    },
    publisher: {
      "@type": "Person",
      name: "Cauã Alves",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BlogPostContent post={post} />
    </>
  );
}
