import React, { useEffect } from "react";
import HeroSection from "../components/home/HeroSection";
import ServicePreview from "../components/home/ServicePreview";
import Testimonials from "../components/home/Testimonials";
import CallToAction from "../components/home/CallToAction";
import Opale from "../components/home/Opale";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#e5e5f0]">
      <HeroSection />
      <Opale />
      <ServicePreview />
      <Testimonials />
      <CallToAction />
    </div>
  );
}

export default Home;
