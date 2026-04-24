import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';
import AdmissionModal from './components/ui/AdmissionModal';

import './index.css';

// ── Pages ────────────────────────────────────────────────
import Home from './pages/Home';
import About from './pages/About';
import Faculty from './pages/Faculty';
import Academics from './pages/Academics';
import PrePrimary from './pages/PrePrimary';
import Primary from './pages/Primary';
import Middle from './pages/Middle';
import SeniorYears from './pages/SeniorYears';
import Contact from './pages/Contact';
import Sports from './pages/Sports';
import HouseSystem from './pages/HouseSystem';
import StudentCouncil from './pages/StudentCouncil';
import Gallery from './pages/Gallery';
import VideoGallery from './pages/VideoGallery';
import VirtualTour from './pages/VirtualTour';
import Careers from './pages/Careers';
import CbseDisclosure from './pages/CbseDisclosure';
import RulesPolicy from './pages/RulesPolicy';
import PlaceholderPage from './pages/PlaceholderPage';

// ── New Admissions Pages ─────────────────────────────────
import AdmissionsProcess from './pages/AdmissionsProcess';
import AcademicCalendar from './pages/AcademicCalendar';
import OnlineRegistration from './pages/OnlineRegistration';
import FeeStructure from './pages/FeeStructure';
import FAQs from './pages/FAQs';

// ── New Student Life Pages ───────────────────────────────
import ClubsSocieties from './pages/ClubsSocieties';
import Workshops from './pages/Workshops';

// ── New News & Updates Pages ─────────────────────────────
import Announcements from './pages/Announcements';
import Blog from './pages/Blog';
import Press from './pages/Press';

// ── New Footer Utility Pages ─────────────────────────────
import AlumniNetwork from './pages/AlumniNetwork';
import TransferCertificate from './pages/TransferCertificate';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-ivory font-body selection:bg-accent selection:text-white">
        <Header />

        <main className="flex-grow">
          <Routes>
            {/* ── Core Pages ──────────────────────────────── */}
            <Route path="/" element={<Home />} />

            {/* About Us */}
            <Route path="/about" element={<About />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/cbse-disclosure" element={<CbseDisclosure />} />

            {/* Academics */}
            <Route path="/academics" element={<Academics />} />
            <Route path="/academics/pre-primary" element={<PrePrimary />} />
            <Route path="/academics/primary" element={<Primary />} />
            <Route path="/academics/middle" element={<Middle />} />
            <Route path="/academics/senior" element={<SeniorYears />} />
            <Route path="/academics/calendar" element={<AcademicCalendar />} />

            {/* Admissions */}
            <Route path="/admissions" element={<Navigate to="/admissions/process" replace />} />
            <Route path="/admissions/process" element={<AdmissionsProcess />} />
            <Route path="/admissions/fee-structure" element={<FeeStructure />} />
            <Route path="/admissions/register" element={<OnlineRegistration />} />
            <Route path="/admissions/faqs" element={<FAQs />} />

            {/* Student Life */}
            <Route path="/student-life/sports" element={<Sports />} />
            <Route path="/student-life/clubs" element={<ClubsSocieties />} />
            <Route path="/student-life/workshops" element={<Workshops />} />
            <Route path="/student-life/council" element={<StudentCouncil />} />
            <Route path="/student-life/gallery" element={<Gallery />} />
            <Route path="/student-life/video-gallery" element={<VideoGallery />} />
            <Route path="/student-life/house-system" element={<HouseSystem />} />

            {/* News & Updates */}
            <Route path="/news/announcements" element={<Announcements />} />
            <Route path="/news/blog" element={<Blog />} />
            <Route path="/news/press" element={<Press />} />

            {/* Footer Utility Pages */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/alumni" element={<AlumniNetwork />} />
            <Route path="/tc" element={<TransferCertificate />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/rules-policy" element={<RulesPolicy />} />
            <Route path="/virtual-tour" element={<VirtualTour />} />

            {/* Sports Tournament Legacy Routes */}
            <Route path="/mmmict-2025" element={<PlaceholderPage title="XXV MMMICT 2025" />} />
            <Route path="/mmmict-2024" element={<PlaceholderPage title="XXIV MMMICT 2024" />} />
            <Route path="/mmmict-2023" element={<PlaceholderPage title="XXIII MMMICT 2023" />} />
            <Route path="/mmmict-2022" element={<PlaceholderPage title="XXII MMMICT 2022" />} />

            {/* Legacy URL redirects */}
            <Route path="/vision-mission" element={<Navigate to="/about#vision" replace />} />
            <Route path="/chairman-desk" element={<Navigate to="/about#leadership" replace />} />
            <Route path="/principal-desk" element={<Navigate to="/about#leadership" replace />} />
            <Route path="/sports" element={<Navigate to="/student-life/sports" replace />} />
            <Route path="/gallery" element={<Navigate to="/student-life/gallery" replace />} />
            <Route path="/video-gallery" element={<Navigate to="/student-life/video-gallery" replace />} />
            <Route path="/house-system" element={<Navigate to="/student-life/house-system" replace />} />
            <Route path="/student-council" element={<Navigate to="/student-life/council" replace />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/school" element={<Navigate to="/" replace />} />
            <Route path="/mmps" element={<Navigate to="/" replace />} />

            {/* 404 */}
            <Route path="*" element={<PlaceholderPage title="Page Not Found" is404 />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
        <AdmissionModal />
      </div>
    </Router>
  );
}

export default App;
