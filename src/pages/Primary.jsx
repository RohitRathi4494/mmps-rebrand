import React, { useEffect } from 'react';
import PageHero from '../components/ui/PageHero';
import { BookOpen, Brain, Users, Trophy, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const subjects = [
  { emoji: '📖', name: 'English Language & Literature', desc: 'Grammar, reading comprehension, writing, and communication.' },
  { emoji: '📝', name: 'Hindi Language', desc: 'Reading, writing, grammar, and composition in Hindi.' },
  { emoji: '🔢', name: 'Mathematics', desc: 'Arithmetic, geometry, data handling, and mental math.' },
  { emoji: '🌍', name: 'Environmental Studies (EVS)', desc: 'Science, social science, and environment integrated into one subject.' },
  { emoji: '💻', name: 'Computer Science', desc: 'Basic computer literacy, MS Office, and introductory programming.' },
  { emoji: '🎨', name: 'Art Education', desc: 'Visual arts, crafts, and creative expression.' },
];

const pedagogy = [
  { icon: Brain, title: 'Experiential Learning', desc: 'Concepts are taught through hands-on projects, experiments, and real-world examples rather than rote memorisation.' },
  { icon: Users, title: 'Collaborative Classrooms', desc: 'Group activities and peer learning help students develop communication, empathy, and teamwork from an early age.' },
  { icon: BookOpen, title: 'Reading Culture', desc: 'Weekly library sessions, book clubs, and reading challenges cultivate a lifelong love of reading.' },
  { icon: Trophy, title: 'Continuous Assessment', desc: 'Project-based assessments and periodic tests give a holistic picture of each student\'s progress.' },
];

const values = [
  'Develops foundational literacy and numeracy that supports all future learning',
  'Builds scientific curiosity through EVS exploration and activity-based science',
  'Integrates values education — respect, responsibility, and compassion',
  'Prepares students emotionally and academically for middle school transition',
  'Dedicated remedial support ensures no child is left behind',
];

export default function Primary() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-ivory flex flex-col min-h-screen">
      <PageHero
        title="Primary Programme"
        subtitle="Grade I – V · Building strong foundations in literacy, numeracy, and character."
        image="/images/classroom.png"
      />

      {/* Overview */}
      <section className="py-12 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-sm font-medium mb-5">
                <BookOpen size={14} />
                Ages 6 – 11 Years · Class I to V
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-5 leading-tight">
                Where Curiosity Becomes<br />
                <span className="text-accent">Knowledge</span>
              </h2>
              <p className="font-body text-navy/60 leading-relaxed mb-6">
                The Primary years at MMPS are designed to ignite intellectual curiosity while building
                the core academic skills every child needs. We believe that when children are engaged
                and feel safe, remarkable learning happens naturally.
              </p>
              <p className="font-body text-navy/60 leading-relaxed mb-8">
                Our CBSE-aligned curriculum is enriched with activity-based teaching methodologies,
                ensuring students don't just memorise — they understand, question, and create.
              </p>

              {/* Key Points */}
              <ul className="space-y-3">
                {values.map((v, i) => (
                  <li key={i} className="flex items-start gap-3 font-body text-navy/70 text-sm">
                    <CheckCircle2 size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="/images/classroom.png"
                  alt="Primary class at MMPS"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Stats trio */}
              <div className="absolute -bottom-8 left-0 right-0 mx-8 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 grid grid-cols-3 divide-x divide-gray-100">
                {[
                  { value: 'Gr. I–V', label: 'Classes' },
                  { value: '25:1', label: 'Student Ratio' },
                  { value: 'CBSE', label: 'Curriculum' },
                ].map((s, i) => (
                  <div key={i} className="text-center px-3">
                    <p className="font-heading font-bold text-primary text-lg">{s.value}</p>
                    <p className="font-body text-xs text-navy/50">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-12 md:py-10 bg-gray-50 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-3">
              Subjects <span className="text-accent">Offered</span>
            </h2>
            <p className="font-body text-navy/60 max-w-xl mx-auto">
              A balanced mix of core academics and creative subjects following the NCERT-CBSE framework.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {subjects.map((s, i) => (
              <div key={i} className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform inline-block">{s.emoji}</div>
                <h3 className="font-heading font-semibold text-navy text-lg mb-2">{s.name}</h3>
                <p className="font-body text-navy/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pedagogy */}
      <section className="py-12 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-3">
              Our <span className="text-primary">Teaching Approach</span>
            </h2>
            <p className="font-body text-navy/60 max-w-xl mx-auto">
              We go beyond textbooks to make learning meaningful, joyful, and effective.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
            {pedagogy.map((p, i) => (
              <div key={i} className="group text-center bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-white/20 flex items-center justify-center mx-auto mb-5 transition-colors">
                  <p.icon size={26} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-white">{p.title}</h3>
                <p className="font-body text-sm leading-relaxed text-navy/60 group-hover:text-white/70">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Academics */}
      <section className="py-10 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-10">
          {[
            { emoji: '🏅', title: 'Inter-House Quiz', desc: 'Weekly quiz competitions encourage academic pride and healthy competition.' },
            { emoji: '📚', title: 'Library Period', desc: 'Dedicated weekly library slots foster independent reading habits from Grade I.' },
            { emoji: '🎭', title: 'Cultural Activities', desc: 'Annual days, festivals, and talent shows bring joy and confidence to young performers.' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-5">
              <div className="text-4xl flex-shrink-0">{item.emoji}</div>
              <div>
                <h4 className="font-heading font-bold text-white text-lg mb-1">{item.title}</h4>
                <p className="font-body text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="font-heading font-bold text-2xl text-navy mb-3">Enrol for the 2026-27 Session</h3>
          <p className="font-body text-navy/60 mb-7">Give your child the best Primary education experience in Gurugram.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions/register" className="px-8 py-4 bg-accent text-white font-heading font-semibold rounded-full hover:bg-red-700 transition-colors shadow-md flex items-center justify-center gap-2">
              Register Now <ArrowRight size={18} />
            </Link>
            <Link to="/admissions/fee-structure" className="px-8 py-4 border-2 border-primary text-primary font-heading font-semibold rounded-full hover:bg-primary hover:text-white transition-all">
              View Fee Structure
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
