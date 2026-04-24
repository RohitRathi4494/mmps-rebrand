import React from 'react';
import PageHero from '../components/ui/PageHero';
import { Megaphone, Calendar, ChevronRight, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const announcements = [
  {
    date: 'April 20, 2025',
    type: 'Admissions',
    title: 'Admissions Open for Session 2026-27',
    excerpt: 'Registrations for the new academic session are now open. Classes from Nursery to Grade XII. Limited seats available.',
    important: true,
  },
  {
    date: 'April 15, 2025',
    type: 'Examination',
    title: 'Class X & XII Board Results Celebration',
    excerpt: 'MMPS celebrates outstanding CBSE Board results. Join us in congratulating our achievers and their dedicated mentors.',
    important: true,
  },
  {
    date: 'April 10, 2025',
    type: 'Event',
    title: 'Annual Sports Day 2025 — Recap',
    excerpt: 'The Annual Sports Day was held on 8th April. Students showcased exceptional athleticism across track & field events.',
    important: false,
  },
  {
    date: 'March 28, 2025',
    type: 'Holiday',
    title: 'Summer Vacation Schedule 2025',
    excerpt: 'School will observe summer vacation from May 20 to June 30, 2025. Academic session for 2025-26 commences July 1.',
    important: false,
  },
  {
    date: 'March 20, 2025',
    type: 'Academic',
    title: 'MMPS Scholarship Test 2025 — Results Declared',
    excerpt: 'Results of the Annual MMPS Scholarship Test held on March 10 are now declared. Winners will be notified directly.',
    important: false,
  },
  {
    date: 'March 10, 2025',
    type: 'Event',
    title: 'Science Exhibition 2025 — Student Innovations',
    excerpt: 'The Inter-Class Science Exhibition witnessed 50+ student projects covering AI, Environment, and Space exploration.',
    important: false,
  },
];

const typeBadgeColors = {
  Admissions: 'bg-accent/10 text-accent',
  Examination: 'bg-primary/10 text-primary',
  Event: 'bg-sky-100 text-sky-700',
  Holiday: 'bg-amber-100 text-amber-700',
  Academic: 'bg-green-100 text-green-700',
  Info: 'bg-gray-100 text-gray-700',
  Urgent: 'bg-red-100 text-red-700',
  New: 'bg-purple-100 text-purple-700',
};

// Fetch Dynamic Decap CMS Announcements
const rawCmsAnnouncements = import.meta.glob('../content/announcements/*.json', { eager: true, import: 'default' });
const cmsAnnouncements = Object.values(rawCmsAnnouncements).map(item => {
  const formattedDate = item.date 
    ? new Date(item.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : 'Recently Added';

  return {
    date: formattedDate,
    type: item.tag || 'Info',
    title: item.title || 'Notice',
    excerpt: item.description || 'No further details provided.',
    important: item.tag === 'Urgent' || item.tag === 'New',
  };
});

const allAnnouncements = [...cmsAnnouncements, ...announcements];

export default function Announcements() {
  return (
    <div className="bg-ivory min-h-screen">
      <PageHero
        title="Latest Announcements"
        subtitle="Stay up-to-date with the latest news, events, and important notices from M M Public School."
      />

      <section className="py-12 md:py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Bell size={20} className="text-accent" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-xl text-navy">School Noticeboard</h2>
              <p className="font-body text-navy/50 text-sm">Showing all announcements — latest first</p>
            </div>
          </div>

          <div className="space-y-5">
            {allAnnouncements.map((item, i) => (
              <div
                key={i}
                className={`group relative bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition-all duration-300 ${
                  item.important ? 'border-accent/30' : 'border-gray-100'
                }`}
              >
                {item.important && (
                  <div className="absolute -top-2.5 left-6 px-3 py-0.5 bg-accent text-white text-xs font-heading font-bold rounded-full">
                    Important
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Calendar size={14} className="text-gray-400" />
                    <span className="font-body text-xs text-gray-400">{item.date}</span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-0.5 rounded-full text-xs font-heading font-medium ${typeBadgeColors[item.type] || 'bg-gray-100 text-gray-600'}`}>
                        {item.type}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-navy text-lg mb-1 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-body text-navy/60 text-sm leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>

                  <ChevronRight size={20} className="text-gray-300 group-hover:text-accent transition-colors flex-shrink-0 self-center hidden sm:block" />
                </div>
              </div>
            ))}
          </div>

          {/* Subscribe to updates */}
          <div className="mt-16 bg-navy rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-6 justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <Megaphone size={24} className="text-gold" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl">Never Miss an Update</h3>
                <p className="font-body text-white/60 text-sm">Contact the school office to be added to the parent notification list.</p>
              </div>
            </div>
            <a
              href="/contact"
              className="flex-shrink-0 px-7 py-3 bg-accent text-white font-heading font-semibold rounded-full hover:bg-red-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
