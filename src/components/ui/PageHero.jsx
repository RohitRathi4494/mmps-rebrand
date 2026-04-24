import React from 'react';
import { cn } from '../../lib/utils';

export default function PageHero({ title, subtitle, image = "https://source.unsplash.com/1600x900/?school,architecture" }) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden flex items-center justify-center text-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      
      {/* Dynamic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy/90 backdrop-blur-[2px]"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 animate-fade-in-up">
        <div className="inline-block w-12 h-1 bg-accent mb-6 rounded-full"></div>
        <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="font-body text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      
      {/* Bottom curved shape or subtle gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ivory to-transparent pointer-events-none"></div>
    </section>
  );
}
