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
  },
  {
    title: "SyAI — Simple Yet Another AI",
    description:
      "Collaborated in a team to develop an AI-powered notes and productivity application. Authored a research paper based on the application's design, development, and implementation. Led the AI and Python development, implementing features such as AI-generated quizzes, content generation, and realistic image generation from text prompts.",
    tags: ["Python", "AI", "Machine Learning"],
    emoji: "🤖",
  },
  {
    title: "FitFreaks",
    description:
      "Developed a responsive and visually engaging front-end for a gym website using HTML, CSS, JavaScript. Emphasized user experience with smooth navigation, mobile-friendly design, and consistent branding. Applied modern UI/UX principles using tools like Tailwind CSS for styling.",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    emoji: "💪",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref}>
      {/* Eyebrow — dark */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="text-sm font-semibold uppercase tracking-widest text-slate-700 mb-3"
      >
        Things I&apos;ve built
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="text-3xl font-extrabold text-slate-900 mb-10"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            whileHover={{ y: -5, boxShadow: "0 16px 32px rgba(0,0,0,0.10)" }}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4 cursor-default"
          >
            <div className="text-3xl">{project.emoji}</div>
            <h3 className="text-xl font-bold text-slate-900 leading-tight">
              {project.title}
            </h3>
            <p className="text-slate-800 text-sm leading-relaxed flex-1">
              {project.description}
            </p>
            {/* Tech pills — solid sage bg, dark text */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 text-xs font-bold text-slate-900 rounded-full"
                  style={{ backgroundColor: "#B4B7AC" }}
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* GitHub link removed per requirements */}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
