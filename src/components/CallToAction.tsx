"use client";

import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { personalInfo } from "@/config/data";

export function CallToAction() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center pb-16 bg-black/[0.03] dark:bg-gray-900/20 rounded-2xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-12"
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30"
          >
            <FaRocket className="w-6 h-6 text-blue-400" />
          </motion.div>
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-cyan-600 dark:from-white dark:via-blue-100 dark:to-cyan-300 bg-clip-text text-transparent">
            Vamos Construir Algo Incrível
          </h2>
        </div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent max-w-md mx-auto"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
      >
        Pronto para transformar suas ideias em realidade? Estou sempre aberto a colaborar em
        projetos inovadores e ajudar a transformar sua visão em um produto funcional.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="flex flex-row gap-4 justify-center"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a
            className="flex items-center border border-blue-600/40 dark:border-blue-700/50 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 py-2 px-4 rounded-sm"
            href={`mailto:${personalInfo.email}`}
          >
            <FiMail className="w-5 h-5 mr-2" />
            <span>{personalInfo.email}</span>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
