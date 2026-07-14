"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, MessageSquare } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  const contacts = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: personalInfo.location,
      href: "#"
    },
  ];

  return (
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden z-10">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="text-blue-500" size={24} />
              <p className="uppercase tracking-widest text-sm text-blue-500 font-medium">Get in Touch</p>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's build something together.
            </h2>
            <p className="text-lg text-gray-400 max-w-lg mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
              Feel free to reach out through any of the channels.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                className="group flex items-center gap-2 px-6 py-3 bg-[#18181b] border border-white/10 rounded-lg text-white transition-colors hover:border-blue-500/50 hover:bg-blue-500/5 font-medium"
              >
                GitHub Profile
                <ArrowRight className="text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                className="group flex items-center gap-2 px-6 py-3 bg-[#18181b] border border-white/10 rounded-lg text-white transition-colors hover:border-blue-500/50 hover:bg-blue-500/5 font-medium"
              >
                LinkedIn Profile
                <ArrowRight className="text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right Side - Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            {contacts.map((contact, i) => (
              <a
                key={i}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                className="block group"
              >
                <div className="bg-[#18181b] border border-white/5 rounded-xl p-6 flex items-center gap-6 hover:border-blue-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                    {contact.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-500 mb-1">{contact.label}</p>
                    <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 border-t border-white/5 pt-10 text-center text-sm text-gray-500 max-w-6xl mx-auto px-6">
        <p>
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </section>
  );
}