// About.jsx
import React from 'react';
import Presentation from '../components/about/Presentation';
import Mission from '../components/about/Mission';
import Services from '../components/about/Services';
import Testimonials from "../components/about/Testimonials";

import HeroSection from '../components/HeroSection';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div className="bg-[#d1eed9]">
      <HeroSection title1={"QUI SOMMES "} title2={"NOUS ?"} />
      <Presentation />
      <Mission />
      <Testimonials />
    </div>
  );
};

export default About;