"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const links = [
  { label: "Home",           href: "#home" },
  { label: "About",          href: "#about" },
  { label: "Skills",         href: "#skills" },
  { label: "Qualifications", href: "#qualifications" },
  { label: "Projects",       href: "#projects" },
  { label: "Contact",        href: "#contact" },
];

function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={`flex items-center justify-center rounded-full border border-[var(--accent)] text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-white transition-colors ${
        compact ? "w-8 h-8" : "w-9 h-9"
      }`}
    >
      {theme === "dark" ? (
        /* Sun icon */
        <svg width={compact ? 14 : 15} height={compact ? 14 : 15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1"  x2="12" y2="3"  />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22"   x2="5.64" y2="5.64"   />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1"  y1="12" x2="3"  y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78"  x2="5.64" y2="18.36"  />
          <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"  />
        </svg>
      ) : (
        /* Moon icon */
        <svg width={compact ? 13 : 14} height={compact ? 13 : 14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ─── DESKTOP: fixed left vertical sidebar ─────────────────────────── */}
      <aside
        className="hidden lg:flex fixed left-0 top-0 h-screen w-64 z-50 flex-col justify-between py-10 px-8"
        style={{
          backgroundColor: "var(--sidebar-bg)",
          borderRight: "1px solid var(--accent)",
        }}
        aria-label="Main navigation"
      >
        {/* Top: name */}
        <div>
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleClick("#home"); }}
            className="block font-extrabold text-sm tracking-widest uppercase text-[var(--foreground)] hover:text-[var(--accent)] transition-colors leading-tight mb-12"
          >
            SANYA<br />SACHDEVA
          </a>

          {/* Nav links */}
          <nav>
            <ul className="space-y-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                    className="group flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all"
                  >
                    {/* Active-state bar */}
                    <span
                      className="block w-1 h-4 rounded-full bg-transparent group-hover:bg-[var(--accent)] transition-colors"
                      aria-hidden="true"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom: theme toggle */}
        <div className="flex flex-col gap-3">
          <p className="text-[10px] uppercase tracking-widest text-[var(--accent)] font-semibold opacity-70">
            Appearance
          </p>
          <ThemeToggle />
        </div>
      </aside>

      {/* ─── MOBILE: top bar + slide-in drawer ────────────────────────────── */}
      <header
        className="lg:hidden fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-5"
        style={{
          backgroundColor: "var(--sidebar-bg)",
          borderBottom: "1px solid var(--accent)",
        }}
      >
        {/* Name */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleClick("#home"); }}
          className="font-extrabold text-xs tracking-widest uppercase text-[var(--foreground)]"
        >
          SANYA SACHDEVA
        </a>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <ThemeToggle compact />

          {/* Hamburger */}
          <button
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          >
            <span className={`block w-5 h-0.5 bg-[var(--foreground)] transition-transform duration-200 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[var(--foreground)] transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[var(--foreground)] transition-transform duration-200 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile overlay drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 z-40 bg-black/40"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.nav
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="lg:hidden fixed left-0 top-0 h-full w-64 z-50 flex flex-col justify-between py-10 px-8"
              style={{
                backgroundColor: "var(--sidebar-bg)",
                borderRight: "1px solid var(--accent)",
              }}
              aria-label="Mobile navigation"
            >
              <div>
                <p className="font-extrabold text-sm tracking-widest uppercase text-[var(--foreground)] mb-10">
                  SANYA<br />SACHDEVA
                </p>
                <ul className="space-y-1">
                  {links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                        className="group flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all"
                      >
                        <span className="block w-1 h-4 rounded-full bg-transparent group-hover:bg-[var(--accent)] transition-colors" aria-hidden="true" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[10px] uppercase tracking-widest text-[var(--accent)] font-semibold opacity-70">Appearance</p>
                <ThemeToggle />
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
