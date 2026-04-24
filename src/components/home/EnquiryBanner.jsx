import React from 'react';
import { ArrowRight, Download, Phone } from 'lucide-react';

export default function EnquiryBanner() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-accent to-accent-700 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 rounded-full mix-blend-overlay filter blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-navy/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/4 translate-y-1/4"></div>
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-body text-sm font-semibold mb-6 animate-pulse-glow">
          Limited Seats Available
        </span>
        
        <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 drop-shadow-lg">
          Admission Enquiry Open <br />
          <span className="text-navy">for 2026-27</span>
        </h2>
        
        <p className="font-body text-white/90 text-xl font-light max-w-2xl mx-auto mb-12 drop-shadow">
          Join the MMPS family. Take the first step towards a holistic, empowering, and world-class educational journey for your child.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a 
            href="https://uniapply.com" 
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-navy hover:bg-navy-950 text-white font-heading font-semibold rounded-full shadow-[0_10px_20px_rgba(15,23,42,0.4)] hover:shadow-2xl transition-all hover:-translate-y-1"
          >
            Online Admission Form
            <ArrowRight size={20} />
          </a>
          
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-heading font-semibold rounded-full shadow-lg transition-all hover:-translate-y-1">
            <Download size={20} />
            Download Brochure
          </button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-center gap-6 text-white">
          <div className="flex items-center gap-2 font-body text-sm">
            <Phone size={16} /> <span>Need help? Call us at </span>
            <a href="tel:01244570666" className="font-bold hover:underline font-heading tracking-wider">0124-4570666</a>
          </div>
        </div>

      </div>
    </section>
  );
}
