import React, { useEffect } from 'react';
import PageHero from '../components/ui/PageHero';
import { ShieldCheck, Clock, UserCheck, AlertTriangle } from 'lucide-react';

const policies = [
  {
    icon: Clock,
    title: 'School Timing & Attendance',
    rules: [
      'School timings: 7:50 AM to 2:10 PM for Senior students.',
      'Arrival after 7:55 AM is considered late.',
      'Minimum 75% attendance is mandatory for appearing in exams.',
      'Leave application must be submitted in advance for planned absence.'
    ]
  },
  {
    icon: UserCheck,
    title: 'Code of Conduct',
    rules: [
      'Proper school uniform is mandatory on all working days.',
      'Maintain discipline and decorum within the school premises.',
      'Bullying, teasing, or any form of physical abuse is strictly prohibited.',
      'Students must respect school property and greenery.'
    ]
  },
  {
    icon: ShieldCheck,
    title: 'Academic Policy',
    rules: [
      'Regular submission of homework and assignments is evaluated.',
      'Cheating or any unfair means during exams will lead to rustication.',
      'Parent-Teacher Meetings (PTM) are mandatory for parents to attend.',
      'Promotion to the next class is strictly based on overall performance.'
    ]
  },
  {
    icon: AlertTriangle,
    title: 'Prohibited Items',
    rules: [
      'Mobile phones and electronic gadgets are strictly banned.',
      'Valuable jewellery or excessive cash should not be brought to school.',
      'Sharp objects or hazardous materials are strictly prohibited.',
      'Unethical literature or media is not allowed.'
    ]
  }
];

export default function RulesPolicy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-ivory flex flex-col min-h-screen">
      <PageHero 
        title="Rules & Policy" 
        subtitle="Ensuring a safe, disciplined, and productive environment for all members of the MMPS family."
        image="https://source.unsplash.com/1600x900/?law,rules,library"
      />

      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {policies.map((policy, idx) => {
              const Icon = policy.icon;
              return (
                <div key={idx} className="bg-ivory rounded-[3rem] p-10 md:p-14 border border-gray-100 hover:shadow-xl transition-all duration-500 flex flex-col group">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                    <Icon size={32} />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-navy mb-8 leading-tight">{policy.title}</h3>
                  <div className="h-0.5 w-12 bg-accent mb-8 rounded-full"></div>
                  
                  <ul className="space-y-4 flex-grow">
                    {policy.rules.map((rule, ridx) => (
                      <li key={ridx} className="flex gap-4 font-body text-navy/70 text-sm leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div>
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-24 p-10 md:p-16 bg-navy rounded-[3rem] text-white text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">Student Handbook</h2>
              <p className="font-body text-white/50 text-lg mb-10 max-w-2xl mx-auto">For a complete list of rules, regulations, and disciplinary actions, please download the updated Student Handbook for Session 2025-26.</p>
              <button className="bg-accent hover:bg-accent-600 text-white font-heading font-bold px-10 py-5 rounded-full transition-all shadow-xl shadow-accent/20 hover:-translate-y-1">
                Download PDF Handbook
              </button>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
