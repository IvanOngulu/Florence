import React from "react";
import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";

interface Service {
  title: string;
  category: string;
  description: string[];
  images: string[];
}

interface ServicesProps {
  services: Service[];
}

const Services: React.FC<ServicesProps> = ({ services }) => {
  return (
    <section id="services" className="py-20 sm:py-24 px-6 sm:px-12 lg:px-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Services" />

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
  );
};

export default Services;
