"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "RepHelp",
    description:
      "Developed a full-stack responsive hotel booking application using React and MERN stack. Designed an admin dashboard with real-time analytics for inventory management, order processing, and user authentication.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "MERN"],
    emoji: "🏨",
    github: "https://github.com/sanya19111",
  },
  {
    title: "SyAI — Simple Yet Another AI",
    description:
      "Collaborated in a team to develop an AI-powered notes and productivity application. Authored a research paper based on the application's design, development, and implementation. Led the AI and Python development, implementing features such as AI-generated quizzes, content generation, and realistic image generation from text prompts.",
    tags: ["Python", "AI", "Machine Learning"],
    emoji: "🤖",
    github: "https://github.com/sanya19111",
  },
  {
    title: "FitFreaks",
    description:
      "Developed a responsive and visually engaging front-end for a gym website using HTML, CSS, JavaScript. Emphasized user experience with smooth navigation, mobile-friendly design, and consistent branding. Applied modern UI/UX principles using tools like Tailwind CSS for styling.",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    emoji: "💪",
    github: "https://github.com/sanya19111",
  },
];

export default function Projects() {
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
        Things I&apos;ve built
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="text-3xl font-extrabold text-slate-900 dark:text-white mb-10"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            whileHover={{ y: -5, boxShadow: "0 12px 28px rgba(0,0,0,0.08)" }}
            className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 flex flex-col gap-4 cursor-default"
          >
            <div className="text-3xl">{project.emoji}</div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
              {project.title}
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 text-xs font-medium bg-sage-300/30 dark:bg-sage-700/20 text-sage-700 dark:text-sage-400 border border-sage-300/60 dark:border-sage-700/40 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sage-600 dark:text-sage-400 hover:text-sage-700 transition-colors mt-1"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              View on GitHub ↗
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
