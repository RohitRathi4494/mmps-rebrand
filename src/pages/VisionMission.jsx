import React, { useEffect } from 'react';
import PageHero from '../components/ui/PageHero';
import { Target, Eye, Globe2, Compass } from 'lucide-react';

export default function VisionMission() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-ivory flex flex-col min-h-screen">
      <PageHero 
        title="Vision & Mission" 
        subtitle="Our guiding stars that define our purpose and drive our daily commitment to excellence."
        image="https://source.unsplash.com/1600x900/?vision,purpose,aspirations"
      />

      <section className="py-12 md:py-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-stretch">
            
            {/* Vision Card */}
            <div className="flex flex-col h-full group">
              <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-gray-100 h-full flex flex-col relative overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-[10rem] group-hover:scale-110 transition-transform duration-700"></div>
                
                <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mb-10 group-hover:bg-primary transition-colors duration-500 relative z-10">
                  <Eye className="text-primary group-hover:text-white transition-colors duration-500" size={40} />
                </div>
                
                <h2 className="font-heading font-bold text-4xl text-navy mb-8 relative z-10">Our Vision</h2>
                <div className="w-20 h-1.5 bg-accent rounded-full mb-8 relative z-10"></div>
                
                <p className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-navy/90 leading-tight italic relative z-10">
                  "To produce <span className="text-primary">global citizens</span> who respect and celebrate differences and become instruments of change in the world."
                </p>
                
                <div className="mt-auto pt-12 relative z-10">
                  <div className="flex items-center gap-4 text-navy/40 font-body text-sm font-semibold tracking-widest uppercase">
                    <Globe2 size={24} />
                    <span>Nurturing Future Leaders</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="flex flex-col h-full group">
              <div className="bg-navy p-10 md:p-16 rounded-[3rem] shadow-2xl h-full flex flex-col relative overflow-hidden transition-all duration-500">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-bl-[10rem] group-hover:scale-110 transition-transform duration-700"></div>
                
                <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mb-10 group-hover:bg-accent transition-colors duration-500 relative z-10">
                  <Target className="text-accent group-hover:text-white transition-colors duration-500" size={40} />
                </div>
                
                <h2 className="font-heading font-bold text-4xl text-white mb-8 relative z-10">Our Mission</h2>
                <div className="w-20 h-1.5 bg-accent rounded-full mb-8 relative z-10"></div>
                
                <p className="font-body text-lg md:text-xl text-white/80 leading-relaxed relative z-10">
                  "Committed to providing students with necessary skills and knowledge to become <span className="text-accent font-semibold">lifelong learners</span>, effective communicators, and socially productive citizens prepared for life choices and challenges in a global society."
                </p>
                
                <div className="mt-auto pt-12 relative z-10">
                  <div className="flex items-center gap-4 text-white/20 font-body text-sm font-semibold tracking-widest uppercase">
                    <Compass size={24} />
                    <span>Driven by Purpose</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Philosophy Strip */}
          <div className="mt-12 md:mt-32 p-8 md:p-14 bg-white rounded-[3rem] shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="shrink-0 w-full md:w-1/3">
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-navy">Our Core Philosophy</h3>
              <p className="font-body text-navy/60 mt-4 leading-relaxed">The bedrock on which MMPS stands tall since 1992.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
              {[
                { title: 'Tradition & Outlook', desc: 'Merging traditional Indian values with an international perspective.' },
                { title: 'Social Productivity', desc: 'Developing citizens who contribute meaningfully to the society.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-2 rounded-full bg-gold-400 shrink-0"></div>
                  <div>
                    <h4 className="font-heading font-bold text-navy">{item.title}</h4>
                    <p className="font-body text-sm text-navy/60 mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
