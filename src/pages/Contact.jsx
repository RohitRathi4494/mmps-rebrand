import React, { useEffect } from 'react';
import PageHero from '../components/ui/PageHero';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Youtube, Send } from 'lucide-react';
import contactData from '../content/pages/contact.json';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-ivory flex flex-col min-h-screen">
      <PageHero 
        title="Get In Touch" 
        subtitle="Have questions? We're here to help. Reach out to us for admissions, general enquiries, or to schedule a campus visit."
        image="/images/school-reception.png"
      />

      <section className="py-12 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-5 flex flex-col">
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-navy mb-8 leading-tight">
                Visit Our <br />
                <span className="text-primary italic">Campus</span>
              </h2>
              <div className="w-16 h-1.5 bg-accent mb-12 rounded-full"></div>
              
              <div className="space-y-10 mb-16">
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-ivory flex items-center justify-center text-primary shrink-0 shadow-sm border border-gray-100 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-navy mb-2 text-lg">Our Location</h4>
                    <p className="font-body text-navy/60 leading-relaxed italic whitespace-pre-wrap">
                      {contactData.address}
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-ivory flex items-center justify-center text-accent shrink-0 shadow-sm border border-gray-100 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-navy mb-2 text-lg">Call Us</h4>
                    <div className="space-y-1">
                      {contactData.phones.map((p, i) => (
                        <p key={i} className={`font-body font-medium ${p.phone.includes('WhatsApp') ? 'text-green-500 font-bold' : 'text-navy/60'}`}>
                          {p.phone}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-ivory flex items-center justify-center text-navy shrink-0 shadow-sm border border-gray-100 group-hover:bg-navy group-hover:text-white transition-all duration-300">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-navy mb-2 text-lg">Email Support</h4>
                    <p className="font-body text-navy/60">{contactData.email}</p>
                    <p className="font-body text-navy/60">admissions@mmps.edu.in</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-ivory flex items-center justify-center text-primary shrink-0 shadow-sm border border-gray-100 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-navy mb-2 text-lg">Office Hours</h4>
                    <p className="font-body text-navy/60">Monday — Saturday</p>
                    <p className="font-body text-navy/60">08:00 AM — 03:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-10 border-t border-gray-100">
                <h4 className="font-heading font-bold text-navy mb-6 uppercase tracking-widest text-xs">Follow Us On</h4>
                <div className="flex gap-4">
                  {[Facebook, Instagram, Youtube].map((Icon, idx) => (
                    <a key={idx} href="#" className="w-12 h-12 rounded-xl bg-ivory border border-gray-100 flex items-center justify-center text-navy hover:bg-primary hover:text-white transition-all">
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-ivory rounded-[3rem] p-8 md:p-14 border border-gray-100 shadow-sm">
                <h3 className="font-heading font-bold text-3xl text-navy mb-4">Send a Message</h3>
                <p className="font-body text-navy/60 mb-10 leading-relaxed">Whether it’s a specific query about our curriculum or a general interest in joining our community, we’d love to hear from you.</p>
                
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="font-heading font-semibold text-sm text-navy/70 ml-2">Your Name</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-white rounded-2xl border-none focus:ring-2 focus:ring-primary/20 p-4 font-body shadow-sm" />
                    </div>
                    <div className="space-y-3">
                      <label className="font-heading font-semibold text-sm text-navy/70 ml-2">Email Address</label>
                      <input type="email" placeholder="john@example.com" className="w-full bg-white rounded-2xl border-none focus:ring-2 focus:ring-primary/20 p-4 font-body shadow-sm" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="font-heading font-semibold text-sm text-navy/70 ml-2">Phone Number</label>
                      <input type="tel" placeholder="+91 XXX XXX XXXX" className="w-full bg-white rounded-2xl border-none focus:ring-2 focus:ring-primary/20 p-4 font-body shadow-sm" />
                    </div>
                    <div className="space-y-3">
                      <label className="font-heading font-semibold text-sm text-navy/70 ml-2">Subject</label>
                      <select className="w-full bg-white rounded-2xl border-none focus:ring-2 focus:ring-primary/20 p-4 font-body shadow-sm">
                        <option>General Enquiry</option>
                        <option>Admissions</option>
                        <option>Academics</option>
                        <option>Sports & MMMICT</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="font-heading font-semibold text-sm text-navy/70 ml-2">Your Message</label>
                    <textarea rows="6" placeholder="Tell us more about your enquiry..." className="w-full bg-white rounded-2xl border-none focus:ring-2 focus:ring-primary/20 p-4 font-body shadow-sm resize-none"></textarea>
                  </div>
                  
                  <button className="w-full bg-navy hover:bg-navy-950 text-white font-heading font-bold py-5 rounded-2xl shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-3">
                    Send Message Now
                    <Send size={20} className="text-accent" />
                  </button>
                </form>
              </div>
            </div>
            
          </div>
          
          {/* Map Section */}
          <div className="mt-12 md:mt-32 rounded-[3.5rem] overflow-hidden shadow-2xl h-[450px] border-8 border-ivory relative group">
            <iframe 
              src={contactData.mapLink}
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute top-6 left-6 pointer-events-none group-hover:opacity-0 transition-opacity">
              <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full font-heading font-bold text-xs text-navy border border-gray-100 shadow-md">
                Sector 4, Gurugram
              </span>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
