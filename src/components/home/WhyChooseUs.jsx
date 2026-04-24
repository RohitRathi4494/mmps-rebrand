import React from 'react';
import { Award, Leaf, BookOpen, MonitorPlay, Users, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: '30+ Years of Excellence',
    description: 'Nurturing generations since 1992 with a proven track record of academic and holistic success.',
    color: 'bg-primary-50',
    iconColor: 'text-primary'
  },
  {
    icon: Leaf,
    title: '5-Acre Lush Green Campus',
    description: 'A serene, pollution-free environment fostering physical well-being and a calm state of mind.',
    color: 'bg-green-50',
    iconColor: 'text-green-500'
  },
  {
    icon: BookOpen,
    title: 'CBSE NCF/NEP Curriculum',
    description: 'Progressive educational framework blending deep Indian roots with a global outlook.',
    color: 'bg-gold-50',
    iconColor: 'text-gold-600'
  },
  {
    icon: MonitorPlay,
    title: 'Smart Classrooms',
    description: 'Technology-enabled learning spaces that make education interactive, engaging, and highly effective.',
    color: 'bg-sky-50',
    iconColor: 'text-sky-500'
  },
  {
    icon: Users,
    title: 'Expert Faculty',
    description: 'Highly qualified, experienced educators committed to providing personalized attention and mentorship.',
    color: 'bg-violet-50',
    iconColor: 'text-violet-500'
  },
  {
    icon: HeartHandshake,
    title: 'Holistic Development',
    description: 'Extensive skill training, sports, and co-curricular programs ensuring well-rounded growth.',
    color: 'bg-accent-50',
    iconColor: 'text-accent'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-navy mb-4">
            Why Choose <span className="text-primary">MMPS?</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="font-body text-navy/70 text-lg">
            A comprehensive educational experience designed to empower students for the challenges of tomorrow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`w-16 h-16 rounded-2xl ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`${reason.iconColor}`} size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-xl text-navy mb-3">
                  {reason.title}
                </h3>
                <p className="font-body text-navy/60 leading-relaxed text-sm md:text-base">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
