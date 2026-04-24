import React, { useEffect } from 'react';
import PageHero from '../components/ui/PageHero';
import { Play, Calendar, Eye, Share2 } from 'lucide-react';

const videos = [
  { id: '1', title: 'MMPS Campus Walking Tour', duration: '5:24', views: '12K', date: 'Jan 2025', thumb: 'https://source.unsplash.com/800x600/?school,architecture' },
  { id: '2', title: 'MMMICT 2024 Grand Finale Highlights', duration: '12:10', views: '25K', date: 'Dec 2024', thumb: 'https://source.unsplash.com/800x600/?cricket,stadium' },
  { id: '3', title: 'Annual Day 2024 "Culture Pulse"', duration: '45:00', views: '8K', date: 'Nov 2024', thumb: 'https://source.unsplash.com/800x600/?stage,dance' },
  { id: '4', title: 'Life at MMPS - Student Perspectives', duration: '3:15', views: '5K', date: 'Oct 2024', thumb: 'https://source.unsplash.com/800x600/?students,group' },
];

export default function VideoGallery() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-ivory flex flex-col min-h-screen">
      <PageHero 
        title="Video Gallery" 
        subtitle="Watch the school come to life through our curated collection of events, tours, and student projects."
        image="https://source.unsplash.com/1600x900/?film,cinema,theatre"
      />

      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {videos.map((video, idx) => (
              <div key={idx} className="group relative flex flex-col bg-ivory rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <div className="relative aspect-video overflow-hidden">
                  <img src={video.thumb} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/40 transition-colors duration-500"></div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-90 group-hover:scale-110 group-hover:bg-accent transition-all duration-500 shadow-2xl">
                      <Play size={40} className="fill-current ml-2" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                    <span className="bg-navy/80 backdrop-blur px-3 py-1.5 rounded-lg text-white font-body text-xs font-bold">
                      {video.duration}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-navy/40 font-body text-xs font-semibold mb-3 uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {video.date}</span>
                    <span className="flex items-center gap-1"><Eye size={12} /> {video.views} Views</span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-navy mb-6 group-hover:text-primary transition-colors flex-grow leading-tight">
                    {video.title}
                  </h3>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                    <button className="flex items-center gap-2 text-primary font-heading font-bold text-sm hover:underline">
                      Watch Video Now
                    </button>
                    <button className="p-2 text-navy/40 hover:text-accent transition-colors">
                      <Share2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* YouTube Links Strip */}
          <div className="mt-24 p-10 md:p-16 bg-navy rounded-[3rem] text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-6">More on YouTube</h2>
              <p className="font-body text-white/50 text-lg mb-10 max-w-2xl mx-auto">Subscribe to our official channel for weekly updates, educational content, and student-run podcasts.</p>
              <a href="#" className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-heading font-bold px-10 py-5 rounded-full shadow-2xl shadow-red-600/30 transition-all hover:-translate-y-1">
                Subscribe to MMPS Official
              </a>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
