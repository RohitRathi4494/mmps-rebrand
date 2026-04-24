import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    label: 'Pre-Primary',
    grades: 'Nursery · LKG · UKG',
    emoji: '🌱',
    tagline: 'Play. Discover. Grow.',
    bullets: ['Joy-based learning', 'Sensory & motor play', 'Language development', 'Low student-teacher ratio'],
    path: '/academics/pre-primary',
    accent: '#22c55e',       // green
    bgClass: 'bg-green-600',
    lightClass: 'bg-green-50',
    textClass: 'text-green-700',
    image: '/images/holistic.png',
  },
  {
    label: 'Primary',
    grades: 'Grade I – V',
    emoji: '📗',
    tagline: 'Curiosity. Skills. Values.',
    bullets: ['CBSE / NCERT framework', 'Activity-based teaching', 'Weekly library sessions', 'Remedial support'],
    path: '/academics/primary',
    accent: '#0ea5e9',       // sky
    bgClass: 'bg-sky-600',
    lightClass: 'bg-sky-50',
    textClass: 'text-sky-700',
    image: '/images/classroom.png',
  },
  {
    label: 'Middle School',
    grades: 'Grade VI – VIII',
    emoji: '🔬',
    tagline: 'Analyse. Question. Excel.',
    bullets: ['Science & Computer labs', 'Critical thinking focus', 'Project-based learning', 'Pre-Board preparation'],
    path: '/academics/middle',
    accent: '#1a2456',       // navy (primary)
    bgClass: 'bg-primary',
    lightClass: 'bg-primary/10',
    textClass: 'text-primary',
    image: '/images/infrastructure.png',
  },
  {
    label: 'Senior Years',
    grades: 'Grade XI – XII',
    emoji: '🎓',
    tagline: 'Stream. Specialise. Succeed.',
    bullets: ['Science / Commerce / Arts', 'Expert subject faculty', 'JEE / NEET coaching', 'Career counselling'],
    path: '/academics/senior',
    accent: '#c41e3a',       // accent / red
    bgClass: 'bg-accent',
    lightClass: 'bg-red-50',
    textClass: 'text-accent',
    image: '/images/faculty.png',
  },
];

export default function AcademicPrograms() {
  return (
    <section className="py-12 md:py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              📚 Academic Programmes
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-navy mb-3">
              Education That <span className="text-accent">Empowers</span>
            </h2>
            <p className="font-body text-navy/60 text-lg max-w-lg">
              Carefully designed curricula for every developmental stage — from playful beginnings to career-ready seniors.
            </p>
          </div>
          <Link
            to="/academics"
            className="hidden md:inline-flex items-center gap-2 text-primary font-heading font-semibold hover:text-accent transition-colors mt-4 md:mt-0 flex-shrink-0"
          >
            Full Curriculum Overview <ArrowRight size={18} />
          </Link>
        </div>

        {/* Program Cards — 4-column image cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, i) => (
            <Link
              key={i}
              to={prog.path}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 hover:-translate-y-2 transition-all duration-400 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: '200px' }}>
                <img
                  src={prog.image}
                  alt={prog.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {/* Grade badge */}
                <div className="absolute bottom-3 left-3">
                  <span className={`inline-block px-3 py-1 rounded-full ${prog.bgClass} text-white text-xs font-heading font-bold opacity-90`}>
                    {prog.grades}
                  </span>
                </div>
                {/* Emoji */}
                <div className="absolute top-3 right-3 text-2xl">
                  {prog.emoji}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-xl text-navy mb-1">{prog.label}</h3>
                <p className={`font-body text-sm font-medium mb-4 ${prog.textClass}`}>{prog.tagline}</p>

                <ul className="space-y-1.5 mb-5 flex-1">
                  {prog.bullets.map((b, j) => (
                    <li key={j} className="flex items-center gap-2 font-body text-navy/60 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: prog.accent }} />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className={`flex items-center gap-1.5 font-heading font-semibold text-sm ${prog.textClass} group-hover:gap-3 transition-all`}>
                  Explore Programme <ArrowRight size={15} />
                </div>
              </div>

              {/* Bottom accent bar */}
              <div className={`h-1 w-full ${prog.bgClass} rounded-b-3xl`} />
            </Link>
          ))}
        </div>

        {/* Mobile link */}
        <div className="mt-10 md:hidden flex justify-center">
          <Link
            to="/academics"
            className="flex items-center gap-2 px-7 py-3 bg-white border-2 border-primary shadow-sm rounded-full text-primary font-heading font-semibold"
          >
            Full Curriculum Overview <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
