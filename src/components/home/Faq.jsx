import React, { useState } from 'react';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: 'Quels sont les délais de création d’un site web ?',
            answer: 'Les délais varient en fonction de la complexité du site, mais en général, un site simple peut être livré en 2 à 4 semaines.'
        },
        {
            question: 'Proposez-vous des services de maintenance après la création du site ?',
            answer: 'Oui, nous proposons des services de maintenance pour assurer la mise à jour, la sécurité et l’optimisation continue de votre site.'
        },
        {
            question: 'Quels types de sites web pouvez-vous créer ?',
            answer: 'Nous pouvons créer des sites vitrines, des boutiques en ligne, des portfolios, des blogs et des plateformes personnalisées selon vos besoins.'
        },
        {
            question: 'Est-il possible de personnaliser totalement le design du site ?',
            answer: 'Absolument ! Nous travaillons en étroite collaboration avec vous pour concevoir un site unique qui correspond à votre image de marque.'
        },
        {
            question: 'Quels sont les coûts associés à la création d’un site web ?',
            answer: 'Les coûts dépendent des fonctionnalités et de la complexité du site. Nous offrons des devis personnalisés après analyse de vos besoins.'
        }
    ];

    const toggleFaq = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='w-full h-fit p-12 relative bg-[#F39593]'>
            <h2 className='text-3xl md:text-6xl font-black mb-5 text-center font-[poppins] text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>
                <span className='block md:hidden'>Q/R</span>
                <span className='hidden md:block'>Questions/Réponses</span>
            </h2>
            <div className="max-w-2xl mx-auto p-6 h-fit bg-[#faa4a2] rounded-lg">
                <div className='rounded-md overflow-hidden'>
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b-2 border-[#EEE5E9]/30 bg-[#f7f1f4]/30">
                        <button
                            className="w-full text-left p-4 focus:outline-none"
                            onClick={() => toggleFaq(index)}
                        >
                            <h3 className="text-lg font-semibold font-[poppins]">{faq.question}</h3>
                        </button>
                        {activeIndex === index && (
                            <div className="p-4 bg-white/30 border-gray-200 font-[poppins]">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;