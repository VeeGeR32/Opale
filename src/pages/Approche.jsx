import React from 'react';
import HeroSection from '../components/HeroSection';

const categories = [
    {
        title: 'Prise de contact et analyse des besoins',
        description: `Nous discutons de vos besoins, objectifs et budget. 
                  Ensuite, nous identifions les fonctionnalités requises et 
                  analysons les contraintes techniques.`,
        image: 'path/to/image1.jpg'
    },
    {
        title: 'Proposition et planification',
        description: `Nous élaborons un devis détaillé et créons un cahier des charges, 
                  tout en établissant un calendrier avec des échéances claires.`,
        image: 'path/to/image2.jpg'
    },
    {
        title: 'Conception',
        description: `Nous réalisons des wireframes et maquettes pour visualiser le design 
                  et obtenir votre validation avant de passer au développement.`,
        image: 'path/to/image3.jpg'
    },
    {
        title: 'Développement et tests',
        description: `Nous développons le produit en suivant les spécifications et 
                  effectuons des tests pour garantir sa qualité.`,
        image: 'path/to/image4.jpg'
    },
    {
        title: 'Livraison et formation',
        description: `Le produit est mis en production, suivi d'une formation sur son utilisation 
                  et d'une documentation technique pour référence future.`,
        image: 'path/to/image5.jpg'
    },
    {
        title: 'Suivi et évaluation',
        description: `Nous assurons un support post-livraison et recueillons vos retours 
                  pour évaluer le projet par rapport aux objectifs initiaux.`,
        image: 'path/to/image6.jpg'
    }
];

const Approche = () => {
    return (
        <div className="w-full p-8 bg-[#CCDDFA]">
            <HeroSection title1={"VOTRE SATISFACTION,  "} title2={"NOTRE PRIORITé !"} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                {categories.map((category, index) => (
                    <div key={index} className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center relative">
                        <img src={category.image} alt={category.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
                        <h3 className="text-2xl font-semibold mb-4">{`${index + 1}. ${category.title}`}</h3>
                        <p className="text-gray-700 text-center">{category.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Approche;
