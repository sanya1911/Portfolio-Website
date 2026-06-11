"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "RepHelp",
    description:
      "Full-stack responsive hotel booking app with an admin dashboard for real-time analytics and inventory management.",
    tags: ["React", "MERN"],
    emoji: "🏨",
  },
  {
    title: "SyAI",
    description:
      "AI-powered notes and productivity app featuring AI-generated quizzes and realistic image generation.",
    tags: ["Python", "AI"],
    emoji: "🤖",
  },
  {
    title: "FitFreaks",
    description:
      "Responsive, mobile-friendly front-end for a gym website emphasizing UI/UX principles.",
    tags: ["HTML", "CSS", "JS", "Tailwind"],
    emoji: "💪",
  },
];

export default function Projects() {
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
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.07)" }}
            className="bg-white border border-zinc-200 rounded-2xl p-5 flex flex-col gap-3 cursor-default"
          >
            <div className="text-2xl">{project.emoji}</div>
            <h3 className="font-semibold text-zinc-900 text-base leading-tight">
              {project.title}
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 text-xs font-medium bg-zinc-100 text-zinc-600 border border-zinc-200 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
