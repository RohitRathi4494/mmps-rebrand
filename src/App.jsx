import { useState, useEffect, useRef, useCallback } from 'react'
import {
  Menu, X, Phone, Mail, MapPin, ChevronDown,
  GraduationCap, Building2, Users, Award, Heart,
  BookOpen, Shield, Star, Calendar, ArrowRight,
  Play, Quote, Facebook, Instagram, Youtube,
  MessageCircle, Clock, ExternalLink, ChevronLeft,
  ChevronRight as ChevronRightIcon, Sparkles, Trophy,
  UserCircle
} from 'lucide-react'
import { useScrollAnimation, useCounter } from './hooks'

/* ═══════════════════════════════════════════════════════════
   HEADER / NAVIGATION
   ═══════════════════════════════════════════════════════════ */
function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Campus', href: '#campus' },
    { label: 'Updates', href: '#updates' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      {/* Solid accent bar */}
      <div className="h-1 bg-accent-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/images/logo.jpg"
              alt="M M Public School Logo"
              className={`w-12 h-12 rounded-full object-cover border-2 transition-all duration-300 ${
                isScrolled ? 'border-accent-500' : 'border-white'
              } group-hover:scale-105`}
            />
            <div>
              <h1 className={`font-heading font-bold text-lg leading-tight transition-colors duration-300 ${
                isScrolled ? 'text-primary-600' : 'text-white'
              }`}>
                M M Public School
              </h1>
              <p className={`text-[11px] font-medium tracking-wider uppercase transition-colors duration-300 ${
                isScrolled ? 'text-accent-500' : 'text-gold-400'
              }`}>
                CBSE Affiliated · Est. 1992
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 link-underline ${
                  isScrolled
                    ? 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#admissions"
              className="ml-4 px-6 py-2.5 bg-accent-500 text-white text-sm font-semibold rounded-full hover:bg-accent-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Admissions 2026-27
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-2xl border-t border-gray-100 mobile-menu-enter">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#admissions"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center mt-3 px-6 py-3 bg-accent-500 text-white font-semibold rounded-full hover:bg-accent-600"
            >
              Admissions 2026-27
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

/* ═══════════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-parallax"
      style={{ backgroundImage: 'url(/images/hero-school.png)' }}
    >
      {/* Solid dark overlay */}
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Nurturing{' '}
          <span className="text-gold-400">Global Citizens</span>
          <br />
          Since 1992
        </h2>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-blue-100/90 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in font-light" style={{ animationDelay: '0.4s' }}>
          Where excellence meets character. A premier CBSE school committed to
          holistic development, modern learning, and building tomorrow's leaders.
        </p>

        {/* CTA Buttons — solid colors */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a
            href="#admissions"
            id="cta-book-tour"
            className="group px-8 py-4 bg-accent-500 text-white font-semibold rounded-full shadow-xl hover:bg-accent-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 text-lg"
          >
            <Calendar size={20} />
            Book School Tour
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#admissions"
            id="cta-admission-enquiry"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 text-lg"
          >
            <GraduationCap size={20} />
            Admission Enquiry 2026-27
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 scroll-indicator">
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} />
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   STATS BAR — Solid navy
   ═══════════════════════════════════════════════════════════ */
function StatItem({ icon: Icon, value, suffix, label, delay, iconColor }) {
  const countRef = useCounter(value)
  return (
    <div className={`animate-on-scroll animate-delay-${delay} flex flex-col items-center text-center p-6 sm:p-8 group`}>
      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-white/15 transition-all duration-300">
        <Icon size={26} className={iconColor} />
      </div>
      <div className="flex items-baseline gap-1">
        <span ref={countRef} className="font-heading font-bold text-3xl sm:text-4xl text-white counter-number">0</span>
        {suffix && <span className="font-heading font-bold text-3xl sm:text-4xl text-white">{suffix}</span>}
      </div>
      <span className="text-sm text-blue-200 font-medium mt-1">{label}</span>
    </div>
  )
}

function StatsBar() {
  return (
    <section className="relative z-20 -mt-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary-600 rounded-2xl shadow-2xl grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10 overflow-hidden">
          <YearStat icon={Clock} label="Established" delay={1} iconColor="text-gold-400" />
          <StatItem icon={Users} value={800} suffix="+" label="Happy Students" delay={2} iconColor="text-emerald-400" />
          <StatItem icon={Building2} value={5} suffix="" label="Acre Green Campus" delay={3} iconColor="text-sky-400" />
          <TextStat icon={Award} text="CBSE" label="Affiliated" delay={4} iconColor="text-accent-300" />
        </div>
      </div>
    </section>
  )
}

function YearStat({ icon: Icon, label, delay, iconColor }) {
  return (
    <div className={`animate-on-scroll animate-delay-${delay} flex flex-col items-center text-center p-6 sm:p-8 group`}>
      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-white/15 transition-all duration-300">
        <Icon size={26} className={iconColor} />
      </div>
      <span className="font-heading font-bold text-3xl sm:text-4xl text-white">Since 1992</span>
      <span className="text-sm text-blue-200 font-medium mt-1">{label}</span>
    </div>
  )
}

function TextStat({ icon: Icon, text, label, delay, iconColor }) {
  return (
    <div className={`animate-on-scroll animate-delay-${delay} flex flex-col items-center text-center p-6 sm:p-8 group`}>
      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-white/15 transition-all duration-300">
        <Icon size={26} className={iconColor} />
      </div>
      <span className="font-heading font-bold text-3xl sm:text-4xl text-white">{text}</span>
      <span className="text-sm text-blue-200 font-medium mt-1">{label}</span>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   WHY MMPS SECTION — Clean solid cards
   ═══════════════════════════════════════════════════════════ */
function WhyMMPS() {
  const features = [
    {
      icon: Heart,
      title: 'Holistic Development',
      description: 'We nurture academic excellence alongside life skills, creativity, and emotional intelligence for well-rounded growth.',
      iconBg: 'bg-accent-500',
      accentColor: 'bg-accent-500',
    },
    {
      icon: Building2,
      title: 'Modern Infrastructure',
      description: 'Smart classrooms, state-of-the-art labs, expansive sports facilities, and a lush 5-acre green campus designed for learning.',
      iconBg: 'bg-sky-500',
      accentColor: 'bg-sky-500',
    },
    {
      icon: Star,
      title: 'Experienced Faculty',
      description: 'Our dedicated team of qualified educators brings passion, expertise, and individual attention to every student\'s journey.',
      iconBg: 'bg-gold-500',
      accentColor: 'bg-gold-500',
    },
  ]

  return (
    <section id="about" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4">
            <Sparkles size={14} className="text-gold-500" />
            Why Choose Us
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            Why <span className="text-primary-600">M M Public School?</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            For over three decades, we've been shaping young minds with a perfect blend of
            tradition and innovation in Sector 4, Gurugram.
          </p>
        </div>

        {/* Feature Cards — clean white with solid color accents */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`animate-on-scroll animate-delay-${i + 1} group relative bg-white rounded-2xl p-8 card-hover border border-gray-100 overflow-hidden`}
            >
              {/* Solid top accent strip */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${feature.accentColor}`} />

              <div className={`w-14 h-14 rounded-xl ${feature.iconBg} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon size={26} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   LEADERSHIP MESSAGES — Clean solid accents
   ═══════════════════════════════════════════════════════════ */
function LeadershipMessages() {
  const leaders = [
    {
      image: '/images/chairman.png',
      name: 'Sh. Maru Mal Ji',
      title: 'Chairman',
      message: "Education is the most powerful tool to transform lives. At M M Public School, we are committed to building a generation of confident, compassionate, and responsible citizens who will lead India into a brighter future.",
      accentColor: 'border-t-primary-600',
      badgeBg: 'bg-primary-600',
      ringColor: 'ring-primary-100',
    },
    {
      image: '/images/director.png',
      name: 'Sh. Rajendra Prasad',
      title: 'Director',
      message: "Our vision goes beyond textbooks. We strive to create an environment where every child discovers their unique potential, develops critical thinking, and embraces values that last a lifetime.",
      accentColor: 'border-t-accent-500',
      badgeBg: 'bg-accent-500',
      ringColor: 'ring-accent-100',
    },
    {
      image: '/images/principal.png',
      name: 'Mrs. Sunita Sharma',
      title: 'Principal',
      message: "At MMPS, every day is an opportunity to inspire. Our dedicated team ensures that each student receives personalized attention, a nurturing atmosphere, and the tools to excel both academically and personally.",
      accentColor: 'border-t-gold-500',
      badgeBg: 'bg-gold-500',
      ringColor: 'ring-gold-100',
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-50 text-accent-500 text-sm font-medium mb-4">
            <UserCircle size={14} />
            Our Leadership
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            Messages from <span className="text-accent-500">Our Leaders</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            The visionary leadership behind M M Public School's three decades of excellence
            in education and character building.
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, i) => (
            <div
              key={i}
              className={`animate-on-scroll animate-delay-${i + 1} group relative bg-white rounded-2xl overflow-hidden card-hover border border-gray-100 border-t-4 ${leader.accentColor}`}
            >
              <div className="p-8 text-center">
                {/* Portrait */}
                <div className="relative inline-block mb-6">
                  <div className={`w-28 h-28 rounded-full overflow-hidden ring-4 ${leader.ringColor} mx-auto shadow-lg`}>
                    <img
                      src={leader.image}
                      alt={`${leader.name} - ${leader.title}, M M Public School`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  {/* Title badge — solid color */}
                  <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 ${leader.badgeBg} text-white text-xs font-semibold rounded-full shadow-md whitespace-nowrap`}>
                    {leader.title}
                  </div>
                </div>

                {/* Name */}
                <h3 className="font-heading font-semibold text-lg text-gray-900 mb-4">
                  {leader.name}
                </h3>

                {/* Quote */}
                <div className="relative">
                  <Quote size={16} className="text-gray-200 absolute -top-2 -left-1" />
                  <p className="text-gray-500 text-sm leading-relaxed italic pl-4">
                    {leader.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   ADMISSIONS SPOTLIGHT
   ═══════════════════════════════════════════════════════════ */
function Admissions() {
  const highlights = [
    'Age-appropriate, CBSE-aligned curriculum tailored for each developmental stage',
    'Individual attention with optimal student-teacher ratio for personalized learning',
    'Safe, nurturing environment with CCTV surveillance and trained support staff',
  ]

  return (
    <section id="admissions" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="animate-on-scroll relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/classroom.png"
                alt="Students engaged in collaborative learning at M M Public School classroom"
                className="w-full h-[400px] sm:h-[480px] object-cover"
                loading="lazy"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 sm:right-8 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center shadow-md">
                  <Shield size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-heading font-bold text-gray-900">100% Safe</p>
                  <p className="text-sm text-emerald-600 font-medium">CCTV Campus</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-on-scroll animate-delay-2">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-500 text-white text-sm font-medium mb-4">
              <GraduationCap size={14} />
              Now Enrolling
            </span>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900 mb-4 leading-tight">
              Admissions Open for{' '}
              <span className="text-accent-500">2026-27</span>
            </h2>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Give your child the gift of a transformative education. Join the MMPS family
              and experience a school that truly cares about every student's potential.
            </p>

            <div className="space-y-4 mb-8">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600">{item}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="tel:+919310953788"
                id="cta-enquire-now"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-accent-500 text-white font-semibold rounded-full shadow-lg hover:bg-accent-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <Phone size={18} />
                Enquire Now
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-2 text-gray-500">
                <MessageCircle size={18} className="text-green-500" />
                <span className="text-sm">
                  WhatsApp:{' '}
                  <a href="https://wa.me/919310953788" className="text-green-600 font-medium hover:underline">
                    +91-9310953788
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   RECENT HIGHLIGHTS / NEWS — Clean cards with solid badges
   ═══════════════════════════════════════════════════════════ */
function RecentHighlights() {
  const events = [
    {
      image: '/images/cricket-tournament.png',
      date: 'Nov 2024',
      title: 'XXIV MMICT Cricket Tournament 2024',
      description: 'Our annual inter-school cricket tournament witnessed participation from 24 leading schools across NCR, showcasing sportsmanship and talent.',
      badgeBg: 'bg-emerald-500',
    },
    {
      image: '/images/investiture-ceremony.png',
      date: 'Jul 2023',
      title: 'Investiture Ceremony 2023',
      description: 'A proud moment as our student council was sworn in with a solemn ceremony, instilling leadership values and responsibility.',
      badgeBg: 'bg-sky-500',
    },
    {
      image: '/images/scholarship-test.png',
      date: 'Mar 2023',
      title: 'MMPS Scholarship Test 2023',
      description: 'Recognizing academic brilliance through our annual scholarship examination, encouraging meritorious students with financial support.',
      badgeBg: 'bg-violet-500',
    },
  ]

  return (
    <section id="updates" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-50 text-gold-600 text-sm font-medium mb-4">
            <Trophy size={14} />
            Highlights
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            Recent <span className="text-primary-600">Highlights</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Stay updated with the latest events, achievements, and milestones at M M Public School.
          </p>
        </div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <div
              key={i}
              className={`animate-on-scroll animate-delay-${i + 1} group bg-white rounded-2xl overflow-hidden card-hover border border-gray-100 shadow-sm`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Solid Date Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1.5 ${event.badgeBg} text-white rounded-lg text-sm font-semibold shadow-lg`}>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    {event.date}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {event.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {event.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-accent-500 font-medium text-sm hover:text-accent-600 transition-colors group/link"
                >
                  Read More
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12 animate-on-scroll">
          <a
            href="#"
            id="view-all-updates"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-medium rounded-full hover:bg-primary-700 transition-colors shadow-md"
          >
            View All Updates
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   VIRTUAL CAMPUS TOUR
   ═══════════════════════════════════════════════════════════ */
function CampusTour() {
  return (
    <section
      id="campus"
      className="relative py-28 sm:py-36 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/campus-aerial.png)' }}
    >
      {/* Solid dark overlay */}
      <div className="absolute inset-0 bg-primary-900/90" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-gold-300 text-sm font-medium mb-6 border border-white/10">
            <Building2 size={14} />
            Virtual Tour
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Explore Our <span className="text-gold-400">Campus</span>
          </h2>

          <p className="text-blue-100/80 text-lg sm:text-xl mb-10 leading-relaxed">
            Take a 360° virtual tour of our 5-acre green campus — from smart classrooms
            and science labs to sports grounds and assembly halls.
          </p>

          <a
            href="#"
            id="start-virtual-tour"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-600 font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play size={18} className="text-white ml-0.5" />
            </div>
            Start Virtual Tour
          </a>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   TESTIMONIALS — Clean design
   ═══════════════════════════════════════════════════════════ */
function Testimonials() {
  const [active, setActive] = useState(0)
  const testimonials = [
    {
      quote: "MMPS has been a second home for our children. The teachers are incredibly dedicated and go above and beyond to ensure every child's holistic development. We've seen remarkable growth in our son's confidence and academic performance.",
      name: 'Mrs. Priya Sharma',
      role: 'Parent of Class VIII Student',
      accentColor: 'bg-primary-600',
    },
    {
      quote: "The school strikes a perfect balance between academics and extracurricular activities. My daughter loves the art and sports programs. The safe, nurturing environment gives us complete peace of mind as parents.",
      name: 'Mr. Rajesh Gupta',
      role: 'Parent of Class V Student',
      accentColor: 'bg-accent-500',
    },
    {
      quote: "We chose MMPS for its values-driven education, and we haven't been disappointed. The discipline, the warmth of the staff, and the modern facilities make it one of the finest schools in Gurugram.",
      name: 'Mrs. Anita Verma',
      role: 'Parent of Class III Student',
      accentColor: 'bg-emerald-500',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4">
            <Quote size={14} />
            Testimonials
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            What Parents <span className="text-accent-500">Say About Us</span>
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-3xl mx-auto animate-on-scroll">
          <div className="relative bg-white rounded-3xl shadow-lg border border-gray-100 p-8 sm:p-12 overflow-hidden">
            {/* Solid colored top accent */}
            <div className={`absolute top-0 left-0 right-0 h-1.5 ${testimonials[active].accentColor} transition-all duration-500`} />

            {/* Quote icon */}
            <div className={`absolute -top-5 left-8 sm:left-12 w-10 h-10 rounded-xl ${testimonials[active].accentColor} flex items-center justify-center shadow-lg transition-all duration-500`}>
              <Quote size={18} className="text-white" />
            </div>

            <div className="testimonial-slide">
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-8 italic">
                "{testimonials[active].quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${testimonials[active].accentColor} flex items-center justify-center text-white font-heading font-bold text-lg transition-all duration-500`}>
                  {testimonials[active].name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading font-semibold text-gray-900">
                    {testimonials[active].name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonials[active].role}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
              <div className="flex gap-2">
                {testimonials.map((t, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === active
                        ? `${t.accentColor} w-8`
                        : 'bg-gray-200 hover:bg-gray-300 w-2.5'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary-600 hover:border-primary-300 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => setActive((prev) => (prev + 1) % testimonials.length)}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary-600 hover:border-primary-300 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRightIcon size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════════ */
function Footer() {
  const quickLinks = [
    { label: 'About MMPS', href: '#about' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Gallery', href: '#updates' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Mandatory Disclosure', href: '#' },
  ]

  return (
    <footer id="contact" className="bg-primary-900 text-gray-300">
      {/* Solid accent top bar */}
      <div className="h-1 bg-accent-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/logo.jpg"
                alt="M M Public School Logo"
                className="w-14 h-14 rounded-full object-cover border-2 border-gold-500/50"
              />
              <div>
                <h3 className="font-heading font-bold text-xl text-white">M M Public School</h3>
                <p className="text-sm text-gold-400">तमसो मा ज्योतिर्गमय</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              A CBSE-affiliated premier school in Sector 4, Gurugram. Building character,
              nurturing talent, and inspiring excellence since 1992.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-blue-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-pink-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-red-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-gold-400 transition-colors group"
                  >
                    <ArrowRight size={14} className="text-accent-500/50 group-hover:text-gold-400 group-hover:translate-x-1 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-accent-400" />
                </div>
                <div>
                  <p className="text-gray-300">Sector 4, Gurugram</p>
                  <p className="text-gray-400 text-sm">Haryana - 122001</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-sky-400" />
                </div>
                <a href="tel:+919310953788" className="text-gray-300 hover:text-white transition-colors">
                  +91-9310953788
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-gold-400" />
                </div>
                <a href="mailto:info@mmpsgurugram.com" className="text-gray-300 hover:text-white transition-colors">
                  info@mmpsgurugram.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={18} className="text-emerald-400" />
                </div>
                <a href="https://wa.me/919310953788" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  WhatsApp: +91-9310953788
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 M M Public School, Gurugram. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Award size={14} className="text-gold-500" />
            <span>CBSE Affiliated · Since 1992</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ═══════════════════════════════════════════════════════════
   WHATSAPP FLOATING BUTTON
   ═══════════════════════════════════════════════════════════ */
function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <a
      href="https://wa.me/919310953788?text=Hi%2C%20I%20am%20interested%20in%20admissions%20at%20MMPS.%20Please%20share%20more%20details."
      target="_blank"
      rel="noopener noreferrer"
      id="whatsapp-float"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl whatsapp-btn hover:bg-green-600 transition-colors hover:scale-110 transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  )
}

/* ═══════════════════════════════════════════════════════════
   MAIN APP COMPONENT
   ═══════════════════════════════════════════════════════════ */
export default function App() {
  const { setupObserver } = useScrollAnimation()

  useEffect(() => {
    const timer = setTimeout(setupObserver, 100)
    return () => clearTimeout(timer)
  }, [setupObserver])

  useEffect(() => {
    const handleLoad = () => setupObserver()
    window.addEventListener('load', handleLoad)
    return () => window.removeEventListener('load', handleLoad)
  }, [setupObserver])

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <WhyMMPS />
        <LeadershipMessages />
        <Admissions />
        <RecentHighlights />
        <CampusTour />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
