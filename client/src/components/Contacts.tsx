import React from "react";
import { motion } from "motion/react";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import SectionHeader from "./SectionHeader";

const Contacts: React.FC = () => {
  return (
    <section id="contacts" className="py-20 sm:py-24 px-6 sm:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Contacts" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10 sm:space-y-12"
          >
            <form className="space-y-6 sm:space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2 group">
                <label className="text-[10px] sm:text-xs uppercase tracking-widest text-zinc-400 group-focus-within:text-zinc-900 transition-colors">Your name</label>
                <input
                  type="text"
                  className="w-full border-b border-zinc-200 py-2 focus:outline-none focus:border-zinc-900 transition-colors bg-transparent text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2 group">
                <label className="text-[10px] sm:text-xs uppercase tracking-widest text-zinc-400 group-focus-within:text-zinc-900 transition-colors">Your email</label>
                <input
                  type="email"
                  className="w-full border-b border-zinc-200 py-2 focus:outline-none focus:border-zinc-900 transition-colors bg-transparent text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2 group">
                <label className="text-[10px] sm:text-xs uppercase tracking-widest text-zinc-400 group-focus-within:text-zinc-900 transition-colors">Your message</label>
                <textarea
                  rows={4}
                  className="w-full border-b border-zinc-200 py-2 focus:outline-none focus:border-zinc-900 transition-colors bg-transparent resize-none text-sm sm:text-base"
                />
              </div>
              <button className="w-full py-4 bg-[#B08968] text-white font-medium hover:bg-[#9C7A5D] transition-colors text-sm sm:text-base">
                Send
              </button>
            </form>

            <div className="pt-10 sm:pt-12 border-t border-zinc-100">
              <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
                I'm always happy to connect. Reach out with questions, ideas, or project inquiries, and I'll get back to you soon.
              </p>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-end space-y-8 lg:text-right"
          >
            <div className="space-y-2">
              <h4 className="font-bold text-xl sm:text-2xl">Florence Nyaketcho</h4>
              <p className="text-zinc-500 flex items-center lg:justify-end gap-2 text-sm sm:text-base">
                <MapPin size={16} /> Uganda
              </p>
            </div>
            <div className="space-y-4">
              <a href="tel:+256771873883" className="text-zinc-600 hover:text-zinc-900 transition-colors flex items-center lg:justify-end gap-2 text-sm sm:text-base">
                <Phone size={16} /> +256 771873883
              </a>
              <a href="mailto:florencenyaletcho@gmail.com" className="text-zinc-600 hover:text-zinc-900 transition-colors flex items-center lg:justify-end gap-2 underline underline-offset-4 text-sm sm:text-base break-all">
                <Mail size={16} className="shrink-0" /> florencenyaletcho@gmail.com
              </a>
            </div>
            <div className="flex lg:justify-end pt-6 sm:pt-8">
              <a href="#" className="p-3 border border-zinc-200 rounded-full hover:bg-zinc-900 hover:text-white transition-all">
                <Instagram size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
