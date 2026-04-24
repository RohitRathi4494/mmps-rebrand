import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Pencil, Book, GraduationCap } from 'lucide-react';

const programs = [
  {
    title: 'Nursery to Grade V',
    subtitle: 'Foundation Years',
    icon: Pencil,
    features: ['Dedicated Junior Section block', 'Bright, interactive classrooms', 'Green play areas for tiny tots', 'Focus on language & motor skills'],
    bgImage: 'https://source.unsplash.com/800x600/?kindergarten,kids,learning',
    color: 'from-sky-500/90 to-sky-700/90'
  },
  {
    title: 'Grade VI to X',
    subtitle: 'Middle & Secondary School',
    icon: Book,
    features: ['CBSE NCF/NEP aligned curriculum', 'Smart classes & modern labs', 'Skill subjects starting Grade VI', 'Extensive sports & co-curriculars'],
    bgImage: 'https://source.unsplash.com/800x600/?students,classroom,school',
    color: 'from-primary-500/90 to-primary-700/90'
  },
  {
    title: 'Grade XI–XII',
    subtitle: 'Senior Secondary',
    icon: GraduationCap,
    features: ['Science, Commerce & Humanities', 'Diverse elective subject offerings', 'Career counseling & guidance', 'Modern Physics / Chemistry Labs'],
    bgImage: 'https://source.unsplash.com/800x600/?teenagers,study,college,library',
    color: 'from-navy-600/90 to-navy-900/90'
  }
];

export default function AcademicPrograms() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 max-w-4xl">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-navy mb-4">
              Education That <span className="text-primary italic">Empowers</span>
            </h2>
            <div className="w-24 h-1 bg-accent rounded-full mb-6"></div>
            <p className="font-body text-navy/70 text-lg">
              Our comprehensive curriculum is meticulously designed for each developmental stage, providing the right balance of challenge and support.
            </p>
          </div>
          
          <Link to="/academics" className="hidden md:flex items-center gap-2 text-primary font-heading font-semibold hover:text-accent transition-colors">
            Explore Full Curriculum <ArrowRight size={20} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((prog, index) => {
            const Icon = prog.icon;
            return (
              <div 
                key={index}
                className="relative h-[500px] rounded-3xl overflow-hidden group shadow-lg"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${prog.bgImage})` }}
                ></div>
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${prog.color} mix-blend-multiply opacity-90 transition-opacity group-hover:opacity-95`}></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 text-white">
                  <div className="bg-white/20 backdrop-blur-md w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/20 transform group-hover:-translate-y-4 transition-transform duration-500">
                    <Icon size={32} />
                  </div>
                  
                  <div className="transform transition-transform duration-500 translate-y-[100px] group-hover:translate-y-0">
                    <p className="font-body text-white/80 font-semibold tracking-wider text-sm uppercase mb-1">{prog.subtitle}</p>
                    <h3 className="font-heading font-bold text-2xl mb-4">{prog.title}</h3>
                    
                    <ul className="space-y-2 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {prog.features.map((feature, i) => (
                        <li key={i} className="font-body text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link to="/academics" className="inline-flex items-center gap-2 font-heading font-medium text-gold hover:text-white transition-colors">
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-10 md:hidden flex justify-center">
          <Link to="/academics" className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 shadow-sm rounded-full text-primary font-heading font-semibold">
            Explore Full Curriculum <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
