import React from "react";
import { motion } from "motion/react";

const Quote: React.FC = () => {
  return (
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
  );
};

export default Quote;
