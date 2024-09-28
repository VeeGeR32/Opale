// Testimonials.jsx
import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    { text: 'Un service impeccable, je recommande !', client: 'Chapin Meunier', position: 'Freelance' },
    { text: 'Mon site est superbe et fonctionne parfaitement.', client: 'Didier Trottier', position: 'Freelance' },
    { text: 'Mon site est superbe et fonctionne parfaitement.', client: 'Leal Mailhot', position: 'Freelance' },
  ];

  return (
    <section className="testimonials p-8">
      <h2 className="text-2xl font-bold mb-8 text-center">Parce qu'un témoignage vaut mille mots :</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} text={testimonial.text} client={testimonial.client} position={testimonial.position} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;