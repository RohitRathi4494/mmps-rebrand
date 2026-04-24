import React, { useEffect } from 'react';
import PageHero from '../components/ui/PageHero';
import { MonitorPlay, Compass, MousePointer2, Move, RotateCcw } from 'lucide-react';

export default function VirtualTour() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-ivory flex flex-col min-h-screen">
      <PageHero 
        title="360° Virtual Tour" 
        subtitle="Explore our world-class campus, modern laboratories, and vibrant classrooms from the comfort of your home."
        image="https://source.unsplash.com/1600x900/?virtual-reality,architecture,modern"
      />

      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Viewer Block */}
          <div className="bg-navy rounded-[3.5rem] p-4 md:p-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
              <Compass size={300} />
            </div>
            
            <div className="relative z-10 flex flex-col">
              <div className="flex items-center justify-between mb-8 px-6 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent animate-pulse-glow flex items-center justify-center">
                    <MonitorPlay size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg md:text-xl">Main Campus View</h3>
                    <p className="font-body text-[10px] uppercase tracking-widest text-white/40 font-bold">Live Panorama Mode</p>
                  </div>
                </div>
                <div className="hidden md:flex items-center gap-6 text-white/50 font-body text-[10px] font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-2"><MousePointer2 size={12} /> Click & Drag</span>
                  <span className="flex items-center gap-2"><Move size={12} /> Use Arrows</span>
                  <span className="flex items-center gap-2"><RotateCcw size={12} /> Reset View</span>
                </div>
              </div>
              
              {/* The Iframe Placeholder */}
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-black/40 border border-white/10 group-hover:border-accent/30 transition-colors duration-500 shadow-inner">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div className="bg-navy/80 backdrop-blur-xl border border-white/20 p-8 rounded-3xl text-center shadow-2xl max-w-sm">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6 text-white">
                      <MonitorPlay size={32} />
                    </div>
                    <h4 className="font-heading font-bold text-2xl text-white mb-4">Start Tour</h4>
                    <p className="font-body text-white/60 text-sm mb-8 leading-relaxed">Experience a high-definition 360-degree immersive view of our 5-acre campus block by block.</p>
                    <button className="w-full bg-white text-navy font-heading font-bold py-4 rounded-xl hover:bg-gold-400 transition-colors">
                      Enter 360° Explorer
                    </button>
                  </div>
                </div>
                
                {/* Visual Placeholder Background */}
                <img 
                  src="https://source.unsplash.com/1600x900/?school,architecture,interior" 
                  alt="360 Tour View" 
                  className="w-full h-full object-cover blur-sm opacity-50 grayscale"
                />
              </div>
            </div>
          </div>
          
          {/* Detailed Points of Interest */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: 'The Junior Block', desc: 'Designed for early learners with colorful, safe, and engaging activity spaces.', icon: '🏫' },
              { title: 'Modern Physics Lab', desc: 'Equipped with the latest apparatus and safety measures for senior researchers.', icon: '🥼' },
              { title: 'Library & Resource Hub', desc: 'Over 15,000+ volumes and digital resources in a quiet, climate-controlled space.', icon: '📚' },
            ].map((poi, idx) => (
              <div key={idx} className="bg-ivory p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{poi.icon}</div>
                <h3 className="font-heading font-bold text-2xl text-navy mb-4">{poi.title}</h3>
                <p className="font-body text-navy/60 text-base leading-relaxed">{poi.desc}</p>
                <button className="mt-8 text-primary font-heading font-bold flex items-center gap-2 hover:underline">
                  Jump to Scene <MousePointer2 size={16} />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
