import React from 'react';
import PageHero from '../components/ui/PageHero';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    q: 'What is the admission process for MMPS?',
    a: 'The admission process involves submitting an online registration form, followed by an interaction with the school coordinator. Admission is granted based on age criteria and seat availability.',
  },
  {
    q: 'What is the age criteria for Nursery admission?',
    a: 'The child must be at least 3 years of age as on 31st March of the academic year for Nursery admission.',
  },
  {
    q: 'Does the school follow CBSE curriculum?',
    a: 'Yes, M M Public School is affiliated with the Central Board of Secondary Education (CBSE) and follows the NCERT curriculum.',
  },
  {
    q: 'What are the school timings?',
    a: 'The school operates from Monday to Saturday. Morning session: 7:45 AM – 1:30 PM. Exact timings may vary by grade level.',
  },
  {
    q: 'Is transportation facility available?',
    a: 'Yes, the school provides a safe and reliable school bus service covering major areas of Gurugram. Please contact the school office for route details.',
  },
  {
    q: 'What documents are required at the time of admission?',
    a: 'Required documents include: Birth Certificate, Previous class Mark Sheet/Report Card, Transfer Certificate (if applicable), Passport-size photographs (4), Address Proof, Aadhaar Card of child and parent.',
  },
  {
    q: 'Are there any scholarships available?',
    a: 'Yes, MMPS conducts an annual Scholarship Test for meritorious students. Scholarships are awarded based on academic performance. Contact the school for details.',
  },
  {
    q: 'How can I contact the school for enquiries?',
    a: 'You can reach us at +91 93109 53788 or email info@mmpublicschool.edu.in. You may also visit us at our campus in Sector 4, Gurugram.',
  },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
            <span className="text-accent font-heading font-bold text-sm">{index + 1}</span>
          </div>
          <span className="font-heading font-semibold text-navy text-base">{faq.q}</span>
        </div>
        {open
          ? <ChevronUp size={20} className="text-accent flex-shrink-0" />
          : <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />
        }
      </button>
      {open && (
        <div className="px-6 pb-6 pt-0 bg-white border-t border-gray-100">
          <p className="font-body text-navy/70 leading-relaxed pl-12">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQs() {
  return (
    <div className="bg-ivory min-h-screen">
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about admissions, curriculum, and life at M M Public School."
      />

      <section className="py-12 md:py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              <HelpCircle size={14} />
              Common Questions
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy">
              Got Questions? We Have <span className="text-accent">Answers.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>

          {/* Still have questions? */}
          <div className="mt-16 bg-navy rounded-3xl p-10 text-center text-white">
            <h3 className="font-heading font-bold text-2xl mb-3">Still have questions?</h3>
            <p className="font-body text-white/60 mb-6">
              Our admissions team is happy to help you. Reach out and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919310953788"
                className="px-7 py-3 bg-accent text-white font-heading font-semibold rounded-full hover:bg-red-700 transition-colors"
              >
                Call Us
              </a>
              <a
                href="mailto:info@mmpublicschool.edu.in"
                className="px-7 py-3 bg-white/10 text-white font-heading font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
