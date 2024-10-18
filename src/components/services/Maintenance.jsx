import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const Maintenance = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  useEffect(() => {
    if (isInView) {
      setTriggerAnimation(true);
    } else {
      setTriggerAnimation(false);
    }
  }, [isInView]);

  return (
    <div className='min-h-screen p-6  bg-gradient-to-t from-[#e5d7ff] to-[#f3effd]'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={triggerAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 md:p-12 rounded-lg shadow-md w-full max-w-5xl mx-auto my-10 md:my-20"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6 font-[poppins]">Service de Maintenance & Support</h2>
        <p className="text-base md:text-lg text-gray-700 mb-4 font-[poppins] text-center">
          Nous nous engageons à fournir un service après-vente de haute qualité pour garantir la pérennité et le bon fonctionnement de votre site ou application. 
        </p>
        
        {/* Section Illustration 1 */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
          <motion.img
            src="https://via.placeholder.com/150"
            alt="Maintenance préventive"
            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg"
            whileHover={{ scale: 1.1 }}
          />
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-2 font-[poppins]">Maintenance préventive</h3>
            <p className="text-gray-700 font-[poppins]">Nous nous assurons que votre site est à jour, avec les dernières technologies et les mises à jour de sécurité.</p>
          </div>
        </div>

        {/* Section Illustration 2 */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
          <motion.img
            src="https://via.placeholder.com/150"
            alt="Correction de bugs"
            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg"
            whileHover={{ scale: 1.1 }}
          />
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-2 font-[poppins]">Correction de bugs</h3>
            <p className="text-gray-700 font-[poppins]">En cas de problème, nous intervenons rapidement pour corriger les éventuels bugs et minimiser les interruptions.</p>
          </div>
        </div>

        {/* Section Illustration 3 */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
          <motion.img
            src="https://via.placeholder.com/150"
            alt="Améliorations continues"
            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg"
            whileHover={{ scale: 1.1 }}
          />
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-2 font-[poppins]">Améliorations continues</h3>
            <p className="text-gray-700 font-[poppins]">Nous vous accompagnons dans l'évolution de votre projet en ajoutant de nouvelles fonctionnalités et en optimisant les performances.</p>
          </div>
        </div>

        {/* Section Illustration 4 */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
          <motion.img
            src="https://via.placeholder.com/150"
            alt="Support dédié"
            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg"
            whileHover={{ scale: 1.1 }}
          />
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-2 font-[poppins]">Support dédié</h3>
            <p className="text-gray-700 font-[poppins]">Notre équipe de support est à votre disposition pour répondre à vos questions et résoudre vos soucis techniques.</p>
          </div>
        </div>

        {/* Button */}
        <div className="flex items-center justify-center mt-8">
          <Link to="/contact" className=''>
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="bg-[#caafff] text-white py-2 px-4 md:py-3 md:px-6 rounded-full font-[poppins] font-bold hover:bg-[#dac7ff] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            >
              Contactez-nous
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Maintenance;