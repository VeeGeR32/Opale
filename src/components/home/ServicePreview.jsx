// ServicesPreview.jsx
import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesPreview = () => {
  const services = [
    { title: 'Site Vitrine', description: 'Présentez votre entreprise en ligne.', icon: 'icon-vitrine.png' },
    { title: 'E-commerce', description: 'Vendez vos produits en ligne.', icon: 'icon-ecom.png' },
    { title: 'Blog', description: 'Partagez vos idées et votre expertise.', icon: 'icon-blog.png' },
    { title: 'Site personnalisé', description: 'Une solution adaptée à vos besoins.', icon: 'icon-custom.png' }
  ];

  return (
    <section id="services" className="bg-[#ededf4] services-preview grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
      {services.map(service => (
        <ServiceCard key={service.title} title={service.title} description={service.description} icon={service.icon} />
      ))}
    </section>
  );
};

export default ServicesPreview;