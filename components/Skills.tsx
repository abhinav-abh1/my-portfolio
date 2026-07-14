"use client";
import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { Cpu } from "lucide-react";

export default function Skills() {
  const entries = Object.entries(skills);

  return (
    <section id="skills" className="py-24 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-2 mb-4">
            <Cpu className="text-blue-500" size={24} />
            <p className="uppercase tracking-widest text-sm text-blue-500 font-medium">Capabilities</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-blue-600 mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {entries.map(([category, items], idx) => {
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#18181b] border border-white/5 rounded-xl p-8 hover:border-blue-500/30 transition-colors"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <h3 className="text-lg font-semibold text-white">
                    {category}
                  </h3>
                </div>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 + i * 0.03 }}
                      className="px-3 py-1.5 text-xs font-medium bg-white/5 text-gray-300 rounded-md border border-white/5 hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/30 transition-all"
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