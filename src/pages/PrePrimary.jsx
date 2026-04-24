import React, { useEffect } from 'react';
import PageHero from '../components/ui/PageHero';
import { Smile, Heart, Palette, Music, BookOpen, Star, Clock, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const activities = [
  { icon: '🎨', name: 'Arts & Crafts', desc: 'Clay modelling, finger painting, and creative storytelling spark imagination from day one.' },
  { icon: '🎵', name: 'Rhymes & Music', desc: 'Nursery rhymes, action songs, and basic rhythms build language and cognitive skills.' },
  { icon: '🌿', name: 'Nature Exploration', desc: 'Outdoor time, plant observation, and sensory play connect children with the world around them.' },
  { icon: '🧩', name: 'Puzzle Play', desc: 'Pattern recognition, shape sorting, and logical puzzles lay the groundwork for math readiness.' },
  { icon: '📖', name: 'Story Time', desc: 'Daily read-aloud sessions develop listening, vocabulary, and a lifelong love of books.' },
  { icon: '🏃', name: 'Physical Play', desc: 'Free movement, dance, and coordination games support healthy physical and motor development.' },
];

const subjects = [
  { name: 'English Language & Literacy', icon: BookOpen, color: 'bg-sky-500' },
  { name: 'Hindi Language', icon: BookOpen, color: 'bg-accent' },
  { name: 'Mathematical Concepts', icon: Star, color: 'bg-gold' },
  { name: 'Environmental Awareness (EVS)', icon: Heart, color: 'bg-green-500' },
  { name: 'Art, Music & Movement', icon: Palette, color: 'bg-purple-500' },
  { name: 'Introductory Computer Play', icon: Star, color: 'bg-indigo-500' },
];

export default function PrePrimary() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-ivory flex flex-col min-h-screen">
      <PageHero
        title="Pre-Primary Programme"
        subtitle="Nursery · LKG · UKG — where every child's story begins with joy, curiosity, and care."
        image="/images/holistic.png"
      />

      {/* Philosophy Section */}
      <section className="py-12 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="/images/holistic.png"
                  alt="Pre-Primary students at MMPS"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <Smile size={24} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-navy text-sm">Play-Based</p>
                    <p className="font-body text-xs text-navy/50">Learning Philosophy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-5">
                <Heart size={14} />
                Ages 3 – 6 Years
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-5 leading-tight">
                A Foundation Built on<br />
                <span className="text-accent">Joy & Wonder</span>
              </h2>
              <p className="font-body text-navy/60 leading-relaxed mb-6">
                At MMPS, Pre-Primary education is not about academics — it is about building a
                child's relationship with learning itself. Our Nursery to UKG classrooms are warm,
                nurturing spaces where children develop at their own pace through guided play,
                sensory experiences, and loving teacher interaction.
              </p>
              <p className="font-body text-navy/60 leading-relaxed mb-8">
                Our approach draws from established early childhood frameworks to ensure each child
                develops the cognitive, emotional, social, and physical skills they need before
                formal schooling begins.
              </p>

              {/* Key stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '20:1', label: 'Student–Teacher Ratio' },
                  { value: '3–6', label: 'Age Group (Years)' },
                  { value: '100%', label: 'Activity-Based Days' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <p className="font-heading font-bold text-2xl text-primary">{s.value}</p>
                    <p className="font-body text-xs text-navy/50 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects / Learning Areas */}
      <section className="py-12 md:py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-3">
              Learning <span className="text-accent">Areas</span>
            </h2>
            <p className="font-body text-navy/60 max-w-xl mx-auto">
              Our Pre-Primary curriculum covers six core developmental areas, introduced through play and creative engagement.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((s, i) => (
              <div key={i} className="group flex items-center gap-5 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <s.icon size={22} className="text-white" />
                </div>
                <p className="font-heading font-semibold text-navy">{s.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Activities */}
      <section className="py-12 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-3">
              A Day at <span className="text-primary">Pre-Primary</span>
            </h2>
            <p className="font-body text-navy/60 max-w-xl mx-auto">
              No two days are the same — but every day is filled with discovery.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {activities.map((a, i) => (
              <div key={i} className="group bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{a.icon}</div>
                <h3 className="font-heading font-semibold text-navy text-lg mb-2">{a.name}</h3>
                <p className="font-body text-navy/60 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A Typical Day Timeline */}
      <section className="py-12 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading font-bold text-3xl text-white mb-3">
              Typical Daily <span className="text-gold">Schedule</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-6">
              {[
                { time: '7:45 AM', activity: 'Arrival & Free Play', desc: 'Children settle in with free-choice activities and peer interaction.' },
                { time: '8:15 AM', activity: 'Morning Circle', desc: 'Greetings, calendar, weather, and sharing spark conversation skills.' },
                { time: '8:45 AM', activity: 'Literacy & Language', desc: 'Phonics, rhymes, story reading, and early writing exercises.' },
                { time: '9:30 AM', activity: 'Math Play', desc: 'Counting, sorting, shapes, and number games with hands-on materials.' },
                { time: '10:00 AM', activity: 'Break & Snack', desc: 'Healthy snack time with supervised social play.' },
                { time: '10:30 AM', activity: 'Creative Arts / EVS', desc: 'Art projects, nature activities, or environmental stories.' },
                { time: '11:30 AM', activity: 'Music & Movement', desc: 'Songs, dance, yoga, and outdoor physical play.' },
                { time: '12:30 PM', activity: 'Lunch & Dismissal', desc: 'Nutritious lunch and a peaceful wind-down before home time.' },
              ].map((slot, i) => (
                <div key={i} className="flex items-start gap-6">
                  <div className="w-16 flex-shrink-0 text-right">
                    <span className="font-body text-xs text-gold font-medium">{slot.time}</span>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-accent border-2 border-white flex-shrink-0 mt-0.5 z-10" />
                  <div className="flex-1 pb-2">
                    <p className="font-heading font-semibold text-white text-sm">{slot.activity}</p>
                    <p className="font-body text-white/50 text-xs mt-0.5">{slot.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="font-heading font-bold text-2xl text-navy mb-3">Ready to Begin Your Child's Journey?</h3>
          <p className="font-body text-navy/60 mb-7">Limited seats available for 2026-27. Register your child's admission enquiry today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions/register" className="px-8 py-4 bg-accent text-white font-heading font-semibold rounded-full hover:bg-red-700 transition-colors shadow-md flex items-center justify-center gap-2">
              Apply for Nursery / LKG / UKG <ArrowRight size={18} />
            </Link>
            <Link to="/admissions/faqs" className="px-8 py-4 border-2 border-primary text-primary font-heading font-semibold rounded-full hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">
              Read FAQs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
