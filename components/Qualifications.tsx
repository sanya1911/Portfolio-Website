"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import CertModal from "./CertModal";

const educationItems = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "SRM University Delhi-NCR, Sonepat, Haryana",
    period: "Sept 2022 – July 2026",
    side: "right",
  },
  {
    degree: "Senior Secondary Education, CBSE",
    institution: "Bosco Public School, New Delhi",
    period: "April 2021 – March 2022",
    side: "left",
  },
];

const certs = [
  {
    title: "Cyber Security Workshop — SRM University Delhi-NCR",
    image: "/certificates/certificate cyber.jpg",
    description:
      "Attended a 3-day Cyber Security workshop with hands-on learning in Linux security, system protection, and cybersecurity fundamentals.",
  },
  {
    title: "Artificial and Machine Learning — Atos Prayas Foundation",
    image: "/certificates/AI workshop certificate.jpg",
    description:
      "Hands-on training in Python-based machine learning. Implemented ML models using Scikit-learn. Grade: A+",
  },
  {
    title: "Technology Job Simulation — Deloitte",
    image: "/certificates/deloitte-certificate.pdf",
    description:
      "Completed practical tasks in Coding and Development over the period of December 2025.",
  },
];

export default function Qualifications() {
  const [activeTab, setActiveTab] = useState<"education" | "certifications">("education");
  const [activeCert, setActiveCert] = useState<null | (typeof certs)[0]>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref}>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="text-sm font-semibold uppercase tracking-widest text-sage-500 dark:text-sage-400 mb-3"
      >
        My Personal Journey
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="text-3xl font-extrabold text-slate-900 dark:text-white mb-10"
      >
        Qualifications
      </motion.h2>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="flex justify-center gap-3 mb-12"
      >
        {(["education", "certifications"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold border transition-all ${
              activeTab === tab
                ? "bg-sage-500 text-white border-sage-500 shadow-sm"
                : "bg-[var(--card)] text-zinc-500 dark:text-zinc-400 border-[var(--border)] hover:border-sage-400"
            }`}
          >
            {tab === "education" ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
              </svg>
            )}
            {tab === "education" ? "Education" : "Certifications"}
          </button>
        ))}
      </motion.div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {activeTab === "education" ? (
          <motion.div
            key="education"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            {/* Timeline */}
            <div className="relative max-w-3xl mx-auto">
              {/* Center line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--border)] -translate-x-1/2 hidden sm:block" aria-hidden="true" />

              <div className="space-y-10">
                {educationItems.map((item, i) => (
                  <div key={i} className={`sm:flex ${item.side === "right" ? "sm:flex-row" : "sm:flex-row-reverse"} items-center gap-0`}>
                    {/* Card */}
                    <div className={`flex-1 ${item.side === "right" ? "sm:pr-12" : "sm:pl-12"}`}>
                      <motion.div
                        initial={{ opacity: 0, x: item.side === "right" ? -20 : 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: i * 0.15 }}
                        className={`bg-[var(--card)] border border-[var(--border)] rounded-xl p-5 ${item.side === "right" ? "sm:text-right" : "sm:text-left"}`}
                      >
                        <p className="text-xs font-semibold text-sage-500 dark:text-sage-400 mb-1">{item.period}</p>
                        <h4 className="font-bold text-slate-900 dark:text-white text-base leading-snug">{item.degree}</h4>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">{item.institution}</p>
                      </motion.div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden sm:flex w-5 h-5 rounded-full bg-sage-500 border-4 border-[var(--background)] z-10 shrink-0" aria-hidden="true" />

                    {/* Empty side */}
                    <div className="flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="certifications"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {certs.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 flex flex-col gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-sage-300/30 dark:bg-sage-700/20 border border-sage-300 dark:border-sage-700 flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7E9475" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm leading-snug">{cert.title}</h3>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveCert(cert)}
                  className="self-start inline-flex items-center gap-1.5 px-4 py-1.5 bg-sage-500 hover:bg-sage-600 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Click Here
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.button>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed">{cert.description}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <CertModal
        open={activeCert !== null}
        onClose={() => setActiveCert(null)}
        imageSrc={activeCert?.image ?? ""}
        title={activeCert?.title ?? ""}
      />
    </div>
  );
}
