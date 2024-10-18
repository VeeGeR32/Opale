import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Maintenance from '../components/services/Maintenance';
import WebSite from '../components/services/WebSite'
import HeroSection from '../components/HeroSection'

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='bg-[#fde6e6]'>
            <HeroSection title1={"votre bonheur, "} title2={"opale !"} />
            <WebSite/>
            <Maintenance />
        </div>
    );
};

export default Services;