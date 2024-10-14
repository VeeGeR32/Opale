// ServiceCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, src }) => {
  return (
    <Link to="/services" className="block">
      <div className="bg-white/30 backdrop-blur-md rounded p-6 cursor-pointer">
        <div className='overflow-hidden mb-4 group'>
          <video autoPlay muted loop className='w-full group-hover:scale-125 transition-all overflow-hidden' src={src}></video>
        </div>
        {/* <img src={icon} alt={title} className="w-12 h-12 mb-4"/> */}
        <h3 className="text-xl font-bold mb-2 text-black text-center">{title}</h3>
        <p className='text-black text-center'>{description}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;
