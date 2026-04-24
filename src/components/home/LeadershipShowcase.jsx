import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function LeadershipShowcase() {
  const [activeTab, setActiveTab] = useState('chairman');

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-ivory p-1.5 rounded-full border border-gray-100 shadow-inner">
            <button
              onClick={() => setActiveTab('chairman')}
              className={cn(
                "px-8 py-3 rounded-full font-heading font-semibold text-sm transition-all duration-300",
                activeTab === 'chairman' 
                  ? "bg-white text-primary shadow-md" 
                  : "text-navy/60 hover:text-navy"
              )}
            >
              Chairman's Desk
            </button>
            <button
              onClick={() => setActiveTab('principal')}
              className={cn(
                "px-8 py-3 rounded-full font-heading font-semibold text-sm transition-all duration-300",
                activeTab === 'principal' 
                  ? "bg-white text-primary shadow-md" 
                  : "text-navy/60 hover:text-navy"
              )}
            >
              Principal's Desk
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-50 relative">
          <div className="absolute top-0 right-0 p-8 text-primary/5">
            <Quote size={180} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 relative z-10">
            
            {/* Photo Column */}
            <div className="col-span-1 md:col-span-4 bg-primary-50 p-8 flex flex-col items-center justify-center border-r border-primary-100">
              <div className="w-48 h-48 rounded-full overflow-hidden border-8 border-white shadow-xl mb-6">
                <img 
                  src={activeTab === 'chairman' 
                    ? "https://source.unsplash.com/400x400/?professional,indian,man" 
                    : "https://source.unsplash.com/400x400/?professional,indian,woman"
                  } 
                  alt={activeTab === 'chairman' ? "Chairman" : "Principal"} 
                  className="w-full h-full object-cover transition-opacity duration-500"
                  key={activeTab} // Forces image re-render
                />
              </div>
              <h3 className="font-heading font-bold text-2xl text-navy text-center mb-1">
                {activeTab === 'chairman' ? "Mr. XYZ" : "Mrs. ABC"}
              </h3>
              <p className="font-body text-primary font-medium text-sm text-center">
                {activeTab === 'chairman' ? "Honorable Chairman" : "Principal"}
              </p>
            </div>
            
            {/* Message Column */}
            <div className="col-span-1 md:col-span-8 p-8 md:p-12 flex flex-col justify-center">
              <div className="min-h-[200px]">
                {activeTab === 'chairman' ? (
                  <div className="animate-fade-in">
                    <h4 className="font-heading font-bold text-xl text-navy mb-4">Focus on Accessible Quality Education</h4>
                    <p className="font-body text-navy/70 leading-relaxed mb-4">
                      "Education is the cornerstone of civilization. At MMPS, we believe every child deserves their rightful place through talent and hard work. We impart the best education through modern means while ensuring there is no financial burden on parents."
                    </p>
                    <p className="font-body text-navy/70 leading-relaxed">
                      Our commitment is to nurture values that stand the test of time, preparing our students not just for exams, but for life.
                    </p>
                  </div>
                ) : (
                  <div className="animate-fade-in">
                    <h4 className="font-heading font-bold text-xl text-navy mb-4">Beyond Academic Excellence</h4>
                    <p className="font-body text-navy/70 leading-relaxed mb-4">
                      "Our vision extends beyond academic excellence. We focus on fostering a positive attitude, weaning students from narrow self-interests, and liberating minds to reach their full potential."
                    </p>
                    <p className="font-body text-navy/70 leading-relaxed">
                      We aim to create an environment where intellectual curiosity is celebrated, and every child feels empowered to ask questions and seek their own answers in this rapidly changing global society.
                    </p>
                  </div>
                )}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <Link 
                  to={activeTab === 'chairman' ? "/chairman-desk" : "/principal-desk"}
                  className="inline-flex items-center gap-2 text-accent font-heading font-semibold hover:text-accent-600 transition-colors"
                >
                  Read Full Message <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
