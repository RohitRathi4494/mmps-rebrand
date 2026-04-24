import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Calendar, ArrowRight } from 'lucide-react';

export default function SportsSpotlight() {
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-navy rounded-[2.5rem] overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 bg-[url('https://source.unsplash.com/1200x800/?cricket,stadium,sports')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 text-accent font-heading font-semibold text-sm rounded-full mb-6">
                <Trophy size={16} /> Signature Event
              </div>
              
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
                XXV MMMICT 2025 <br />
                <span className="text-gold text-2xl md:text-3xl font-light italic">A Legacy of Sportsmanship</span>
              </h2>
              
              <p className="font-body text-white/80 text-lg mb-8 leading-relaxed">
                The Maru Mal Memorial Inter-School Cricket Tournament (MMMICT) is our premier annual sporting event, bringing together the finest young talent from across the region.
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 text-white/90">
                  <Calendar className="text-gold" size={24} />
                  <div>
                    <p className="font-heading font-semibold">25th Edition Ongoing</p>
                    <p className="font-body text-sm text-white/60">November - December 2025</p>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/mmmict-2025" 
                className="inline-block bg-gold hover:bg-gold-600 text-navy font-heading font-bold px-8 py-4 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                View Tournament Gallery
              </Link>
            </div>
            
            {/* Timeline Column */}
            <div className="flex flex-col justify-center">
              <h3 className="font-heading font-bold text-xl text-white mb-6 border-b border-white/10 pb-4">Tournament History</h3>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                
                {[
                  { year: '2025', edition: 'XXV', current: true },
                  { year: '2024', edition: 'XXIV', current: false },
                  { year: '2023', edition: 'XXIII', current: false },
                  { year: '2022', edition: 'XXII', current: false },
                ].map((item, idx) => (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-navy bg-gold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <div className={`w-3 h-3 rounded-full ${item.current ? 'bg-accent animate-ping' : 'bg-navy'}`}></div>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 backdrop-blur border border-white/10 hover:border-gold/50 transition-colors p-4 rounded-xl shadow-lg">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-heading font-bold text-gold">{item.edition} Edition</span>
                        <span className="font-body text-xs text-white/50">{item.year}</span>
                      </div>
                      <Link to={`/mmmict-${item.year}`} className="font-body text-xs text-white/70 hover:text-white mt-2 inline-flex items-center gap-1 group/link">
                        View Highlights <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
                
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
}
