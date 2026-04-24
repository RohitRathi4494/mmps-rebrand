import React, { useEffect, useState } from 'react';
import PageHero from '../components/ui/PageHero';
import { ClipboardCheck, Users, FileText, CheckCircle2, Phone, ArrowRight, Download, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Admissions() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', grade: '', message: '' });
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    { icon: FileText, title: 'Fill Online Form', desc: 'Start your journey by filling out our online registration form via UniApply or our direct enquiry form.' },
    { icon: ClipboardCheck, title: 'Document Submission', desc: 'Secure your spot by submitting necessary documents like Birth Certificate, SLC, and previous Report Cards.' },
    { icon: Users, title: 'Interaction/Test', desc: 'A friendly interaction or simple assessment test to understand the student’s aptitude and placement.' },
    { icon: CheckCircle2, title: 'Admission Confirmation', desc: 'Receive your confirmation letter and complete the fee formalities to officially join the MMPS family.' },
  ];

  const documents = [
    'Original Birth Certificate',
    'Original School Leaving Certificate (SLC)',
    'Previous Year Report Card',
    'Passport Size Photographs (Student & Parents)',
    'Aadhar Card Copy',
    'Address Proof',
  ];

  return (
    <div className="bg-ivory flex flex-col">
      <PageHero 
        title="Admissions 2026-27" 
        subtitle="Step into a world of opportunities. Registration is now open for Nursery to Grade XII."
        image="/images/students-campus.png"
      />

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-navy mb-4">Admission <span className="text-primary italic">Process</span></h2>
            <p className="font-body text-navy/60 text-lg max-w-2xl mx-auto">A transparent and straightforward process to welcome you to our community.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gray-100 -z-0"></div>
            
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon size={32} />
                  </div>
                  <div className="hidden lg:flex absolute top-16 -right-4 w-8 h-8 rounded-full bg-white border border-gray-100 items-center justify-center text-primary font-bold text-xs shadow-sm">
                    {index + 1}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-navy mb-4 group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="font-body text-sm text-navy/60 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Checklist & Form Grid */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Checklist Column */}
            <div className="lg:col-span-5">
              <div className="bg-navy rounded-[2.5rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[5rem]"></div>
                
                <h3 className="font-heading font-bold text-3xl mb-8">Required <br />Documents</h3>
                <div className="w-16 h-1 bg-accent mb-10 rounded-full"></div>
                
                <ul className="space-y-6 mb-12">
                  {documents.map((doc, i) => (
                    <li key={i} className="flex items-start gap-4 font-body text-white/80 group">
                      <div className="w-6 h-6 rounded-full border border-accent flex items-center justify-center shrink-0 mt-1 group-hover:bg-accent transition-colors">
                        <CheckCircle2 size={14} className="text-accent group-hover:text-navy" />
                      </div>
                      <span className="group-hover:text-white transition-colors">{doc}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-6 py-4 transition-all w-full text-center justify-center font-heading font-semibold">
                  <Download size={20} className="text-accent" />
                  Download Prospectus
                </button>
              </div>
            </div>
            
            {/* Enquiry Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-sm border border-gray-100">
                <h3 className="font-heading font-bold text-3xl text-navy mb-4">Admissions Enquiry</h3>
                <p className="font-body text-navy/60 mb-10 leading-relaxed">Fill out the form below and our admissions team will get in touch with you within 24 hours.</p>
                
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="font-heading font-semibold text-sm text-navy/70 ml-2">Child's Name</label>
                      <input type="text" placeholder="Enter student name" className="w-full bg-ivory rounded-2xl border-none focus:ring-2 focus:ring-primary/20 p-4 font-body" />
                    </div>
                    <div className="space-y-3">
                      <label className="font-heading font-semibold text-sm text-navy/70 ml-2">Applying for Grade</label>
                      <select className="w-full bg-ivory rounded-2xl border-none focus:ring-2 focus:ring-primary/20 p-4 font-body">
                        <option>Choose Grade</option>
                        <option>Nursery - Grade V</option>
                        <option>Grade VI - X</option>
                        <option>Grade XI - XII</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="font-heading font-semibold text-sm text-navy/70 ml-2">Mobile Number</label>
                      <input type="tel" placeholder="+91 XXX XXX XXXX" className="w-full bg-ivory rounded-2xl border-none focus:ring-2 focus:ring-primary/20 p-4 font-body" />
                    </div>
                    <div className="space-y-3">
                      <label className="font-heading font-semibold text-sm text-navy/70 ml-2">Email Address</label>
                      <input type="email" placeholder="example@email.com" className="w-full bg-ivory rounded-2xl border-none focus:ring-2 focus:ring-primary/20 p-4 font-body" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="font-heading font-semibold text-sm text-navy/70 ml-2">Any Queries? (Optional)</label>
                    <textarea rows="4" placeholder="How can we help you?" className="w-full bg-ivory rounded-2xl border-none focus:ring-2 focus:ring-primary/20 p-4 font-body resize-none"></textarea>
                  </div>
                  
                  <button className="w-full bg-accent hover:bg-accent-600 text-white font-heading font-bold py-5 rounded-2xl shadow-lg shadow-accent/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-3">
                    Submit Enquiry Form
                    <ArrowRight size={20} />
                  </button>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 border-t border-gray-100">
                    <a href="https://uniapply.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-primary font-heading font-semibold text-sm hover:underline">
                      Apply via UniApply <ExternalLink size={16} />
                    </a>
                    <span className="text-gray-300 hidden sm:block">|</span>
                    <a href="https://wa.me/919310953788" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-green-500 font-heading font-semibold text-sm hover:underline">
                      Chat on WhatsApp <Phone size={16} />
                    </a>
                  </div>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
