import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Donald from '../../media/memoji/Donald.png';
import Kim from '../../media/memoji/Kim.png';
import Mattew from '../../media/memoji/Mattew.png';
import Mary from '../../media/memoji/Mary.png';
import Anna from '../../media/memoji/Anna.png';
import Andy from '../../media/memoji/Andy.png';

const testimonials = [
    {
        img: Donald,
        alt: 'Client A',
        text: 'Service impeccable, notre site est non seulement beau, mais performant et optimisé !',
        name: 'Donald Dupont',
        title: 'Commercial, Entreprise'
    },
    {
        img: Kim,
        alt: 'Client B',
        text: 'Très satisfaite du suivi et de la rapidité des corrections. Un SAV réactif !',
        name: 'Kim Nguyen',
        title: 'Designer Graphique'
    },
    {
        img: Mattew,
        alt: 'Client C',
        text: 'Une équipe professionnelle et à l\'écoute. Je recommande vivement !',
        name: 'Arthur Garrier',
        title: 'Artiste, Freelance'
    },
    {
        img: Mary,
        alt: 'Client D',
        text: 'Un service de qualité et une équipe très professionnelle.',
        name: 'Alice Martin',
        title: 'Designeuse, Mode'
    },
    {
        img: Andy,
        alt: 'Client E',
        text: 'Je suis très satisfait du résultat final. Merci beaucoup !',
        name: 'Jean Dupuis',
        title: 'Chef de projet'
    },
    {
        img: Anna,
        alt: 'Client F',
        text: 'Une collaboration fructueuse et agréable. Je recommande !',
        name: 'Sophie Legrand',
        title: 'Consultante'
    }
];

const TestimonialCard = ({ img, alt, text, name, title }) => (
    <div className='w-[250px] h-[250px] p-4 bg-[#D1EED9] rounded-lg flex justify-center items-center flex-col text-center md:w-[300px] md:h-[300px]'>
        <img src={img} alt={alt} className='w-16 h-16 rounded-full mb-4' />
        <p className='text-sm mb-2 md:mb-4 text-center font-[poppins]'>{`"${text}"`}</p>
        <h3 className='text-md font-bold font-[poppins] flex flex-col justify-center items-center'>
            <span className='text-xl'>{name}</span>
            <span className='text-slate-400 text-xs md:text-sm'>{title}</span>
        </h3>
    </div>
);

export default function Testimonials() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024, // taille pour les tablettes
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, // taille pour les mobiles
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480, // plus petits appareils mobiles
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <motion.div
            className=' w-full h-auto p-6 md:p-12 flex flex-col items-center justify-start'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            viewport={{ once: false }}
        >
            <h2 className='text-3xl md:text-6xl font-black mb-5 text-center font-[poppins] text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>Ce que disent nos clients</h2>
            <div className='w-full h-full p-6 bg-[#e6f4ea]'>
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </Slider>
            </div>
        </motion.div>
    );
}