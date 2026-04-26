"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    // Ensure icon only renders after mounting to avoid hydration mismatch
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button
                className="relative inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-700/50 hover:bg-gray-800/50 focus:outline-none"
            >
                <span className="sr-only">Toggle theme</span>
            </button>
        );
    }

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/50 bg-background/50 hover:bg-accent/50 focus:outline-none transition-colors overflow-hidden"
        >
            <span className="sr-only">Toggle theme</span>
            <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" || theme === "system" ? (
                    <motion.div
                        key="moon"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Moon className="h-5 w-5 text-gray-300" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="sun"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Sun className="h-5 w-5 text-gray-600" />
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    );
}
