import React, { useEffect } from 'react';
import PageHero from '../components/ui/PageHero';
import { Microscope, Globe2, Calculator, Binary, BookOpen, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const subjects = [
  { icon: BookOpen, name: 'English Language & Literature', color: 'bg-sky-500' },
  { icon: BookOpen, name: 'Hindi & Sanskrit', color: 'bg-saffron-600' },
  { icon: Calculator, name: 'Mathematics', color: 'bg-primary' },
  { icon: Microscope, name: 'Science (Physics, Chemistry, Biology)', color: 'bg-green-500' },
  { icon: Globe2, name: 'Social Science (History, Geography, Civics)', color: 'bg-amber-500' },
  { icon: Binary, name: 'Information Technology', color: 'bg-indigo-500' },
];

const skills = [
  {
    title: 'Critical Thinking',
    desc: 'Students are challenged to question, analyse, and evaluate information — not just recall it.',
  },
  {
    title: 'Research & Projects',
    desc: 'Subject-integrated projects teach research methodology, presentation, and independent study habits.',
  },
  {
    title: 'Laboratory Work',
    desc: 'Regular science lab experiments build practical understanding and scientific temperament.',
  },
  {
    title: 'Digital Literacy',
    desc: 'IT classes equip students with software skills, digital ethics, and introductory coding.',
  },
  {
    title: 'Public Speaking',
    desc: 'Debate, elocution, and MUN participation build confidence and articulation.',
  },
  {
    title: 'Exam Strategy',
    desc: 'Structured test preparation from Grade VIII ensures smooth Board exam readiness.',
  },
];

const highlights = [
  'CBSE curriculum with NCERT textbooks, enriched by school-curated materials',
  'Separate, well-equipped Science and Computer labs for hands-on learning',
  'Weekly 45-minute remedial support sessions available for all subjects',
  'Regular inter-class and inter-house academic competitions',
  'Pre-Board mock tests from Grade IX to build examination temperament',
  'Parent-Teacher Meetings every quarter for personalised progress feedback',
];

export default function Middle() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-ivory flex flex-col min-h-screen">
      <PageHero
        title="Middle School Programme"
        subtitle="Grade VI – VIII · Developing analytical thinking, scientific curiosity, and independent learning."
        image="/images/infrastructure.png"
      />

      {/* Programme Overview */}
      <section className="py-12 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="/images/infrastructure.png"
                  alt="Middle School at MMPS"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Lab card overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center">
                  <Microscope size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="font-heading font-bold text-navy text-sm">Lab-Integrated</p>
                  <p className="font-body text-xs text-navy/50">Science Learning</p>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-5">
                <Lightbulb size={14} />
                Ages 11 – 14 Years · Grade VI to VIII
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-5 leading-tight">
                Where Learning Gets<br />
                <span className="text-accent">Deeper & Broader</span>
              </h2>
              <p className="font-body text-navy/60 leading-relaxed mb-6">
                Middle School at MMPS marks a pivotal transition. Students begin engaging with
                complex ideas across multiple disciplines — moving from foundational knowledge to
                independent analytical thinking.
              </p>
              <p className="font-body text-navy/60 leading-relaxed mb-8">
                Our teachers act as mentors, guiding students through the transition of early adolescence
                while keeping them focused, motivated, and intellectually engaged.
              </p>

              <ul className="space-y-3">
                {highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 font-body text-navy/70 text-sm">
                    <CheckCircle2 size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="py-12 md:py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-3">
              Subjects <span className="text-accent">& Curriculum</span>
            </h2>
            <p className="font-body text-navy/60 max-w-xl mx-auto">
              A comprehensive CBSE-aligned curriculum covering core academics and digital skills.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((s, i) => (
              <div key={i} className="group flex items-center gap-5 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <s.icon size={22} className="text-white" />
                </div>
                <p className="font-heading font-semibold text-navy">{s.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Developed */}
      <section className="py-12 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-3">
              Skills We <span className="text-primary">Develop</span>
            </h2>
            <p className="font-body text-navy/60 max-w-xl mx-auto">
              Beyond NCERT textbooks, Middle School at MMPS builds skills that last a lifetime.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {skills.map((s, i) => (
              <div key={i} className="group relative bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-primary/20 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-heading font-semibold text-navy text-lg mb-2">{s.title}</h3>
                <p className="font-body text-navy/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Banner */}
      <section className="py-10 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '6', label: 'Core Subjects' },
              { value: '3', label: 'Labs Available' },
              { value: 'Weekly', label: 'Remedial Classes' },
              { value: '4x', label: 'PTMs per Year' },
            ].map((s, i) => (
              <div key={i}>
                <p className="font-heading font-bold text-4xl text-gold mb-1">{s.value}</p>
                <p className="font-body text-white/60 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="font-heading font-bold text-2xl text-navy mb-3">Admissions Open for 2026-27</h3>
          <p className="font-body text-navy/60 mb-7">Secure a place in our Middle School for your child today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions/register" className="px-8 py-4 bg-accent text-white font-heading font-semibold rounded-full hover:bg-red-700 transition-colors shadow-md flex items-center justify-center gap-2">
              Register Now <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="px-8 py-4 border-2 border-primary text-primary font-heading font-semibold rounded-full hover:bg-primary hover:text-white transition-all">
              Contact Admissions Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
