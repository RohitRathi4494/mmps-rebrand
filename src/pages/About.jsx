import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import { 
  Award, History, Building2, Users, 
  Target, Eye, Globe2, Compass,
  Quote, ShieldCheck
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function About() {
  const { hash } = useLocation();

  // Handle smooth scroll to hash
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        // Offset for sticky header (approx 80px)
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <div className="bg-ivory flex flex-col min-h-screen">
      <PageHero 
        title="About MMPS" 
        subtitle="A journey of excellence, a vision for the future, and leadership that inspires."
        image="https://source.unsplash.com/1600x900/?school,architecture,modern"
      />

      <div className="flex flex-col">
        <div id="overview">
          <OverviewSection />
        </div>
        
        <div id="vision" className="border-t border-gray-100">
          <VisionSection />
        </div>
        
        <div id="chairman" className="border-t border-gray-100">
          <ChairmanSection />
        </div>
        
        <div id="principal" className="border-t border-gray-100 pb-20">
          <PrincipalSection />
        </div>
      </div>
      
      {/* Shared Values Strip */}
      <section className="py-24 bg-navy text-white relative">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <ShieldCheck className="mx-auto mb-8 text-accent opacity-50" size={48} />
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8 leading-tight italic">
            "Producing global citizens who respect and celebrate differences since 1992."
          </h2>
          <p className="font-body text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            We strive to provide our students with the skills and knowledge to become lifelong learners, effective communicators, and socially productive citizens prepared for life choices and challenges in a global society.
          </p>
        </div>
      </section>
    </div>
  );
}

