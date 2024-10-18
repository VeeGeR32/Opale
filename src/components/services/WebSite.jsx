import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

export default function   WebSite() {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  
  const isCard1InView = useInView(card1Ref, { once: false });
  const isCard2InView = useInView(card2Ref, { once: false });

  const [triggerAnimation1, setTriggerAnimation1] = useState(false);
  const [triggerAnimation2, setTriggerAnimation2] = useState(false);

  // Trigger animation for card 1
  useEffect(() => {
    if (isCard1InView) {
      setTriggerAnimation1(true);
    } else {
      setTriggerAnimation1(false);
    }
  }, [isCard1InView]);

  // Trigger animation for card 2
  useEffect(() => {
    if (isCard2InView) {
      setTriggerAnimation2(true);
    } else {
      setTriggerAnimation2(false);
    }
  }, [isCard2InView]);

  return (
    <div className='w-full min-h-[200vh]'>
      {/* Video Section */}
      <div className='h-screen w-full overflow-hidden'>
        <video autoPlay muted loop className='w-full h-full object-cover' src='https://cdn.dribbble.com/userupload/16712211/file/original-ef74f677fa4452f64b44ce63c797a131.mp4'></video>
      </div>
      
      {/* Cards Section */}
      <div className='md:h-screen w-full flex flex-col md:flex-row justify-around items-center p-4 h-fit  bg-gradient-to-t from-[#f3effd] to-[#d9cfee] via-[#f3effd]'>
        
        {/* Card 1 */}
        <motion.div
          ref={card1Ref}
          initial={{ opacity: 0, y: 50 }} // Starting state
          animate={triggerAnimation1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate based on scroll
          transition={{ duration: 0.5 }} // Animation duration
          className='bg-[#1e113e] p-6 md:p-12 rounded-lg flex flex-col items-center w-full md:w-[40%] lg:w-[35%] cursor-pointer group'
        >
          <h2 className='text-xl md:text-2xl font-bold mb-4 font-[poppins] text-center text-white'>Création de sites vitrines</h2>
          <div className='overflow-hidden h-[340px] mb-4'>
            <video autoPlay muted loop className='w-full  group-hover:scale-125 transition-all overflow-hidden' src='https://cdn.dribbble.com/userupload/12986406/file/original-8f403dbcaa28f67ca81e6045584f3c41.mp4'></video>
          </div>
          <div className='h-[10vh]'>
            <p className='text-center text-sm md:text-base font-[poppins] text-white'>
              Nous proposons la création de sites vitrines pour présenter votre entreprise et attirer des clients potentiels.
            </p>
          </div>
        </motion.div>
        
        {/* Card 2 */}
        <motion.div
          ref={card2Ref}
          initial={{ opacity: 0, y: 50 }} // Starting state
          animate={triggerAnimation2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate based on scroll
          transition={{ duration: 0.5 }} // Animation duration
          className='bg-[#1e113e] p-6 md:p-12 rounded-lg flex flex-col items-center w-full md:w-[40%] lg:w-[35%] cursor-pointer group'
        >
          <h2 className='text-white text-xl md:text-2xl font-bold mb-4 font-[poppins] text-center'>Création de sites full stack</h2>
          <div className='overflow-hidden h-[340px] mb-4'>
            <video autoPlay muted loop className='w-full group-hover:scale-125 transition-all' src='https://cdn.dribbble.com/userupload/12406686/file/original-bfbcb14f92da9f9b6b8b8f53cd62fb86.mp4'></video>
          </div>
          <div className='h-[10vh]'>
            <p className='text-white text-center text-sm md:text-base font-[poppins]'>
              Nous offrons des solutions full stack pour le commerce en ligne, y compris la gestion des produits, des commandes et des paiements.
            </p>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}