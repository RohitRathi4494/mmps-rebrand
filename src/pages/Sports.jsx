import React, { useEffect } from 'react';
import PageHero from '../components/ui/PageHero';
import { Trophy, Target, Award, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sports() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const sports = [
    { name: 'Cricket', icon: '🏏', desc: 'Our flagship sport, hosting the annual MMMICT tournament with regional recognition.' },
    { name: 'Basketball', icon: '🏀', desc: 'State-of-the-art courts where students develop teamwork and agility.' },
    { name: 'Football', icon: '⚽', desc: 'Extensive greens for training and inter-house competitions.' },
    { name: 'Table Tennis', icon: '🏓', desc: 'Indoor specialized rooms for improving focus and precision.' },
  ];

  const mmmictHistory = [
    { edition: 'XXV', year: '2025', status: 'Ongoing', color: 'border-accent text-accent' },
    { edition: 'XXIV', year: '2024', status: 'Completed', color: 'border-navy text-navy' },
    { edition: 'XXIII', year: '2023', status: 'Completed', color: 'border-navy text-navy' },
    { edition: 'XXII', year: '2022', status: 'Completed', color: 'border-navy text-navy' },
  ];

  return (
    <div className="bg-ivory flex flex-col min-h-screen">
      <PageHero 
        title="Sports Excellence" 
        subtitle="Fostering discipline, spirit, and health through a wide range of athletic activities and tournaments."
        image="https://source.unsplash.com/1600x900/?cricket,pitch,stadium"
      />

      {/* MMMICT Highlight */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-navy rounded-[3rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[5rem]"></div>
                <Trophy className="text-gold mb-6" size={48} />
                <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">MMMICT <br/><span className="text-gold-400">Tournament</span></h2>
                <p className="font-body text-white/70 text-lg leading-relaxed mb-8">
                  The Maru Mal Memorial Inter-School Cricket Tournament (MMMICT) is a premier regional event that celebrates young athletic talent and sportsmanship. Since its inception, it has become a hallmark of MMPS sports legacy.
                </p>
                
                <div className="space-y-4 mb-10">
                  {mmmictHistory.map((item, idx) => (
                    <Link key={idx} to={`/mmmict-${item.year}`} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group">
                      <div className="flex items-center gap-4">
                        <span className="font-heading font-bold text-gold">{item.edition}</span>
                        <span className="font-body text-sm text-white/80">{item.year} Season</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">{item.status}</span>
                        <ArrowRight size={16} className="text-gold group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
                
                <p className="font-body text-sm text-white/50 italic text-center">Join us for the XXV MM ICT 2025 opening ceremonies this November!</p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative rounded-[3rem] overflow-hidden shadow-xl aspect-square lg:aspect-[4/5]">
                <img src="https://source.unsplash.com/800x1000/?cricket,player,batting" alt="Cricket Highlight" className="w-full h-full object-cover" />
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur rounded-2xl p-6 shadow-2xl border border-gray-100 flex flex-col items-center animate-bounce-slow">
                  <span className="font-heading font-bold text-4xl text-navy">25</span>
                  <span className="font-body text-[10px] uppercase font-bold text-navy/40 tracking-widest">Glorious Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sports Grid */}
      <section className="py-20 md:py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-navy mb-4">Multi-Sport <span className="text-primary italic">Culture</span></h2>
          <p className="font-body text-navy/60 text-lg mb-16 max-w-2xl mx-auto">Beyond cricket, we provide opportunities for students to excel in various physical disciplines.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sports.map((sport, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{sport.icon}</div>
                <h3 className="font-heading font-bold text-xl text-navy mb-3">{sport.name}</h3>
                <p className="font-body text-sm text-navy/60 leading-relaxed">{sport.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Infrastructure Bar */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex items-center gap-6">
            <Target className="text-accent" size={40} />
            <div>
              <h4 className="font-heading font-bold">5-Acre Grounds</h4>
              <p className="font-body text-xs text-white/50">Vast open spaces for outdoor training.</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Users className="text-primary" size={40} />
            <div>
              <h4 className="font-heading font-bold">Expert Coaching</h4>
              <p className="font-body text-xs text-white/50">National-level trainers for major sports.</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Award className="text-gold" size={40} />
            <div>
              <h4 className="font-heading font-bold">Inter-House Cups</h4>
              <p className="font-body text-xs text-white/50">Regular competitions to build house spirit.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
