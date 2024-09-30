// StepCard.jsx
import React from 'react';

const StepCard = ({ number, title, description, image }) => {
  return (
    <div className="step-card bg-white p-6 shadow-lg rounded text-center">
      {image && <img src={image} alt={title} className="mb-4 mx-auto" />}
      <div className="text-2xl font-bold mb-4">{number}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default StepCard;