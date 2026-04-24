import React, { useEffect } from 'react';
import PageHero from '../components/ui/PageHero';
import { Briefcase, MapPin, Clock, ArrowRight, Mail, Search } from 'lucide-react';

const jobs = [
  { title: 'PGT Political Science', department: 'Senior Wing', type: 'Full-Time', location: 'Section 4, Gurugram', date: 'Posted 2 days ago' },
  { title: 'TGT Mathematics', department: 'Middle Wing', type: 'Full-Time', location: 'Section 4, Gurugram', date: 'Posted 5 days ago' },
  { title: 'Front Desk Executive', department: 'Administration', type: 'Full-Time', location: 'Section 4, Gurugram', date: 'Posted 1 week ago' },
];

export default function Careers() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-ivory flex flex-col min-h-screen">
      <PageHero 
        title="Join Our Team" 
        subtitle="Empower the next generation. Join a passionate community of educators committed to excellence and values."
        image="https://source.unsplash.com/1600x900/?interview,office,meeting"
      />

      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-navy mb-4">Current <span className="text-primary italic">Openings</span></h2>
              <p className="font-body text-navy/60 text-lg">We are looking for dedicated professionals who share our vision and values.</p>
            </div>
            <div className="w-full lg:w-96 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/40" size={20} />
              <input type="text" placeholder="Search roles..." className="w-full bg-ivory rounded-2xl border-none focus:ring-2 focus:ring-primary/20 p-4 pl-12 font-body" />
            </div>
          </div>

          <div className="space-y-6">
            {jobs.map((job, idx) => (
              <div key={idx} className="bg-ivory rounded-[2.5rem] p-8 md:p-10 border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 hover:shadow-xl hover:bg-white transition-all duration-300 group">
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">{job.department}</span>
                    <span className="bg-navy/5 text-navy/40 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">{job.type}</span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-navy mb-4 group-hover:text-primary transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap gap-6 text-navy/40 font-body text-xs font-semibold">
                    <span className="flex items-center gap-2"><MapPin size={14} /> {job.location}</span>
                    <span className="flex items-center gap-2"><Clock size={14} /> {job.date}</span>
                  </div>
                </div>
                <button className="w-full md:w-auto bg-navy text-white font-heading font-bold px-10 py-4 rounded-xl shadow-lg hover:bg-accent transition-all flex items-center justify-center gap-2">
                  Apply Now <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>

          {/* General Application CTA */}
          <div className="mt-24 p-10 md:p-16 bg-navy rounded-[3.5rem] shadow-2xl relative overflow-hidden text-center text-white">
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
            <div className="relative z-10">
              <Mail className="mx-auto mb-8 text-accent animate-pulse-glow" size={48} />
              <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">Can't Find a Relevant Role?</h2>
              <p className="font-body text-white/50 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">Send us your CV anyway! We are always building our talent pool for future opportunities at the school.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href="mailto:careers@mmps.edu.in" className="w-full sm:w-auto bg-white text-navy font-heading font-bold px-10 py-5 rounded-full hover:bg-gold-400 transition-colors">
                  Email your CV
                </a>
                <span className="font-body text-white/40 text-sm italic">Or contact HR: +91 0124-4570666</span>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
