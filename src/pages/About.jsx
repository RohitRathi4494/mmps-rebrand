import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import { Link } from 'react-router-dom';
import {
  Award, History, Building2, Users,
  Target, Eye, Globe2, ShieldCheck, Quote,
  Monitor, Microscope, BookOpen, Music, Dumbbell, Palette,
  Wifi, TreePine, BusFront, Utensils
} from 'lucide-react';

export default function About() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.replace('#', ''));
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <div className="bg-ivory flex flex-col min-h-screen">
      <PageHero
        title="About MMPS"
        subtitle="A 30-year journey of academic excellence, strong values, and holistic student development."
        image="/school.webp"
      />

      <div className="flex flex-col">
        <div id="overview"><OverviewSection /></div>
        <div id="vision" className="border-t border-gray-100"><VisionSection /></div>
        <div id="leadership" className="border-t border-gray-100"><LeadershipSection /></div>
        <div id="infrastructure" className="border-t border-gray-100"><InfrastructureSection /></div>
      </div>

      {/* Vision Quote Strip */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <ShieldCheck className="mx-auto mb-8 text-accent opacity-50" size={48} />
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8 leading-tight italic">
            "Producing global citizens who respect and celebrate differences since 1992."
          </h2>
          <p className="font-body text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            We strive to provide our students the skills to become lifelong learners, effective communicators, and socially productive citizens prepared for life's challenges in a global society.
          </p>
        </div>
      </section>
    </div>
  );
}

