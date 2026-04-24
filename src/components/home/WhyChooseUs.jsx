import React from 'react';
import { Award, Leaf, BookOpen, MonitorPlay, Users, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: '30+ Years of Excellence',
    description: 'Nurturing generations since 1992 with a proven track record of academic and holistic success.',
    stat: '1992',
    statLabel: 'Est.',
    color: 'bg-primary',
    softBg: 'bg-primary/5',
    border: 'hover:border-primary/30',
  },
  {
    icon: Leaf,
    title: '5-Acre Green Campus',
    description: 'A serene, pollution-free environment fostering physical well-being and a calm state of mind.',
    stat: '5',
    statLabel: 'Acres',
    color: 'bg-green-500',
    softBg: 'bg-green-50',
    border: 'hover:border-green-200',
  },
  {
    icon: BookOpen,
    title: 'CBSE NEP Curriculum',
    description: 'Progressive educational framework blending deep Indian roots with a global outlook.',
    stat: '100%',
    statLabel: 'Results',
    color: 'bg-gold',
    softBg: 'bg-amber-50',
    border: 'hover:border-amber-200',
  },
  {
    icon: MonitorPlay,
    title: 'Smart Classrooms',
    description: 'Technology-enabled learning spaces that make education interactive, engaging, and effective.',
    stat: '30+',
    statLabel: 'Rooms',
    color: 'bg-sky-500',
    softBg: 'bg-sky-50',
    border: 'hover:border-sky-200',
  },
  {
    icon: Users,
    title: 'Expert Faculty',
    description: 'Highly qualified educators committed to providing personalized attention and mentorship.',
    stat: '60+',
    statLabel: 'Teachers',
    color: 'bg-violet-500',
    softBg: 'bg-violet-50',
    border: 'hover:border-violet-200',
  },
  {
    icon: HeartHandshake,
    title: 'Holistic Development',
    description: 'Extensive sports, arts, and co-curricular programs ensuring well-rounded student growth.',
    stat: '20+',
    statLabel: 'Clubs',
    color: 'bg-accent',
    softBg: 'bg-red-50',
    border: 'hover:border-red-200',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              ✦ Why MMPS
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-navy leading-tight">
              A School That<br />
              <span className="text-accent">Truly Cares</span>
            </h2>
          </div>
          <p className="font-body text-navy/60 text-lg leading-relaxed">
            For over three decades, we've been building more than just academics —
            we build character, confidence, and a lifelong love of learning.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className={`group relative bg-white rounded-2xl p-7 border border-gray-100 ${r.border} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden flex flex-col`}
              >
                {/* Top row: icon + stat */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${r.softBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} strokeWidth={1.5} className={`text-${r.color.replace('bg-', '')}`} style={{ color: 'currentColor' }} />
                  </div>
                  {/* Stat badge */}
                  <div className={`flex flex-col items-end`}>
                    <span className={`font-heading font-bold text-2xl text-navy`}>{r.stat}</span>
                    <span className="font-body text-xs text-navy/40 uppercase tracking-wider">{r.statLabel}</span>
                  </div>
                </div>

                <h3 className="font-heading font-bold text-xl text-navy mb-3">{r.title}</h3>
                <p className="font-body text-navy/60 leading-relaxed text-sm flex-1">{r.description}</p>

                {/* Bottom accent bar appears on hover */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${r.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-b-2xl`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
