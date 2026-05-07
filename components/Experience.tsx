"use client";
import { motion } from "framer-motion";
import { experience, education, certifications } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="uppercase tracking-[0.3em] text-sm font-sub text-accent-cyan mb-3 glow-text">SYSTEM LOGS</p>
          <h2 className="text-5xl md:text-6xl font-display font-bold tracking-widest text-text-primary uppercase">
            Experience & Education
          </h2>
        </motion.div>

        <div className="space-y-24">
          {/* Top Row - Experience */}
          <div className="w-full">
            <SectionHeader title="Work Experience" color="var(--color-accent-cyan)" />
            <div className="relative border-l border-accent-cyan/20 pl-6 ml-4 space-y-8 mt-8">
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-void border-2 border-accent-cyan shadow-[0_0_10px_rgba(0,245,255,0.8)]" />

                  <div className="glass-panel p-6 hud-corners">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                      <div>
                        <h3 className="text-lg font-display tracking-widest text-text-primary uppercase">{exp.role}</h3>
                        <p className="text-accent-cyan font-sub text-sm tracking-wider uppercase mt-1 glow-text">{exp.company}</p>
                      </div>
                      <span className="px-3 py-1 text-[10px] font-sub tracking-widest bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {exp.points.map((point, j) => (
                        <li key={j} className="flex gap-3 text-text-secondary text-sm font-light">
                          <span className="text-accent-cyan mt-1 font-bold">»</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Education (Left) & Certifications (Right) */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <SectionHeader title="Education" color="var(--color-accent-green)" />

              <div className="space-y-8 mt-8">
                {education.map((edu, i) => {
                  const percentage = i === 0 ? 80 : 76; // MCA 76%, Others 80%
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                      className="glass-panel p-8 hud-corners"
                    >
                      <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
                        {/* Progress Ring */}
                        <div className="relative w-28 h-28 flex-shrink-0">
                          <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                            <circle
                              cx="60" cy="60" r="52"
                              fill="none"
                              stroke="rgba(0, 255, 136, 0.1)"
                              strokeWidth="4"
                            />
                            <motion.circle
                              cx="60" cy="60" r="52"
                              fill="none"
                              stroke="var(--color-accent-green)"
                              strokeWidth="4"
                              strokeLinecap="square"
                              initial={{ strokeDashoffset: 327 }}
                              whileInView={{ strokeDashoffset: 327 - (327 * percentage) / 100 }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, ease: "easeOut" }}
                              strokeDasharray="327"
                              style={{ filter: "drop-shadow(0 0 8px rgba(0, 255, 136, 0.6))" }}
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-accent-green font-display glow-text">{percentage}</div>
                              <div className="text-[10px] text-accent-green font-sub tracking-widest -mt-1">%</div>
                            </div>
                          </div>
                        </div>

                        {/* Education Info */}
                        <div className="flex-1 text-center sm:text-left">
                          <h3 className="text-lg font-display tracking-widest text-text-primary leading-tight mb-2 uppercase">
                            {edu.degree}
                          </h3>
                          <p className="text-accent-green font-sub text-sm tracking-widest uppercase glow-text">{edu.institution}</p>
                          <p className="text-text-muted text-xs font-sub mt-2 tracking-wider">{edu.location} // {edu.period}</p>

                          {i === 0 && (
                            <div className="mt-4 inline-block bg-accent-green/10 border border-accent-green/30 text-accent-green text-[10px] px-3 py-1 font-sub tracking-widest uppercase">
                              Status: Active
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <SectionHeader title="Certifications" color="var(--color-accent-violet)" />
              <div className="space-y-4 mt-8">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel p-5 flex items-center justify-between border-l-2 border-accent-violet hover:border-l-4 transition-all"
                  >
                    <div>
                      <p className="font-sub tracking-widest text-text-primary text-sm uppercase">{cert.name}</p>
                      <p className="text-xs text-text-muted font-sub tracking-wider mt-1">{cert.issuer} // {cert.year}</p>
                    </div>
                    <div className="text-accent-violet text-lg drop-shadow-[0_0_8px_rgba(123,47,255,0.8)]">⟡</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ title, color }: { title: string; color: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-px w-8 bg-gradient-to-r from-transparent" style={{ backgroundImage: `linear-gradient(to right, transparent, ${color})` }} />
      <h3 className="text-xl font-display tracking-widest uppercase" style={{ color, textShadow: `0 0 10px ${color}` }}>
        {title}
      </h3>
      <div className="h-px flex-1 bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${color}, transparent)` }} />
    </div>
  );
}