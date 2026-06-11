"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface CertModalProps {
  open: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
}

function isPdf(src: string) {
  return src.toLowerCase().endsWith(".pdf");
}

export default function CertModal({ open, onClose, imageSrc, title }: CertModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, handleKeyDown]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Certificate: ${title}`}
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden flex flex-col"
            style={{ maxHeight: "90vh" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-100 shrink-0">
              <h3 className="text-sm font-semibold text-zinc-800 truncate pr-4">{title}</h3>
              <button
                onClick={onClose}
                aria-label="Close certificate modal"
                className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full hover:bg-zinc-100 transition-colors text-zinc-500"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="relative flex-1 bg-zinc-50 overflow-auto" style={{ minHeight: "300px" }}>
              {isPdf(imageSrc) ? (
                <iframe
                  src={imageSrc}
                  title={`Certificate: ${title}`}
                  className="w-full"
                  style={{ height: "560px", border: "none" }}
                />
              ) : (
                <Image
                  src={imageSrc}
                  alt={`Certificate: ${title}`}
                  width={800}
                  height={560}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              )}
            </div>

            {/* Footer with download link for PDF */}
            {isPdf(imageSrc) && (
              <div className="px-5 py-3 border-t border-zinc-100 shrink-0">
                <a
                  href={imageSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent font-medium hover:underline underline-offset-2"
                >
                  Open PDF in new tab ↗
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
