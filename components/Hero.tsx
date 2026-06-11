"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col-reverse sm:flex-row items-center sm:items-start gap-8"
    >
      {/* Text side */}
      <div className="flex-1 space-y-5">
        {/* Open to Work badge */}
        <motion.div custom={0} variants={fadeUp} className="inline-flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 pulse-dot" />
          </span>
          <span className="text-xs font-medium text-green-700 bg-green-50 border border-green-200 rounded-full px-2.5 py-0.5">
            Open to Work
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold text-zinc-900 leading-tight tracking-tight"
        >
          Sanya Sachdeva
        </motion.h1>

        {/* Role */}
        <motion.p custom={2} variants={fadeUp} className="text-zinc-500 text-base sm:text-lg font-medium">
          Computer Science Student &nbsp;|&nbsp; Software &amp; AI Developer
        </motion.p>

        {/* Short intro */}
        <motion.p custom={3} variants={fadeUp} className="text-zinc-600 text-sm leading-relaxed max-w-md">
          Building scalable applications and AI-powered solutions from New Delhi.
          B.Tech CS at SRM University Delhi-NCR, graduating 2026.
        </motion.p>

        {/* CTAs */}
        <motion.div custom={4} variants={fadeUp} className="flex flex-wrap gap-3 pt-1">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-700 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            Resume
          </a>
          <a
            href="https://github.com/sanyasachdeva"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 text-zinc-800 text-sm font-medium rounded-lg hover:border-zinc-400 hover:bg-zinc-50 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
        </motion.div>
      </div>

      {/* Photo */}
      <motion.div
        custom={0}
        variants={fadeUp}
        className="shrink-0"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-[2rem] overflow-hidden border-2 border-zinc-200 shadow-sm">
          <Image
            src="/IMG_8248.JPG"
            alt="Sanya Sachdeva profile photo"
            width={176}
            height={176}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
