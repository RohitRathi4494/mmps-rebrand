import React from 'react';
import PageHero from '../components/ui/PageHero';
import { Music, Palette, Code2, BookOpen, Leaf, Globe2, Theater, Camera } from 'lucide-react';

const clubs = [
  {
    icon: Music,
    name: 'Music Club',
    description: 'Students explore classical and contemporary music through vocal training, instruments, and school performances.',
    color: 'bg-purple-500',
    tag: 'Arts & Culture',
  },
  {
    icon: Palette,
    name: 'Art & Craft Club',
    description: 'From sketching and painting to sculpture and origami, our art club fosters creativity in every form.',
    color: 'bg-pink-500',
    tag: 'Arts & Culture',
  },
  {
    icon: Code2,
    name: 'Robotics & Coding Club',
    description: 'Hands-on experience with robotics kits, Python, and block coding prepares students for a digital future.',
    color: 'bg-sky-500',
    tag: 'STEM',
  },
  {
    icon: BookOpen,
    name: 'Literary & Debate Club',
    description: 'Public speaking, elocution, essay writing, and debate competitions sharpen communication and critical thinking.',
    color: 'bg-amber-500',
    tag: 'Language & Communication',
  },
  {
    icon: Leaf,
    name: 'Eco & Nature Club',
    description: 'Students engage in plantation drives, sustainability workshops, and environmental awareness campaigns.',
    color: 'bg-green-500',
    tag: 'Environment',
  },
  {
    icon: Globe2,
    name: 'Geography & Social Science Club',
    description: 'Map reading, model making, and cultural exchange activities bring the world to the classroom.',
    color: 'bg-teal-500',
    tag: 'Social Science',
  },
  {
    icon: Theater,
    name: 'Drama & Theatre Club',
    description: 'Annual plays, mime, and improvisation sessions help students build confidence and stage presence.',
    color: 'bg-rose-500',
    tag: 'Arts & Culture',
  },
  {
    icon: Camera,
    name: 'Photography Club',
    description: 'Students learn composition, editing, and visual storytelling through cameras and school events.',
    color: 'bg-indigo-500',
    tag: 'Media',
  },
];

export default function ClubsSocieties() {
  return (
    <div className="bg-ivory min-h-screen">
      <PageHero
        title="Clubs & Societies"
        subtitle="Beyond academics — MMPS nurtures hidden talents through a rich array of clubs that inspire passion and build character."
      />

      <section className="py-12 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Explore Our Clubs
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-3">
              Find Your <span className="text-accent">Passion</span>
            </h2>
            <p className="font-body text-navy/60 max-w-xl mx-auto">
              Every student has a unique spark. Our clubs and societies are designed to help them discover,
              develop, and shine.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clubs.map((club, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className={`${club.color} p-6 flex items-center justify-center`}>
                  <club.icon size={40} className="text-white" />
                </div>
                <div className="p-5">
                  <span className="inline-block px-3 py-0.5 rounded-full bg-gray-100 text-gray-500 text-xs font-body mb-3">
                    {club.tag}
                  </span>
                  <h3 className="font-heading font-semibold text-navy text-lg mb-2">
                    {club.name}
                  </h3>
                  <p className="font-body text-navy/60 text-sm leading-relaxed">
                    {club.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Join Banner */}
          <div className="mt-16 bg-navy rounded-3xl p-10 md:p-14 text-white text-center">
            <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">
              Want to Start a New Club?
            </h3>
            <p className="font-body text-white/60 max-w-xl mx-auto mb-8">
              MMPS actively encourages student initiative. If you have a passion that doesn't fit an existing
              club, talk to the Student Council or your class teacher to propose a new one!
            </p>
            <a
              href="/student-life/council"
              className="inline-block px-8 py-4 bg-accent text-white font-heading font-semibold rounded-full hover:bg-red-700 transition-colors"
            >
              Meet the Student Council
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
