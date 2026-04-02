import React from "react";
import { motion } from "motion/react";
import Keyboard from "../assets/keyboard.jpeg";

const Hero: React.FC = () => {
  return (
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
  );
};

export default Hero;
