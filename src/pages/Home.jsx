import React, { useEffect } from "react";
import HeroSection from "../components/home/HeroSection";
import ServicePreview from "../components/home/ServicePreview";
import Testimonials from "../components/home/Testimonials";
import CallToAction from "../components/home/CallToAction";
import Faq from '../components/home/Faq';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <HeroSection />
      <ServicePreview />
      <div className="bg-[#F39593]">
        <div className="p-12">
          <video loop muted autoPlay className=" w-[100%] h-screen object-cover p-6 bg-[#faa4a2] rounded-md" src="https://cdn.dribbble.com/userupload/10672393/file/original-e315d0f9c9afd6f4122be00dd64755eb.mp4"></video>
        </div>
      </div>
      <Testimonials />
      <Faq />
      {/* <CallToAction /> */}
    </div>
  );
}

export default Home;
