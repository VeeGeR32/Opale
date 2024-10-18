import React from 'react';
import './header.css';

const Header = () => {
    const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

    React.useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    function calculateTimeLeft() {
        const difference = +new Date("2024-12-31") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    }

    const timerComponents = [];

    Object.keys(timeLeft).forEach(interval => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(timeLeft[interval]);
    });

    return (
        <header className="header">
            <div className="scrolling-text font-[poppins]">
                Il ne reste plus que : &nbsp;
                <span className="bg-yellow-500 text-black font-[poppins] px-1">
                    {timerComponents.length ? timerComponents.join(':') : <span>Temps écoulé!</span>}
                </span>
                &nbsp;pour profiter de <span className='bg-red-500/40 px-2 rounded-full'>150€</span> offert sur nos service !
            </div>
        </header>
    );
};

export default Header;
