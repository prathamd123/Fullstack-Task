// 5. src/pages/LandingPage.js
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import HeroSection from '../components/HeroSection.jsx';
import RealtorSection from '../components/RealtorSection.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import AboutUs from '../components/AboutUs.jsx';
import OurProjects from '../components/OurProjects.jsx';
import TestmonialCard from '../components/TestmonialCard.jsx'
import Footer from '../components/Footer.jsx';

const LandingPage = () => {

  return (
    <>
    <Navbar />
    <HeroSection />
    <RealtorSection />
    <WhyChooseUs />
    <AboutUs />
    <OurProjects />
    <TestmonialCard />
    <Footer />
    </>
  );
};

export default LandingPage;