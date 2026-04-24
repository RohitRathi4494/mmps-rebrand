import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, Globe, LogIn } from 'lucide-react';
import { cn } from '../../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  {
    name: 'About Us',
    path: '#',
    submenu: [
      { name: 'Vision & Mission',           path: '/about#vision' },
      { name: 'Leadership & Management',    path: '/about#leadership' },
      { name: 'Faculty Directory',          path: '/faculty' },
      { name: 'Infrastructure & Facilities',path: '/about#infrastructure' },
      { name: 'Mandatory Public Disclosures', path: '/cbse-disclosure' },
    ],
  },
  {
    name: 'Academics',
    path: '#',
    submenu: [
      { name: 'Pre-Primary', path: '/academics/pre-primary' },
      { name: 'Primary',     path: '/academics/primary' },
      { name: 'Middle',      path: '/academics/middle' },
      { name: 'Senior Years',path: '/academics/senior' },
      { name: 'Academic Calendar', path: '/academics/calendar' },
    ],
  },
  {
    name: 'Admissions',
    path: '#',
    submenu: [
      { name: 'Admission Process & Criteria', path: '/admissions/process' },
      { name: 'Fee Structure',                path: '/admissions/fee-structure' },
      { name: 'Online Registration',          path: '/admissions/register' },
      { name: 'FAQs',                         path: '/admissions/faqs' },
    ],
  },
  {
    name: 'Student Life',
    path: '#',
    submenu: [
      { name: 'Sports & Athletics',    path: '/student-life/sports' },
      { name: 'Clubs & Societies',     path: '/student-life/clubs' },
      { name: 'Workshops & Initiatives', path: '/student-life/workshops' },
      { name: 'Student Leadership',    path: '/student-life/council' },
      { name: 'Photo Gallery',         path: '/student-life/gallery' },
      { name: 'Video Gallery',         path: '/student-life/video-gallery' },
    ],
  },
  {
    name: 'News & Updates',
    path: '#',
    submenu: [
      { name: 'Latest Announcements', path: '/news/announcements' },
      { name: 'School Blog',          path: '/news/blog' },
      { name: 'Press & Media',        path: '/news/press' },
    ],
  },
];

