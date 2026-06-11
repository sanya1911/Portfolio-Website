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
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  };

  return (
    <div ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4"
      >
        Contact
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white border border-zinc-200 rounded-2xl overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Form */}
          <div className="p-6 sm:p-8 space-y-5">
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 leading-tight">Let&apos;s connect.</h3>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              I enjoy connecting with people who are passionate about technology, innovation, and
              problem-solving. If you want to know more about me or my work, or if you would just
              like to say hello, send me a message. I&apos;d love to hear from you.
            </p>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm font-medium"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Message sent! I&apos;ll get back to you soon.
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-zinc-600 mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setErrors((v) => ({ ...v, email: undefined })); }}
                    placeholder="you@example.com"
                    className={`w-full px-3.5 py-2.5 text-sm bg-zinc-50 border rounded-lg outline-none focus:ring-2 focus:ring-accent/30 transition-all placeholder:text-zinc-400 ${
                      errors.email ? "border-red-300 focus:border-red-400" : "border-zinc-200 focus:border-accent"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-zinc-600 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => { setMessage(e.target.value); setErrors((v) => ({ ...v, message: undefined })); }}
                    placeholder="Hey, how's it going?"
                    className={`w-full px-3.5 py-2.5 text-sm bg-zinc-50 border rounded-lg outline-none focus:ring-2 focus:ring-accent/30 transition-all resize-none placeholder:text-zinc-400 ${
                      errors.message ? "border-red-300 focus:border-red-400" : "border-zinc-200 focus:border-accent"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Send &gt;
                </motion.button>
              </form>
            )}
          </div>

          {/* Right: Illustration */}
          <div className="hidden md:flex items-center justify-center bg-sage-50 border-l border-zinc-100 p-8">
            <svg
              viewBox="0 0 240 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-xs opacity-80"
              aria-label="Minimalist illustration of a person at a desk"
              role="img"
            >
              {/* Desk */}
              <rect x="20" y="130" width="200" height="8" rx="4" fill="#d1e2d3" />
              <rect x="30" y="138" width="8" height="40" rx="2" fill="#d1e2d3" />
              <rect x="202" y="138" width="8" height="40" rx="2" fill="#d1e2d3" />
              {/* Monitor */}
              <rect x="80" y="80" width="80" height="50" rx="5" fill="white" stroke="#c8d8c9" strokeWidth="2" />
              <rect x="110" y="130" width="20" height="6" rx="2" fill="#d1e2d3" />
              <rect x="100" y="136" width="40" height="3" rx="1.5" fill="#d1e2d3" />
              {/* Screen content lines */}
              <rect x="90" y="91" width="40" height="3" rx="1.5" fill="#a8c5aa" />
              <rect x="90" y="98" width="60" height="2" rx="1" fill="#c8d8c9" />
              <rect x="90" y="104" width="50" height="2" rx="1" fill="#c8d8c9" />
              <rect x="90" y="110" width="55" height="2" rx="1" fill="#c8d8c9" />
              {/* Person - head */}
              <circle cx="60" cy="75" r="14" fill="white" stroke="#c8d8c9" strokeWidth="2" />
              {/* Person - body */}
              <path d="M46 100 Q60 90 74 100 L78 130 H42 Z" fill="white" stroke="#c8d8c9" strokeWidth="2" />
              {/* Arm on desk */}
              <path d="M72 110 Q80 118 85 125" stroke="#c8d8c9" strokeWidth="6" strokeLinecap="round" />
              {/* Plant */}
              <rect x="160" y="112" width="10" height="18" rx="2" fill="#d1e2d3" />
              <ellipse cx="165" cy="105" rx="12" ry="14" fill="#a8c5aa" />
              <ellipse cx="157" cy="108" rx="8" ry="10" fill="#b8d4ba" />
              <ellipse cx="173" cy="108" rx="8" ry="10" fill="#b8d4ba" />
              {/* Coffee mug */}
              <rect x="135" y="118" width="14" height="12" rx="3" fill="white" stroke="#c8d8c9" strokeWidth="1.5" />
              <path d="M149 122 Q155 122 155 126 Q155 130 149 130" stroke="#c8d8c9" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Footer strip */}
        <div className="border-t border-zinc-100 px-6 sm:px-8 py-4 flex flex-wrap items-center gap-4 text-xs text-zinc-400">
          <span>© 2025 Sanya Sachdeva</span>
          <span className="hidden sm:inline">·</span>
          <a href="mailto:sanyasachdeva223@gmail.com" className="hover:text-zinc-600 transition-colors">
            sanyasachdeva223@gmail.com
          </a>
          <span className="hidden sm:inline">·</span>
          <span>New Delhi, India</span>
        </div>
      </motion.div>
    </div>
  );
}
