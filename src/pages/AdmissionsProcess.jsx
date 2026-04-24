import React, { useEffect } from 'react';
import PageHero from '../components/ui/PageHero';
import { Link } from 'react-router-dom';
import {
  ClipboardList, FileText, UserCheck, BadgeCheck,
  Calendar, ArrowRight, Download, Phone, MessageCircle,
  CheckCircle2, Clock, AlertCircle
} from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: ClipboardList,
    title: 'Enquire & Register',
    desc: 'Contact our admissions office or fill the online registration form on our website. Our team will reach out within 24 hours to guide you.',
    color: 'bg-sky-500',
    light: 'bg-sky-50',
    border: 'border-sky-200',
  },
  {
    num: '02',
    icon: FileText,
    title: 'Document Submission',
    desc: 'Submit required documents to complete your application. Our admissions desk is open Mon-Sat, 9 AM to 1 PM for document verification.',
    color: 'bg-primary',
    light: 'bg-primary/5',
    border: 'border-primary/20',
  },
  {
    num: '03',
    icon: UserCheck,
    title: 'Interaction / Assessment',
    desc: "A friendly interaction session (or simple aptitude test for Grades VI and above) to understand the student's current academic level and placement needs.",
    color: 'bg-amber-500',
    light: 'bg-amber-50',
    border: 'border-amber-200',
  },
  {
    num: '04',
    icon: BadgeCheck,
    title: 'Confirmation & Enrollment',
    desc: 'Receive your official admission confirmation letter. Complete the fee payment formalities and collect your welcome kit to officially join the MMPS family!',
    color: 'bg-green-500',
    light: 'bg-green-50',
    border: 'border-green-200',
  },
];

const documents = [
  'Original Birth Certificate (with photocopy)',
  'Original School Leaving Certificate / Transfer Certificate',
  "Last Year's Report Card (2 copies)",
  'Passport Size Photographs – Student (4) & Parent (2)',
  'Aadhaar Card copy of student',
  'Address Proof (Electricity bill / Rent Agreement / Aadhaar)',
  'Caste Certificate (if applicable for reserved category)',
];

const ageCriteria = [
  { grade: 'Nursery', age: '3+ years as on 31 March 2027' },
  { grade: 'LKG', age: '4+ years as on 31 March 2027' },
  { grade: 'UKG', age: '5+ years as on 31 March 2027' },
  { grade: 'Grade I', age: '6+ years as on 31 March 2027' },
  { grade: 'Grade II – V', age: 'As per age-grade alignment' },
  { grade: 'Grade VI – XII', age: 'Based on previous class clearance' },
];

const keyDates = [
  { event: 'Registration Opens', date: 'Already Open', highlight: true },
  { event: 'Document Submission Deadline', date: '31 May 2026' },
  { event: 'Interaction / Assessment Dates', date: 'Scheduled upon registration' },
  { event: 'Confirmation Letters Issued', date: 'Rolling basis' },
  { event: 'Academic Session Begins', date: '01 April 2026' },
];

export default function AdmissionsProcess() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-ivory flex flex-col min-h-screen">
      <PageHero
        title="Admission Process & Criteria"
        subtitle="A clear, transparent, and welcoming path to joining the MMPS family — Session 2026-27."
        image="/images/students-campus.png"
      />

      {/* Steps */}
      <section className="py-12 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              📋 Step-by-Step Guide
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-3">
              How to <span className="text-accent">Apply</span>
            </h2>
            <p className="font-body text-navy/60 max-w-xl mx-auto">
              Our admissions process is designed to be simple, transparent, and stress-free for families.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-gray-100 z-0" />

            {steps.map((step, i) => (
              <div key={i} className={`relative z-10 bg-white rounded-2xl border ${step.border} p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col`}>
                <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center text-white font-heading font-bold text-xl mb-5 shadow-md`}>
                  {step.num}
                </div>
                <div className={`w-10 h-10 rounded-xl ${step.light} flex items-center justify-center mb-4`}>
                  <step.icon size={20} className="text-navy/70" />
                </div>
                <h3 className="font-heading font-bold text-lg text-navy mb-3">{step.title}</h3>
                <p className="font-body text-navy/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents + Key Dates */}
      <section className="py-12 md:py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">

            {/* Documents Checklist */}
            <div className="bg-navy text-white rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-full" />
              <h3 className="font-heading font-bold text-2xl mb-2">Required Documents</h3>
              <p className="font-body text-white/60 text-sm mb-8">Please carry originals + photocopies at the time of submission.</p>
              <ul className="space-y-4 mb-8">
                {documents.map((doc, i) => (
                  <li key={i} className="flex items-start gap-3 font-body text-white/80 text-sm">
                    <CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-0.5" />
                    {doc}
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-xl font-heading font-semibold text-sm transition-all w-full justify-center">
                <Download size={16} className="text-gold" /> Download Document Checklist (PDF)
              </button>
            </div>

            {/* Age Criteria + Key Dates stacked */}
            <div className="flex flex-col gap-6">
              {/* Age Criteria */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <h3 className="font-heading font-bold text-xl text-navy mb-1 flex items-center gap-2">
                  <AlertCircle size={18} className="text-accent" /> Age Criteria 2026-27
                </h3>
                <p className="font-body text-navy/50 text-sm mb-6">Age as on 31 March 2027 for the relevant class.</p>
                <div className="divide-y divide-gray-100">
                  {ageCriteria.map((row, i) => (
                    <div key={i} className="flex justify-between items-center py-3">
                      <span className="font-heading font-semibold text-navy text-sm">{row.grade}</span>
                      <span className="font-body text-navy/60 text-xs text-right max-w-[55%]">{row.age}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Dates */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <h3 className="font-heading font-bold text-xl text-navy mb-6 flex items-center gap-2">
                  <Clock size={18} className="text-primary" /> Key Dates
                </h3>
                <ul className="space-y-3">
                  {keyDates.map((kd, i) => (
                    <li key={i} className={`flex items-center justify-between p-3 rounded-xl ${kd.highlight ? 'bg-accent/10 border border-accent/20' : 'bg-gray-50'}`}>
                      <span className="font-body text-navy/70 text-sm">{kd.event}</span>
                      <span className={`font-heading font-bold text-sm ${kd.highlight ? 'text-accent' : 'text-primary'}`}>{kd.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-10 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl mb-3">Ready to Begin?</h2>
          <p className="font-body text-white/70 mb-8 max-w-lg mx-auto">
            Seats fill up fast. Start your application today or speak to our admissions counsellor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-heading font-bold rounded-full hover:bg-red-700 transition-all hover:-translate-y-0.5 shadow-lg">
              Register Online <ArrowRight size={18} />
            </Link>
            <a href="tel:01244570666"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/25 text-white font-heading font-semibold rounded-full hover:bg-white/20 transition-all">
              <Phone size={18} /> Call: 0124-4570666
            </a>
            <a href="https://wa.me/919310953788" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-500/20 border border-green-400/30 text-green-300 font-heading font-semibold rounded-full hover:bg-green-500/30 transition-all">
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
