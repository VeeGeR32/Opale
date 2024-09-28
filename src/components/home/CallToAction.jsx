// CallToAction.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './CTA.css'; // Assurez-vous d'importer le fichier CSS
import { FaExternalLinkAlt } from "react-icons/fa";

const CallToAction = () => {
  return (
    <section className="cta text-white p-8 text-center ">
      <Link className="bg-black font-[poppins] text-white font-medium px-6 py-3 rounded cta-link " to="/contact">
      <div className='flex items-center justify-center gap-2'>
      TRAVAILLONS ENSEMBLE
      <div className='-mt-1'><FaExternalLinkAlt /></div>
      </div>
      </Link>
    </section>
  );
};

export default CallToAction;