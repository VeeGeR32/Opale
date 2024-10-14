import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import ContactForm from '../components/contact/ContactForm';
import HeroSection from '../components/HeroSection';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="flex flex-col justify-center items-center h-fit bg-[#FAF0CA]">
            <HeroSection title1={"trvaillons"} title2={" ensemble!"} />
            <ContactForm />
        </div>
    );
};

export default Contact;