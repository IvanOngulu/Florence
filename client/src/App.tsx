/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Instagram, Mail, X, Phone, MapPin } from "lucide-react";

import TimberHouse from "./assets/TimberHouse.jpeg";
import Volumes from "./assets/volumes.jpeg";
import Percussion from "./assets/percussion.jpeg";
import Urban from "./assets/urban.jpeg";
import MusicTherapy1 from "./assets/musicTherapy1.jpeg";
import MusicTherapy2 from "./assets/musicTherapy2.jpeg";
import Keyboard from "./assets/keyboard.jpeg";

const projects = [
  {
    title: "Timber House",
    category: "Gallery",
    image: TimberHouse,
    description: "A study of acoustic resonance and visual harmony."
  },
  {
    title: "Passion Volumes",
    category: "Gallery",
    image: Volumes,
    description: "Capturing the raw energy of rhythmic expression."
  },
  {
    title: "Percussions",
    category: "Gallery",
    image: Percussion,
    description: "The heartbeat of visual storytelling."
  },
  {
    title: "Urban Structures",
    category: "Gallery",
    image: Urban,
    description: "Finding rhythm in the architectural landscape."
  }
];

const services = [
  {
    title: "Music therapy",
    category: "Hobbies",
    description: [
      "Making music for both commercial and personal purposes",
      "Showcasing the therapeutic side of music"
    ],
    images: [
      MusicTherapy1,
      MusicTherapy2
    ]
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState("Portfolio");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveTab(id.charAt(0).toUpperCase() + id.slice(1));
    }
  };

  return (
    <div className="min-h-screen selection:bg-zinc-900 selection:text-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={Keyboard}
            alt="Florence at the keyboard"
            className="h-full w-full object-cover grayscale-[20%]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative h-full flex flex-col justify-center px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="text-white/80 uppercase tracking-[0.2em] text-[10px] sm:text-xs font-medium mb-4 block">
              Visual Work
            </span>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-[1.1] sm:leading-tight mb-8">
              Florence <br />
              <span className="italic">Nyaketcho</span>
            </h1>
            <p className="text-white/90 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl">
              I shape ideas, visuals, and words into work that resonates, inspires, and brings lasting value to those I work with.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 sm:py-24 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-4">Portfolio</h2>
            <div className="h-px w-16 sm:w-24 bg-zinc-900" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-16 sm:gap-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden mb-6 bg-zinc-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl mb-1 group-hover:underline underline-offset-4">
                  {project.title}
                </h3>
                <p className="text-zinc-500 uppercase tracking-widest text-[10px] sm:text-xs font-medium">
                  {project.category}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services / Hobbies Section */}
      <section id="services" className="py-20 sm:py-24 px-6 sm:px-12 lg:px-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-4">Services</h2>
            <div className="h-px w-16 sm:w-24 bg-zinc-900" />
          </div>

          <div className="space-y-24 sm:space-y-32">
            {services.map((service, index) => (
              <div key={service.title} className="max-w-4xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
                  {service.images.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="aspect-[4/5] overflow-hidden bg-zinc-200"
                    >
                      <img
                        src={img}
                        alt={`${service.title} ${i}`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  ))}
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl mb-2">{service.title}</h3>
                <p className="text-zinc-500 uppercase tracking-widest text-[10px] sm:text-xs font-medium mb-6">
                  {service.category}
                </p>
                <ul className="space-y-3 text-zinc-700 text-base sm:text-lg font-light">
                  {service.description.map((line, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 lg:px-24 bg-white border-y border-zinc-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-zinc-800 mb-10 sm:mb-12">
              "Ideas become clearer when shaped with intention. I create work that speaks with purpose, emotion, and attention to detail."
            </p>
            <span className="font-serif text-2xl sm:text-3xl italic text-zinc-900">Nessa</span>
          </motion.div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 sm:py-24 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-4">Contacts</h2>
            <div className="h-px w-16 sm:w-24 bg-zinc-900" />
          </div>

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

      {/* Navigation / Footer */}
      <footer className="py-16 sm:py-24 px-6 sm:px-12 lg:px-24 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 sm:gap-12">
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {["Portfolio", "Services", "Contacts"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border transition-all text-xs sm:text-sm font-medium ${
                    activeTab === item
                      ? "bg-zinc-900 text-white border-zinc-900"
                      : "border-zinc-200 hover:border-zinc-900"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <X size={20} />
              </a>
              <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="mt-16 sm:mt-24 pt-8 border-t border-zinc-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-zinc-400 text-center sm:text-left">
            <span>© 2026 Florence Nyaketcho</span>
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <span className="group-hover:text-zinc-900 transition-colors">Back to top</span>
              <ArrowRight size={12} className="-rotate-90 group-hover:text-zinc-900 transition-colors" />
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] sm:w-auto max-w-md">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="bg-zinc-900 text-white px-4 sm:px-6 py-3 rounded-full shadow-2xl flex items-center justify-between sm:justify-start gap-3 sm:gap-4 border border-white/10 backdrop-blur-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-medium tracking-wider uppercase whitespace-nowrap">Available for work</span>
          </div>
          <div className="w-px h-4 bg-white/20 hidden sm:block" />
          <button
            onClick={() => scrollToSection("contacts")}
            className="text-[10px] sm:text-xs font-bold hover:text-zinc-300 transition-colors whitespace-nowrap"
          >
            Get in touch
          </button>
        </motion.div>
      </div>
    </div>
  );
}
