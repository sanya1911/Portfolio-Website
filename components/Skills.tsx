"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    title: "Languages",
    text: "Python, Java, SQL, JavaScript, Problem Solving (DSA)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Web Technologies",
    text: "HTML/CSS, REST APIs",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Tools & IDEs",
    text: "Jupyter Notebook, Git/GitHub, VS Code, Excel",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Data Science & ML",
    text: "Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, Statistical Analysis, Data Visualization, Supervised Learning",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9.5 2A6.5 6.5 0 0 1 16 8.5c0 1.8-.73 3.43-1.91 4.62" />
        <path d="M14.5 2A6.5 6.5 0 0 0 8 8.5c0 1.8.73 3.43 1.91 4.62" />
        <path d="M12 13v9" />
        <path d="M6 22h12" />
        <circle cx="12" cy="8" r="2" />
      </svg>
    ),
  },
];

export default function Skills() {
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
        What I work with
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="text-3xl font-extrabold text-slate-900 dark:text-white mb-10"
      >
        Skills &amp; Technologies
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            whileHover={{ y: -3 }}
            className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 flex flex-col items-center text-center gap-4"
          >
            <div className="text-sage-500 dark:text-sage-400">{card.icon}</div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{card.title}</h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
