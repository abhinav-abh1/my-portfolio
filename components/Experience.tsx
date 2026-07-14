"use client";
import { motion } from "framer-motion";
import { experience, education, certifications } from "@/data/portfolio";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#09090b] relative z-10 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="text-blue-500" size={24} />
            <p className="uppercase tracking-widest text-sm text-blue-500 font-medium">Background</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Experience & Education
          </h2>
          <div className="h-1 w-20 bg-blue-600 mt-6 rounded-full" />
        </motion.div>

        <div className="space-y-24">
          {/* Top Row - Experience */}
          <div className="w-full">
            <div className="flex items-center gap-3 mb-8">
              <h3 className="text-2xl font-bold text-white">Work Experience</h3>
            </div>
            
            <div className="relative border-l border-white/10 pl-8 space-y-12 ml-4">
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#09090b] border-4 border-blue-500" />

                  <div className="bg-[#18181b] border border-white/5 rounded-xl p-6 sm:p-8 hover:border-blue-500/30 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 gap-4">
                      <div>
                        <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                        <p className="text-blue-400 font-medium mt-1">{exp.company}</p>
                      </div>
                      <span className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-md border border-white/5 shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {exp.points.map((point, j) => (
                        <li key={j} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                          <span className="text-blue-500 mt-0.5">•</span>
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
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="text-blue-500" size={24} />
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, i) => {
                  const percentage = i === 0 ? 85 : 76;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-[#18181b] border border-white/5 rounded-xl p-6 flex flex-col sm:flex-row gap-6 items-center sm:items-start hover:border-blue-500/30 transition-colors"
                    >
                      {/* Progress Ring */}
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                          <circle
                            cx="50" cy="50" r="40"
                            fill="none"
                            stroke="rgba(255, 255, 255, 0.05)"
                            strokeWidth="8"
                          />
                          <motion.circle
                            cx="50" cy="50" r="40"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="8"
                            strokeLinecap="round"
                            initial={{ strokeDashoffset: 251.2 }}
                            whileInView={{ strokeDashoffset: 251.2 - (251.2 * percentage) / 100 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            strokeDasharray="251.2"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-center">
                          <span className="text-lg font-bold text-white">{percentage}%</span>
                        </div>
                      </div>

                      {/* Education Info */}
                      <div className="flex-1 text-center sm:text-left">
                        <h4 className="text-lg font-bold text-white mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-blue-400 font-medium text-sm">{edu.institution}</p>
                        <p className="text-gray-500 text-xs mt-2">{edu.location} • {edu.period}</p>

                        {i === 0 && (
                          <div className="mt-4 inline-block bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-md font-medium">
                            Currently Enrolled
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Award className="text-blue-500" size={24} />
                <h3 className="text-2xl font-bold text-white">Certifications</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-[#18181b] border border-white/5 rounded-xl p-5 flex items-center justify-between hover:border-blue-500/30 transition-colors"
                  >
                    <div>
                      <p className="font-semibold text-white">{cert.name}</p>
                      <p className="text-sm text-gray-500 mt-1">{cert.issuer} • {cert.year}</p>
                    </div>
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