"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center relative overflow-hidden pt-20 bg-transparent"
    >
      <div className="max-w-6xl w-full mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

        {/* Left Content */}
        <div className="space-y-8 relative z-10 text-left">

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-white"
            >
              Hi, I'm <span className="whitespace-nowrap">{personalInfo.name}</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-2xl md:text-4xl font-medium text-gray-400"
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg text-gray-400 max-w-xl leading-relaxed pt-4"
            >
              {personalInfo.subtitle}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-gray-500 text-sm max-w-lg"
            >
              {personalInfo.summary}
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 bg-blue-600 text-white font-medium px-6 py-3 rounded-lg transition-colors hover:bg-blue-700"
            >
              <span>View Projects</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/Resume.pdf"
              download
              className="flex items-center gap-2 bg-white/5 border border-white/10 text-white font-medium px-6 py-3 rounded-lg transition-colors hover:bg-white/10"
            >
              <span>Download Resume</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              className="flex items-center gap-2 text-gray-400 hover:text-white px-4 py-3 transition-colors"
            >
              <span>GitHub</span>
            </a>
          </motion.div>
        </div>

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full h-full min-h-[400px] flex justify-center items-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border border-white/10 shadow-2xl bg-[#18181b] flex items-center justify-center">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement!.innerHTML = '<span class="text-gray-500 text-4xl">👤</span>';
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}