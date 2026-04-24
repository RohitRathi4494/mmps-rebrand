import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Youtube, Instagram, ChevronRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy pt-20 pb-6 text-white/80">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: School Info */}
          <div className="space-y-6">
            <div>
              <h2 className="font-heading font-bold text-2xl text-white tracking-tight">
                M M PUBLIC SCHOOL
              </h2>
              <p className="font-body text-xs text-gold uppercase tracking-widest font-semibold mt-1">
                Since 1992 | Maru Mal Education Board
              </p>
            </div>
            <p className="font-body text-sm leading-relaxed">
              Established in 1992, MMPS is unique in architectural excellence with sprawling lush green lawns and spacious classrooms conducive to holistic development. A wholesome, happy school with traditional Indian values and an international outlook.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://facebook.com/mmpsedu" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors text-white">
                <Facebook size={18} />
              </a>
              <a href="https://youtube.com/@mmpspragyaan2296" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors text-white">
                <Youtube size={18} />
              </a>
              <a href="https://instagram.com/mmpsedu" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors text-white">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Site Map */}
          <div>
            <h3 className="font-heading font-bold text-lg text-white mb-6 flex items-center gap-2">
              <span className="w-6 h-1 bg-accent rounded-full block"></span> Complete Site Map
            </h3>
            <ul className="grid grid-cols-1 gap-3 font-body text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'About School', path: '/about' },
                { name: 'Vision & Mission', path: '/vision-mission' },
                { name: 'Admissions', path: '/admissions' },
                { name: 'Academics', path: '/academics' },
                { name: 'House System', path: '/house-system' },
                { name: 'Student Council', path: '/student-council' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="flex items-center gap-2 hover:text-gold transition-colors group">
                    <ChevronRight size={14} className="text-accent group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg text-white mb-6 flex items-center gap-2">
              <span className="w-6 h-1 bg-accent rounded-full block"></span> Quick Links
            </h3>
            <ul className="grid grid-cols-1 gap-3 font-body text-sm">
              {[
                { name: 'Online Admission Form', path: 'https://uniapply.com', external: true },
                { name: 'School Leaving Certificate (SLC)', path: '/tc' },
                { name: 'Photo Gallery', path: '/gallery' },
                { name: 'Academic Calendar', path: '/academics/calendar' },
                { name: 'School Rules & Policy', path: '/rules-policy' },
                { name: 'Mandatory Public Disclosure', path: '/cbse-disclosure' },
                { name: 'Join Us / Careers', path: '/careers' },
              ].map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a href={link.path} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors group">
                      <ChevronRight size={14} className="text-accent group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.path} className="flex items-center gap-2 hover:text-gold transition-colors group">
                      <ChevronRight size={14} className="text-accent group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-lg text-white mb-6 flex items-center gap-2">
              <span className="w-6 h-1 bg-accent rounded-full block"></span> Get In Touch
            </h3>
            <div className="space-y-4 font-body text-sm">
              <div className="flex gap-3">
                <MapPin className="text-accent shrink-0 mt-1" size={18} />
                <p className="leading-relaxed">
                  Sector 4, Urban Estate, <br />
                  Gurugram, Haryana - 122001
                </p>
              </div>
              <div className="flex gap-3">
                <Phone className="text-accent shrink-0 mt-1" size={18} />
                <div>
                  <p><a href="tel:01244570666" className="hover:text-gold transition-colors">0124-4570666</a></p>
                  <p><a href="tel:+919310953788" className="hover:text-gold transition-colors">+91 93109 53788</a></p>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="text-accent shrink-0 mt-1" size={18} />
                <div>
                  <p><a href="mailto:info@mmps.edu.in" className="hover:text-gold transition-colors">info@mmps.edu.in</a></p>
                  <p><a href="mailto:admission@mmps.edu.in" className="hover:text-gold transition-colors">admission@mmps.edu.in</a></p>
                </div>
              </div>
            </div>
            {/* Google Maps placeholder */}
            <div className="w-full h-32 bg-white/5 rounded-lg border border-white/10 overflow-hidden relative group mt-4">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112134.62955513921!2d76.92982845347895!3d28.468202521798305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d196408226e33%3A0xc6c76db5ce8ebaa9!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-70 group-hover:opacity-100 transition-opacity"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-white/60 text-center md:text-left">
            &copy; {currentYear} M M Public School. All Rights Reserved.
          </p>
          <div className="text-center md:text-right">
            <p className="font-heading italic text-gold text-sm max-w-md ml-auto">
              "Good judgment comes from experience, and a lot of that comes from bad judgment."
              <br />
              <span className="text-white/60 text-xs">~ Will Rogers</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
