// ServicesPreview.jsx
import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesPreview = () => {
  const services = [
    { title: 'Site Vitrine', description: 'Présentez vous en ligne.', src: 'https://cdn.dribbble.com/userupload/12986406/file/original-8f403dbcaa28f67ca81e6045584f3c41.mp4' },
    { title: 'E-commerce', description: 'Vendez vos produits en ligne.', src: 'https://cdn.dribbble.com/userupload/12406686/file/original-bfbcb14f92da9f9b6b8b8f53cd62fb86.mp4' },
    { title: 'Blog', description: 'Partagez vos idées.', src: 'https://cdn.dribbble.com/userupload/12406686/file/original-bfbcb14f92da9f9b6b8b8f53cd62fb86.mp4' },
    { title: 'Site personnalisé', description: 'Une solution pour vos besoins.', src: 'https://cdn.dribbble.com/userupload/12406686/file/original-bfbcb14f92da9f9b6b8b8f53cd62fb86.mp4' }
  ];

  return (
    <div className='relative overflow-hidden bg-[#F39593] flex flex-col w-full justify-center items-center p-12'>
      <h2 className='text-3xl md:text-6xl font-black mb-5 text-center font-[poppins] text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>S'adapte à tout les besoins</h2>
      <section id="services" className="bg-[#faa4a2] services-preview grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6 rounded-lg">
      {services.map(service => (
        <ServiceCard key={service.title} title={service.title} description={service.description} src={service.src} />
      ))}
    </section>
    </div>
    
  );
};

export default ServicesPreview;