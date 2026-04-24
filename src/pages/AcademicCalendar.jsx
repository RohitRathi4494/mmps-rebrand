import React, { useEffect, useState } from 'react';
import PageHero from '../components/ui/PageHero';
import { Calendar, ChevronDown, ChevronRight, GraduationCap, Trophy, Microscope, Users, Music } from 'lucide-react';

const months = [
  {
    month: 'April 2026',
    color: 'bg-sky-500',
    events: [
      { date: '01 Apr', name: 'New Academic Session 2026-27 Begins', type: 'session' },
      { date: '06-10 Apr', name: 'Orientation & Induction Week (New Students)', type: 'academic' },
      { date: '13 Apr', name: 'Baisakhi Holiday', type: 'holiday' },
      { date: '14 Apr', name: 'Dr. Ambedkar Jayanti Holiday', type: 'holiday' },
      { date: '20-24 Apr', name: 'Monthly Class Tests – All Grades', type: 'exam' },
    ],
  },
  {
    month: 'May 2026',
    color: 'bg-green-500',
    events: [
      { date: '04-08 May', name: 'Unit Test – I (Grades I–XII)', type: 'exam' },
      { date: '15 May', name: 'Parent-Teacher Meeting (PTM) – I', type: 'ptm' },
      { date: '25 May', name: 'Investiture Ceremony 2026-27', type: 'event' },
      { date: '27 May', name: 'Last Working Day Before Summer Vacation', type: 'holiday' },
    ],
  },
  {
    month: 'June 2026',
    color: 'bg-amber-500',
    events: [
      { date: '01-30 Jun', name: 'Summer Vacation', type: 'holiday' },
    ],
  },
  {
    month: 'July 2026',
    color: 'bg-primary',
    events: [
      { date: '01 Jul', name: 'School Reopens After Summer Vacation', type: 'session' },
      { date: '13-17 Jul', name: 'Half-Yearly Pre-Board Practice (IX-XII)', type: 'exam' },
      { date: '27-31 Jul', name: 'First Term / Half-Yearly Exams Begin (I–VIII)', type: 'exam' },
    ],
  },
  {
    month: 'August 2026',
    color: 'bg-indigo-500',
    events: [
      { date: '01-07 Aug', name: 'Half-Yearly Exams Continue (IX–XII)', type: 'exam' },
      { date: '15 Aug', name: 'Independence Day Celebration', type: 'event' },
      { date: '24 Aug', name: 'Parent-Teacher Meeting (PTM) – II', type: 'ptm' },
      { date: '29 Aug', name: 'National Sports Day — Sports Events', type: 'event' },
    ],
  },
  {
    month: 'September 2026',
    color: 'bg-rose-500',
    events: [
      { date: '05 Sep', name: 'Teachers\' Day Celebration', type: 'event' },
      { date: '08-12 Sep', name: 'Science & Tech Week', type: 'event' },
      { date: '20-25 Sep', name: 'Autumn Break / Dassehra Holidays', type: 'holiday' },
    ],
  },
  {
    month: 'October 2026',
    color: 'bg-orange-500',
    events: [
      { date: '02 Oct', name: 'Gandhi Jayanti Holiday', type: 'holiday' },
      { date: '14 Oct', name: 'Diwali Holidays Begin', type: 'holiday' },
      { date: '20 Oct', name: 'School Reopens after Diwali Break', type: 'session' },
      { date: '26-30 Oct', name: 'Unit Test – II (Grades I–XII)', type: 'exam' },
    ],
  },
  {
    month: 'November 2026',
    color: 'bg-teal-500',
    events: [
      { date: '09 Nov', name: 'Annual Sports Day', type: 'event' },
      { date: '16 Nov', name: 'Parent-Teacher Meeting (PTM) – III', type: 'ptm' },
      { date: '23-30 Nov', name: 'XXVI MMMICT Cricket Tournament Begins', type: 'event' },
    ],
  },
  {
    month: 'December 2026',
    color: 'bg-violet-500',
    events: [
      { date: '01-12 Dec', name: 'MMMICT Finals & Prize Distribution', type: 'event' },
      { date: '15 Dec', name: 'Annual Cultural Programme (School\'s Annual Day)', type: 'event' },
      { date: '20 Dec', name: 'Winter Vacation Begins', type: 'holiday' },
    ],
  },
  {
    month: 'January 2027',
    color: 'bg-cyan-600',
    events: [
      { date: '05 Jan', name: 'School Reopens After Winter Vacation', type: 'session' },
      { date: '15 Jan', name: 'Pre-Board Exams Begin (Grades X & XII)', type: 'exam' },
      { date: '26 Jan', name: 'Republic Day Celebration', type: 'event' },
    ],
  },
  {
    month: 'February 2027',
    color: 'bg-pink-500',
    events: [
      { date: '01-14 Feb', name: 'Final Term Exams – Grades I–IX, XI', type: 'exam' },
      { date: '15 Feb', name: 'Parent-Teacher Meeting (PTM) – IV (Final)', type: 'ptm' },
      { date: '18-28 Feb', name: 'CBSE Board Practicals (Grades X & XII)', type: 'exam' },
    ],
  },
  {
    month: 'March 2027',
    color: 'bg-lime-600',
    events: [
      { date: '01-15 Mar', name: 'CBSE Board Theory Exams (Grades X & XII)', type: 'exam' },
      { date: '20 Mar', name: 'Annual Prize Distribution & Awards Day', type: 'event' },
      { date: '31 Mar', name: 'Last Working Day of Session 2026-27', type: 'session' },
    ],
  },
];

