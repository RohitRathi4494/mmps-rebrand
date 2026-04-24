import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle, Users, BookOpen, Award, MapPin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-[url('/school.webp')] bg-cover bg-center"
        style={{ backgroundAttachment: 'fixed' }} // Optional parallax
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-primary/80 to-primary/40 mix-blend-multiply"></div>
        {/* Adds a slight geometric pattern on top */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-12 pb-32">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 rounded-full bg-gold/20 backdrop-blur-md border border-gold/30 text-gold font-body text-sm font-semibold mb-6 animate-pulse-glow">
            Admission Open 2026-27
          </div>
          
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Where Vision <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-accent pr-4">Meets Values</span>
          </h1>
          
          <p className="font-body text-xl text-white/90 mb-10 max-w-2xl leading-relaxed font-light drop-shadow">
            Producing global citizens who respect and celebrate differences since 1992. 
            Join the Maru Mal Education Board legacy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link 
              to="/admissions" 
              className="flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-600 text-white font-heading font-semibold rounded-full shadow-[0_0_20px_rgba(255,107,53,0.4)] hover:shadow-[0_0_30px_rgba(255,107,53,0.6)] transition-all hover:-translate-y-1 group"
            >
              Enroll Now 2026-27
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/virtual-tour" 
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-heading font-semibold rounded-full transition-all hover:-translate-y-1"
            >
              <PlayCircle size={20} className="text-gold" />
              Virtual Campus Tour
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 w-full z-20 translate-y-1/2 hidden md:block">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-6 grid grid-cols-2 md:grid-cols-4 divide-y divide-gray-100 md:divide-y-0 md:divide-x border border-gray-100 animate-slide-in-up" style={{ animationDelay: '400ms' }}>
            <div className="flex flex-col items-center justify-center p-4 group">
              <Users className="text-accent mb-2 group-hover:scale-110 transition-transform" size={28} />
              <div className="font-heading font-bold text-3xl text-navy">800+</div>
              <div className="text-xs font-body text-navy/60 uppercase font-semibold tracking-wider">Students</div>
            </div>
            
            <div className="flex flex-col items-center justify-center p-4 group">
              <MapPin className="text-primary mb-2 group-hover:scale-110 transition-transform" size={28} />
              <div className="font-heading font-bold text-3xl text-navy">5 Acres</div>
              <div className="text-xs font-body text-navy/60 uppercase font-semibold tracking-wider">Campus</div>
            </div>

            <div className="flex flex-col items-center justify-center p-4 group">
              <Award className="text-gold-500 mb-2 group-hover:scale-110 transition-transform" size={28} />
              <div className="font-heading font-bold text-3xl text-navy">30+ Yrs</div>
              <div className="text-xs font-body text-navy/60 uppercase font-semibold tracking-wider">Legacy</div>
            </div>

            <div className="flex flex-col items-center justify-center p-4 group">
              <BookOpen className="text-green-500 mb-2 group-hover:scale-110 transition-transform" size={28} />
              <div className="font-heading font-bold text-3xl text-navy">100%</div>
              <div className="text-xs font-body text-navy/60 uppercase font-semibold tracking-wider">Results</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
