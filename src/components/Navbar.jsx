import React, { useState, useEffect, useRef } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import { Link, useLocation } from "react-router-dom";
import Ologo from '../media/o-logo.png';

export default function Navbar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [spanPosition, setSpanPosition] = useState({ width: 0, left: 0 });
    const [spanColor, setSpanColor] = useState('');

    const navRef = useRef(null);
    const logoRef = useRef(null);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    const handleMouseEnter = (e, color) => {
        const link = e.target.getBoundingClientRect();
        setSpanPosition({
            width: link.width,
            left: link.left
        });
        setSpanColor(color);
    };

    const handleMouseLeave = () => {
        const activeLink = document.querySelector(`.active`);
        if (activeLink) {
            const link = activeLink.getBoundingClientRect();
            setSpanPosition({
                width: link.width,
                left: link.left
            });
            setSpanColor(activeLink.dataset.color);
        } else if (location.pathname === "/") {
            const logo = logoRef.current.getBoundingClientRect();
            setSpanPosition({
                width: logo.width,
                left: logo.left
            });
            setSpanColor('');
        }
    };

    useEffect(() => {
        const activeLink = document.querySelector(`.active`);
        if (activeLink) {
            const link = activeLink.getBoundingClientRect();
            setSpanPosition({
                width: link.width,
                left: link.left
            });
            setSpanColor(activeLink.dataset.color);
        } else if (location.pathname === "/") {
            const logo = logoRef.current.getBoundingClientRect();
            setSpanPosition({
                width: logo.width,
                left: logo.left
            });
            setSpanColor('');
        }
    }, [location]);

    const getBackgroundColor = () => {
        if (isOpen && location.pathname === "/") {
            return "#F39593"; // Remplacez #yourColor par la couleur de fond souhaitée
        }
        switch (location.pathname) {
            case "/services":
                return "#fde6e6";
            case "/about":
                return "#d1eed9";
            case "/contact":
                return "#FAF0CA";
            case "/approche":
                return "#def2ff"; // Add the background color for "Approach"
            default:
                return "transparent";
        }
    };

    return (
        <div ref={navRef}>
            <nav
                className={`z-10 flex items-center justify-between flex-wrap md:justify-around py-8 select-none ${isOpen ? "fixed" : "sticky"} ${isOpen ? "w-full" : "top-0"} px-10 md:px-0`}
                style={{ position: isOpen ? 'fixed' : 'sticky', top: 0, backgroundColor: getBackgroundColor() }}
            >
                <Link to="/" draggable='false' onClick={handleLinkClick}>
                    <div ref={logoRef} className={`flex items-center group ${location.pathname === "/" ? " p-2 text-[#D8D8EE]" : "text-black"}  text-black p-2`} >
                        <img alt="" draggable='false' src={Ologo} className='h-10 group-hover:scale-125 group-hover:rotate-12 transition-all group-active:scale-90'></img><p className='font-[poppins] font-normal text-[30px] m-0 text-center'>pale</p>
                    </div>
                </Link>
                <div className="block md:hidden">
                    <Hamburger color='black' toggled={isOpen} toggle={setIsOpen} />
                </div>

                {/* Span pour l'effet magnétique */}
                {window.innerWidth >= 750 && (
                    <span
                        className={`absolute h-8 rounded transition-all duration-5000 ease-in-out ${spanColor} top-[calc(50%-16px)] `}
                        style={{
                            width: `${spanPosition.width}px`,
                            left: `${spanPosition.left}px`,
                            zIndex: -1
                        }}
                    />
                )}

                <ul
                    className={`pl-0 ${isOpen ? "flex left-0 right-0" : "hidden"} md:flex flex-col items-center md:flex-row md:items-center w-full md:w-auto gap-3 fixed top-28 md:static md:bg-transparent h-[calc(100vh-112px)] md:h-fit justify-center md:mb-0`}
                    style={{ backgroundColor: isOpen ? getBackgroundColor() : 'transparent' }}
                >
                    <li>
                        <Link
                            draggable='false'
                            to="/services"
                            className={`text-black  ${location.pathname === "/services" ? "active" : ""} group`}
                            data-color="bg-[#faf7ff]"
                            onClick={handleLinkClick}
                            onMouseEnter={(e) => handleMouseEnter(e, 'bg-[#faf7ff]')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={`px-3 py-1 rounded-lg ${location.pathname === "/services" ? "md:bg-transparent" : ""} hover:md:bg-transparent text-black font-[poppins] group-active:scale-90 transition-all`}>
                                Services
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            draggable='false'
                            to="/approche"
                            className={`text-black bg-[#f9fcff] ${location.pathname === "/approche" ? "active" : ""} group`}
                            data-color="bg-[#f9fcff]"
                            onClick={handleLinkClick}
                            onMouseEnter={(e) => handleMouseEnter(e, 'bg-[#f9fcff]')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={`px-3 py-1 rounded-lg ${location.pathname === "/approche" ? "md:" : ""} hover:md: text-black font-[poppins] group-active:scale-90 transition-all`}>
                                Approche
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            draggable='false'
                            to="/about"
                            className={`text-black ${location.pathname === "/about" ? "active" : ""} group`}
                            data-color="bg-[#effaf2]"
                            onClick={handleLinkClick}
                            onMouseEnter={(e) => handleMouseEnter(e, 'bg-[#effaf2]')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={`px-3 py-1 rounded-lg ${location.pathname === "/about" ? "md:" : ""} hover:md: text-black font-[poppins] group-active:scale-90 transition-all`}>
                            À propos
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            draggable='false'
                            to="/contact"
                            className={`text-black ${location.pathname === "/contact" ? "active" : ""} group`}
                            data-color="bg-[#F4D35E]"
                            onClick={handleLinkClick}
                            onMouseEnter={(e) => handleMouseEnter(e, 'bg-[#F4D35E]')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={`px-3 py-1 rounded-lg ${location.pathname === "/contact" ? "md:" : ""} hover:md: text-black font-[poppins] group-active:scale-90 transition-all`}>
                                Contact
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
