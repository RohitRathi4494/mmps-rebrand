import React, { useEffect } from 'react';
import PageHero from '../components/ui/PageHero';
import { GraduationCap, FlaskConical, BookOpen, TrendingUp, Users, Briefcase, CheckCircle2, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const streams = [
  {
    name: 'Science (Medical)',
    color: 'border-green-500',
    headerColor: 'bg-green-500',
    icon: FlaskConical,
    subjects: ['Physics', 'Chemistry', 'Biology', 'English (Core)', 'Mathematics / Physical Education'],
    careers: ['Medicine & Surgery (MBBS)', 'Pharmacy & Life Sciences', 'Biotechnology & Research', 'Nursing & Allied Health'],
  },
  {
    name: 'Science (Non-Medical)',
    color: 'border-sky-500',
    headerColor: 'bg-sky-500',
    icon: TrendingUp,
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'English (Core)', 'Computer Science / Physical Education'],
    careers: ['Engineering (IIT/NIT)', 'Architecture & Design', 'Data Science & AI', 'Defence & Aviation'],
  },
  {
    name: 'Commerce',
    color: 'border-primary',
    headerColor: 'bg-primary',
    icon: Briefcase,
    subjects: ['Accountancy', 'Business Studies', 'Economics', 'English (Core)', 'Mathematics / Information Practices'],
    careers: ['CA / CMA / CS', 'MBA & Business Management', 'Finance & Banking', 'Entrepreneurship'],
  },
  {
    name: 'Humanities',
    color: 'border-purple-500',
    headerColor: 'bg-purple-500',
    icon: BookOpen,
    subjects: ['History', 'Political Science', 'Geography / Sociology', 'English (Core)', 'Hindi / Psychology'],
    careers: ['Civil Services (IAS/IPS)', 'Law & Journalism', 'Social Work & NGOs', 'Teaching & Academia'],
  },
];

const support = [
  {
    icon: GraduationCap,
    title: 'Career Counselling',
    desc: 'One-on-one sessions with our in-house counsellor help Grade XI students choose the right stream and career path aligned with their strengths.',
  },
  {
    icon: Users,
    title: 'Mentorship Programme',
    desc: 'Each student is assigned a subject mentor — an experienced teacher who provides personalised academic guidance throughout the year.',
  },
  {
    icon: TrendingUp,
    title: 'Competitive Exam Prep',
    desc: 'Structured preparation support for JEE, NEET, CUET, and CLAT through special coaching sessions alongside regular schoolwork.',
  },
  {
    icon: BookOpen,
    title: 'Pre-Board Practice',
    desc: 'Multiple pre-Board exams with detailed feedback simulate the Board environment and significantly improve final results.',
  },
];

const results = [
  { value: '100%', label: '5 Years Straight', sub: 'Board Pass Rate' },
  { value: '12+', label: 'Students Above 95%', sub: 'Last Cycle' },
  { value: '40+', label: 'Top Universities', sub: 'Alumni Placed' },
  { value: 'JEE / NEET', label: 'Qualifiers Every Year', sub: 'Competitive Exams' },
];

