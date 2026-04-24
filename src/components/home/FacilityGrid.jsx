import React from 'react';
import { Microscope, Monitor, BookOpen, Music, Club, Map } from 'lucide-react';

const facilities = [
  { name: 'Smart Classrooms', desc: 'Interactive boards in all grades.', icon: Monitor, img: '/images/classroom.png' },
  { name: 'Science Labs', desc: 'Modern Physics & Chemistry labs.', icon: Microscope, img: '/images/science-lab.png' },
  { name: 'Library & Reading', desc: 'Vast collection of journals & books.', icon: BookOpen, img: '/images/library.png' },
  { name: 'Arts & Music Room', desc: 'Dedicated space for performing arts.', icon: Music, img: '/images/music-room.png' },
  { name: 'Sports Fields', desc: 'Cricket & Football arenas.', icon: Club, img: '/images/cricket-tournament.png' },
  { name: 'Outdoor Lawns', desc: '5-acre lush green campus space.', icon: Map, img: '/images/campus-aerial.png' },
];

export default function FacilityGrid() {
  return (
    <section className="py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-navy mb-4">
            State-of-the-Art <span className="text-primary italic">Facilities</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((fac, i) => {
            const Icon = fac.icon;
            return (
              <div key={i} className="group relative h-64 rounded-2xl overflow-hidden shadow-md cursor-pointer">
                <img 
                  src={fac.img} 
                  alt={fac.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-10 h-10 rounded-full bg-primary/80 backdrop-blur flex items-center justify-center">
                      <Icon className="text-white" size={18} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-white text-lg">{fac.name}</h3>
                      <p className="font-body text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{fac.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
