import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PlaceholderPage({ title, is404 = false }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center animate-fade-in-up">
      <div className="bg-white p-12 rounded-3xl shadow-xl max-w-2xl w-full border border-gray-100">
        <h1 className="font-heading font-bold text-4xl lg:text-5xl text-primary mb-4">
          {is404 ? '404 - Not Found' : title}
        </h1>
        <p className="font-body text-navy/70 text-lg mb-8">
          {is404 
            ? "The page you are looking for doesn't exist or has been moved." 
            : `This page is part of the MMPS website redesign and is currently under construction. Please check back later for updates.`}
        </p>
        <Link 
          to="/" 
          className="inline-block bg-accent hover:bg-accent-600 text-white font-heading font-semibold px-8 py-3 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
        >
          Return to Home Page
        </Link>
      </div>
    </div>
  );
}
