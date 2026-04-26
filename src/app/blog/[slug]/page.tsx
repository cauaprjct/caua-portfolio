"use client"

import { use } from "react"
import { motion } from "framer-motion"
import { FiArrowLeft, FiClock, FiCalendar } from "react-icons/fi"
import Link from "next/link"
import { blogPosts } from "@/config/blog-data"
import { notFound } from "next/navigation"

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`relative h-[400px] bg-gradient-to-br ${post.gradient} flex items-center justify-center overflow-hidden`}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/#blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <FiArrowLeft className="w-4 h-4" />
              Voltar para o portfólio
            </Link>
          </motion.div>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            {post.title}
          </motion.h1>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-6 text-white/80"
          >
            <div className="flex items-center gap-2">
              <FiCalendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-2 justify-center mt-4"
          >
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm text-white/90 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm"
              >
                #{tag}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="max-w-4xl mx-auto px-6 py-16"
      >
        <div
          className="prose prose-invert prose-lg max-w-none
          prose-headings:text-white prose-headings:font-bold
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
          prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
          prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-white prose-strong:font-semibold
          prose-code:text-cyan-400 prose-code:bg-gray-800/50 prose-code:px-2 prose-code:py-1 prose-code:rounded
          prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700
          prose-ul:text-gray-300 prose-ul:my-6
          prose-ol:text-gray-300 prose-ol:my-6
          prose-li:my-2
          prose-blockquote:border-l-cyan-500 prose-blockquote:text-gray-400 prose-blockquote:italic"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </motion.article>

      {/* Back to Portfolio */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <FiArrowLeft className="w-4 h-4" />
          Voltar para todos os artigos
        </Link>
      </div>
    </main>
  )
}