function OverviewSection() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary font-heading font-semibold text-xs rounded-full mb-6 uppercase tracking-wider">
              About Our School
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-navy mb-8 leading-tight">
              Three Decades of <br />
              <span className="text-primary italic">Educational Leadership</span>
            </h2>
            <p className="font-body text-navy/70 text-lg leading-relaxed mb-6">
              Established in 1992 under the guidance of the Maru Mal Education Board, M M Public School (MMPS) has grown into a premier educational institution in Gurugram.
            </p>
            <p className="font-body text-navy/70 mb-8 leading-relaxed">
              Our 5-acre co-educational campus is affiliated with CBSE and serves 800+ students from Nursery to Grade XII. We believe in providing a wholesome environment where traditional Indian values meet international perspectives.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 border-l-4 border-accent bg-ivory rounded-r-2xl shadow-sm">
                <div className="font-heading font-bold text-3xl text-navy">1992</div>
                <div className="font-body text-xs text-navy/60 uppercase font-semibold tracking-wider">Foundation Year</div>
              </div>
              <div className="p-6 border-l-4 border-gold bg-ivory rounded-r-2xl shadow-sm">
                <div className="font-heading font-bold text-3xl text-navy">5 Acres</div>
                <div className="font-body text-xs text-navy/60 uppercase font-semibold tracking-wider">Sprawling Campus</div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://source.unsplash.com/800x1000/?school,building,exterior" 
                alt="MMPS Building" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          {[
            { icon: Building2, title: 'Architecture', desc: 'Unique dual-block design for age-appropriate learning.', color: 'text-primary' },
            { icon: History, title: 'Tradition', desc: 'Deeply rooted in social productivity and Indian values.', color: 'text-accent' },
            { icon: Award, title: 'Excellence', desc: 'Proven track record of board results and sports legacy.', color: 'text-gold-600' },
            { icon: Users, title: 'Diversity', desc: 'Co-ed community fostering respect and collaboration.', color: 'text-green-600' },
          ].map((feat, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className={cn("w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-ivory transition-colors")}>
                <feat.icon className={cn("transition-transform duration-500 group-hover:scale-110", feat.color)} size={32} />
              </div>
              <h3 className="font-heading font-bold text-xl text-navy mb-3">{feat.title}</h3>
              <p className="font-body text-sm text-navy/60 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section className="py-24 md:py-32 bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent font-heading font-semibold text-xs rounded-full mb-4 uppercase tracking-wider">
            Our Purpose
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-6">Guiding Our Path</h2>
          <p className="font-body text-navy/60 text-lg">We are driven by a vision to produce global citizens and a mission to nurture lifelong learners.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <div className="flex flex-col group">
            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-gray-100 h-full flex flex-col relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-primary/20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-[15rem] -translate-y-10 translate-x-10 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700"></div>
              <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mb-10 group-hover:bg-primary transition-all duration-500 relative z-10">
                <Eye className="text-primary group-hover:text-white transition-colors duration-500" size={40} />
              </div>
              <h2 className="font-heading font-bold text-4xl text-navy mb-8 relative z-10 uppercase tracking-tighter">Vision</h2>
              <div className="w-16 h-1.5 bg-accent rounded-full mb-8 relative z-10"></div>
              <p className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-navy leading-tight italic relative z-10">
                "To produce <span className="text-primary">global citizens</span> who respect differences and become instruments of change."
              </p>
            </div>
          </div>

          <div className="flex flex-col group">
            <div className="bg-navy p-10 md:p-16 rounded-[3rem] shadow-2xl h-full flex flex-col relative overflow-hidden transition-all duration-500 hover:shadow-primary/40">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-[15rem] -translate-y-10 translate-x-10 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700"></div>
              <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mb-10 group-hover:bg-accent transition-all duration-500 relative z-10">
                <Target className="text-accent group-hover:text-white transition-colors duration-500" size={40} />
              </div>
              <h2 className="font-heading font-bold text-4xl text-white mb-8 relative z-10 uppercase tracking-tighter">Mission</h2>
              <div className="w-16 h-1.5 bg-accent rounded-full mb-8 relative z-10"></div>
              <p className="font-body text-xl text-white/80 leading-relaxed relative z-10">
                "Committed to providing students with the <span className="text-accent font-semibold text-2xl">skills and knowledge</span> to become lifelong learners, effective communicators, and socially productive citizens."
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 p-8 md:p-14 bg-white rounded-[3rem] shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <div className="shrink-0 w-full md:w-1/3">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-navy">Core Philosophy</h3>
            <p className="font-body text-navy/60 mt-4 leading-relaxed">The bedrock of our institute that stands tall since 1992.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full">
            {[
              { title: 'Tradition & Outlook', desc: 'Merging Indian values with international perspectives.' },
              { title: 'Social Productivity', desc: 'Developing citizens who contribute meaningfully.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Globe2 className="text-accent" size={24} />
                </div>
                <div>
                   <h4 className="font-heading font-bold text-lg text-navy mb-2">{item.title}</h4>
                   <p className="font-body text-sm text-navy/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ChairmanSection() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-3xl transition-all duration-500"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-ivory aspect-[4/5] transform hover:-rotate-1 transition-transform duration-500">
                <img 
                  src="https://source.unsplash.com/800x1000/?professional,man,suit" 
                  alt="MMPS Chairman" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent p-8 rounded-3xl shadow-xl animate-float">
                <Quote className="text-white opacity-80" size={40} />
              </div>
            </div>
            <div className="mt-12 text-center lg:text-left">
              <h3 className="font-heading font-bold text-3xl text-navy mb-2 tracking-tight">Mr. XYZ</h3>
              <p className="font-body text-primary font-bold uppercase tracking-[0.2em] text-sm">Honorable Chairman</p>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary font-heading font-semibold text-xs rounded-full mb-8 uppercase tracking-wider">
              Chairman's Message
            </div>
            <div className="prose prose-xl font-body text-navy/80 space-y-8">
              <p className="text-2xl md:text-3xl font-heading font-bold text-navy leading-tight italic border-l-4 border-accent pl-8">
                "Education is the cornerstone of civilization. At MMPS, we believe every child deserves their rightful place through talent and hard work."
              </p>
              <p className="leading-relaxed">
                Welcome to M M Public School. Our institution was founded with a singular vision: to provide world-class education that remains accessible to all segments of society. We believe that financial constraints should never be a barrier to a child's dreams.
              </p>
              <p className="leading-relaxed">
                Our curriculum is a deliberate blend of traditional Indian values and modern pedagogical techniques. We focus not just on academic scores, but on the wholesome character development of our students. We want them to be leaders who are empathetic, socially responsible, and globally aware.
              </p>
              <p className="leading-relaxed">
                As we move forward in this digital age, we continue to upgrade our infrastructure and teaching methods while keeping our core values of 'Vision and Values' intact. I welcome you to be part of this journey of excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrincipalSection() {
  return (
    <section className="py-24 md:py-32 bg-ivory relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/5 rounded-[3rem] blur-3xl transition-all duration-500"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white aspect-[4/5] transform hover:rotate-1 transition-transform duration-500">
                <img 
                  src="https://source.unsplash.com/800x1000/?professional,woman,suit" 
                  alt="MMPS Principal" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary p-8 rounded-3xl shadow-xl animate-float">
                <Quote className="text-white opacity-80" size={40} />
              </div>
            </div>
            <div className="mt-12 text-center lg:text-left">
              <h3 className="font-heading font-bold text-3xl text-navy mb-2 tracking-tight">Mrs. ABC</h3>
              <p className="font-body text-accent font-bold uppercase tracking-[0.2em] text-sm">Principal</p>
            </div>
          </div>
          
          <div className="lg:col-span-7 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent font-heading font-semibold text-xs rounded-full mb-8 uppercase tracking-wider">
              Principal's Message
            </div>
            <div className="prose prose-xl font-body text-navy/80 space-y-8">
              <p className="text-2xl md:text-3xl font-heading font-bold text-navy leading-tight italic border-l-4 border-primary pl-8">
                "Our vision extends beyond academic excellence. We focus on fostering a positive attitude and liberating minds."
              </p>
              <p className="leading-relaxed">
                At M M Public School, we view education as a transformative journey. Our objective is to create an environment where every student feels seen, heard, and encouraged to explore their full potential.
              </p>
              <p className="leading-relaxed">
                We pride ourselves on our inclusive culture. Whether it's through our diverse house system, our rigorous sports programs like MMMICT, or our technology-integrated classrooms, we ensure that students have multiple avenues to discover their passions.
              </p>
              <p className="leading-relaxed">
                The 21st-century world demands agility, critical thinking, and a collaborative spirit. We are dedicated to nurturing these qualities in our students so they can navigate the complexities of the future with confidence and integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
