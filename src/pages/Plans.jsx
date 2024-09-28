import React, {useEffect} from 'react';
import { useNavigate,  } from 'react-router-dom';

const plans = [
    {
        name: 'Vitrine',
        originalPrice: '487',
        price: '289€',
        features: ['5 pages', '24/7 support', 'Mise à jour mensuelle (30€/mois)'],
    },
    {
        name: 'E-commerce',
        originalPrice: '1080€',
        price: '849€',
        features: ['Site full stack', '24/7 support', 'Mise à jour quotidienne (150€/mois)'],
    },
    {
        name: 'Personnalisé',
        price: 'Sur devis',
        features: ['-', '-', '-'],
    },
];


const Paiement = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const navigate = useNavigate();

    const handleChoosePlan = (planName) => {
        navigate('/contact', { state: { message: "Bonjour, je suis intéressé(e) par un site "+planName+" et je souhaiterais en discuter avec vous." } });
    };

    return (
        <div className="min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Plans de Paiement</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div key={plan.name} className="bg-white p-6 rounded-lg border">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h2>
                            {plan.originalPrice ? (
                                <div className="text-xl text-gray-600 mb-4">
                                    <span className="line-through mr-2">{plan.originalPrice}</span>
                                    <span>{plan.price}</span>
                                </div>
                            ) : (
                                <p className="text-xl text-gray-600 mb-4">{plan.price}</p>
                            )}
                            <ul className="mb-6">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="text-gray-700 mb-2">
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => handleChoosePlan(plan.name)}
                                className="w-full bg-[#0076DF] hover:bg-[#2c8ee6] text-white py-2 rounded-lg"
                            >
                                Choisir
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Paiement;