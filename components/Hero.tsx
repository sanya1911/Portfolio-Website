"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <div className="w-full">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 py-20 md:py-28">
          {/* Left: Text */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-7"
          >
            {/* Open to Work */}
            <motion.div custom={0} variants={fadeUp} className="inline-flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B4B7AC] opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#B4B7AC] pulse-dot" />
              </span>
              <span className="text-xs font-semibold text-slate-700 bg-[#B4B7AC]/15 border border-[#B4B7AC]/40 rounded-full px-3 py-0.5 tracking-wide">
                Open to Work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white leading-none tracking-tight"
            >
              SANYA<br />SACHDEVA
            </motion.h1>

            {/* Role */}
            <motion.p custom={2} variants={fadeUp} className="text-slate-700 text-lg font-semibold tracking-wide">
              Computer Science Student &nbsp;|&nbsp; Software &amp; AI Developer
            </motion.p>

            {/* Bio */}
            <motion.p custom={3} variants={fadeUp} className="text-slate-600 text-base leading-relaxed max-w-lg">
              Building tech that makes sense. I&apos;m a computer science student based in New Delhi,
              passionate about blending clean web development with machine learning. Graduating in 2026.
            </motion.p>

            {/* CTAs */}
            <motion.div custom={4} variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#B4B7AC] hover:opacity-90 text-slate-900 text-sm font-semibold rounded-xl transition-opacity shadow-sm"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                Resume
              </a>
              <a
                href="https://github.com/sanya19111"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] text-sm font-semibold rounded-xl hover:border-[var(--accent)] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="flex justify-end"
          >
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden border-2 border-[var(--border)] shadow-xl">
              <Image
                src="/IMG_8248.JPG"
                alt="Sanya Sachdeva profile photo"
                fill
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
