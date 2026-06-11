"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import CertModal from "./CertModal";

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
      "Hands-on training in Python-based machine learning. Implemented ML models using Scikit-learn.",
  },
  {
    title: "Technology Job Simulation — Deloitte",
    image: "/certificates/deloitte-certificate.pdf",
    description:
      "Completed practical tasks in Coding and Development over the period of December 2025.",
  },
];

export default function Certifications() {
  const [activeCert, setActiveCert] = useState<null | (typeof certs)[0]>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4"
      >
        Certifications
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certs.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            className="bg-white border border-zinc-200 rounded-2xl p-5 flex flex-col gap-3"
          >
            {/* Icon */}
            <div className="w-9 h-9 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center shrink-0">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#c2693a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
              </svg>
            </div>

            {/* Heading */}
            <h3 className="font-semibold text-zinc-900 text-sm leading-snug">{cert.title}</h3>

            {/* Click Here button — immediately after heading per requirement */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveCert(cert)}
              className="self-start inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-accent text-white text-xs font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Click Here
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.button>

            {/* Description */}
            <p className="text-zinc-500 text-xs leading-relaxed">{cert.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <CertModal
        open={activeCert !== null}
        onClose={() => setActiveCert(null)}
        imageSrc={activeCert?.image ?? ""}
        title={activeCert?.title ?? ""}
      />
    </div>
  );
}
