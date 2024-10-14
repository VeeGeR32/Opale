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
        <div className='bg-[#e9e2f7]'>
            <HeroSection title1={"Trouvez votre "} title2={"bonheur chez opale !"} />
            <WebSite/>
            <Maintenance />
        </div>
    );
};

export default Services;