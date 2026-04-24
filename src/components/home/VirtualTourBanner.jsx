import React from 'react';
import { Link } from 'react-router-dom';
import { MonitorPlay, PlayCircle } from 'lucide-react';

export default function VirtualTourBanner() {
  return (
    <section className="relative py-12 md:py-10 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-[url('/images/campus-aerial.png')] bg-cover bg-center bg-fixed"
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
          <MonitorPlay size={36} className="text-white" />
        </div>
        
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-6">
          Experience Our Campus <br/>
          <span className="text-gold italic">From Anywhere</span>
        </h2>
        
        <p className="font-body text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Take a 360° virtual tour of our state-of-the-art facilities, lush green lawns, modern labs, and vibrant classrooms. 
          Discover the MMPS environment before you step in.
        </p>
        
        <Link 
          to="/virtual-tour" 
          className="inline-flex items-center gap-3 bg-white text-navy font-heading font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-2xl"
        >
          <PlayCircle size={24} className="text-primary" />
          Start Virtual Tour
        </Link>
      </div>
    </section>
  );
}
