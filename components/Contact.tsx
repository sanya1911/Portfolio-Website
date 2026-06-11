"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ email?: string; message?: string }>({});
  const [sent, setSent] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const validate = () => {
    const newErrors: { email?: string; message?: string } = {};
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Enter a valid email address.";
    if (!message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSent(true);
  };

  return (
    <div ref={ref}>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="text-sm font-semibold uppercase tracking-widest text-sage-500 dark:text-sage-400 mb-3"
      >
        Say hello
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="text-3xl font-extrabold text-slate-900 dark:text-white mb-10"
      >
        Contact
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
        className="bg-[var(--card)] border border-[var(--border)] rounded-2xl overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Form */}
          <div className="p-8 sm:p-10 space-y-5">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Let&apos;s connect.</h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
              I enjoy connecting with people who are passionate about technology, innovation, and
              problem-solving. If you want to know more about me or my work, or if you would just
              like to say hello, send me a message. I&apos;d love to hear from you.
            </p>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2 p-4 bg-sage-300/20 border border-sage-300 rounded-xl text-sage-700 dark:text-sage-400 text-sm font-medium"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Message sent! I&apos;ll get back to you soon.
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-1.5 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setErrors((v) => ({ ...v, email: undefined })); }}
                    placeholder="you@example.com"
                    className={`w-full px-4 py-3 text-sm bg-[var(--background)] border rounded-xl outline-none focus:ring-2 focus:ring-sage-400/30 transition-all placeholder:text-zinc-400 text-[var(--foreground)] ${
                      errors.email ? "border-red-300 focus:border-red-400" : "border-[var(--border)] focus:border-sage-400"
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-1.5 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={message}
                    onChange={(e) => { setMessage(e.target.value); setErrors((v) => ({ ...v, message: undefined })); }}
                    placeholder="Hey, how's it going?"
                    className={`w-full px-4 py-3 text-sm bg-[var(--background)] border rounded-xl outline-none focus:ring-2 focus:ring-sage-400/30 transition-all resize-none placeholder:text-zinc-400 text-[var(--foreground)] ${
                      errors.message ? "border-red-300 focus:border-red-400" : "border-[var(--border)] focus:border-sage-400"
                    }`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-7 py-3 bg-sage-500 hover:bg-sage-600 text-white text-sm font-bold rounded-xl transition-colors"
                >
                  Send &gt;
                </motion.button>
              </form>
            )}
          </div>

          {/* Right: Illustration */}
          <div className="hidden md:flex items-center justify-center bg-sage-300/10 dark:bg-sage-700/10 border-l border-[var(--border)] p-10">
            <svg
              viewBox="0 0 240 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-xs opacity-75"
              aria-label="Minimalist illustration of a person at a desk"
              role="img"
            >
              <rect x="20" y="130" width="200" height="8" rx="4" fill="#C5CFC0" />
              <rect x="30" y="138" width="8" height="40" rx="2" fill="#C5CFC0" />
              <rect x="202" y="138" width="8" height="40" rx="2" fill="#C5CFC0" />
              <rect x="80" y="80" width="80" height="50" rx="5" fill="white" stroke="#A3B19B" strokeWidth="2" />
              <rect x="110" y="130" width="20" height="6" rx="2" fill="#C5CFC0" />
              <rect x="100" y="136" width="40" height="3" rx="1.5" fill="#C5CFC0" />
              <rect x="90" y="91" width="40" height="3" rx="1.5" fill="#7E9475" />
              <rect x="90" y="98" width="60" height="2" rx="1" fill="#A3B19B" />
              <rect x="90" y="104" width="50" height="2" rx="1" fill="#A3B19B" />
              <rect x="90" y="110" width="55" height="2" rx="1" fill="#A3B19B" />
              <circle cx="60" cy="75" r="14" fill="white" stroke="#A3B19B" strokeWidth="2" />
              <path d="M46 100 Q60 90 74 100 L78 130 H42 Z" fill="white" stroke="#A3B19B" strokeWidth="2" />
              <path d="M72 110 Q80 118 85 125" stroke="#A3B19B" strokeWidth="6" strokeLinecap="round" />
              <rect x="160" y="112" width="10" height="18" rx="2" fill="#C5CFC0" />
              <ellipse cx="165" cy="105" rx="12" ry="14" fill="#7E9475" />
              <ellipse cx="157" cy="108" rx="8" ry="10" fill="#A3B19B" />
              <ellipse cx="173" cy="108" rx="8" ry="10" fill="#A3B19B" />
              <rect x="135" y="118" width="14" height="12" rx="3" fill="white" stroke="#A3B19B" strokeWidth="1.5" />
              <path d="M149 122 Q155 122 155 126 Q155 130 149 130" stroke="#A3B19B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Footer strip */}
        <div className="border-t border-[var(--border)] px-8 sm:px-10 py-4 flex flex-wrap items-center gap-4 text-xs text-zinc-400 dark:text-zinc-500">
          <span>© 2025 Sanya Sachdeva</span>
          <span className="hidden sm:inline">·</span>
          <a href="mailto:sanyasachdeva223@gmail.com" className="hover:text-sage-500 transition-colors">
            sanyasachdeva223@gmail.com
          </a>
          <span className="hidden sm:inline">·</span>
          <a href="tel:9599099839" className="hover:text-sage-500 transition-colors">
            9599099839
          </a>
          <span className="hidden sm:inline">·</span>
          <span>New Delhi, India</span>
        </div>
      </motion.div>
    </div>
  );
}
