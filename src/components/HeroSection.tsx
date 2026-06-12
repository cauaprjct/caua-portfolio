"use client";

import { motion } from "framer-motion";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import { FaGithub, FaInstagram, FaLinkedinIn, FaBriefcase } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { heroSection } from "@/config/data";

function getSocialIcon(title: string) {
  switch (title) {
    case "GitHub":
      return <FaGithub className="w-8 h-8 text-gray-200 hover:text-gray-500" />;
    case "Twitter":
      return (
        <FaSquareXTwitter className="w-8 h-8 text-gray-200 hover:text-gray-500" />
      );
    case "Instagram":
      return (
        <FaInstagram className="w-8 h-8 text-pink-500 hover:text-pink-700" />
      );
    case "Freelancer":
      return (
        <FaBriefcase className="w-8 h-8 text-emerald-400 hover:text-emerald-600" />
      );
    default:
      return (
        <FaLinkedinIn className="w-8 h-8 text-blue-500 hover:text-blue-700" />
      );
  }
}

export function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="flex flex-col items-center lg:items-start"
      >
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex items-center gap-2 text-sm text-gray-400 mb-4"
        >
          <FiMapPin className="w-4 h-4" />
          {heroSection.personalInfo.location}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="flex w-full items-center gap-4 justify-between"
        >
          {heroSection.socialLinks.map(({ title, url }, index) => (
            <motion.a
              key={title}
              title={title}
              initial={{ x: 5, scale: 0.2 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {getSocialIcon(title)}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="flex-1 text-center lg:text-left"
      >
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-4xl lg:text-6xl font-bold mb-3 tracking-tight"
        >
          {heroSection.personalInfo.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl text-gray-400 mb-5"
        >
          {heroSection.personalInfo.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-gray-300 leading-relaxed text-lg max-w-2xl"
        >
          {heroSection.personalInfo.description}
        </motion.p>
      </motion.div>
    </div>
  );
}
