"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "Python",
  "Java",
  "SQL",
  "JavaScript",
  "Problem Solving (DSA)",
  "React.js",
  "Node.js",
  "Express.js",
  "HTML/CSS",
  "REST APIs",
  "Git/GitHub",
  "Machine Learning (Scikit-learn)",
  "Pandas",
  "NumPy",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4"
      >
        About
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Bio card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="md:col-span-3 bg-white border border-zinc-200 rounded-2xl p-6 space-y-3"
        >
          <h3 className="text-sm font-semibold text-zinc-900">Bio</h3>
          <p className="text-zinc-600 text-sm leading-relaxed">
            Computer Science student skilled in Python, Java, web development, and AI-powered
            solutions. Passionate about problem-solving and building scalable applications.
          </p>
          <div className="pt-2 space-y-1 text-xs text-zinc-500">
            <p>
              <span className="font-medium text-zinc-700">Education:</span> B.Tech Computer Science,
              SRM University Delhi-NCR (2022 – 2026)
            </p>
            <p>
              <span className="font-medium text-zinc-700">Location:</span> New Delhi, India
            </p>
            <p>
              <span className="font-medium text-zinc-700">Email:</span>{" "}
              <a
                href="mailto:sanyasachdeva223@gmail.com"
                className="hover:text-accent transition-colors underline underline-offset-2"
              >
                sanyasachdeva223@gmail.com
              </a>
            </p>
          </div>
        </motion.div>

        {/* Skills card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="md:col-span-2 bg-white border border-zinc-200 rounded-2xl p-6"
        >
          <h3 className="text-sm font-semibold text-zinc-900 mb-4">Skills</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-wrap gap-2"
          >
            {skills.map((skill) => (
              <motion.span
                key={skill}
                variants={itemVariants}
                className="px-3 py-1 text-xs font-medium bg-sage-100 text-zinc-700 border border-sage-200 rounded-full"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
