import React, { useEffect, useState } from 'react';
import PageHero from '../components/ui/PageHero';
import { Camera, Maximize2, Plus } from 'lucide-react';
import { cn } from '../lib/utils';

const categories = ['All', 'Campus', 'Events', 'Sports', 'Lab & Activities'];

const galleryItems = [
  { img: '/school.webp', cat: 'Campus', title: 'Main Administration Block' },
  { img: '/images/investiture-ceremony.png', cat: 'Events', title: 'Annual Day Celebrations' },
  { img: '/images/cricket-tournament.png', cat: 'Sports', title: 'XXIV MMMICT 2024' },
  { img: '/images/science-lab.png', cat: 'Lab & Activities', title: 'Chemistry Practical Session' },
  { img: '/images/campus-aerial.png', cat: 'Campus', title: 'Lush Green Lawns' },
  { img: '/images/holistic.png', cat: 'Events', title: 'Inter-House Debate Meet' },
  { img: '/images/computer-lab.png', cat: 'Lab & Activities', title: 'Junior IT Workshop' },
  { img: '/images/basketball.png', cat: 'Sports', title: 'Inter-School Basketball Match' },
  { img: '/images/library.png', cat: 'Campus', title: 'Resource Rich Library' },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.cat === activeFilter);

  return (
    <div className="bg-ivory flex flex-col min-h-screen">
      <PageHero 
        title="Visual Journey" 
        subtitle="Capturing the vibrant moments, achievements, and facilities that define the MMPS life."
        image="/images/campus-aerial.png"
      />

      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={cn(
                  "px-8 py-3 rounded-full font-heading font-semibold text-sm transition-all duration-300",
                  activeFilter === cat 
                    ? "bg-primary text-white shadow-xl" 
                    : "bg-ivory text-navy/60 hover:bg-navy/5 hover:text-navy"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, idx) => (
              <div key={idx} className="group relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-sm hover:shadow-2xl transition-all duration-500 bg-ivory">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="font-body text-[10px] uppercase tracking-widest font-bold text-accent mb-2">{item.cat}</span>
                  <h3 className="font-heading font-bold text-xl text-white">{item.title}</h3>
                  <div className="mt-4 flex gap-2">
                    <button className="p-3 bg-white/20 backdrop-blur rounded-xl text-white hover:bg-accent transition-colors">
                      <Maximize2 size={18} />
                    </button>
                    <button className="p-3 bg-white/20 backdrop-blur rounded-xl text-white hover:bg-accent transition-colors">
                      <Plus size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More/CTA */}
          <div className="mt-20 text-center">
            <p className="font-body text-navy/40 mb-8 italic">Showing {filteredItems.length} of over 2,000+ archived memories.</p>
            <button className="bg-navy text-white font-heading font-bold px-10 py-4 rounded-full shadow-xl shadow-navy/20 hover:bg-navy-950 transition-all hover:-translate-y-1">
              Load More Photos
            </button>
          </div>

        </div>
      </section>
      
      {/* Visual Stats */}
      <section className="py-24 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-around items-center gap-12">
          <div className="text-center">
            <Camera className="mx-auto mb-4 opacity-50" size={40} />
            <div className="font-heading font-bold text-5xl">5K+</div>
            <p className="font-body text-sm uppercase tracking-widest font-bold mt-2 opacity-80">Photos Archived</p>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-5xl">300+</div>
            <p className="font-body text-sm uppercase tracking-widest font-bold mt-2 opacity-80">Events Captured</p>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-5xl">25</div>
            <p className="font-body text-sm uppercase tracking-widest font-bold mt-2 opacity-80">MMMICT Albums</p>
          </div>
        </div>
      </section>
    </div>
  );
}
