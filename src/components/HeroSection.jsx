import React from 'react';
import { motion } from "framer-motion";

export default function HeroSection({ title1, title2 }) {
  return (
    <div className='w-full h-[calc(100vh-128px)] flex justify-center items-start'>
      <div className='w-full h-[calc(100vh-256px)] flex justify-center items-center'>
        <div className='w-[80%] flex justify-center'>
          <motion.div
            className="bg-transparent"
            initial={{
              opacity: 0, // État initial : invisible
              y: 50 // Décalé vers le bas
            }}
            whileInView={{
              opacity: 1, // Apparition
              y: 0, // Retour à la position d'origine
              transition: {
                duration: 0.2 // Durée de l'animation
              }
            }}
            viewport={{ once: true }} // L'animation ne se déclenche qu'une fois
          >
            <h2 className="text-[50px] sm:text-[60px] md:text-[80px] lg:text-[90px] font-black mb-4 italic font-[poppins] text-center uppercase">
              <span>{title1}</span>
              <span className='text-white font-black drop-shadow-[0_2px_2px_rgba(0,0,0,1)]'>{title2}</span>
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  )
}