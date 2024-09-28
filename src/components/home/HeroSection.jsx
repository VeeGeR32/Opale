import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="h-[calc(60vh)]">
      <div className="bg-cover bg-center h-full flex items-center justify-center">
        <div className="flex flex-col-reverse lg:flex-row justify-around w-full items-center px-4 lg:px-40">
          <div className="w-full lg:w-[500px] mb-8 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl mb-4 font-[poppins] text-black font-black uppercase flex flex-wrap justify-center lg:justify-center">
              <div><span className="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">Opale,&nbsp;</span>La&nbsp;</div>
              beauté&nbsp;du&nbsp;<div><span className="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">design,&nbsp;</span>la&nbsp;</div>force&nbsp;du&nbsp;<span className="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">web</span>.
            </h1>
            {/* <h2 className="text-base sm:text-lg lg:text-xl font-normal mb-4 text-black font-[poppins] uppercase">
              De la conception à la mise en ligne, nous créons des sites web qui captivent et convertissent.
            </h2> */}
            {/* Buttons */}
            <div className="flex flex-col items-center sm:flex-row gap-2 justify-center lg:justify-center">
              <Link
                to="/services"
                className="font-[poppins] bg-black text-white py-2 px-1 font-bold sm:text-lg lg:text-xl text-center flex justify-center items-center w-60"
              >
                Découvrir
              </Link>
              <Link
                to="/contact"
                className="font-[poppins] bg-white text-black py-2 px-1 font-bold sm:text-lg lg:text-xl text-center flex justify-center items-center w-60"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;