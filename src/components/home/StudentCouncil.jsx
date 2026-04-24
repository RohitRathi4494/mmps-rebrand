import React from 'react';

const council = [
  { name: 'Aarav Sharma', role: 'Head Boy', img: '/images/head-boy.png', badge: 'bg-primary' },
  { name: 'Ananya Gupta', role: 'Head Girl', img: '/images/head-girl.png', badge: 'bg-primary' },
  { name: 'Vivaan Verma', role: 'Sports Captain', img: '/images/sports-captain.png', badge: 'bg-accent' },
  { name: 'Diya Patel', role: 'Cultural Secretary', img: '/images/cultural-secretary.png', badge: 'bg-gold-500' },
];

export default function StudentCouncil() {
  return (
    <section className="py-12 md:py-10 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-navy mb-4">
            Tomorrow's Leaders, <br />
            <span className="text-accent">Today's Voices</span>
          </h2>
          <p className="font-body text-navy/70 text-lg max-w-2xl mx-auto mt-6">
            Our Student Council empowers the youth with leadership, management skills, and a strong sense of responsibility.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {council.map((member, index) => (
            <div key={index} className="group relative">
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-lg mb-6">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-60"></div>
                
                {/* Role Badge */}
                <div className={`absolute bottom-6 left-6 right-6 ${member.badge} text-white text-center py-2.5 rounded-xl font-heading font-semibold text-sm shadow-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300`}>
                  {member.role}
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="font-heading font-bold text-xl text-navy">{member.name}</h3>
                <p className="font-body text-navy/60 text-sm mt-1 lg:opacity-0 lg:-translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
