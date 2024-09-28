import React from 'react';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <motion.div
      className='w-full h-auto p-12 bg-white flex flex-col items-center'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      viewport={{ once: false }}
    >
      <h2 className='text-4xl font-bold mb-12 text-center'>Services</h2>
      <div className='flex flex-wrap justify-center gap-8'>
        <div className='w-[300px] p-4 bg-gray-100 rounded-lg shadow-lg'>
          <img src="path_to_image1" alt="Site vitrine" className="w-full h-[200px] object-cover rounded-md mb-4" />
          <h3 className='text-xl font-bold mb-2'>Création de sites vitrines</h3>
          <p className='text-md'>Présentez votre entreprise avec un site web moderne et responsive.</p>
        </div>
        <div className='w-[300px] p-4 bg-gray-100 rounded-lg shadow-lg'>
          <img src="path_to_image2" alt="Site e-commerce" className="w-full h-[200px] object-cover rounded-md mb-4" />
          <h3 className='text-xl font-bold mb-2'>Sites E-commerce</h3>
          <p className='text-md'>Offrez à vos clients une plateforme d'achat en ligne performante.</p>
        </div>
        <div className='w-[300px] p-4 bg-gray-100 rounded-lg shadow-lg'>
          <img src="path_to_image3" alt="Maintenance" className="w-full h-[200px] object-cover rounded-md mb-4" />
          <h3 className='text-xl font-bold mb-2'>Maintenance et Support</h3>
          <p className='text-md'>Nous assurons un service après-vente pour maintenir votre site en état.</p>
        </div>
      </div>
    </motion.div>
  );
}