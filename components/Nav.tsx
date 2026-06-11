"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home",           href: "#home" },
  { label: "About",          href: "#about" },
  { label: "Skills",         href: "#skills" },
  { label: "Qualifications", href: "#qualifications" },
  { label: "Projects",       href: "#projects" },
  { label: "Contact",        href: "#contact" },
];

const SIDEBAR_STYLE: React.CSSProperties = {
  backgroundColor: "#e8e3d9",
  // No border — seamless blend with main content
};

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const NavLinks = () => (
    <ul className="space-y-1">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
            className="group flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm font-medium text-slate-800 hover:text-[#B4B7AC] transition-colors"
          >
            {/* Hover accent bar */}
            <span
              className="block w-1 h-4 rounded-full bg-transparent group-hover:bg-[#B4B7AC] transition-colors shrink-0"
              aria-hidden="true"
            />
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* ── DESKTOP: fixed left vertical sidebar (no border) ── */}
      <aside
        className="hidden lg:flex fixed left-0 top-0 h-screen w-64 z-50 flex-col justify-between py-10 px-8"
        style={SIDEBAR_STYLE}
        aria-label="Main navigation"
      >
        {/* Top: name */}
        <div>
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleClick("#home"); }}
            className="block font-extrabold text-sm tracking-widest uppercase text-slate-900 hover:text-[#B4B7AC] transition-colors leading-tight mb-12"
          >
            SANYA<br />SACHDEVA
          </a>
          <nav aria-label="Primary navigation">
            <NavLinks />
          </nav>
        </div>

        {/* Bottom: subtle branding line only */}
        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">
          Portfolio · 2025
        </p>
      </aside>

      {/* ── MOBILE: slim top bar ── */}
      <header
        className="lg:hidden fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-5"
        style={SIDEBAR_STYLE}
      >
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleClick("#home"); }}
          className="font-extrabold text-xs tracking-widest uppercase text-slate-900"
        >
          SANYA SACHDEVA
        </a>

        {/* Hamburger */}
        <button
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="w-8 h-8 flex flex-col items-center justify-center gap-1.5"
        >
          <span className={`block w-5 h-0.5 bg-slate-700 transition-transform duration-200 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-5 h-0.5 bg-slate-700 transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-slate-700 transition-transform duration-200 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </header>

      {/* Mobile slide-in drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 z-40 bg-black/30"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="lg:hidden fixed left-0 top-0 h-full w-64 z-50 flex flex-col justify-between py-10 px-8"
              style={SIDEBAR_STYLE}
              aria-label="Mobile navigation"
            >
              <div>
                <p className="font-extrabold text-sm tracking-widest uppercase text-slate-900 mb-10">
                  SANYA<br />SACHDEVA
                </p>
                <NavLinks />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">
                Portfolio · 2025
              </p>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
