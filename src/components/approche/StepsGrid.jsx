// StepsGrid.jsx
import React from 'react';
import StepCard from './StepCard';
import Arrow from './Arrow';

const StepsGrid = () => {
  const steps = [
    { number: '1', title: 'Analyse', description: 'Évaluation des besoins du projet.', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-vector%2Fyoung-man-woman-shake-hands-vector-cartoon-flat-style-illustration_357257-1363.jpg%3Fw%3D2000&f=1&nofb=1&ipt=f7d08ef5366f898932cc1f91357f1ab55cd867d1e50c90701931100bc8650447&ipo=images' },
    { number: '2', title: 'Conception', description: 'Création de maquettes et prototypes.', image: 'path/to/image2.jpg' },
    { number: '3', title: 'Développement', description: 'Développement de l\'application.', image: 'path/to/image3.jpg' },
    { number: '4', title: 'Tests', description: 'Validation des fonctionnalités.', image: 'path/to/image4.jpg' },
    { number: '5', title: 'Déploiement', description: 'Mise en ligne du projet.', image: 'path/to/image5.jpg' },
    { number: '6', title: 'Maintenance', description: 'Assistance et mises à jour.', image: 'path/to/image6.jpg' }
  ];

  return (
    <section className="steps-grid p-8">
      <div className="grid grid-cols-3 gap-4">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <StepCard number={step.number} title={step.title} description={step.description} image={step.image} />
            {/* Afficher une flèche entre les étapes, sauf après la dernière */}
            {(index + 1) % 3 !== 0 && index < steps.length - 1 && <Arrow />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default StepsGrid;