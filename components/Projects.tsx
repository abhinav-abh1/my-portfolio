"use client";
import { useState, useRef, useCallback } from "react";
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
  const dragStart = useRef<number | null>(null);

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
    enter: (d: number) => ({ x: d > 0 ? 48 : -48, opacity: 0 }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.32, ease: [0.25, 0, 0.2, 1] },
    },
    exit: (d: number) => ({
      x: d > 0 ? -48 : 48,
      opacity: 0,
      transition: { duration: 0.22, ease: [0.25, 0, 0.2, 1] },
    }),
  };

  return (
    <section id="projects" className="py-24 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <Database className="text-accent-cyan" size={20} />
            <p className="uppercase tracking-[0.3em] text-sm font-sub text-accent-cyan glow-text">DATA ARCHIVES</p>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-5xl md:text-6xl font-display font-bold tracking-widest text-text-primary uppercase">
              Core Modules
            </h2>

            {/* Right side: nav + repo link */}
            <div className="flex items-center gap-3 shrink-0">

              {/* Project counter */}
              <span className="font-sub text-xs tracking-widest text-text-secondary uppercase tabular-nums select-none">
                <span className="text-accent-cyan">{String(index + 1).padStart(2, "0")}</span>
                <span className="mx-1 opacity-30">/</span>
                <span>{String(total).padStart(2, "0")}</span>
              </span>

              {/* Prev button */}
              <button
                onClick={() => go(-1)}
                disabled={index === 0 || animating}
                aria-label="Previous projects"
                className="
                  flex items-center gap-1.5 px-3 py-1.5
                  border border-white/15 font-sub text-[11px] tracking-widest uppercase
                  text-text-secondary transition-all duration-200
                  disabled:opacity-25 disabled:cursor-not-allowed
                  enabled:hover:border-accent-cyan/60 enabled:hover:text-accent-cyan
                "
              >
                <ArrowLeft size={12} />
                Prev
              </button>

              {/* Next button */}
              <button
                onClick={() => go(1)}
                disabled={index >= maxIndex || animating}
                aria-label="Next projects"
                className="
                  flex items-center gap-1.5 px-3 py-1.5
                  border border-white/15 font-sub text-[11px] tracking-widest uppercase
                  text-text-secondary transition-all duration-200
                  disabled:opacity-25 disabled:cursor-not-allowed
                  enabled:hover:border-accent-cyan/60 enabled:hover:text-accent-cyan
                "
              >
                Next
                <ArrowRight size={12} />
              </button>

              <span className="hidden md:block w-px h-4 bg-white/10" />

              <a
                href="https://github.com/abhinav-abh1"
                target="_blank"
                className="hidden md:flex items-center gap-2 text-text-secondary hover:text-accent-cyan transition-colors group font-sub tracking-widest uppercase text-xs"
              >
                Access Global Repository
                <ExternalLink
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                  size={14}
                />
              </a>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-5 h-px w-full bg-white/5 relative overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full bg-accent-cyan"
              animate={{ width: `${((index + VISIBLE) / total) * 100}%` }}
              transition={{ duration: 0.35, ease: [0.25, 0, 0.2, 1] }}
            />
          </div>

          {/* Dot indicators */}
          <div className="mt-3 flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to project set ${i + 1}`}
                className="transition-all duration-300"
                style={{
                  height: "3px",
                  width: i === index ? "24px" : "8px",
                  backgroundColor: i === index ? "var(--color-accent-cyan)" : "rgba(255,255,255,0.12)",
                  boxShadow: i === index ? "0 0 6px var(--color-accent-cyan)" : "none",
                }}
              />
            ))}
            <span className="ml-2 font-sub text-[10px] tracking-widest text-text-secondary uppercase opacity-40 select-none">
              {index + 1}–{Math.min(index + VISIBLE, total)} of {total}
            </span>
          </div>
        </motion.div>

        {/* ── Cards ── */}
        <div
          className="overflow-hidden"
          onPointerDown={(e) => { dragStart.current = e.clientX; }}
          onPointerUp={(e) => {
            if (dragStart.current === null) return;
            const delta = dragStart.current - e.clientX;
            if (Math.abs(delta) > 36) go(delta > 0 ? 1 : -1);
            dragStart.current = null;
          }}
        >
          <AnimatePresence
            custom={dir}
            mode="popLayout"
            onExitComplete={() => setAnimating(false)}
          >
            <motion.div
              key={index}
              custom={dir}

              initial="enter"
              animate="center"
              exit="exit"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {visible.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-panel group flex flex-col h-full hover:border-accent-cyan/60 hud-corners relative overflow-hidden"
                >
                  {/* Animated glow line sweeping across */}
                  <div className="absolute top-0 left-[-100%] w-full h-[2px] bg-gradient-to-r from-transparent via-accent-cyan to-transparent group-hover:animate-[scan_2s_ease-in-out_infinite]" />

                  {/* Project Visual Header */}
                  <div className="h-48 bg-void/50 relative flex items-center justify-center border-b border-accent-cyan/10">
                    <div className="text-[100px] font-display font-bold text-accent-cyan/5 group-hover:text-accent-cyan/10 transition-all duration-700 select-none">
                      {project.title[0]}
                    </div>
                    {/* Tech grid overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.05)_1px,transparent_1px)] bg-[size:10px_10px]" />
                  </div>

                  <div className="p-8 flex-1 flex flex-col relative z-10 bg-surface/50">
                    <div className="mb-6">
                      <h3 className="text-xl font-display font-bold text-text-primary mb-2 tracking-wider uppercase group-hover:text-glow">
                        {project.title}
                      </h3>
                      <p className="text-accent-violet font-sub text-sm tracking-widest uppercase glow-text">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-text-secondary text-sm leading-relaxed mb-8 flex-1 font-light">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-3 mb-8">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-3 text-xs text-text-secondary font-sub tracking-wider">
                          <span className="text-accent-green mt-0.5">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] px-3 py-1 font-sub tracking-widest uppercase bg-void text-accent-cyan border border-accent-cyan/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="border-t border-accent-cyan/10 p-5 flex items-center justify-between bg-void/80 relative z-10">
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 text-xs font-sub tracking-widest uppercase text-text-muted hover:text-accent-cyan transition-colors"
                    >
                      [ View Source ]
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile repo link */}
        <div className="mt-6 flex md:hidden justify-end">
          <a
            href="https://github.com/abhinav-abh1"
            target="_blank"
            className="flex items-center gap-2 text-text-secondary hover:text-accent-cyan transition-colors group font-sub tracking-widest uppercase text-xs"
          >
            Access Global Repository
            <ExternalLink size={13} />
          </a>
        </div>

      </div>
    </section>
  );
}