import React, { useEffect } from "react";
import HeroSection from "../components/home/HeroSection";
import ServicePreview from "../components/home/ServicePreview";
import Testimonials from "../components/home/Testimonials";
import CallToAction from "../components/home/CallToAction";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <HeroSection />
      <ServicePreview />
      <Testimonials />
      <CallToAction />
    </div>
  );
}

export default Home;
