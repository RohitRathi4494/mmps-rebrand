import React from 'react';
import { cn } from '../../lib/utils';

export default function PageHero({ title, subtitle }) {
  return (
    <section className="bg-[#5B2519] py-8 md:py-10 flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
        <h1 className="font-heading font-medium text-2xl md:text-3xl text-white mb-2 tracking-wide">
          {title}
        </h1>
        <div className="w-16 h-[1px] bg-[#C19B4C] mb-3"></div>
        {subtitle && (
          <h2 className="font-body text-[#C19B4C] text-sm md:text-lg max-w-3xl mx-auto font-medium">
            {subtitle}
          </h2>
        )}
      </div>
    </section>
  );
}
