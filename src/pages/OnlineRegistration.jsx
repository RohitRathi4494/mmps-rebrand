import React, { useState } from 'react';
import PageHero from '../components/ui/PageHero';
import { Send, User, Phone, Mail, GraduationCap, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function OnlineRegistration() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    parentName: '', studentName: '', grade: '', phone: '', email: '', message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-ivory min-h-screen">
      <PageHero
        title="Online Registration"
        subtitle="Begin your child's journey of excellence. Fill in the enquiry form and our team will get back to you within 24 hours."
      />

      <section className="py-12 md:py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">

            {/* Left Info Panel */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-heading font-bold text-2xl text-navy mb-2">Why Join MMPS?</h2>
                <div className="w-10 h-1 bg-accent rounded-full mb-4" />
                <p className="font-body text-navy/60 leading-relaxed">
                  Over 30 years of shaping young minds with a perfect blend of academics,
                  values, and co-curricular excellence in Sector 4, Gurugram.
                </p>
              </div>

              {[
                { icon: GraduationCap, label: 'CBSE Affiliated', sub: 'Recognised curriculum' },
                { icon: User, label: '800+ Students', sub: 'Thriving school community' },
                { icon: CheckCircle2, label: 'Safe Campus', sub: 'CCTV & trained staff' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-navy text-sm">{item.label}</p>
                    <p className="font-body text-navy/50 text-xs">{item.sub}</p>
                  </div>
                </div>
              ))}

              <div className="bg-navy rounded-2xl p-6 text-white">
                <p className="font-heading font-semibold mb-1">Reach us directly</p>
                <a href="tel:+919310953788" className="flex items-center gap-2 text-gold text-sm mt-2 hover:underline">
                  <Phone size={14} /> +91 93109 53788
                </a>
                <a href="mailto:info@mmpublicschool.edu.in" className="flex items-center gap-2 text-gold text-sm mt-1 hover:underline">
                  <Mail size={14} /> info@mmpublicschool.edu.in
                </a>
              </div>
            </div>

            {/* Registration Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-gray-100">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-green-500" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-navy mb-3">
                    Registration Received!
                  </h3>
                  <p className="font-body text-navy/60 leading-relaxed">
                    Thank you for your interest in M M Public School. Our admissions team will
                    contact you within <strong>24 working hours</strong>.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ parentName: '', studentName: '', grade: '', phone: '', email: '', message: '' }); }}
                    className="mt-8 px-7 py-3 bg-accent text-white font-heading font-semibold rounded-full hover:bg-red-700 transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  // Netlify Forms attributes for live submission
                  name="admission-enquiry"
                  method="POST"
                  data-netlify="true"
                  className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100"
                >
                  <input type="hidden" name="form-name" value="admission-enquiry" />

                  <h3 className="font-heading font-bold text-2xl text-navy mb-7">Admission Enquiry Form</h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Parent Name */}
                    <div>
                      <label className="block font-body text-sm text-navy/70 mb-1.5 font-medium">
                        Parent / Guardian Name *
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          name="parentName"
                          required
                          value={form.parentName}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl font-body text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition"
                        />
                      </div>
                    </div>

                    {/* Student Name */}
                    <div>
                      <label className="block font-body text-sm text-navy/70 mb-1.5 font-medium">
                        Student Name *
                      </label>
                      <div className="relative">
                        <GraduationCap size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          name="studentName"
                          required
                          value={form.studentName}
                          onChange={handleChange}
                          placeholder="Child's full name"
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl font-body text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition"
                        />
                      </div>
                    </div>

                    {/* Grade Applying For */}
                    <div>
                      <label className="block font-body text-sm text-navy/70 mb-1.5 font-medium">
                        Grade Applying For *
                      </label>
                      <select
                        name="grade"
                        required
                        value={form.grade}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl font-body text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition bg-white"
                      >
                        <option value="">Select Grade</option>
                        {['Nursery', 'LKG', 'UKG', ...Array.from({ length: 12 }, (_, i) => `Grade ${i + 1}`)].map((g) => (
                          <option key={g} value={g}>{g}</option>
                        ))}
                      </select>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block font-body text-sm text-navy/70 mb-1.5 font-medium">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl font-body text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="sm:col-span-2">
                      <label className="block font-body text-sm text-navy/70 mb-1.5 font-medium">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl font-body text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                      <label className="block font-body text-sm text-navy/70 mb-1.5 font-medium">
                        Message / Any specific queries
                      </label>
                      <div className="relative">
                        <MessageSquare size={16} className="absolute left-3.5 top-4 text-gray-400" />
                        <textarea
                          name="message"
                          rows={4}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us anything you'd like us to know..."
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl font-body text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-6 w-full flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-heading font-bold rounded-xl shadow-md hover:bg-red-700 transition-colors hover:-translate-y-0.5 transform"
                  >
                    <Send size={18} />
                    Submit Registration
                  </button>

                  <p className="mt-4 text-center font-body text-xs text-gray-400">
                    By submitting this form, you agree to be contacted by the school admissions team.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
