import React from 'react';
import HeroSection from '../components/HeroSection';

const categories = [
    {
        title: 'Prise de contact et analyse des besoins',
        description: `Nous discutons de vos besoins, objectifs et budget. 
                  Ensuite, nous identifions les fonctionnalités requises et 
                  analysons les contraintes techniques.`,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipartix.com%2Fwp-content%2Fuploads%2F2016%2F08%2FHandshake-clipart-2.jpg&f=1&nofb=1&ipt=af5523caffaf6020771c1e573394c33fb401b12cf14b825ba071cddd239af38e&ipo=images'
    },
    {
        title: 'Proposition et planification',
        description: `Nous élaborons un devis détaillé et créons un cahier des charges, 
                  tout en établissant un calendrier avec des échéances claires.`,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F010%2F256%2F876%2Foriginal%2Fan-illustration-of-a-schedule-flat-design-vector.jpg&f=1&nofb=1&ipt=8308e99adc6c56ee9e248620178e3e9e221252a44bae116863bef30b6226ce02&ipo=images'
    },
    {
        title: 'Conception',
        description: `Nous réalisons des wireframes et maquettes pour visualiser le design 
                  et obtenir votre validation avant de passer au développement.`,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.freepik.com%2Ffree-vector%2Fillustration-man-thinking_158784-457.jpg&f=1&nofb=1&ipt=7f40fd8432618b007e15360836e87c88ff1382f36785264d8d96221769040de3&ipo=images'
    },
    {
        title: 'Développement et tests',
        description: `Nous développons le produit en suivant les spécifications et 
                  effectuons des tests pour garantir sa qualité.`,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F018%2F982%2F059%2Foriginal%2Fa-man-finishes-work-on-deadline-illustration-of-an-active-man-working-on-a-laptop-freelance-illustration-free-png.png&f=1&nofb=1&ipt=c24c0d242e2c92815d6d3d0355ffc22101738031f827276a9a61a6976c6d9d79&ipo=images'
    },
    {
        title: 'Livraison et formation',
        description: `Le produit est mis en production, suivi d'une formation sur son utilisation 
                  et d'une documentation technique pour référence future.`,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyi-files.s3.eu-west-1.amazonaws.com%2Fproducts%2F1059000%2F1059486%2F1768033-full.jpg&f=1&nofb=1&ipt=6dcd9a6eb14a3d198186404847f2219cb3f95bde3d6a315317982260128c99e5&ipo=images'
    },
    {
        title: 'Suivi et évaluation',
        description: `Nous assurons un support post-livraison et recueillons vos retours 
                  pour évaluer le projet par rapport aux objectifs initiaux.`,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mismo.fr%2Fwp-content%2Fuploads%2F2019%2F01%2Fsav_mismo-1.png&f=1&nofb=1&ipt=c3c98f0cfa6cec545c215ec51105e937b98e488a9512bd9c9d36d4b7036c6d15&ipo=images'
    }
];

const Approche = () => {
    return (
        <div className="w-full p-8 bg-[#c3e7ff]">
            <HeroSection title1={"VOTRE SATISFACTION,  "} title2={"NOTRE PRIORITé !"} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                {categories.map((category, index) => (
                    <div key={index} className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center relative">
                        <img src={category.image} alt={category.title} className="w-full h-48 object-cover mb-4 rounded-lg select-none" />
                        <h3 className="text-2xl font-semibold mb-4">{`${index + 1}. ${category.title}`}</h3>
                        <p className="text-gray-700 text-center">{category.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Approche;
