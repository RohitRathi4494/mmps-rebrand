import React, { useEffect } from 'react';
import PageHero from '../components/ui/PageHero';
import { Pencil, Book, GraduationCap, Microscope, Palette, Binary, Music, Trophy } from 'lucide-react';
import { cn } from '../lib/utils';

const levels = [
  {
    title: 'Nursery to Grade V',
    subtitle: 'Nurturing curiosity & foundational skills through activity-based learning.',
    icon: Pencil,
    color: 'bg-green-500',
    subjects: ['English & Hindi', 'Mathematics', 'Environmental Studies', 'Arts & Crafts', 'Introductory Computer Science'],
    features: ['Joyful Learning', 'Focus on Handwriting', 'Interactive Storytelling', 'Indoor Activity Rooms']
  },
  {
    title: 'Grade VI to X',
    subtitle: 'Developing analytical thinking and structured subject understanding.',
    icon: Book,
    color: 'bg-primary',
    subjects: ['Science (Physics, Chem, Bio)', 'Mathematics', 'Social Science', 'Languages', 'Information Technology'],
    features: ['Laboratory Experiments', 'Remedial Classes', 'Project-Based Learning', 'National Level Exhibitions']
  },
  {
    title: 'Grade XI & XII',
    subtitle: 'Advanced specialization and preparation for competitive futures.',
    icon: GraduationCap,
    color: 'bg-accent',
    streams: ['Science (Medical & Non-Medical)', 'Commerce', 'Humanities'],
    subjects: ['Physics, Chemistry, Biology/Math', 'Accountancy, Business Studies, Econ', 'History, Pol Science, Geography'],
    features: ['Career Counseling', 'Competitive Exam Prep', 'Subject Expert Mentors', 'Modern Lab Access']
  }
];

export default function Academics() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-ivory flex flex-col min-h-screen">
      <PageHero 
        title="Academic Excellence" 
        subtitle="Our curriculum is designed to foster intellectual growth, creativity, and social responsibility across all levels."
        image="/images/library.png"
      />

      {/* Curriculum Blocks */}
      <section className="py-12 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 md:space-y-32">
            {levels.map((level, idx) => {
              const Icon = level.icon;
              return (
                <div key={idx} className={cn(
                  "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center",
                  idx % 2 !== 0 && "lg:flex-row-reverse"
                )}>
                  
                  {/* Visual Side */}
                  <div className={cn(
                    "lg:col-span-5 relative group",
                    idx % 2 !== 0 && "lg:order-2"
                  )}>
                    <div className={cn("absolute -inset-4 rounded-[3rem] blur-2xl opacity-20", level.color)}></div>
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5]">
                      <img 
                        src={idx === 0 ? "/images/holistic.png" : idx === 1 ? "/images/classroom.png" : "/images/faculty.png"} 
                        alt={level.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className={cn("inline-flex p-3 rounded-2xl text-white mb-4 shadow-lg", level.color)}>
                          <Icon size={24} />
                        </div>
                        <h3 className="font-heading font-bold text-2xl text-white">{level.title}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={cn(
                    "lg:col-span-7",
                    idx % 2 !== 0 && "lg:order-1"
                  )}>
                    <h2 className="font-heading font-bold text-3xl md:text-5xl text-navy mb-6">{level.title}</h2>
                    <p className="font-body text-navy/60 text-lg mb-10 leading-relaxed italic">{level.subtitle}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                      <div>
                        <h4 className="font-heading font-bold text-lg text-primary mb-6 flex items-center gap-2">
                          <Book size={20} /> Subjects Covered
                        </h4>
                        <ul className="space-y-3">
                          {(level.subjects || level.streams).map((sub, sidx) => (
                            <li key={sidx} className="font-body text-navy/70 flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                              {sub}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-lg text-primary mb-6 flex items-center gap-2">
                          <Trophy size={20} /> Key Features
                        </h4>
                        <ul className="space-y-3">
                          {level.features.map((feature, fidx) => (
                            <li key={fidx} className="font-body text-navy/70 flex items-center gap-2">
                              <CheckCircle size={14} className="text-green-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lab Tour Mini-Section */}
      <section className="py-12 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">State-of-the-Art <span className="text-gold italic">Laboratories</span></h2>
            <p className="font-body text-white/50 text-lg max-w-2xl mx-auto">Where theory meets practice. Our labs are the centers of discovery and innovation.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Microscope, name: 'Science Labs' },
              { icon: Binary, name: 'Computer Labs' },
              { icon: Music, name: 'Music Studio' },
              { icon: Palette, name: 'Arts Studio' },
            ].map((lab, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center hover:bg-white/10 transition-colors group">
                <lab.icon className="mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" size={40} />
                <h4 className="font-heading font-bold text-lg">{lab.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function CheckCircle({ size, className }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
