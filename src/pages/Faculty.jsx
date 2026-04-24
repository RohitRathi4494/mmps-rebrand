import React, { useEffect } from 'react';
import PageHero from '../components/ui/PageHero';
import { Mail, Briefcase } from 'lucide-react';

const facultyGroups = [
  {
    category: 'Leadership',
    members: [
      { name: 'Mrs. ABC', role: 'Principal', qualification: 'M.A., B.Ed.', experience: '25+ Years', image: 'https://source.unsplash.com/400x500/?professional,woman' },
      { name: 'Mr. XYZ', role: 'Vice Principal', qualification: 'M.Sc., B.Ed.', experience: '20+ Years', image: 'https://source.unsplash.com/400x500/?professional,man' },
    ]
  },
  {
    category: 'Secondary & Senior Secondary',
    members: [
      { name: 'Ms. Priya Sharma', role: 'PGT English', qualification: 'M.A., B.Ed.', experience: '12 Years', image: 'https://source.unsplash.com/400x500/?teacher,woman,1' },
      { name: 'Mr. Rajesh Kumar', role: 'PGT Mathematics', qualification: 'M.Sc., B.Ed.', experience: '15 Years', image: 'https://source.unsplash.com/400x500/?teacher,man,1' },
      { name: 'Dr. Sunita Gupta', role: 'PGT Chemistry', qualification: 'Ph.D., M.Sc.', experience: '10 Years', image: 'https://source.unsplash.com/400x500/?teacher,woman,2' },
      { name: 'Mr. Amit Singh', role: 'PGT Physics', qualification: 'M.Sc., M.Phil', experience: '14 Years', image: 'https://source.unsplash.com/400x500/?teacher,man,2' },
    ]
  },
  {
    category: 'Primary & Middle Wing',
    members: [
      { name: 'Ms. Neha Verma', role: 'TGT Social Studies', qualification: 'M.A., B.Ed.', experience: '8 Years', image: 'https://source.unsplash.com/400x500/?teacher,woman,3' },
      { name: 'Ms. Kavita Rai', role: 'TGT Science', qualification: 'M.Sc., B.Ed.', experience: '9 Years', image: 'https://source.unsplash.com/400x500/?teacher,woman,4' },
      { name: 'Mr. Vikas Reddy', role: 'Physical Education', qualification: 'M.P.Ed.', experience: '11 Years', image: 'https://source.unsplash.com/400x500/?teacher,man,3' },
      { name: 'Ms. Anju Bala', role: 'PRT All Subjects', qualification: 'B.A., B.Ed.', experience: '6 Years', image: 'https://source.unsplash.com/400x500/?teacher,woman,5' },
    ]
  }
];

export default function Faculty() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-ivory flex flex-col min-h-screen">
      <PageHero 
        title="Our Faculty" 
        subtitle="Dedicated educators committed to nurturing minds and building character through passion and expertise."
        image="https://source.unsplash.com/1600x900/?teachers,classroom,education"
      />

      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-24">
            {facultyGroups.map((group, idx) => (
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
      <section className="py-20 bg-ivory">
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
