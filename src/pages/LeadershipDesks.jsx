import React, { useEffect } from 'react';
import PageHero from '../components/ui/PageHero';
import { Quote } from 'lucide-react';

export function ChairmanDesk() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="bg-ivory flex flex-col">
      <PageHero title="Chairman's Desk" subtitle="Words of wisdom from our visionary leader." />
      <section className="py-12 md:py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-32">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl border-8 border-ivory aspect-[3/4]">
                <img src="https://source.unsplash.com/600x800/?professional,man,suit" alt="Chairman" className="w-full h-full object-cover" />
              </div>
              <div className="mt-6 text-center">
                <h3 className="font-heading font-bold text-2xl text-navy">Mr. XYZ</h3>
                <p className="font-body text-primary font-semibold">Honorable Chairman</p>
              </div>
            </div>
            <div className="md:col-span-8">
              <Quote className="text-accent mb-6 opacity-20" size={60} />
              <div className="prose prose-lg font-body text-navy/70 space-y-6">
                <p className="text-xl font-heading font-semibold text-navy italic">"Education is the cornerstone of civilization. At MMPS, we believe every child deserves their rightful place through talent and hard work."</p>
                <p>Welcome to MMPS. Our institution was founded with a singular vision: to provide world-class education that remains accessible to all segments of society. We believe that financial constraints should never be a barrier to a child's dreams.</p>
                <p>Our curriculum is a blend of traditional values and modern pedagogical techniques. We focus not just on academic scores, but on the character development of our students. We want them to be leaders who are empathetic, socially responsible, and globally aware.</p>
                <p>As we move forward in this digital age, we continue to upgrade our infrastructure and teaching methods while keeping our core values of 'Vision and Values' intact. I welcome you to be part of this journey of excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function PrincipalDesk() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="bg-ivory flex flex-col">
      <PageHero title="Principal's Desk" subtitle="Our commitment to holistic development and student empowerment." />
      <section className="py-12 md:py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 md:order-2 sticky top-32">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl border-8 border-ivory aspect-[3/4]">
                <img src="https://source.unsplash.com/600x800/?professional,woman,suit" alt="Principal" className="w-full h-full object-cover" />
              </div>
              <div className="mt-6 text-center">
                <h3 className="font-heading font-bold text-2xl text-navy">Mrs. ABC</h3>
                <p className="font-body text-primary font-semibold">Principal</p>
              </div>
            </div>
            <div className="md:col-span-8 md:order-1">
              <Quote className="text-primary mb-6 opacity-20" size={60} />
              <div className="prose prose-lg font-body text-navy/70 space-y-6">
                <p className="text-xl font-heading font-semibold text-navy italic">"Our vision extends beyond academic excellence. We focus on fostering a positive attitude and liberating minds."</p>
                <p>At M M Public School, we view education as a transformative journey. Our objective is to create an environment where every student feels seen, heard, and encouraged to explore their full potential.</p>
                <p>We pride ourselves on our inclusive culture. Whether it's through our diverse house system, our rigorous sports programs like MMMICT, or our technology-integrated classrooms, we ensure that students have multiple avenues to discover their passions.</p>
                <p>The 21st-century world demands agility, critical thinking, and a collaborative spirit. We are dedicated to nurturing these qualities in our students so they can navigate the complexities of the future with confidence and integrity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
