"use client";
import { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolio";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-[rgba(2,5,9,0.92)] backdrop-blur-xl border-b border-[rgba(0,245,255,0.12)] shadow-[0_0_30px_rgba(0,245,255,0.05)]"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group" style={{ cursor: "none" }}>
          <div className="relative">
            <span
              className="font-bold text-xl tracking-widest text-white"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              {personalInfo.name.split(" ")[0].toUpperCase()}
            </span>
            <span className="text-[#00f5ff] text-2xl leading-none ml-0.5" style={{
              textShadow: "0 0 16px rgba(0,245,255,0.8)"
            }}>.</span>
          </div>
          <div className="w-[1px] h-5 bg-[rgba(0,245,255,0.3)] mx-2" />
          <span
            className="text-[0.6rem] tracking-[0.3em] text-[#3a6a7a] uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Dev
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 + 0.3 }}
              className={`nav-link ${active === link.href ? "!text-[#00f5ff]" : ""}`}
              style={{ cursor: "none" }}
            >
              {link.label.toUpperCase()}
              {active === link.href && (
                <span className="absolute -bottom-px left-0 right-0 h-[1px] bg-[#00f5ff] shadow-[0_0_8px_#00f5ff]" />
              )}
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="hidden md:block btn-primary"
          style={{ cursor: "none" }}
        >
          <span>CONNECT</span>
        </motion.a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#00f5ff]"
          style={{ cursor: "none" }}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[rgba(6,13,20,0.98)] border-t border-[rgba(0,245,255,0.1)] overflow-hidden"
          >
            <div className="px-6 py-6 space-y-1">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 py-4 border-b border-[rgba(0,245,255,0.06)] group"
                  style={{ cursor: "none" }}
                >
                  <span className="text-[#00f5ff] text-xs mono">0{i + 1}</span>
                  <span
                    className="text-[#7ecfdb] group-hover:text-[#00f5ff] transition-colors tracking-widest text-sm"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    {link.label.toUpperCase()}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}