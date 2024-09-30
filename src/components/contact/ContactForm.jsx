import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

const ContactForm = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false }); // Changez 'once' à false pour que l'animation se relance
    const [animationTrigger, setAnimationTrigger] = useState(false);
    
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        telephone: '',
        budget: '',
        goals: ''
    });

    const [notification, setNotification] = useState({
        message: '',
        visible: false
    });

    // Utilisez useEffect pour déclencher l'animation chaque fois que l'élément entre dans la vue
    useEffect(() => {
        setAnimationTrigger(isInView); // Déclenche l'animation quand l'élément est dans la vue
    }, [isInView]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log(formData);
            const emailResponse = await axios.post('http://localhost:5000/send-email', formData);
            if (emailResponse.data.success) {
                setNotification({ message: 'Message envoyé avec succès !', visible: true });
                setFormData({ name: '', lastname: '', email: '', telephone: '', budget: '', goals: '' });
                window.scrollTo(0, 0);
                setTimeout(() => {
                    setNotification({ message: '', visible: false });
                }, 3000);
            }
        } catch (error) {
            setNotification({ message: "Erreur lors de l'envoi du message !", visible: true });
            window.scrollTo(0, 0);
            console.error(error);
            setTimeout(() => {
                setNotification({ message: '', visible: false });
            }, 3000);
        }
    };

    return (
        <motion.div
            ref={ref} // Ajoutez la référence ici
            initial={{ opacity: 0, y: 50 }} // État initial
            animate={animationTrigger ? { opacity: 1, y: 0 } : { opacity: 1, y: 150 }} // État à l'apparition
            transition={{ duration: 0.5 }} // Durée de la transition
            className="bg-transparent"
        >
            <form onSubmit={handleSubmit} className="p-12 rounded-lg w-full max-w-xl">
                {notification.visible && (
                    <div className="mb-4 p-1 bg-green-700 text-white text-center rounded-full font-[poppins]">
                        {notification.message}
                    </div>
                )}

                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2 font-[poppins]" htmlFor="name">
                        Quel est votre nom ?
                    </label>
                    <div className='flex flex-col gap-2'>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder='*Prénom'
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-white appearance-none rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:ring-2 focus:outline-none focus:shadow-outline"
                            required
                        />
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            placeholder='*Nom'
                            value={formData.lastname}
                            onChange={handleChange}
                            className="bg-white appearance-none rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:ring-2 focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2 font-[poppins]" htmlFor="email">
                        Comment pouvons-nous vous contacter ?
                    </label>
                    <div className='flex flex-col gap-2'>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='*E-mail'
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-white appearance-none rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:ring-2 focus:outline-none focus:shadow-outline"
                            required
                        />
                        <input
                            type="telephone"
                            id="telephone"
                            name="telephone"
                            placeholder='*Telephone'
                            value={formData.telephone}
                            onChange={handleChange}
                            className="bg-white appearance-none rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:ring-2 focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2 font-[poppins]" htmlFor="budget">
                        Quel est votre budget ?
                    </label>
                    <input
                        type="text"
                        id="budget"
                        name="budget"
                        placeholder='*Budget'
                        value={formData.budget}
                        onChange={handleChange}
                        className="bg-white appearance-none rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:ring-2 focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-bold mb-2 font-[poppins]" htmlFor="goals">
                        Quels sont vos objectifs ?
                    </label>
                    <textarea
                        id="goals"
                        name="goals"
                        placeholder='*Objectifs'
                        value={formData.goals}
                        onChange={handleChange}
                        className="bg-white appearance-none rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:ring-2 focus:outline-none focus:shadow-outline resize-none"
                        rows="5"
                        required
                    ></textarea>
                </div>
                <div className="flex items-center justify-center w-full font-[poppins]">
                    <button
                        type="submit"
                        className="bg-slate-700 hover:bg-slate-900 text-white py-2 px-4 rounded-full focus:ring-2 focus:outline-none focus:shadow-outline font-bold"
                    >
                        Envoyer le message
                    </button>
                </div>
            </form>
            <div>
                <div className="flex justify-center items-center mb-4">
                    <FaEnvelope className="text-2xl text-gray-700 mr-2 -mt-1" />
                    <h2 className="text-3xl font-bold text-center font-[poppins]">opale@contact.fr</h2>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactForm;