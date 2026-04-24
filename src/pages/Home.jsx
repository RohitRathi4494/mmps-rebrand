import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import WelcomeIntro from '../components/home/WelcomeIntro';
import WhyChooseUs from '../components/home/WhyChooseUs';
import AcademicPrograms from '../components/home/AcademicPrograms';
import HouseSystemOverview from '../components/home/HouseSystemOverview';
import LeadershipShowcase from '../components/home/LeadershipShowcase';
import ExtracurricularSkill from '../components/home/ExtracurricularSkill';
import SportsSpotlight from '../components/home/SportsSpotlight';
import FacilityGrid from '../components/home/FacilityGrid';
import NewsAndEvents from '../components/home/NewsAndEvents';
import StudentCouncil from '../components/home/StudentCouncil';
import VirtualTourBanner from '../components/home/VirtualTourBanner';
import TestimonialCarousel from '../components/home/TestimonialCarousel';
import EnquiryBanner from '../components/home/EnquiryBanner';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      <HeroSection />
      <WelcomeIntro />
      <WhyChooseUs />
      <AcademicPrograms />
      <HouseSystemOverview />
      <LeadershipShowcase />
      <ExtracurricularSkill />
      <SportsSpotlight />
      <FacilityGrid />
      <NewsAndEvents />
      <StudentCouncil />
      <VirtualTourBanner />
      <TestimonialCarousel />
      <EnquiryBanner />
    </div>
  );
}
