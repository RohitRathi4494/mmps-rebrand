import React from 'react';
import { Phone } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919310953788"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce-slow group"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="absolute -top-12 -right-2 bg-white text-navy font-heading font-semibold text-xs px-3 py-1.5 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us!
        <div className="absolute -bottom-1 right-6 w-2 h-2 bg-white transform rotate-45"></div>
      </div>
      <Phone size={28} className="fill-current" />
    </a>
  );
}
