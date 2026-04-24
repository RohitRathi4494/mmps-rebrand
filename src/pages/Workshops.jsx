import React from 'react';
import PageHero from '../components/ui/PageHero';
import { Lightbulb, Code2, Leaf, Users2, Brush, Globe2, Rocket } from 'lucide-react';

const workshops = [
  {
    icon: Code2,
    title: 'Annual Coding Bootcamp',
    date: 'February 2025',
    tag: 'STEM',
    tagColor: 'bg-sky-100 text-sky-700',
    description: 'A 3-day intensive coding bootcamp where students from Grades VI–XII are introduced to Python, web development, and problem-solving using real-world challenges.',
  },
  {
    icon: Leaf,
    title: 'Green Campus Initiative',
    date: 'Ongoing',
    tag: 'Environment',
    tagColor: 'bg-green-100 text-green-700',
    description: 'Students participate in plantation drives, waste segregation awareness, and sustainability audits of the campus as part of our commitment to a greener future.',
  },
  {
    icon: Brush,
    title: 'Heritage Art Workshop',
    date: 'November 2024',
    tag: 'Arts & Culture',
    tagColor: 'bg-pink-100 text-pink-700',
    description: 'A collaboration with local artists, this workshop celebrates Indian folk art forms — Madhubani, Warli, and Phad — giving students a hands-on cultural experience.',
  },
  {
    icon: Lightbulb,
    title: 'Entrepreneurship Mindset Workshop',
    date: 'September 2024',
    tag: 'Life Skills',
    tagColor: 'bg-amber-100 text-amber-700',
    description: 'Conducted by industry mentors, this session teaches students ideation, pitching, and basic business concepts through simulations and group challenges.',
  },
  {
    icon: Globe2,
    title: 'Model United Nations (MUN)',
    date: 'August 2024',
    tag: 'Leadership',
    tagColor: 'bg-indigo-100 text-indigo-700',
    description: 'MMPS hosted its annual MUN conference with participation from 15 schools across NCR. Students debated global issues, honing research and public speaking skills.',
  },
  {
    icon: Users2,
    title: 'Anti-Bullying & Mental Wellness Drive',
    date: 'July 2024',
    tag: 'Wellbeing',
    tagColor: 'bg-rose-100 text-rose-700',
    description: 'School counselors and external specialists ran grade-wise sessions on emotional well-being, conflict resolution, and creating a safe, inclusive school environment.',
  },
  {
    icon: Rocket,
    title: 'Space Science Exploration Camp',
    date: 'March 2024',
    tag: 'STEM',
    tagColor: 'bg-sky-100 text-sky-700',
    description: 'In collaboration with a national science foundation, students built model rockets, studied our solar system, and interacted with a guest astronomer via live video.',
  },
];

export default function Workshops() {
  return (
    <div className="bg-ivory min-h-screen">
      <PageHero
        title="Workshops & Initiatives"
        subtitle="Learning at MMPS extends far beyond the classroom — through workshops, drives, and collaborative initiatives that prepare students for the real world."
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-3">
              This Year's <span className="text-accent">Highlights</span>
            </h2>
            <p className="font-body text-navy/60 max-w-2xl mx-auto">
              A curated look at our most impactful workshops and school-wide initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {workshops.map((w, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <w.icon size={22} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-heading font-medium ${w.tagColor}`}>
                    {w.tag}
                  </span>
                </div>

                <p className="font-body text-xs text-gray-400 mb-1">{w.date}</p>
                <h3 className="font-heading font-semibold text-navy text-lg mb-2">{w.title}</h3>
                <p className="font-body text-navy/60 text-sm leading-relaxed">{w.description}</p>
              </div>
            ))}
          </div>

          {/* Propose a Workshop */}
          <div className="mt-16 bg-primary rounded-3xl p-10 md:p-14 text-white text-center">
            <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">
              Want to Collaborate with MMPS?
            </h3>
            <p className="font-body text-white/60 max-w-2xl mx-auto mb-8">
              We welcome partnerships with organisations, NGOs, and industry experts who wish to
              contribute to our students' holistic development. Reach out to us with your proposal.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-primary font-heading font-bold rounded-full hover:bg-gray-100 transition-colors shadow-md"
            >
              Contact the School
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
