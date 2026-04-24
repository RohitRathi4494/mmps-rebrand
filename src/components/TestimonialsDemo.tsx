import React, { useState } from 'react';
import { AnimatedTestimonials, Testimonial } from './ui/testimonial';
import { TestimonialsAdmin } from './admin/TestimonialsAdmin';
import { Settings, Eye } from 'lucide-react';

const initialTestimonials: Testimonial[] = [
  {
    quote: "This platform revolutionized our data analysis process. The speed and accuracy are unparalleled. A must-have for any data-driven team.",
    name: "Priya Sharma",
    designation: "Data Scientist at QuantumLeap",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
  },
  {
    quote: "The user interface is incredibly intuitive, which made the onboarding process for my team a breeze. We were up and running in hours, not days.",
    name: "Marcus Johnson",
    designation: "Head of Operations at Synergy Corp",
    src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop",
  },
  {
    quote: "Customer support is top-notch. They are responsive, knowledgeable, and genuinely invested in our success. It feels like a true partnership.",
    name: "Isabella Rossi",
    designation: "Client Success Manager at Horizon",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
  },
  {
    quote: "I'm impressed by the constant stream of updates and new features. The development team is clearly passionate and listens to user feedback.",
    name: "Kenji Tanaka",
    designation: "Software Engineer at CodeCrafters",
    src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop",
  },
  {
    quote: "The ROI was almost immediate. It streamlined our workflows so effectively that we cut project delivery times by nearly 30%.",
    name: "Fatima Al-Jamil",
    designation: "CFO at Apex Financial",
    src: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=1887&auto=format&fit=crop",
  },
];

export default function TestimonialsDemo() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Toggle Header */}
        <div className="flex justify-center">
          <div className="inline-flex p-1 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setIsAdmin(false)}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                !isAdmin 
                  ? 'bg-primary-600 text-white shadow-md' 
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              <Eye size={16} /> Live Preview
            </button>
            <button
              onClick={() => setIsAdmin(true)}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                isAdmin 
                  ? 'bg-primary-600 text-white shadow-md' 
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              <Settings size={16} /> Admin Panel
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="transition-all duration-500">
          {isAdmin ? (
            <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4">
              <TestimonialsAdmin 
                testimonials={testimonials} 
                onUpdate={setTestimonials} 
              />
            </div>
          ) : (
            <div className="animate-in fade-in zoom-in-95">
              <AnimatedTestimonials testimonials={testimonials} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
