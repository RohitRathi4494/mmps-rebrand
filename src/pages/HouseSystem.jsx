import React, { useEffect } from 'react';
import PageHero from '../components/ui/PageHero';
import { Wind, Sun, Mountain, Flame, ShieldAlert, Award, TrendingUp, Users } from 'lucide-react';

const houses = [
  { name: 'Vayu', icon: Wind, color: 'sky', tagline: 'Flying High with Honor', theme: 'bg-sky-500', text: 'text-sky-500', bg: 'bg-sky-50', quote: 'Swift in action, steady in purpose.' },
  { name: 'Surya', icon: Sun, color: 'amber', tagline: 'Radiating Wisdom', theme: 'bg-amber-500', text: 'text-amber-500', bg: 'bg-amber-50', quote: 'Enlightening minds, empowering futures.' },
  { name: 'Prithvi', icon: Mountain, color: 'emerald', tagline: 'Grounded in Values', theme: 'bg-emerald-500', text: 'text-emerald-500', bg: 'bg-emerald-50', quote: 'Firm in resolve, nurturing in spirit.' },
  { name: 'Agni', icon: Flame, color: 'rose', tagline: 'Igniting Passion', theme: 'bg-rose-500', text: 'text-rose-500', bg: 'bg-rose-50', quote: 'Fervent in spirit, brilliant in achievement.' },
];

export default function HouseSystem() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-ivory flex flex-col min-h-screen">
      <PageHero 
        title="House System" 
        subtitle="Cultivating healthy competition, leadership, and a sense of belonging through our four distinct houses."
        image="/images/holistic.png"
      />

      {/* House Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {houses.map((house, idx) => {
              const Icon = house.icon;
              return (
                <div key={idx} className="flex flex-col h-full group">
                  <div className={`p-1 hidden md:block rounded-t-[3rem] ${house.theme}`}></div>
                  <div className="bg-white p-10 rounded-b-[3rem] rounded-t-[3rem] md:rounded-t-none border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex-grow flex flex-col relative overflow-hidden">
                    <div className={`absolute top-0 right-0 w-32 h-32 ${house.bg} rounded-bl-[8rem] group-hover:scale-110 transition-transform`}></div>
                    
                    <div className={`w-20 h-20 rounded-3xl ${house.theme} flex items-center justify-center text-white mb-8 shadow-lg relative z-10 group-hover:rotate-6 transition-transform`}>
                      <Icon size={40} />
                    </div>
                    
                    <h2 className={`font-heading font-black text-4xl mb-2 relative z-10 ${house.text}`}>{house.name}</h2>
                    <p className="font-body text-navy font-bold text-sm tracking-widest uppercase mb-6 relative z-10">{house.tagline}</p>
                    
                    <p className="font-body text-navy/60 text-sm leading-relaxed mb-8 relative z-10 italic">
                      "{house.quote}"
                    </p>
                    
                    <div className="mt-auto space-y-4 relative z-10">
                      <div className="flex items-center justify-between text-xs font-body font-semibold text-navy/40 uppercase tracking-tighter">
                        <span>Current Points</span>
                        <span className="text-navy">1,240</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full ${house.theme}`} style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inter-House Events */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5">
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-navy mb-8 leading-tight">
                The Battle of <br />
                <span className="text-primary italic">Excellence</span>
              </h2>
              <div className="w-16 h-1.5 bg-accent mb-10 rounded-full"></div>
              
              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-gold-500 shrink-0 shadow-sm group-hover:bg-gold transition-all">
                    <Award size={28} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-navy mb-2 text-lg">Annual Cock-House Trophy</h4>
                    <p className="font-body text-navy/60 text-sm leading-relaxed">The ultimate recognition for the house that totals the highest points across academics, sports, and co-curricular activities throughout the year.</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary shrink-0 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                    <TrendingUp size={28} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-navy mb-2 text-lg">Weekly Point Tracker</h4>
                    <p className="font-body text-navy/60 text-sm leading-relaxed">Points are awarded for discipline, uniform, environmental initiatives, and inter-house competition wins, tracked weekly on the board.</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-accent shrink-0 shadow-sm group-hover:bg-accent group-hover:text-white transition-all">
                    <Users size={28} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-navy mb-2 text-lg">Leadership roles</h4>
                    <p className="font-body text-navy/60 text-sm leading-relaxed">Each house is led by a House Captain and House Prefects, selected for their integrity, performance, and leadership potential.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white aspect-video lg:aspect-auto h-full min-h-[400px]">
                <img src="/images/cricket-tournament.png" alt="House Events" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-navy/20"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white w-full px-8">
                  <div className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center mx-auto mb-6 bg-white/10 backdrop-blur">
                    <ShieldAlert size={40} />
                  </div>
                  <h3 className="font-heading font-bold text-4xl mb-4 italic">Next Event: Inter-House Debate</h3>
                  <p className="font-body text-lg text-white/80">Thursday, 15th August | School Auditorium</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
