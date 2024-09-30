import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="h-[calc(100vh-128px)]">
      <img className='absolute top-0 -z-10 h-screen w-full object-cover' alt="" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F6188698.jpg&f=1&nofb=1&ipt=3ba2b9957b1f774befcb6a6492a6e7a6517f45173213aca3f1722bb042436405&ipo=images"></img>
      <div className="bg-cover bg-center h-full flex items-center justify-center">
        <div className="flex flex-col-reverse lg:flex-row justify-center w-full items-center px-4 lg:px-40">
          <div className="w-full lg:w-[1300px] lg:mb-0 flex justify-center items-center flex-col gap-5">
            <h1 className="text-5xl lg:text-8xl font-[poppins] text-black font-black uppercase text-center">
              Opale, La beauté du design, la force du web.
            </h1>
            <h2 className="text-base sm:text-lg lg:text-xl font-normal mb-4 text-black font-[poppins] uppercase text-center">
              De la conception à la mise en ligne, nous créons des sites web qui captivent et convertissent.
            </h2>
            {/* Buttons */}
            <Link
              to="/services"
              className="font-[poppins] bg-black text-bold text-white py-2 px-1 font-bold sm:text-lg lg:text-xl text-center flex justify-center items-center w-60"
            >
              Découvrir
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;