// StepsGrid.jsx
import React from 'react';
import StepCard from './StepCard';
import Arrow from './Arrow';

const StepsGrid = () => {
  const steps = [
    { number: '1', title: 'Analyse', description: 'Évaluation des besoins du projet.' },
    { number: '2', title: 'Conception', description: 'Création de maquettes et prototypes.' },
    { number: '3', title: 'Développement', description: 'Développement de l\'application.' },
    { number: '4', title: 'Tests', description: 'Validation des fonctionnalités.' },
    { number: '5', title: 'Déploiement', description: 'Mise en ligne du projet.' },
    { number: '6', title: 'Maintenance', description: 'Assistance et mises à jour.' }
  ];

  return (
    <section className="steps-grid p-8">
      <div className="grid grid-cols-3 gap-4">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <StepCard number={step.number} title={step.title} description={step.description} />
            {/* Afficher une flèche entre les étapes, sauf après la dernière */}
            {(index + 1) % 3 !== 0 && index < steps.length - 1 && <Arrow />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default StepsGrid;