const typeMeta = {
  session: { label: 'Session', color: 'bg-sky-100 text-sky-700' },
  academic: { label: 'Academic', color: 'bg-green-100 text-green-700' },
  exam: { label: 'Exam', color: 'bg-red-100 text-red-700' },
  ptm: { label: 'PTM', color: 'bg-purple-100 text-purple-700' },
  event: { label: 'Event', color: 'bg-amber-100 text-amber-700' },
  holiday: { label: 'Holiday', color: 'bg-gray-100 text-gray-600' },
};

export default function AcademicCalendar() {
  const [expanded, setExpanded] = useState('April 2026');
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-ivory flex flex-col min-h-screen">
      <PageHero
        title="Academic Calendar 2026-27"
        subtitle="Plan your year with confidence — every exam, event, holiday, and milestone in one place."
        image="/images/holistic.png"
      />

      {/* Legend */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {Object.entries(typeMeta).map(([key, val]) => (
              <span key={key} className={`px-4 py-1.5 rounded-full text-xs font-heading font-semibold ${val.color}`}>
                {val.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Month Accordion */}
      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {months.map((m) => (
            <div key={m.month} className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <button
                onClick={() => setExpanded(expanded === m.month ? null : m.month)}
                className="w-full flex items-center gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <div className={`w-10 h-10 rounded-xl ${m.color} flex items-center justify-center`}>
                  <Calendar size={18} className="text-white" />
                </div>
                <span className="font-heading font-bold text-navy text-lg flex-1">{m.month}</span>
                <span className="font-body text-navy/40 text-sm mr-4">{m.events.length} events</span>
                {expanded === m.month ? <ChevronDown size={20} className="text-navy/40" /> : <ChevronRight size={20} className="text-navy/40" />}
              </button>

              {expanded === m.month && (
                <div className="border-t border-gray-100 divide-y divide-gray-50">
                  {m.events.map((ev, i) => {
                    const meta = typeMeta[ev.type];
                    return (
                      <div key={i} className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors">
                        <span className={`text-xs font-heading font-bold px-3 py-1 rounded-full flex-shrink-0 ${meta.color}`}>{meta.label}</span>
                        <span className="font-heading font-semibold text-primary text-sm w-28 flex-shrink-0">{ev.date}</span>
                        <span className="font-body text-navy/70 text-sm">{ev.name}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-14 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: GraduationCap, value: '220+', label: 'Working Days' },
            { icon: Trophy, value: '12+', label: 'Major Events' },
            { icon: Microscope, value: '4', label: 'PTM Rounds' },
            { icon: Users, value: '2', label: 'Board Exam Sessions' },
          ].map((s, i) => (
            <div key={i}>
              <s.icon size={28} className="mx-auto mb-2 text-gold opacity-80" />
              <p className="font-heading font-bold text-3xl text-gold">{s.value}</p>
              <p className="font-body text-white/60 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
