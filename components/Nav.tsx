"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Qualifications", href: "#qualifications" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)]">
      <nav className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleClick("#home"); }}
          className="font-bold text-base tracking-widest text-[var(--foreground)] hover:text-sage-500 dark:hover:text-sage-400 transition-colors uppercase"
        >
          Sanya Sachdeva
        </a>

        {/* Desktop links + theme toggle */}
        <div className="hidden sm:flex items-center gap-7">
          <ul className="flex items-center gap-7">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                  className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-[var(--foreground)] transition-colors font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Dark / Light toggle */}
          <button
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-zinc-500 dark:text-zinc-300 hover:border-sage-400 transition-colors"
          >
            {theme === "dark" ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="sm:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-zinc-500"
          >
            {theme === "dark" ? (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
              </svg>
            ) : (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <button
            className="flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`block w-5 h-0.5 bg-[var(--foreground)] transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[var(--foreground)] transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[var(--foreground)] transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="sm:hidden bg-[var(--background)]/95 backdrop-blur-md border-b border-[var(--border)] px-6 pb-4 space-y-3"
          >
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                  className="block text-sm text-[var(--foreground)] font-medium py-1.5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
