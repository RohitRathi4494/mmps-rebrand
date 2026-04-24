import React from 'react';
import { cn } from '../../lib/utils';

export default function PageHero({ title, subtitle }) {
  return (
    <section className="bg-primary py-8 md:py-10 flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
        <h1 className="font-heading font-medium text-2xl md:text-4xl text-white mb-2 tracking-wide">
          {title}
        </h1>
        <div className="w-16 h-[1px] bg-gold-400/60 mb-3"></div>
        {subtitle && (
          <h2 className="font-body text-gold-400 text-sm md:text-lg max-w-3xl mx-auto font-medium">
            {subtitle}
          </h2>
        )}
      </div>
    </section>
  );
}
