// ServiceCard.jsx
import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="service-card bg-white rounded p-6 ">
      <img src={icon} alt={title} className="w-12 h-12 mb-4"/>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;