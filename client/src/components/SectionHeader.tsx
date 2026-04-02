import React from "react";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="mb-12 sm:mb-16">
      <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-4">{title}</h2>
      <div className="h-px w-16 sm:w-24 bg-zinc-900" />
    </div>
  );
};

export default SectionHeader;
