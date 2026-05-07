"use client";
import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { Cpu } from "lucide-react";

const categoryColors: Record<string, string> = {
  "Front-End": "var(--color-accent-cyan)",
  "Back-End": "var(--color-accent-violet)",
  Database: "var(--color-text-secondary)",
  "Tools & Others": "var(--color-accent-orange)",
  Programming: "var(--color-accent-green)",
  "System Design & Documentation": "var(--color-accent-cyan)",
};

export default function Skills() {
  const entries = Object.entries(skills);

  return (
    <section id="skills" className="py-24 bg-transparent relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-3 mb-3">
            <Cpu className="text-accent-cyan" size={24} />
            <p className="uppercase tracking-[0.3em] text-sm font-sub text-accent-cyan glow-text">SYSTEM CAPABILITIES</p>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold tracking-widest text-text-primary uppercase">
            Technical Arsenal
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent-cyan to-transparent mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {entries.map(([category, items], idx) => {
            const color = categoryColors[category] || "var(--color-accent-cyan)";
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-8 group relative overflow-hidden hud-corners border border-white/10"
              >
                {/* Background Scanline in Card */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-cyan/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-[2s] ease-linear" />

                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8 relative z-10 border-b border-white/5 pb-4">
                  <div
                    className="w-2 h-2 shadow-[0_0_8px_currentColor]"
                    style={{ backgroundColor: color, color: color }}
                  />
                  <h3 className="text-lg font-display tracking-widest uppercase" style={{ color }}>
                    {category}
                  </h3>
                </div>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-3 relative z-10">
                  {items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 + i * 0.03 }}
                      className="px-4 py-1.5 text-[11px] font-sub tracking-widest uppercase border bg-void/80 text-text-secondary transition-all duration-300"
                      style={{ borderColor: `${color}40` }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = color;
                        e.currentTarget.style.backgroundColor = `${color}20`;
                        e.currentTarget.style.color = '#fff';
                        e.currentTarget.style.boxShadow = `0 0 10px ${color}40`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = `${color}40`;
                        e.currentTarget.style.backgroundColor = 'rgba(2, 4, 8, 0.8)';
                        e.currentTarget.style.color = 'var(--color-text-secondary)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}