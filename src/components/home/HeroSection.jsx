import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle } from 'lucide-react';
import homeData from '../../content/data/home.json';

export default function HeroSection() {
  const { heroBgImage, heroBadge, heroTitle, heroHighlight, heroSubtitle, stats } = homeData;

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${heroBgImage || "/school.webp"}')` }}
      >
        {/* The "Earlier" Overlay Style — Very Premium & Transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/40 to-transparent mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent"></div>
        
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 pt-40">
        <div className="max-w-3xl">

          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/40 text-gold font-body text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            {heroBadge}
          </div>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-white mb-6 leading-[1.05] tracking-tight">
            {heroTitle}<br />
            <span className="text-gold">{heroHighlight}</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-white/75 mb-10 max-w-xl leading-relaxed whitespace-pre-wrap">
            {heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/admissions/register"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-heading font-bold rounded-full shadow-lg hover:bg-red-700 transition-all hover:-translate-y-0.5 group text-base"
            >
              Apply Now 2026-27
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/virtual-tour"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-heading font-semibold rounded-full transition-all hover:-translate-y-0.5 text-base"
            >
              <PlayCircle size={20} className="text-gold" />
              Virtual Campus Tour
            </Link>
          </div>
        </div>

        {/* ── Stats Row — inline below hero text ───────────────── */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="group flex flex-col items-center text-center py-5 px-4 rounded-2xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 transition-all hover:-translate-y-0.5"
            >
              <span className="text-2xl mb-2">{s.emoji}</span>
              <span className="font-heading font-bold text-2xl md:text-3xl text-white">{s.value}</span>
              <span className="font-body text-xs text-white/60 uppercase tracking-widest font-medium mt-0.5">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
