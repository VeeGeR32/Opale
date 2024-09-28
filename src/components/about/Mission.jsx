import React from 'react';
import { motion } from 'framer-motion';

export default function Mission() {
  return (
    <motion.div
      className='w-full h-auto p-12 flex justify-center items-center'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      viewport={{ once: false }}
    >
      <div className='text-center'>
      <h2 className='text-3xl md:text-6xl font-black mb-5 text-center font-[poppins] text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>Notre mission</h2>
      <p className='text-lg max-w-[600px] mx-auto'>
          Je m'engage à offrir des services de développement web de haute qualité, en garantissant une communication fluide, des délais respectés et une satisfaction client optimale.
        </p>
      </div>
    </motion.div>
  );
}