import React from 'react';
import { motion } from 'framer-motion';

export default function Presentation() {
  return (
    <motion.div
      className='w-full h-auto p-12 bg-[#e6f4ea] flex justify-center items-center'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      viewport={{ once: false }}
    >
      <div className='text-center'>
      <h2 className='text-3xl md:text-6xl font-black mb-5 text-center font-[poppins] text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>Qui sommes nous ?</h2>
      <p className='text-lg max-w-[600px] mx-auto'>
          Nous sommes des développeurs passionné, spécialisé dans la création de sites web et d'applications modernes. Avec une expertise dans des technlogie tels que React, Express, MongoDB et bien plus encore, nous proposons des solutions sur mesure pour répondre à vos besoins.
        </p>
      </div>
    </motion.div>
  );
}