export default function SeniorYears() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-ivory flex flex-col min-h-screen">
      <PageHero
        title="Senior Years Programme"
        subtitle="Grade XI & XII · Your chosen stream. Your future. Your launchpad."
        image="/images/faculty.png"
      />

      {/* Intro */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-5">
                <Star size={14} />
                Ages 15 – 17 Years · Grade XI & XII
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-5 leading-tight">
                The Most Important<br />
                <span className="text-accent">Two Years</span> of School
              </h2>
              <p className="font-body text-navy/60 leading-relaxed mb-6">
                The Senior Years at MMPS are designed to set students up for success — in Board
                examinations, competitive entrance tests, and life beyond school. We offer four
                stream specialisations under the CBSE framework, each with expert faculty and
                focused support structures.
              </p>
              <p className="font-body text-navy/60 leading-relaxed mb-8">
                Our approach combines rigorous academics with career exploration, so students leave
                not just with marks, but with direction, confidence, and a plan.
              </p>

              <div className="flex flex-wrap gap-3">
                {['4 Stream Options', 'Expert Subject Faculty', 'CBSE Board Focus', 'Career Counselling', 'Pre-Board Testing', 'Competitive Prep'].map((tag, i) => (
                  <span key={i} className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-body font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="/images/faculty.png"
                  alt="Senior students at MMPS"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-navy rounded-2xl shadow-xl p-5 text-white">
                <p className="font-heading font-bold text-3xl text-gold">100%</p>
                <p className="font-body text-xs text-white/60">Board Pass Rate</p>
                <p className="font-body text-xs text-white/40">5 Years Running</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stream Cards */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-3">
              Choose Your <span className="text-accent">Stream</span>
            </h2>
            <p className="font-body text-navy/60 max-w-xl mx-auto">
              All four streams are fully equipped with subject-specialist faculty and dedicated classrooms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-7">
            {streams.map((stream, i) => (
              <div key={i} className={`bg-white rounded-2xl border-t-4 ${stream.color} shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden`}>
                {/* Header */}
                <div className={`${stream.headerColor} px-7 py-5 text-white flex items-center gap-4`}>
                  <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center">
                    <stream.icon size={22} />
                  </div>
                  <h3 className="font-heading font-bold text-xl">{stream.name}</h3>
                </div>

                <div className="p-7 grid sm:grid-cols-2 gap-6">
                  {/* Subjects */}
                  <div>
                    <h4 className="font-heading font-semibold text-navy text-sm uppercase tracking-wide mb-3 flex items-center gap-2">
                      <BookOpen size={14} className="text-gray-400" />
                      Subjects
                    </h4>
                    <ul className="space-y-2">
                      {stream.subjects.map((sub, j) => (
                        <li key={j} className="font-body text-navy/70 text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                          {sub}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Careers */}
                  <div>
                    <h4 className="font-heading font-semibold text-navy text-sm uppercase tracking-wide mb-3 flex items-center gap-2">
                      <Briefcase size={14} className="text-gray-400" />
                      Career Paths
                    </h4>
                    <ul className="space-y-2">
                      {stream.careers.map((c, j) => (
                        <li key={j} className="font-body text-navy/70 text-sm flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Systems */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-3">
              Beyond the <span className="text-primary">Classroom</span>
            </h2>
            <p className="font-body text-navy/60 max-w-xl mx-auto">
              Every Senior student at MMPS has a support system built around their success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
            {support.map((s, i) => (
              <div key={i} className="group bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:bg-navy hover:border-navy hover:text-white transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-white/10 flex items-center justify-center mb-5 transition-colors">
                  <s.icon size={22} className="text-primary group-hover:text-gold transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-white">{s.title}</h3>
                <p className="font-body text-sm leading-relaxed text-navy/60 group-hover:text-white/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Showcase */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading font-bold text-3xl text-white mb-3">
              Our <span className="text-gold">Results Speak</span> for Themselves
            </h2>
            <p className="font-body text-white/50 max-w-xl mx-auto">
              Year after year, MMPS students achieve exceptional CBSE results and go on to top colleges.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((r, i) => (
              <div key={i} className="text-center">
                <p className="font-heading font-bold text-4xl md:text-5xl text-gold mb-1">{r.value}</p>
                <p className="font-body text-white/50 text-xs uppercase tracking-widest mb-0.5">{r.sub}</p>
                <p className="font-heading font-semibold text-white/80 text-sm">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="font-heading font-bold text-2xl text-navy mb-3">Start Your Senior Years at MMPS</h3>
          <p className="font-body text-navy/60 mb-7">Limited seats in each stream for 2026-27. Begin your admission process today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions/register" className="px-8 py-4 bg-accent text-white font-heading font-semibold rounded-full hover:bg-red-700 transition-colors shadow-md flex items-center justify-center gap-2">
              Apply Now <ArrowRight size={18} />
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
