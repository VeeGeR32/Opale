// StepCard.jsx
import React from 'react';

const StepCard = ({ number, title, description }) => {
  return (
    <div className="step-card bg-white p-6 shadow-lg rounded text-center">
      <div className="text-2xl font-bold mb-4">{number}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default StepCard;