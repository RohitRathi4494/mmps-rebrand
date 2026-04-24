import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar as CalendarIcon, ArrowRight, MapPin } from 'lucide-react';

export default function NewsAndEvents() {
  const news = [
    { title: 'CBSE 2024-25 Board Results Announced', date: 'May 12, 2025', excerpt: 'Our students have once again made us proud with a 100% pass rate and multiple district toppers.', img: 'https://source.unsplash.com/100x100/?students,happy' },
    { title: 'Annual Science Exhibition', date: 'April 28, 2025', excerpt: 'Innovation at its peak as middle schoolers present working models on renewable energy.', img: 'https://source.unsplash.com/100x100/?science,exhibition' },
    { title: 'Inter-School Debate Competition', date: 'April 15, 2025', excerpt: 'Vayu house secures the first runner-up position in the regional debate championship.', img: 'https://source.unsplash.com/100x100/?debate,speech' },
  ];

  const events = [
    { date: '25', month: 'Nov', title: 'XXV MMICT Cricket Tournament Opening', time: '09:00 AM', location: 'Main Sports Field' },
    { date: '12', month: 'Aug', title: 'Investiture Ceremony 2025-26', time: '10:30 AM', location: 'School Auditorium' },
    { date: '05', month: 'Sep', title: 'Teachers Day Celebration', time: '11:00 AM', location: 'School Auditorium' },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Latest News */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-heading font-bold text-3xl text-navy">Latest News</h2>
              <Link to="/news" className="text-primary font-heading font-semibold text-sm hover:text-primary-700 transition-colors hidden sm:block">View All News</Link>
            </div>
            
            <div className="space-y-6">
              {news.map((item, idx) => (
                <div key={idx} className="flex gap-4 md:gap-6 group">
                  <div className="w-24 h-24 shrink-0 rounded-2xl overflow-hidden shadow-sm">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-center border-b border-gray-100 pb-6 w-full">
                    <span className="font-body text-xs text-accent font-semibold mb-1 uppercase tracking-wider">{item.date}</span>
                    <h3 className="font-heading font-bold text-lg text-navy mb-2 group-hover:text-primary transition-colors cursor-pointer">{item.title}</h3>
                    <p className="font-body text-sm text-navy/60 line-clamp-2 leading-relaxed">{item.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Calendar */}
          <div className="lg:col-span-5 bg-ivory rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none"></div>
            
            <div className="flex items-center justify-between mb-8 relative z-10">
              <h2 className="font-heading font-bold text-2xl text-navy">Mark Your Calendar</h2>
            </div>
            
            <div className="space-y-4 relative z-10">
              {events.map((event, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-4 flex gap-4 shadow-sm hover:shadow-md transition-shadow border border-gray-50 border-l-4 border-l-accent">
                  {/* Date Badge */}
                  <div className="bg-navy/5 rounded-xl w-16 h-16 flex flex-col items-center justify-center shrink-0">
                    <span className="font-heading font-bold text-xl text-primary leading-none">{event.date}</span>
                    <span className="font-body text-xs text-navy/70 uppercase font-semibold">{event.month}</span>
                  </div>
                  
                  {/* Event Info */}
                  <div className="flex flex-col justify-center">
                    <h4 className="font-heading font-bold text-navy mb-1">{event.title}</h4>
                    <div className="flex items-center gap-3 text-xs font-body text-navy/60">
                      <span className="flex items-center gap-1"><CalendarIcon size={12} /> {event.time}</span>
                      <span className="flex items-center gap-1"><MapPin size={12} /> {event.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 py-4 rounded-xl border-2 border-primary text-primary font-heading font-semibold hover:bg-primary hover:text-white transition-colors">
              Download Academic Calendar
            </button>
          </div>
          
        </div>

      </div>
    </section>
  );
}
