import React from 'react';
import PageHero from '../components/ui/PageHero';
import { FileText, Phone, Mail, Download, AlertCircle, CheckCircle2 } from 'lucide-react';

const requirements = [
  'The TC application must be submitted at least 7 working days before the required date.',
  'Application must be made by the parent or legal guardian of the student.',
  'All outstanding dues (fee, library books, school property) must be cleared before TC is issued.',
  'For Class X and XII students, TC will be issued only after the CBSE results are announced.',
  'Original school ID card must be surrendered at the time of TC collection.',
];

export default function TransferCertificate() {
  return (
    <div className="bg-ivory min-h-screen">
      <PageHero
        title="Transfer Certificate (TC)"
        subtitle="Process for obtaining a Transfer Certificate from M M Public School."
      />

      <section className="py-12 md:py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Info Alert */}
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10">
            <AlertCircle size={20} className="text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="font-body text-navy/80 text-sm leading-relaxed">
              Transfer Certificates are issued at the school's administrative office only.
              Online TC issuance is not available. Please visit the school in person with the required documents.
            </p>
          </div>

          {/* Step-by-Step Process */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm mb-8">
            <h2 className="font-heading font-bold text-2xl text-navy mb-8">TC Application Process</h2>

            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-100" />
              <div className="space-y-8">
                {[
                  {
                    step: 1,
                    title: 'Submit Written Application',
                    desc: 'The parent/guardian submits a written application at the school\'s administrative counter requesting a TC, along with the student\'s name, class, and roll number.',
                  },
                  {
                    step: 2,
                    title: 'Fee Clearance Verification',
                    desc: 'The accounts department verifies that all pending school fees, library dues, and any outstanding payments have been cleared.',
                  },
                  {
                    step: 3,
                    title: 'Principal\'s Approval',
                    desc: 'The application is forwarded to the Principal for authorization. This typically takes 3-5 working days.',
                  },
                  {
                    step: 4,
                    title: 'Collection of TC',
                    desc: 'The TC is collected from the administrative office. An acknowledgement slip must be signed upon collection.',
                  },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-6">
                    <div className="w-10 h-10 rounded-full bg-primary text-white font-heading font-bold text-sm flex items-center justify-center flex-shrink-0 z-10 border-2 border-white shadow">
                      {s.step}
                    </div>
                    <div className="pt-1">
                      <h3 className="font-heading font-semibold text-navy text-base mb-1">{s.title}</h3>
                      <p className="font-body text-navy/60 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mb-8">
            <h2 className="font-heading font-bold text-2xl text-navy mb-6">Important Requirements</h2>
            <ul className="space-y-3">
              {requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-navy/70 text-sm">
                  <CheckCircle2 size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {/* Download Form */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mb-8">
            <div className="flex items-center gap-4 mb-4">
              <FileText size={24} className="text-primary" />
              <h2 className="font-heading font-bold text-xl text-navy">TC Application Form</h2>
            </div>
            <p className="font-body text-navy/60 text-sm mb-5">
              Download the TC application form, fill it out, and submit it at the school administrative office.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-heading font-semibold rounded-full hover:bg-navy transition-colors">
              <Download size={16} />
              Download TC Application Form (PDF)
            </button>
          </div>

          {/* Contact */}
          <div className="bg-navy rounded-3xl p-8 text-white flex flex-col md:flex-row items-center gap-6 justify-between">
            <div>
              <h3 className="font-heading font-bold text-xl mb-2">Need Assistance?</h3>
              <p className="font-body text-white/60 text-sm">Contact the school office for any TC-related queries.</p>
            </div>
            <div className="flex flex-col gap-2 flex-shrink-0">
              <a href="tel:+919310953788" className="flex items-center gap-2 text-gold font-body text-sm hover:underline">
                <Phone size={14} /> +91 93109 53788
              </a>
              <a href="mailto:info@mmps.edu.in" className="flex items-center gap-2 text-gold font-body text-sm hover:underline">
                <Mail size={14} /> info@mmps.edu.in
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
