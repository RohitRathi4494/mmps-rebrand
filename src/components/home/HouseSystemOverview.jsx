import React from 'react';
import { Wind, Sun, Globe2, Flame } from 'lucide-react';

const houses = [
  {
    name: 'VAYU',
    color: 'blue',
    bg: 'bg-primary',
    border: 'border-primary',
    text: 'text-primary',
    icon: Wind,
    desc: 'Representing freedom, intelligence, and a dynamic spirit.'
  },
  {
    name: 'SURYA',
    color: 'yellow',
    bg: 'bg-gold-400',
    border: 'border-gold-400',
    text: 'text-gold-600',
    icon: Sun,
    desc: 'Symbolizing energy, leadership, and brilliance.'
  },
  {
    name: 'PRITHVI',
    color: 'green',
    bg: 'bg-green-500',
    border: 'border-green-500',
    text: 'text-green-600',
    icon: Globe2,
    desc: 'Standing for stability, patience, and nurturing care.'
  },
  {
    name: 'AGNI',
    color: 'orange',
    bg: 'bg-accent',
    border: 'border-accent',
    text: 'text-accent',
    icon: Flame,
    desc: 'Embodying passion, transformation, and the drive to succeed.'
  }
];

export default function HouseSystemOverview() {
  return (
    <section className="py-12 md:py-10 bg-navy relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-4">
            United in Houses, <br />
            <span className="text-gold italic">Divided in Competition</span>
          </h2>
          <div className="w-24 h-1 bg-white/20 mx-auto rounded-full mb-6"></div>
          <p className="font-body text-white/70 text-lg max-w-2xl mx-auto">
            Fostering a spirit of healthy competition, leadership, and camaraderie through year-round inter-house events.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {houses.map((house, index) => {
            const Icon = house.icon;
            return (
              <div 
                key={index}
                className={`bg-white/5 backdrop-blur-sm border-t-4 ${house.border} rounded-b-2xl rounded-t-sm p-8 text-center hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className={`w-20 h-20 mx-auto rounded-full ${house.bg} flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="text-white" size={36} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-3xl text-white tracking-widest mb-2">
                  {house.name}
                </h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className={`w-3 h-3 rounded-full ${house.bg}`}></span>
                  <span className="font-body text-xs text-white/50 uppercase tracking-widest">{house.color} House</span>
                </div>
                <p className="font-body text-white/70 text-sm leading-relaxed">
                  {house.desc}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-heading font-bold text-xl text-white mb-2">Inter-House Championship</h4>
            <p className="font-body text-white/70 text-sm max-w-xl">
              Students compete in debates, quizzes, sports, and arts. The ultimate prize is the prestigious Year-End Championship Trophy awarded to the best overall performing house.
            </p>
          </div>
          <img 
            src="https://img.icons8.com/3d-fluency/94/trophy.png" 
            alt="Championship Trophy" 
            className="w-20 h-20 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]"
          />
        </div>

      </div>
    </section>
  );
}
