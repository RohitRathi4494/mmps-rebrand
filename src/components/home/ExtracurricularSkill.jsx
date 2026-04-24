import React from 'react';
import { Palette, Bot, LineChart, Code, Theater } from 'lucide-react';

const skills = [
  { level: 'Grades I–V', icon: Palette, title: 'Foundational Arts & Robotics', items: ['Yoga for mindfulness', 'Basic Lego Robotics', 'Art & Craft', 'Music & Dance'] },
  { level: 'Grades VI–VIII', icon: Bot, title: 'Tech & Life Skills', items: ['AI & Advanced Robotics', 'Financial Literacy', 'Food Preservation', 'Performing Arts'] },
  { level: 'Grades IX–XII', icon: LineChart, title: 'Leadership & Advanced Tech', items: ['Model United Nations (MUN)', 'Advanced Programming', 'Literary Society', 'Fine Arts Painting'] }
];

export default function ExtracurricularSkill() {
  return (
    <section className="py-12 bg-ivory relative border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-navy mb-4">
            Beyond <span className="text-accent underline decoration-gold decoration-4 underline-offset-8">Textbooks</span>
          </h2>
          <p className="font-body text-navy/70 text-lg mt-6 lg:max-w-2xl mx-auto">
            Our comprehensive skill training programs run parallel to academics, ensuring students discover their passions early.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-primary-50 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-primary/10 text-primary font-heading tracking-wider font-semibold text-xs px-3 py-1 rounded-full uppercase">
                    {skill.level}
                  </span>
                  <Icon className="text-gold-500 opacity-50 group-hover:opacity-100 transition-opacity" size={28} />
                </div>
                
                <h3 className="font-heading font-bold text-xl text-navy mb-6 group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                
                <ul className="space-y-4">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <Code size={14} className="text-accent" />
                      </div>
                      <span className="font-body text-navy/80 text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