function OverviewSection() {
  const pillars = [
    { icon: Building2, title: 'Architecture', desc: 'Unique dual-block design — a dedicated Junior wing and a combined Senior block, ensuring age-appropriate learning environments.', color: 'text-primary' },
    { icon: History, title: 'Tradition', desc: 'Deeply rooted in social productivity and Indian values, blended seamlessly with a modern global outlook.', color: 'text-accent' },
    { icon: Award, title: 'Excellence', desc: 'Proven track record of stellar board results, a celebrated sports legacy, and competitive examination successes.', color: 'text-gold' },
    { icon: Users, title: 'Diversity', desc: 'A thriving co-educational community of 800+ students from Nursery to Grade XII, fostering respect and collaboration.', color: 'text-green-600' },
  ];

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary font-heading font-semibold text-xs rounded-full mb-6 uppercase tracking-wider">
              About Our School
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-navy mb-8 leading-tight">
              Three Decades of <br />
              <span className="text-primary italic">Educational Leadership</span>
            </h2>
            <p className="font-body text-navy/70 text-lg leading-relaxed mb-5">
              Established in 1992 under the guidance of the Maru Mal Education Board, M M Public School (MMPS) has grown into a premier educational institution in Gurugram, Haryana.
            </p>
            <p className="font-body text-navy/70 mb-8 leading-relaxed">
              Our 5-acre co-educational campus is affiliated with CBSE and serves 800+ students from Nursery to Grade XII. We believe in providing a wholesome environment where traditional Indian values meet international perspectives — producing global citizens who are confident, compassionate, and capable.
            </p>

            <div className="grid grid-cols-2 gap-5">
              {[
                { value: '1992', label: 'Foundation Year', border: 'border-accent' },
                { value: '5 Acres', label: 'Sprawling Campus', border: 'border-gold' },
                { value: '800+', label: 'Enrolled Students', border: 'border-primary' },
                { value: '100%', label: 'Board Pass Rate', border: 'border-green-500' },
              ].map((s, i) => (
                <div key={i} className={`p-5 border-l-4 ${s.border} bg-ivory rounded-r-2xl shadow-sm`}>
                  <div className="font-heading font-bold text-2xl text-navy">{s.value}</div>
                  <div className="font-body text-xs text-navy/60 uppercase font-semibold tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white aspect-[4/5]">
              <img
                src="/school.webp"
                alt="MMPS Campus Building"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-body text-white/70 text-xs uppercase tracking-widest mb-1">Est.</p>
                <p className="font-heading font-bold text-white text-4xl">1992</p>
                <p className="font-body text-white/70 text-sm">MM Public School, Gurugram</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {pillars.map((p, i) => (
            <div key={i} className="bg-white p-7 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-5 group-hover:bg-ivory transition-colors">
                <p.icon className={`transition-transform duration-500 group-hover:scale-110 ${p.color}`} size={28} />
              </div>
              <h3 className="font-heading font-bold text-xl text-navy mb-2">{p.title}</h3>
              <p className="font-body text-sm text-navy/60 leading-relaxed">{p.desc}</p>
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
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-4">Vision & Mission</h2>
          <p className="font-body text-navy/60 text-lg">We are driven by a vision to produce global citizens and a mission to nurture lifelong learners.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Vision */}
          <div className="group bg-white p-10 md:p-14 rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-primary/5 rounded-bl-[15rem] -translate-y-10 translate-x-10 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700" />
            <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-500 relative z-10">
              <Eye className="text-primary group-hover:text-white transition-colors duration-500" size={36} />
            </div>
            <h2 className="font-heading font-bold text-4xl text-navy mb-6 uppercase tracking-tighter relative z-10">Vision</h2>
            <div className="w-14 h-1.5 bg-accent rounded-full mb-8 relative z-10" />
            <p className="font-heading font-bold text-2xl md:text-3xl text-navy leading-tight italic relative z-10">
              "To produce <span className="text-primary">global citizens</span> who respect and celebrate differences and become instruments of change in the world."
            </p>
          </div>

          {/* Mission */}
          <div className="group bg-navy p-10 md:p-14 rounded-[3rem] shadow-2xl flex flex-col relative overflow-hidden hover:shadow-primary/20 transition-all duration-500">
            <div className="absolute top-0 right-0 w-60 h-60 bg-white/5 rounded-bl-[15rem] -translate-y-10 translate-x-10 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700" />
            <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mb-8 group-hover:bg-accent transition-all duration-500 relative z-10">
              <Target className="text-accent group-hover:text-white transition-colors duration-500" size={36} />
            </div>
            <h2 className="font-heading font-bold text-4xl text-white mb-6 uppercase tracking-tighter relative z-10">Mission</h2>
            <div className="w-14 h-1.5 bg-accent rounded-full mb-8 relative z-10" />
            <p className="font-body text-xl text-white/80 leading-relaxed relative z-10">
              "Committed to providing students with the <span className="text-accent font-semibold text-2xl">skills and knowledge</span> to become lifelong learners, effective communicators, and socially productive citizens — prepared for life's choices and challenges in a global society."
            </p>
          </div>
        </div>

        {/* Core Philosophy */}
        <div className="p-8 md:p-14 bg-white rounded-[3rem] shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-12">
          <div className="shrink-0 w-full md:w-1/3">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-navy">Core Philosophy</h3>
            <p className="font-body text-navy/60 mt-4 leading-relaxed">The bedrock of our institute — standing firm since 1992.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
            {[
              { icon: Globe2, title: 'Tradition & Global Outlook', desc: 'Merging deep Indian values with international perspectives to produce well-rounded citizens.' },
              { icon: ShieldCheck, title: 'Social Productivity', desc: 'Developing students who contribute meaningfully and responsibly to society at every level.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                  <item.icon className="text-accent" size={22} />
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

function LeadershipSection() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary font-heading font-semibold text-xs rounded-full mb-4 uppercase tracking-wider">
            Leadership & Management
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-4">Guided by Vision</h2>
          <p className="font-body text-navy/60 text-lg max-w-xl mx-auto">Our school is shaped by the wisdom and dedication of its founding and academic leadership.</p>
        </div>

        {/* Chairman */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-3xl transition-all duration-500" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[10px] border-ivory aspect-[4/5] transform hover:-rotate-1 transition-transform duration-500">
                <img src="/images/chairman.png" alt="Honorable Chairman, MMPS" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-accent p-7 rounded-3xl shadow-xl">
                <Quote className="text-white opacity-80" size={36} />
              </div>
            </div>
            <div className="mt-12 text-center lg:text-left">
              <h3 className="font-heading font-bold text-3xl text-navy mb-2 tracking-tight">Honorable Chairman</h3>
              <p className="font-body text-primary font-bold uppercase tracking-[0.2em] text-sm">Maru Mal Education Board</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary font-heading font-semibold text-xs rounded-full mb-8 uppercase tracking-wider">
              Chairman's Message
            </div>
            <p className="text-2xl md:text-3xl font-heading font-bold text-navy leading-tight italic border-l-4 border-accent pl-8 mb-8">
              "Education is the cornerstone of civilization. At MMPS, we believe every child deserves their rightful place through talent and hard work."
            </p>
            <div className="font-body text-navy/70 space-y-5 leading-relaxed">
              <p>Welcome to M M Public School. Our institution was founded with a singular vision: to provide world-class education that remains accessible to all segments of society. We believe that financial constraints should never be a barrier to a child's dreams.</p>
              <p>Our curriculum is a deliberate blend of traditional Indian values and modern pedagogical techniques. We focus not just on academic scores, but on the wholesome character development of our students. We want them to be leaders who are empathetic, socially responsible, and globally aware.</p>
              <p>As we move forward in this digital age, we continue to upgrade our infrastructure and teaching methods while keeping our core values of 'Vision and Values' intact. I welcome you to be part of this journey of excellence.</p>
            </div>
          </div>
        </div>

        {/* Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/5 rounded-[3rem] blur-3xl transition-all duration-500" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[10px] border-white aspect-[4/5] transform hover:rotate-1 transition-transform duration-500">
                <img src="/images/principal.png" alt="Principal, MMPS" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-primary p-7 rounded-3xl shadow-xl">
                <Quote className="text-white opacity-80" size={36} />
              </div>
            </div>
            <div className="mt-12 text-center lg:text-left">
              <h3 className="font-heading font-bold text-3xl text-navy mb-2 tracking-tight">Principal</h3>
              <p className="font-body text-accent font-bold uppercase tracking-[0.2em] text-sm">M M Public School, Gurugram</p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent font-heading font-semibold text-xs rounded-full mb-8 uppercase tracking-wider">
              Principal's Message
            </div>
            <p className="text-2xl md:text-3xl font-heading font-bold text-navy leading-tight italic border-l-4 border-primary pl-8 mb-8">
              "Our vision extends beyond academic excellence. We focus on fostering a positive attitude and liberating minds to reach their full potential."
            </p>
            <div className="font-body text-navy/70 space-y-5 leading-relaxed">
              <p>At M M Public School, we view education as a transformative journey. Our objective is to create an environment where every student feels seen, heard, and encouraged to explore their full potential.</p>
              <p>We pride ourselves on our inclusive culture. Whether it's through our diverse house system, our rigorous sports programs like MMMICT, or our technology-integrated classrooms, we ensure that students have multiple avenues to discover their passions.</p>
              <p>The 21st-century world demands agility, critical thinking, and a collaborative spirit. We are dedicated to nurturing these qualities so our students can navigate the complexities of the future with confidence and integrity.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfrastructureSection() {
  const facilities = [
    { icon: Monitor, name: 'Smart Classrooms', desc: 'Interactive digital boards and projector-enabled classrooms across all sections for immersive learning.', img: '/images/classroom.png', tag: '30+ Rooms' },
    { icon: Microscope, name: 'Science Laboratories', desc: 'Fully equipped Physics, Chemistry, and Biology labs with modern apparatus for hands-on experiments.', img: '/images/science-lab.png', tag: '3 Labs' },
    { icon: Wifi, name: 'Computer Lab', desc: 'High-speed internet connected workstations for IT education, research, and digital literacy programs.', img: '/images/computer-lab.png', tag: '40 Systems' },
    { icon: BookOpen, name: 'Library & Resource Centre', desc: 'A rich collection of books, journals, reference materials, and e-resources for students and staff alike.', img: '/images/library.png', tag: '5000+ Books' },
    { icon: Music, name: 'Music & Dance Studio', desc: 'A dedicated studio for Indian classical music, western instruments, and various dance art forms.', img: '/images/music-room.png', tag: 'Fully Equipped' },
    { icon: Dumbbell, name: 'Sports Infrastructure', desc: 'Cricket grounds, basketball courts, badminton, table tennis, and a multi-purpose sports arena.', img: '/images/cricket-tournament.png', tag: '5-Acre Ground' },
    { icon: Palette, name: 'Art & Craft Studio', desc: 'A vibrant space for Fine Arts, handicrafts, origami, pottery, and all creative expression.', img: '/images/art-room.png', tag: 'Creative Hub' },
    { icon: TreePine, name: 'Lush Green Campus', desc: 'Sprawling 5-acre campus with manicured lawns, gardens, and pollution-free open spaces for well-being.', img: '/images/campus-aerial.png', tag: '5 Acres' },
  ];

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent font-heading font-semibold text-xs rounded-full mb-4 uppercase tracking-wider">
            Infrastructure & Facilities
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-4">Built for Learning</h2>
          <p className="font-body text-navy/60 text-lg max-w-2xl mx-auto">
            Every corner of our campus is thoughtfully designed to inspire curiosity, creativity, and physical well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="group relative h-64 rounded-2xl overflow-hidden shadow-md cursor-pointer">
                <img src={f.img} alt={f.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />

                <div className="absolute top-4 right-4">
                  <span className="bg-white/20 backdrop-blur text-white text-xs font-heading font-semibold px-3 py-1 rounded-full border border-white/20">
                    {f.tag}
                  </span>
                </div>

                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <div className="flex items-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-10 h-10 rounded-full bg-primary/80 backdrop-blur flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white" size={18} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-white text-base">{f.name}</h3>
                      <p className="font-body text-white/70 text-xs leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mt-1">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Extra amenities */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { icon: BusFront, label: 'School Transport', desc: 'GPS-tracked buses covering all major routes' },
            { icon: Utensils, label: 'Hygienic Canteen', desc: 'Nutritious, fresh meals prepared daily on campus' },
            { icon: ShieldCheck, label: 'Safe Campus', desc: 'CCTV surveillance, trained security personnel' },
            { icon: Wifi, label: 'Digital Campus', desc: 'High-speed Wi-Fi throughout the campus' },
          ].map((a, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <a.icon size={20} className="text-primary" />
              </div>
              <h4 className="font-heading font-bold text-navy text-sm mb-1">{a.label}</h4>
              <p className="font-body text-navy/50 text-xs">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
