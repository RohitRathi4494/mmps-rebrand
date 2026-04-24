import React from 'react';
import PageHero from '../components/ui/PageHero';
import { Newspaper, ExternalLink } from 'lucide-react';

const pressItems = [
  {
    outlet: 'Hindustan Times',
    date: 'March 2025',
    headline: 'MMPS Students Win National Level Science Olympiad',
    summary: 'Three students from M M Public School, Gurugram secured top positions at the National Science Olympiad, competing against 2,000+ participants from across India.',
    logo: null,
    bgColor: 'bg-red-50',
    textColor: 'text-red-700',
  },
  {
    outlet: 'Dainik Bhaskar',
    date: 'February 2025',
    headline: 'MMPS Hosts 24th MMMICT Cricket Tournament',
    summary: 'The annual inter-school cricket tournament organized by M M Public School drew participation from 24 schools across the NCR, promoting sportsmanship and camaraderie.',
    logo: null,
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-700',
  },
  {
    outlet: 'Times of India',
    date: 'January 2025',
    headline: 'Gurugram School Launches Green Campus Initiative',
    summary: 'M M Public School launched its year-long Green Campus Drive, pledging to plant 500 trees and achieve zero single-use plastic on campus by end of academic year.',
    logo: null,
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700',
  },
  {
    outlet: 'Tribune India',
    date: 'November 2024',
    headline: 'CBSE Results: MMPS Records 100% Pass Rate for 5th Year Running',
    summary: 'M M Public School maintained its remarkable record of 100% CBSE results with 12 students scoring above 95% in the senior category.',
    logo: null,
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-700',
  },
];

export default function Press() {
  return (
    <div className="bg-ivory min-h-screen">
      <PageHero
        title="Press & Media"
        subtitle="Media coverage and press releases featuring M M Public School's achievements and community contributions."
      />

      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-heading font-bold text-2xl text-navy">In the News</h2>
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-body">
              <Newspaper size={14} />
              Media Coverage
            </div>
          </div>

          <div className="space-y-6">
            {pressItems.map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-start gap-6"
              >
                {/* Outlet Badge */}
                <div className={`flex-shrink-0 w-28 h-16 rounded-xl ${item.bgColor} flex items-center justify-center`}>
                  <span className={`font-heading font-bold text-xs text-center px-2 ${item.textColor}`}>
                    {item.outlet}
                  </span>
                </div>

                <div className="flex-1">
                  <p className="font-body text-xs text-gray-400 mb-1">{item.date}</p>
                  <h3 className="font-heading font-semibold text-navy text-lg mb-2 group-hover:text-accent transition-colors leading-snug">
                    {item.headline}
                  </h3>
                  <p className="font-body text-navy/60 text-sm leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <ExternalLink size={18} className="text-gray-300 group-hover:text-accent transition-colors flex-shrink-0 self-center hidden sm:block" />
              </div>
            ))}
          </div>

          {/* Media enquiries */}
          <div className="mt-16 bg-navy rounded-3xl p-10 text-white text-center">
            <h3 className="font-heading font-bold text-2xl mb-3">Media Enquiries</h3>
            <p className="font-body text-white/60 max-w-xl mx-auto mb-6">
              For press releases, interview requests, or any media-related queries, please reach our communications team.
            </p>
            <a
              href="mailto:info@mmpublicschool.edu.in"
              className="inline-block px-8 py-4 bg-gold text-navy font-heading font-bold rounded-full hover:bg-yellow-500 transition-colors"
            >
              Contact Media Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
