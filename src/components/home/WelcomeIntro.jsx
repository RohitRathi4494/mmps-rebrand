import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';

export default function WelcomeIntro() {
  return (
    <section className="py-24 md:py-32 bg-ivory relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Vision Quote */}
          <div className="relative group">
            <div className="absolute -top-10 -left-6 text-primary/10  z-0 group-hover:scale-110 transition-transform duration-500">
              <Quote size={120} strokeWidth={1} />
            </div>
            
            <div className="relative z-10 pt-6">
              <h2 className="font-heading font-bold text-secondary text-3xl md:text-5xl leading-tight mb-8">
                "Our vision is to produce <br />
                <span className="text-primary italic">global citizens</span> who respect and celebrate differences..."
              </h2>
              <p className="font-body text-xl text-navy/70 leading-relaxed font-light border-l-4 border-gold pl-6">
                "...and become instruments of change in the world."
              </p>
            </div>
          </div>
          
          {/* Right Column: Content */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="font-heading font-bold text-2xl text-navy mb-6">
              Welcome to M M Public School
            </h3>
            
            <p className="font-body text-navy/70 mb-8 leading-relaxed">
              Established in 1992 under the aegis of Maru Mal Education Board, MMPS has evolved into a premier educational institution in Gurugram. 
              Our 5-acre campus serves as a crucible where traditional Indian values merge seamlessly with modern educational methodologies. 
              We are committed to providing students with the necessary skills and knowledge to become effective communicators and socially productive life-long learners.
            </p>
            
            <div className="flex items-center gap-6 mb-8">
              <div className="relative">
                {/* Director/Principal Photo Placeholders */}
                <img 
                  src="/images/chairman.png" 
                  alt="Chairman" 
                  className="w-16 h-16 rounded-full border-4 border-white shadow-md z-20 relative object-cover"
                />
                <img 
                  src="/images/principal.png" 
                  alt="Principal" 
                  className="w-16 h-16 rounded-full border-4 border-white shadow-md z-10 absolute left-8 top-0 object-cover"
                />
              </div>
              <div>
                <p className="font-heading font-semibold text-navy text-sm">Guided by Visionary Leadership</p>
                <p className="font-body text-xs text-navy/60">Chairman & Principal</p>
              </div>
            </div>
            
            <Link 
              to="/about"
              className="inline-flex items-center gap-2 text-gold-600 hover:text-primary font-heading font-semibold transition-colors group"
            >
              Read Full Story
              <span className="w-8 h-8 rounded-full bg-gold-50 flex items-center justify-center group-hover:bg-primary-50 transition-colors">
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}
