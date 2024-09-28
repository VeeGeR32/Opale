import React from 'react';
import { Link, useLocation } from "react-router-dom";
import Ologo from '../media/o-logo.png';

const Footer = () => {
  const location = useLocation();
  const getBackgroundColor = () => {
    switch (location.pathname) {
        case "/services":
            return "#ffffff";
        case "/about":
            return "#c4e7ce";
        case "/contact":
            return "#f9f2d6";
        case "/approche":
            return "#b1d5f9";
        default:
            return "#e0e0ec";
    }
};
  return (
    <footer className="bg-gray-100 py-6" style={{backgroundColor: getBackgroundColor()}}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col justify-center">
          <Link to="/" draggable='false'>
                    <div className={`flex items-center group ${location.pathname === "/" ? " p-2 text-[#D8D8EE]" : "text-black"}  text-black p-2`} >
                        <img alt="" draggable='false' src={Ologo} className='h-10 group-hover:scale-125 group-hover:rotate-12 transition-all group-active:scale-90'></img><p className='font-[poppins] font-normal text-[30px] m-0 text-center'>pale</p>
                    </div>
                </Link>
          </div>
          <div className="flex space-x-4 font-[poppins]">
            <Link to="/" className="text-black hover:text-white">Home</Link>
            <Link to="/services" className="text-black hover:text-white">Services</Link>
            <Link to="/approche" className="text-black hover:text-white">Approche</Link>
            <Link to="/about" className="text-black hover:text-white">À propos</Link>
            <Link to="/contact" className="text-black hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;