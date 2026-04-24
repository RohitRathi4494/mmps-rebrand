import React from 'react';
import PageHero from '../components/ui/PageHero';
import { Users2, Mail, Linkedin, MapPin, Send } from 'lucide-react';

const alumni = [
  { name: 'Arjun Sharma', batch: "Class of '08", career: 'Senior Software Engineer, Google India', location: 'Bengaluru', initial: 'A' },
  { name: 'Priya Mehta', batch: "Class of '12", career: 'MBBS, Resident Doctor — AIIMS Delhi', location: 'New Delhi', initial: 'P' },
  { name: 'Rohan Gupta', batch: "Class of '15", career: 'Entrepreneur, Co-Founder of EduStart', location: 'Gurugram', initial: 'R' },
  { name: 'Sneha Kapoor', batch: "Class of '10", career: 'IAS Officer, Haryana Cadre', location: 'Chandigarh', initial: 'S' },
  { name: 'Karan Joshi', batch: "Class of '18", career: 'National Level Chess Player & Coach', location: 'Mumbai', initial: 'K' },
  { name: 'Ananya Singh', batch: "Class of '14", career: 'Architect, Urban Planning Division', location: 'Gurgaon', initial: 'A' },
];

const accentColors = [
  'bg-primary', 'bg-accent', 'bg-sky-500', 'bg-emerald-500', 'bg-purple-500', 'bg-amber-500',
];

export default function AlumniNetwork() {
  return (
    <div className="bg-ivory min-h-screen">
      <PageHero
        title="Alumni Network"
        subtitle="Once an MMPSian, always an MMPSian. Connect with our thriving alumni community spread across India and the world."
      />

      <section className="py-12 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
            {[
              { value: '5000+', label: 'Alumni Worldwide' },
              { value: '33', label: 'Years of Legacy' },
              { value: '18+', label: 'Countries Represented' },
              { value: '100+', label: 'Professionals & Leaders' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
                <p className="font-heading font-bold text-3xl text-primary mb-1">{s.value}</p>
                <p className="font-body text-navy/60 text-sm">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Alumni Profiles */}
          <h2 className="font-heading font-bold text-2xl text-navy mb-8">Distinguished Alumni</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-16">
            {alumni.map((a, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-full ${accentColors[i % accentColors.length]} flex items-center justify-center text-white font-heading font-bold text-xl flex-shrink-0`}>
                    {a.initial}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-navy text-base">{a.name}</h3>
                    <p className="font-body text-xs text-gray-400">{a.batch}</p>
                  </div>
                </div>
                <p className="font-body text-navy/70 text-sm mb-3 leading-relaxed">{a.career}</p>
                <div className="flex items-center gap-1.5 text-xs text-gray-400 font-body">
                  <MapPin size={12} />
                  {a.location}
                </div>
              </div>
            ))}
          </div>

          {/* Connect Section */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Connect Form */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users2 size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-navy">Join the Alumni Network</h3>
              </div>
              <form
                name="alumni-connect"
                method="POST"
                data-netlify="true"
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="alumni-connect" />
                {[
                  { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
                  { name: 'batch', label: 'Batch Year', type: 'text', placeholder: 'e.g. 2010' },
                  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                  { name: 'profession', label: 'Current Profession', type: 'text', placeholder: 'What do you do now?' },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block font-body text-sm text-navy/70 mb-1.5 font-medium">{f.label}</label>
                    <input
                      type={f.type}
                      name={f.name}
                      placeholder={f.placeholder}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl font-body text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition"
                    />
                  </div>
                ))}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-heading font-semibold rounded-xl hover:bg-navy transition-colors"
                >
                  <Send size={16} />
                  Register as Alumni
                </button>
              </form>
            </div>

            {/* Connect info */}
            <div className="flex flex-col gap-6">
              <div className="bg-navy rounded-3xl p-8 text-white flex-1">
                <h3 className="font-heading font-bold text-xl mb-4">Stay Connected</h3>
                <p className="font-body text-white/60 text-sm leading-relaxed mb-6">
                  Be part of our growing alumni community. Share your journey, mentor current students,
                  participate in school events, and stay rooted to your MMPS family.
                </p>
                <div className="space-y-3">
                  <a href="mailto:info@mmps.edu.in" className="flex items-center gap-3 text-gold hover:underline font-body text-sm">
                    <Mail size={16} /> info@mmps.edu.in
                  </a>
                </div>
              </div>

              <div className="bg-gold/10 border border-gold/30 rounded-3xl p-8 flex-1">
                <h3 className="font-heading font-bold text-xl text-navy mb-3">Alumni Events</h3>
                <p className="font-body text-navy/60 text-sm leading-relaxed">
                  MMPS hosts an annual Alumni Meet every December. It is a wonderful opportunity to
                  reconnect with old friends, meet teachers, and celebrate the school's legacy together.
                </p>
                <p className="font-heading font-bold text-navy mt-4 text-sm">
                  Next Alumni Meet: December 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
