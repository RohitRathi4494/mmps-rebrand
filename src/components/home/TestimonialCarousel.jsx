import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Ananya Ray",
    relation: "Parent of Vivaan, Grade VIII",
    text: "MMPS has provided my son with the perfect balance of academic rigor and extracurricular engagement. The teachers are incredibly supportive and accessible.",
    rating: 5,
    img: "https://ui-avatars.com/api/?name=Priya+Sharma&background=0D8ABC&color=fff"
  },
  {
    name: "Mr. Rajeev Mehta",
    relation: "Parent of Diya, Grade XII",
    text: "Choosing MMPS for our daughter's senior secondary education was the best decision. The career counseling and modern labs prepared her well for her board exams.",
    rating: 5,
    img: "https://ui-avatars.com/api/?name=Vikram+Singh&background=F59E0B&color=fff"
  },
  {
    name: "Mrs. Kavita Singh",
    relation: "Parent of Aarav, Grade V",
    text: "The Junior Block is fantastic! The lush green play areas and the dedicated staff have made my child's foundational years truly joyful and enriching.",
    rating: 5,
    img: "https://ui-avatars.com/api/?name=Anjali+Desai&background=10B981&color=fff"
  }
];

export default function TestimonialCarousel() {
  return (
    <section className="py-12 md:py-10 bg-ivory relative border-t border-gray-100">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-navy mb-4">
            Parents <span className="text-primary italic">Speak</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="font-body text-navy/70 text-lg">Trust earned over decades through consistent excellence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative group">
              <div className="absolute top-6 right-8 text-gray-100 group-hover:text-gold-100 transition-colors">
                <Quote size={60} strokeWidth={1} />
              </div>
              
              <div className="flex items-center gap-1 mb-6 text-gold relative z-10">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="font-body text-navy/80 leading-relaxed mb-8 relative z-10 min-h-[100px]">
                "{test.text}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10">
                <img src={test.img} alt={test.name} className="w-12 h-12 rounded-full object-cover border-2 border-primary-50" />
                <div>
                  <h4 className="font-heading font-bold text-navy text-sm">{test.name}</h4>
                  <p className="font-body text-xs text-navy/60">{test.relation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
