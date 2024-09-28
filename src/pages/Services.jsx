import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Faq from '../components/services/Faq';
import Maintenance from '../components/services/Maintenance';
import WebSite from '../components/services/WebSite'
import HeroSection from '../components/HeroSection'
import CallToAction from "../components/home/CallToAction";

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='bg-[#FBFFFE]'>
            <HeroSection title1={"CE DONT VOUS AVEZ BESOIN,"} title2={"OPALE LE PROPOSE"} />
            <WebSite/>
            <Maintenance />
        </div>
    );
};

export default Services;