// TestimonialCard.jsx
import React from 'react';

const TestimonialCard = ({ text, client, position }) => {
  return (
    <div className="testimonial-card bg-gray-100 p-6 shadow-md rounded">
      <p className="text-lg italic mb-4">"{text}"</p>
      <h3 className="text-md font-semibold">{client}</h3>
      <p className="text-sm text-gray-500">{position}</p>
    </div>
  );
};

export default TestimonialCard;
