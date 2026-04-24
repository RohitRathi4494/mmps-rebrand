import React, { useState, useEffect } from 'react';
import PageHero from '../components/ui/PageHero';
import { Play, Calendar, Eye, Share2, Youtube } from 'lucide-react';

const fallbackVideos = [
  { id: '1', title: 'MMPS Campus Walking Tour', duration: '5:24', views: '12K', date: 'Jan 2025', thumb: '/images/campus-aerial.png', videoUrl: '#' },
  { id: '2', title: 'MMMICT 2024 Grand Finale Highlights', duration: '12:10', views: '25K', date: 'Dec 2024', thumb: '/images/cricket-tournament.png', videoUrl: '#' },
  { id: '3', title: 'Annual Day 2024 "Culture Pulse"', duration: '45:00', views: '8K', date: 'Nov 2024', thumb: '/school.webp', videoUrl: '#' },
  { id: '4', title: 'Life at MMPS - Student Perspectives', duration: '3:15', views: '5K', date: 'Oct 2024', thumb: '/images/classroom-students.png', videoUrl: '#' },
  { id: '5', title: 'Investiture Ceremony 2024-25', duration: '8:45', views: '10K', date: 'Sep 2024', thumb: '/images/investiture-ceremony.png', videoUrl: '#' },
  { id: '6', title: 'Scholarship Exam Briefing', duration: '15:20', views: '3K', date: 'Aug 2024', thumb: '/images/scholarship-test.png', videoUrl: '#' },
];

export default function VideoGallery() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchYouTubeVideos();
  }, []);

  const fetchYouTubeVideos = async () => {
    // Configure these inside your .env file
    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
    const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID || 'UC_x5XG1OV2P6uZZ5FSM9Ttw'; // Default placeholder

    if (!API_KEY) {
      console.warn("YouTube API Key missing. Showing fallback videos.");
      setVideos(fallbackVideos);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=9&type=video`);
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        const fetchedVideos = data.items.map(item => ({
          id: item.id.videoId,
          title: item.snippet.title.replace(/&quot;/g, '"').replace(/&#39;/g, "'"),
          duration: 'Video',
          views: 'New',
          date: new Date(item.snippet.publishedAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
          thumb: item.snippet.thumbnails.high.url,
          videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`
        }));
        setVideos(fetchedVideos);
      } else {
        setVideos(fallbackVideos);
      }
    } catch (err) {
      console.error("Failed to fetch YouTube videos:", err);
      setVideos(fallbackVideos);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-ivory flex flex-col min-h-screen">
      <PageHero 
        title="Video Gallery" 
        subtitle="Watch the school come to life through our curated collection of events, tours, and student projects."
        image="/school.webp"
      />

      <section className="py-12 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, idx) => (
                <a href={video.videoUrl} target="_blank" rel="noreferrer" key={idx} className="group relative flex flex-col bg-ivory rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500">
                  <div className="relative aspect-video overflow-hidden">
                    <img src={video.thumb} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/40 transition-colors duration-500"></div>
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-90 group-hover:scale-110 group-hover:bg-[#FF0000] transition-all duration-500 shadow-2xl">
                        <Play size={32} className="fill-current ml-1.5" />
                      </div>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="bg-navy/80 backdrop-blur px-2.5 py-1 rounded-md text-white font-body text-[10px] uppercase font-bold tracking-wider">
                        {video.duration}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-navy/40 font-body text-[10px] font-bold mb-3 uppercase tracking-widest">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {video.date}</span>
                      {video.views !== 'New' && <span className="flex items-center gap-1"><Eye size={12} /> {video.views}</span>}
                    </div>
                    <h3 className="font-heading font-bold text-lg text-navy mb-4 group-hover:text-primary transition-colors flex-grow leading-snug line-clamp-2">
                      {video.title}
                    </h3>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                      <span className="flex items-center gap-2 text-primary font-heading font-bold text-xs">
                        Watch on YouTube
                      </span>
                      <span className="p-2 text-navy/40 group-hover:text-[#FF0000] transition-colors">
                        <Youtube size={18} />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* YouTube Links Strip */}
          <div className="mt-12 p-10 md:p-16 bg-navy rounded-[3rem] text-center relative overflow-hidden shadow-2xl">
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
