"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Satellite } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  const contacts = [
    {
      icon: <Mail size={24} />,
      label: "Comms Channel",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "var(--color-accent-cyan)"
    },
    {
      icon: <Phone size={24} />,
      label: "Direct Link",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: "var(--color-accent-violet)"
    },
    {
      icon: <MapPin size={24} />,
      label: "Coordinates",
      value: personalInfo.location,
      href: "#",
      color: "var(--color-accent-green)"
    },
  ];

  return (
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden z-10">
      {/* Background denser nebula */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,245,255,0.05),transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Message */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Satellite className="text-accent-cyan animate-pulse" size={24} />
              <p className="uppercase tracking-[0.3em] text-sm font-sub text-accent-cyan glow-text">ESTABLISH CONNECTION</p>
            </div>

            <h2 className="text-5xl md:text-6xl font-display font-bold tracking-widest leading-tight text-text-primary mb-8 uppercase">
              Transmit Data<br />Packets
            </h2>
            <p className="text-lg text-text-secondary font-light max-w-lg mb-8 font-sub tracking-wider">
              System is online and ready to receive transmissions. Open for collaborations, mission briefs, and data exchanges.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                className="group flex items-center gap-3 px-8 py-4 bg-void border border-accent-cyan/30 hover:border-accent-cyan text-text-primary transition-all hover:bg-accent-cyan/10 hover:shadow-[0_0_15px_rgba(0,245,255,0.3)] hud-corners uppercase tracking-widest font-sub text-xs"
              >
                GitHub Uplink
                <ArrowRight className="text-accent-cyan group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={16} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                className="group flex items-center gap-3 px-8 py-4 bg-void border border-accent-violet/30 hover:border-accent-violet text-text-primary transition-all hover:bg-accent-violet/10 hover:shadow-[0_0_15px_rgba(123,47,255,0.3)] hud-corners uppercase tracking-widest font-sub text-xs"
              >
                LinkedIn Uplink
                <ArrowRight className="text-accent-violet group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={16} />
              </a>
            </div>
          </motion.div>

          {/* Right Side - Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {contacts.map((contact, i) => (
              <motion.a
                key={i}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                className="glass-panel group p-6 flex items-center gap-6 hud-corners transition-all duration-300 relative overflow-hidden"
                style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                whileHover={{ scale: 1.02, borderColor: contact.color }}
              >
                {/* Scan effect on hover */}
                <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-[scan_1s_ease-in-out_infinite]" />

                <div
                  className="w-14 h-14 flex items-center justify-center flex-shrink-0 transition-colors border bg-void"
                  style={{ borderColor: `${contact.color}50`, color: contact.color, boxShadow: `0 0 10px ${contact.color}20` }}
                >
                  {contact.icon}
                </div>

                <div className="flex-1 z-10">
                  <p className="text-[10px] font-sub uppercase tracking-[0.2em] text-text-muted mb-1">{contact.label}</p>
                  <p className="text-text-primary text-sm font-sub tracking-wider transition-colors" style={{ textShadow: `0 0 10px ${contact.color}40` }}>
                    {contact.value}
                  </p>
                </div>

                <ArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all z-10" style={{ color: contact.color }} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 border-t border-accent-cyan/20 pt-12 text-center relative z-10">
        <div className="flex justify-center mb-4">
          <div className="w-1 h-1 bg-accent-cyan rounded-full animate-ping shadow-[0_0_10px_#00f5ff]" />
        </div>
        <p className="text-text-muted font-sub tracking-widest text-xs uppercase">
          System Core Online • {new Date().getFullYear()} • Abhinav A
        </p>
      </div>
    </section>
  );
}