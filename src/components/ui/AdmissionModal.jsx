import React, { useState, useEffect } from 'react';
import { X, Calendar } from 'lucide-react';
import { cn } from '../../lib/utils'; // Corrected utility import
import { Link } from 'react-router-dom';

export default function AdmissionModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the modal in this session
    const hasSeenModal = sessionStorage.getItem('mmps_admission_modal_seen');
    
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('mmps_admission_modal_seen', 'true');
      }, 5000); // 5 seconds delay
      
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-navy/80 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsOpen(false)}
      ></div>
      
      {/* Modal Box */}
      <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
        {/* Banner area */}
        <div className="bg-gradient-to-r from-primary to-primary-700 h-32 relative">
          <div className="absolute inset-0 opacity-20 bg-[url('/images/students-campus.png')] bg-cover bg-center mix-blend-overlay"></div>
          
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-1.5 transition-colors z-10"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Content area */}
        <div className="px-8 pb-8 pt-6 relative -top-12">
          <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 inline-block mb-4">
            <Calendar className="text-accent" size={32} />
          </div>
          
          <h2 className="font-heading font-bold text-3xl text-navy mb-2">
            Admission Open
          </h2>
          <h3 className="font-heading font-semibold text-lg text-primary mb-4">
            For Session 2026-27
          </h3>
          
          <p className="font-body text-navy/70 mb-8 leading-relaxed">
            Join the M M Public School family. Seats are filling fast for Nursery to Grade XII. Be part of a 30+ year legacy of excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://uniapply.com" 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3 bg-accent hover:bg-accent-600 text-white font-heading font-semibold rounded-lg shadow-md hover:shadow-lg transition-all text-center flex-1"
            >
              Apply Online Now
            </a>
            <Link 
              to="/admissions" 
              onClick={() => setIsOpen(false)}
              className="px-6 py-3 bg-primary-50 hover:bg-primary-100 text-primary font-heading font-semibold rounded-lg border border-primary-100 transition-all text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
