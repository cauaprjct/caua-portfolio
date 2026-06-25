"use client"

import { motion } from "framer-motion"
import { FaPenFancy } from "react-icons/fa"
import { FiArrowRight, FiBookOpen, FiClock, FiCalendar } from "react-icons/fi"
import Link from "next/link"
import { blogPosts } from "@/config/blog-data"

const tagColors: Record<string, { bg: string; text: string; border: string }> = {
  IA: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20" },
  Produtividade: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20" },
  Dev: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20" },
  MVP: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20" },
  Python: { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/20" },
  Automação: { bg: "bg-teal-500/10", text: "text-teal-400", border: "border-teal-500/20" },
  OpenAI: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/20" },
  Flutter: { bg: "bg-sky-500/10", text: "text-sky-400", border: "border-sky-500/20" },
  "Clean Architecture": { bg: "bg-indigo-500/10", text: "text-indigo-400", border: "border-indigo-500/20" },
  BLoC: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/20" },
  Dart: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20" },
  TypeScript: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20" },
  Patterns: { bg: "bg-pink-500/10", text: "text-pink-400", border: "border-pink-500/20" },
  "Node.js": { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/20" },
  Advanced: { bg: "bg-rose-500/10", text: "text-rose-400", border: "border-rose-500/20" },
  Gemini: { bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/20" },
  Mobile: { bg: "bg-violet-500/10", text: "text-violet-400", border: "border-violet-500/20" },
}

function getTagStyle(tag: string) {
  return tagColors[tag] || { bg: "bg-gray-500/10", text: "text-gray-400", border: "border-gray-500/20" }
}

export function BlogPosts() {
  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-12"
      >
        <div className="flex items-center gap-4 mb-4">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30"
          >
            <FaPenFancy className="w-6 h-6 text-blue-400" />
          </motion.div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-cyan-600 dark:from-white dark:via-blue-100 dark:to-cyan-300 bg-clip-text text-transparent">
              Artigos Recentes
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
              {blogPosts.length} artigos técnicos sobre desenvolvimento, automação e tecnologias modernas
            </p>
          </div>
        </div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog">
        {blogPosts.map((post, index) => (
          <Link href={`/blog/${post.slug}`} key={index} className="group block h-full">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="h-full bg-black/[0.03] dark:bg-gray-900/30 rounded-2xl overflow-hidden hover:bg-black/[0.05] dark:hover:bg-gray-800/40 transition-colors duration-500 border border-black/10 dark:border-gray-700/30 hover:border-cyan-500/40 relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />
              </div>

              {/* Header with gradient */}
              <div className={`h-52 bg-gradient-to-br ${post.gradient} flex items-end justify-start relative overflow-hidden p-6`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/20 rounded-full blur-2xl" />

                <motion.h3
                  className="text-xl font-bold text-white relative z-10 group-hover:scale-[1.02] transition-transform duration-500 leading-tight"
                >
                  {post.title}
                </motion.h3>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                {/* Meta row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                      <FiCalendar className="w-3.5 h-3.5" />
                      <span className="text-xs">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                      <FiClock className="w-3.5 h-3.5" />
                      <span className="text-xs">{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-cyan-400/80">
                    <FiBookOpen className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed text-sm line-clamp-4">
                  {post.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {post.tags.map((tag, tagIndex) => {
                    const style = getTagStyle(tag)
                    return (
                      <span
                        key={tagIndex}
                        className={`text-xs ${style.text} ${style.bg} px-2.5 py-1 rounded-md border ${style.border} transition-all duration-300 group-hover:brightness-110`}
                      >
                        {tag}
                      </span>
                    )
                  })}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                  <span className="relative">
                    Ler artigo completo
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-500" />
                  </span>
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </div>
            </motion.article>
          </Link>
        ))}
      </div>
    </section>
  )
}
