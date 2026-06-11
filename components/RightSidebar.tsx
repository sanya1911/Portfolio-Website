"use client";

import { motion } from "framer-motion";

export default function RightSidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="fixed right-4 bottom-0 hidden lg:flex flex-col items-center gap-4 z-40"
      aria-label="Contact email"
    >
      <a
        href="mailto:sanyasachdeva223@gmail.com"
        className="vertical-text text-xs text-zinc-400 hover:text-sage-500 dark:hover:text-sage-400 tracking-widest transition-colors"
        aria-label="Email: sanyasachdeva223@gmail.com"
      >
        sanyasachdeva223@gmail.com
      </a>
      <div className="w-px h-20 bg-[var(--border)] mt-1" aria-hidden="true" />
    </motion.aside>
  );
}
