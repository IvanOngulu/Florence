import React from "react";
import { ArrowRight, Instagram, Mail, X } from "lucide-react";

interface FooterProps {
  activeTab: string;
  scrollToSection: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ activeTab, scrollToSection }) => {
  return (
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
  );
};

export default Footer;
