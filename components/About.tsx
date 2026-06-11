"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref}>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)] mb-3"
      >
        Get to know me
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="text-3xl font-extrabold text-slate-900 dark:text-white mb-10"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
        className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 sm:p-10 space-y-5 max-w-4xl"
      >
        <p className="text-[var(--foreground)] text-base leading-relaxed">
          Computer Science student with strong programming skills in Python and Java, along with
          experience in web development and AI-powered solutions. Skilled in REST APIs, database
          management, object-oriented programming, and data structures. Passionate about software
          development, problem-solving, and building scalable applications while continuously
          learning new technologies.
        </p>
        <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div className="space-y-1">
            <p className="font-semibold text-[var(--accent)] text-xs uppercase tracking-wider">Education</p>
            <p className="text-[var(--foreground)]">B.Tech Computer Science</p>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs">SRM University Delhi-NCR · 2022 – 2026</p>
          </div>
          <div className="space-y-1">
            <p className="font-semibold text-[var(--accent)] text-xs uppercase tracking-wider">Location</p>
            <p className="text-[var(--foreground)]">New Delhi, India</p>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs">110019</p>
          </div>
          <div className="space-y-1">
            <p className="font-semibold text-[var(--accent)] text-xs uppercase tracking-wider">Contact</p>
            <a
              href="mailto:sanyasachdeva223@gmail.com"
              className="text-[var(--accent)] hover:underline underline-offset-2 transition-colors block truncate"
            >
              sanyasachdeva223@gmail.com
            </a>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs">9599099839</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
