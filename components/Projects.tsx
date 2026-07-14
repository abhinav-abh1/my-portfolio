"use client";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ExternalLink, Database, ArrowLeft, ArrowRight } from "lucide-react";

const VISIBLE = 3;

export default function Projects() {
  const total = projects.length;
  const maxIndex = total - VISIBLE;

  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [animating, setAnimating] = useState(false);

  const go = useCallback(
    (d: 1 | -1) => {
      if (animating) return;
      const next = index + d;
      if (next < 0 || next > maxIndex) return;
      setDir(d);
      setAnimating(true);
      setIndex(next);
    },
    [animating, index, maxIndex]
  );

  const goTo = useCallback(
    (i: number) => {
      if (animating || i === index) return;
      setDir(i > index ? 1 : -1);
      setAnimating(true);
      setIndex(i);
    },
    [animating, index]
  );

  const visible = projects.slice(index, index + VISIBLE);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 30 : -30, opacity: 0 }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: (d: number) => ({
      x: d > 0 ? -30 : 30,
      opacity: 0,
      transition: { duration: 0.2, ease: "easeIn" },
    }),
  };

  return (
    <section id="projects" className="py-24 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <Database className="text-blue-500" size={24} />
            <p className="uppercase tracking-widest text-sm text-blue-500 font-medium">Portfolio</p>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Featured Projects
            </h2>

            {/* Nav Controls */}
            <div className="flex items-center gap-4 shrink-0">
              <span className="text-sm text-gray-500 font-medium tabular-nums">
                <span className="text-blue-400">{String(index + 1).padStart(2, "0")}</span>
                <span className="mx-1">/</span>
                <span>{String(total).padStart(2, "0")}</span>
              </span>

              <div className="flex gap-2">
                <button
                  onClick={() => go(-1)}
                  disabled={index === 0 || animating}
                  className="p-2 rounded-md bg-[#18181b] border border-white/10 text-gray-400 hover:text-white hover:border-white/20 disabled:opacity-30 transition-colors"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  onClick={() => go(1)}
                  disabled={index >= maxIndex || animating}
                  className="p-2 rounded-md bg-[#18181b] border border-white/10 text-gray-400 hover:text-white hover:border-white/20 disabled:opacity-30 transition-colors"
                >
                  <ArrowRight size={18} />
                </button>
              </div>

              <a
                href="https://github.com/abhinav-abh1"
                target="_blank"
                className="hidden md:flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors ml-4 font-medium"
              >
                View GitHub
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Cards ── */}
        <div className="overflow-hidden">
          <AnimatePresence
            custom={dir}
            mode="popLayout"
            onExitComplete={() => setAnimating(false)}
          >
            <motion.div
              key={index}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {visible.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#18181b] rounded-xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all flex flex-col group h-full"
                >
                  <div className="h-40 bg-[#27272a]/50 flex items-center justify-center border-b border-white/5 relative">
                    <div className="text-7xl font-bold text-gray-800 select-none group-hover:text-blue-900/30 transition-colors">
                      {project.title[0]}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-blue-400 font-medium mb-4">
                      {project.subtitle}
                    </p>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-2 text-xs text-gray-400">
                          <span className="text-blue-500">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 bg-[#27272a] text-gray-300 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-white/5 p-4 bg-black/20 flex justify-between">
                     <a
                        href={project.github}
                        target="_blank"
                        className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                      >
                        <ExternalLink size={14} />
                        Source Code
                      </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Indicators */}
        <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all ${i === index ? 'w-8 bg-blue-500' : 'w-2 bg-gray-700 hover:bg-gray-500'}`}
              />
            ))}
        </div>

      </div>
    </section>
  );
}