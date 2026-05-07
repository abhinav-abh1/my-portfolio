"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { ArrowRight, Terminal } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = personalInfo.subtitle;
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 80);
    return () => clearInterval(timer);
  }, [fullText]);

  // Spotlight effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <section
      id="about"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen flex items-center relative overflow-hidden pt-20 bg-transparent group"
    >
      {/* Spotlight gradient following cursor */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle 600px at ${mousePos.x}% ${mousePos.y}%, rgba(0, 245, 255, 0.05), transparent 40%)`
        }}
      />

      <div className="max-w-[1400px] w-full mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

        {/* Left Content */}
        <div className="space-y-10 lg:pl-10 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="flex items-center gap-4"
          >
            <Terminal className="text-accent-cyan" size={20} />
            <span className="text-sm md:text-base font-sub text-accent-cyan tracking-widest uppercase glow-text">
              System.init()
            </span>
          </motion.div>

          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold tracking-widest leading-[1.1] text-text-primary uppercase"
            >
              <span className="relative inline-block text-glow">
                {personalInfo.name}
              </span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-accent-violet text-3xl md:text-5xl mt-2 block tracking-wider font-sub glow-text"
              >
                {personalInfo.title}
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="min-h-[3rem]"
            >
              <p className="text-lg md:text-xl text-text-secondary max-w-xl leading-relaxed font-light inline-block">
                {typedText}
              </p>
              <span className="animate-pulse text-accent-cyan ml-1 font-bold inline-block">_</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="text-text-muted text-sm max-w-lg font-sub tracking-wider"
            >
              {personalInfo.summary}
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-6"
          >
            <a
              href="#projects"
              className="group relative flex items-center gap-4 bg-accent-cyan/10 border border-accent-cyan text-accent-cyan font-bold px-8 py-4 rounded-none transition-all duration-300 hover:bg-accent-cyan hover:text-void shadow-[0_0_15px_rgba(0,245,255,0.2)] hover:shadow-[0_0_25px_rgba(0,245,255,0.6)] uppercase tracking-widest hud-corners"
            >
              <span className="text-sm">Explore Data</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
            </a>

            <a
              href="/Resume.pdf"
              download
              className="group relative flex items-center gap-4 border border-accent-violet text-accent-violet font-bold px-8 py-4 rounded-none transition-all duration-300 hover:bg-accent-violet hover:text-void shadow-[0_0_15px_rgba(123,47,255,0.2)] hover:shadow-[0_0_25px_rgba(123,47,255,0.6)] uppercase tracking-widest hud-corners"
            >
              <span className="text-sm">Download Resume</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              className="flex items-center gap-3 text-text-secondary px-8 py-4 border border-transparent hover:border-accent-violet/50 hover:bg-accent-violet/10 rounded-none transition-all duration-300 uppercase tracking-widest text-sm hud-corners"
            >
              <span>GitHub //</span>
            </a>
          </motion.div>

          {/* HUD Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-12 pt-8 mt-4 border-t border-accent-cyan/20"
          >
            <div>
              <div className="text-accent-cyan font-display text-3xl font-bold glow-text">76%</div>
              <div className="text-[10px] text-text-muted tracking-widest uppercase mt-1">Under Graduation</div>
            </div>
            <div>
              <div className="text-accent-cyan font-display text-3xl font-bold glow-text">80%</div>
              <div className="text-[10px] text-text-muted tracking-widest uppercase mt-1">Post Graduation</div>
            </div>

            {/* Status Indicator */}
            <div className="ml-auto flex items-center gap-3 px-4 py-2 border border-accent-green/30 bg-accent-green/5 rounded-full">
              <div className="w-2 h-2 rounded-full bg-accent-green animate-ping shadow-[0_0_10px_#00ff88]" />
              <span className="text-[10px] text-accent-green tracking-widest uppercase">Online</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative w-full h-full min-h-[500px] flex justify-center items-center"
        >
          {/* Subtle Glow Behind the Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent-cyan/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-accent-cyan/50 shadow-[0_0_30px_rgba(0,245,255,0.4)] bg-void flex items-center justify-center text-4xl">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement!.innerHTML = '👤';
              }}
            />
          </div>

          {/* Floating Badge - Fixed Alignment */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bottom-4 right-0 lg:-right-10 z-20 glass-panel p-3 flex items-center justify-center gap-4 hud-corners w-[200px]"
          >
            <div className="w-10 h-10 border border-accent-cyan/50 flex flex-shrink-0 items-center justify-center text-accent-cyan bg-void/80 shadow-[0_0_10px_rgba(0,245,255,0.2)]">
              <Terminal size={16} />
            </div>
            <div className="flex-1">
              <p className="text-[10px] text-text-muted uppercase tracking-widest">Process</p>
              <p className="text-xs font-bold text-text-primary tracking-wider uppercase whitespace-nowrap">AI Solutions</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}