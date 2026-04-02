import React from "react";
import { motion } from "motion/react";

interface FABProps {
  scrollToSection: (id: string) => void;
}

const FAB: React.FC<FABProps> = ({ scrollToSection }) => {
  return (
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
  );
};

export default FAB;
