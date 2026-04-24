import React, { useEffect } from 'react';
import PageHero from '../components/ui/PageHero';
import { Mail, Briefcase } from 'lucide-react';

const facultyGroups = [
  {
    category: 'Leadership',
    members: [
      { name: 'Dr. (Mrs.) R. Sharma', role: 'Principal', qualification: 'M.A., B.Ed., Ph.D.', experience: '25+ Years', image: '/images/teacher-f2.png' },
      { name: 'Mr. A. K. Singh', role: 'Vice Principal', qualification: 'M.Sc., B.Ed.', experience: '20+ Years', image: '/images/teacher-m2.png' },
    ]
  },
  {
    category: 'Senior & Secondary Wing',
    members: [
      { name: 'Ms. Priya Sharma', role: 'PGT English', qualification: 'M.A., B.Ed.', experience: '12 Years', image: '/images/teacher-f1.png' },
      { name: 'Mr. Rajesh Kumar', role: 'PGT Mathematics', qualification: 'M.Sc., B.Ed.', experience: '15 Years', image: '/images/teacher-m1.png' },
      { name: 'Dr. Sunita Gupta', role: 'PGT Chemistry', qualification: 'Ph.D., M.Sc.', experience: '10 Years', image: '/images/teacher-f2.png' },
      { name: 'Mr. Amit Singh', role: 'PGT Physics', qualification: 'M.Sc., M.Phil', experience: '14 Years', image: '/images/teacher-m2.png' },
    ]
  },
  {
    category: 'Primary & Middle Wing',
    members: [
      { name: 'Ms. Neha Verma', role: 'TGT Social Studies', qualification: 'M.A., B.Ed.', experience: '8 Years', image: '/images/teacher-f1.png' },
      { name: 'Ms. Kavita Rai', role: 'TGT Science', qualification: 'M.Sc., B.Ed.', experience: '9 Years', image: '/images/teacher-f2.png' },
      { name: 'Mr. Vikas Reddy', role: 'Physical Education', qualification: 'M.P.Ed.', experience: '11 Years', image: '/images/teacher-m1.png' },
      { name: 'Ms. Anju Bala', role: 'PRT All Subjects', qualification: 'B.A., B.Ed.', experience: '6 Years', image: '/images/teacher-f1.png' },
    ]
  }
];

import cmsFaculty from '../content/data/faculty.json';

// Group dynamic faculty by department
const dynamicFacultyGroups = Array.from(new Set(cmsFaculty.map(m => m.department))).map(dept => ({
  category: dept,
  members: cmsFaculty.filter(m => m.department === dept && m.active !== false)
}));

// Combine with static groups
const allFacultyGroups = [...dynamicFacultyGroups, ...facultyGroups];

export default function Faculty() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-ivory flex flex-col min-h-screen">
      <PageHero 
        title="Our Faculty" 
        subtitle="Dedicated educators committed to nurturing minds and building character through passion and expertise."
        image="/images/classroom-students.png"
      />

      {/* Quick Stats Strip */}
      <section className="bg-navy py-12 border-t-8 border-accent">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 text-center">
          {[
            { metric: '50+', label: 'Expert Teachers' },
            { metric: '15 Yrs', label: 'Avg. Experience' },
            { metric: '1:20', label: 'Teacher-Student Ratio' },
            { metric: '100%', label: 'CBSE Certified' },
          ].map((s, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-heading font-bold text-3xl md:text-4xl text-white mb-2">{s.metric}</span>
              <span className="font-body text-white/50 text-xs uppercase tracking-widest">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-24">
            {allFacultyGroups.map((group, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-6 mb-12">
                  <h2 className="font-heading font-bold text-3xl text-navy">{group.category}</h2>
                  <div className="h-px bg-gray-100 flex-grow"></div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {group.members.map((member, midx) => (
                    <div key={midx} className="flex flex-col group">
                      <div className="relative rounded-3xl overflow-hidden shadow-sm aspect-[4/5] mb-6">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2 translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                          <button className="p-2 bg-white/20 backdrop-blur rounded-lg text-white hover:bg-accent transition-colors">
                            <Mail size={18} />
                          </button>
                          <button className="p-2 bg-white/20 backdrop-blur rounded-lg text-white hover:bg-accent transition-colors">
                            <Briefcase size={18} />
                          </button>
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-xl text-navy mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                      <p className="font-body text-primary font-semibold text-sm mb-2 uppercase tracking-wider">{member.role}</p>
                      <div className="flex flex-col gap-1">
                        <p className="font-body text-xs text-navy/40">Credential: <span className="text-navy/60 underline decoration-gold-400 underline-offset-2">{member.qualification}</span></p>
                        <p className="font-body text-xs text-navy/40">Experience: <span className="text-navy/60">{member.experience}</span></p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
      
      {/* Join Us CTA */}
      <section className="py-12 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl text-navy mb-6">Want to Join Our Team?</h2>
          <p className="font-body text-navy/60 text-lg mb-10 leading-relaxed">We are always looking for passionate educators who want to make a difference in the lives of children. Check our careers page for current openings.</p>
          <a href="/careers" className="inline-block bg-primary text-white font-heading font-bold px-10 py-4 rounded-full shadow-xl shadow-primary/20 hover:bg-primary-700 transition-all hover:-translate-y-1">
            Browse Career Openings
          </a>
        </div>
      </section>
    </div>
  );
}