const ERP_URL = 'https://mmps.edu.in/admin/login?enc=uiOWAuArbLQvcr1etvFLQw==';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <>
      {/* ── TOP BAR ──────────────────────────────────────────── */}
      <div className="bg-navy text-white text-xs py-2 px-4 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">

          {/* Left – Contact info */}
          <div className="flex items-center gap-4 font-body">
            <a
              href="tel:+919310953788"
              className="flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              <Phone size={13} />
              +91 93109 53788
            </a>
            <span className="text-white/30 hidden sm:inline">|</span>
            <a
              href="mailto:info@mmpublicschool.edu.in"
              className="flex items-center gap-1.5 hover:text-gold transition-colors hidden sm:flex"
            >
              <Mail size={13} />
              info@mmpublicschool.edu.in
            </a>
          </div>

          {/* Right – Action buttons */}
          <div className="flex items-center gap-2">
            <a
              href={ERP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 border border-white/20 font-heading font-medium text-[11px] tracking-wide transition-all"
            >
              <LogIn size={12} />
              ERP Login
            </a>
            <Link
              to="/virtual-tour"
              className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-gold/20 hover:bg-gold/30 border border-gold/40 text-gold font-heading font-medium text-[11px] tracking-wide transition-all"
            >
              <Globe size={12} />
              360° Virtual Tour
            </Link>
          </div>
        </div>
      </div>

      {/* ── MAIN NAVBAR ─────────────────────────────────────── */}
      <header
        className={cn(
          'sticky top-0 z-40 transition-all duration-300',
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-lg py-2'
            : 'bg-white py-3 shadow-sm'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/images/logo.jpg"
                alt="M M Public School Logo"
                className="w-12 h-12 rounded-full object-cover border-2 border-accent/30 group-hover:border-accent transition-colors"
              />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl lg:text-2xl tracking-tight text-primary leading-tight">
                  M M Public School
                </span>
                <span className="font-body text-[10px] lg:text-xs text-navy/60 uppercase tracking-widest font-semibold">
                  CBSE Affiliated · Est. 1992 · Gurugram
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.submenu ? (
                    <button
                      className={cn(
                        'flex items-center gap-1 px-3 py-2 rounded-md font-heading font-medium text-sm transition-colors',
                        'hover:bg-primary/5 hover:text-primary',
                        activeDropdown === link.name ? 'text-primary bg-primary/5' : 'text-navy'
                      )}
                    >
                      {link.name}
                      <ChevronDown
                        size={13}
                        className={cn(
                          'transition-transform duration-200',
                          activeDropdown === link.name ? 'rotate-180' : ''
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={cn(
                        'px-3 py-2 rounded-md font-heading font-medium text-sm transition-colors block',
                        'hover:bg-primary/5 hover:text-primary',
                        location.pathname === link.path
                          ? 'text-primary bg-primary/5'
                          : 'text-navy'
                      )}
                    >
                      {link.name}
                    </Link>
                  )}

                  {/* Dropdown Panel */}
                  {link.submenu && (
                    <div
                      className={cn(
                        'absolute top-full left-0 w-60 bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden',
                        'transform origin-top transition-all duration-200',
                        activeDropdown === link.name
                          ? 'opacity-100 scale-y-100 pointer-events-auto'
                          : 'opacity-0 scale-y-0 pointer-events-none'
                      )}
                    >
                      <ul className="py-2">
                        {link.submenu.map((sub) => (
                          <li key={sub.name}>
                            <Link
                              to={sub.path}
                              className={cn(
                                'block px-4 py-2.5 text-sm font-body transition-all duration-150',
                                'hover:bg-primary/5 hover:text-primary hover:pl-6',
                                location.pathname === sub.path
                                  ? 'text-primary bg-primary/5 font-medium pl-6'
                                  : 'text-navy/80'
                              )}
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}

              {/* Apply Now CTA */}
              <Link
                to="/admissions/register"
                className="ml-3 bg-accent hover:bg-red-700 text-white font-heading font-semibold px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm whitespace-nowrap"
              >
                Apply Now
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-navy rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* ── MOBILE NAVIGATION ──────────────────────────────── */}
        <div
          className={cn(
            'lg:hidden absolute top-full left-0 w-full bg-white/97 backdrop-blur-xl shadow-xl transition-all duration-300 origin-top overflow-hidden',
            isMobileMenuOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="px-4 py-6 flex flex-col gap-1 overflow-y-auto pb-24">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-gray-100 last:border-0">
                {link.submenu ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === link.name ? null : link.name)
                      }
                      className="flex items-center justify-between w-full py-3 text-left font-heading font-semibold text-navy text-base"
                    >
                      {link.name}
                      <ChevronDown
                        size={18}
                        className={cn(
                          'transition-transform duration-200',
                          activeDropdown === link.name ? 'rotate-180' : ''
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        'flex flex-col pl-4 overflow-hidden transition-all duration-300',
                        activeDropdown === link.name
                          ? 'max-h-96 opacity-100 mb-3'
                          : 'max-h-0 opacity-0'
                      )}
                    >
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="py-2 text-navy/70 font-body text-sm hover:text-primary transition-colors border-l-2 border-transparent hover:border-accent pl-3"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className="block py-3 font-heading font-semibold text-navy text-base"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
              <Link
                to="/admissions/register"
                className="w-full text-center bg-accent text-white font-heading font-bold px-6 py-3.5 rounded-xl shadow-md"
              >
                Apply Now
              </Link>
              <a
                href={ERP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-navy text-white font-heading font-semibold px-6 py-3 rounded-xl flex items-center justify-center gap-2"
              >
                <LogIn size={16} /> ERP Login
              </a>
              <Link
                to="/virtual-tour"
                className="w-full text-center bg-gold/10 text-gold font-heading font-semibold px-6 py-3 rounded-xl border border-gold/30 flex items-center justify-center gap-2"
              >
                <Globe size={16} /> 360° Virtual Tour
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
