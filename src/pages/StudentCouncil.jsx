import React, { useEffect } from 'react';
import PageHero from '../components/ui/PageHero';
import { Star, Shield, Users, Award, BookOpen, Flag } from 'lucide-react';

const cabinet = [
  { role: 'Head Boy', name: 'Master Arnav Singh', house: 'Vayu House', image: '/images/holistic.png' },
  { role: 'Head Girl', name: 'Miss Diya Mehta', house: 'Surya House', image: '/images/holistic.png' },
  { role: 'Vice Head Boy', name: 'Master Rohan Gupta', house: 'Prithvi House', image: '/images/holistic.png' },
  { role: 'Vice Head Girl', name: 'Miss Sneha Roy', house: 'Agni House', image: '/images/holistic.png' },
  { role: 'Sports Captain', name: 'Master Kabir Singh', house: 'Agni House', image: '/images/holistic.png' },
  { role: 'Cultural Secretary', name: 'Miss Aisha Khan', house: 'Vayu House', image: '/images/holistic.png' },
];

export default function StudentCouncil() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-ivory flex flex-col min-h-screen">
      <PageHero 
        title="Student Council" 
        subtitle="Empowering the youth to lead today for a better tomorrow. Meet the vanguard of MMPS."
        image="/images/classroom-students.png"
      />

      {/* Leadership Cabinet */}
      <section className="py-12 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 text-gold font-heading font-semibold text-xs rounded-full mb-6 uppercase tracking-wider">
              <Star size={14} className="fill-gold" /> The Core Cabinet
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-navy">Investiture <span className="text-primary italic">2025-26</span></h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {cabinet.map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 aspect-[4/5] bg-ivory">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="inline-block px-3 py-1 bg-accent text-white font-heading font-bold text-[10px] uppercase rounded-full mb-3 tracking-widest">
                      {member.role}
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-white mb-1">{member.name}</h3>
                    <p className="font-body text-white/60 text-sm">{member.house}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles & Responsibilities */}
      <section className="py-12 bg-ivory border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="flex flex-col gap-6">
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg">
                <Shield size={28} />
              </div>
              <h4 className="font-heading font-bold text-xl text-navy">Maintaining Discipline</h4>
              <p className="font-body text-sm text-navy/60 leading-relaxed italic">Assisting the faculty in maintaining decorum within the school premises and during events.</p>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-white shadow-lg">
                <Users size={28} />
              </div>
              <h4 className="font-heading font-bold text-xl text-navy">Peer Mentoring</h4>
              <p className="font-body text-sm text-navy/60 leading-relaxed italic">Acting as approachable bridge between the student body and the management.</p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="w-14 h-14 rounded-2xl bg-gold flex items-center justify-center text-white shadow-lg">
                <Award size={28} />
              </div>
              <h4 className="font-heading font-bold text-xl text-navy">Event Management</h4>
              <p className="font-body text-sm text-navy/60 leading-relaxed italic">Taking the lead in organizing inter-school fests, sports meets, and cultural celebrations.</p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center text-white shadow-lg">
                <Flag size={28} />
              </div>
              <h4 className="font-heading font-bold text-xl text-navy">House Spirit</h4>
              <p className="font-body text-sm text-navy/60 leading-relaxed italic">Encouraging participation in inter-house competitions and building collective house pride.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-12 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <BookOpen className="text-accent mx-auto mb-8 animate-bounce-slow" size={48} />
          <h2 className="font-heading font-bold text-3xl md:text-5xl italic leading-tight">
            "Leaders are not born, they are made. At MMPS, we make them with integrity, empathy, and vision."
          </h2>
          <div className="w-20 h-1.5 bg-accent mx-auto mt-10 rounded-full"></div>
        </div>
      </section>
    </div>
  );
}
