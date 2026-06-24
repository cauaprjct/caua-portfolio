"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export function Header() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-20 px-6 py-3 bg-background/50 backdrop-blur-sm font-mono border-b border-border/50"
    >
      <nav className="w-full flex items-center justify-end gap-4">
        <div
          className="text-muted-foreground"
          aria-label="Horário local atual"
          aria-live="off"
          suppressHydrationWarning
        >
          {time}
        </div>
      </nav>
    </motion.header>
  );
}
