import { Link } from 'react-router-dom';
import logo from '../../media/o-logo.png';
function HeroSection() {
  return (
    <div className="h-[calc(100vh-128px)] bg-gradient-to-b from-transparent to-[#F39593] from-80% select-none">
      <img className='absolute top-0 -z-10 h-full w-full object-cover' alt="" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F6188698.jpg&f=1&nofb=1&ipt=3ba2b9957b1f774befcb6a6492a6e7a6517f45173213aca3f1722bb042436405&ipo=images"></img>
      <div className="bg-cover bg-center h-full flex items-center justify-center">
        <div className="flex flex-col-reverse lg:flex-row justify-center w-full items-center px-4 lg:px-40">
          <div className="w-full lg:w-[1300px] lg:mb-0 flex justify-center items-center flex-col gap-5">
            <div className="text-5xl lg:text-8xl font-[poppins] text-black font-bold uppercase flex flex-col justify-center items-center gap-10">
              <div className='flex'>L'audace&nbsp;de&nbsp;<p className='font-light font-[playfair-display] italic bg-white/20 backdrop-blur-sm px-4 py-1 transition-all cursor-pointer active:bg-slate-300/20 -rotate-[5deg] hover:rotate-[3deg]'>briller</p>,</div>
              <div className='flex'>l'art&nbsp;de&nbsp;se&nbsp;<p className='font-light font-[playfair-display] italic bg-white/20 backdrop-blur-sm px-4 py-1 transition-all cursor-pointer active:bg-slate-300/20 rotate-[5deg] hover:rotate-[7deg]'>démarquer</p>&nbsp;<div className='flex items-center'>
                  <img className='h-20 mb-3 transition-all duration-700 cursor-pointer active:rotate-180 ' src="https://cdn-icons-png.flaticon.com/512/5537/5537993.png"></img>
                </div>
              </div>
            </div>
            <h2 className="text-base sm:text-lg lg:text-xl font-normal mb-4 text-black font-[poppins] uppercase text-center">
              De la conception à la mise en ligne, nous créons des sites web qui captivent et convertissent.
            </h2>
            <Link
              to="/services">src="https://icons.veryicoition-all'>
                <img className='h-12 mb-3 group-hover:scale-110 group-hover:rotate-180 duration-700 transition-all group-active:scale-90 cursor-pointer' src={logo}></img>
                <img className='h-4 group-hover:scale-110 transition-all  duration-200' n.com/png/o/internet--web/industrial-icon/up-arrow.png" alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
              <div className='flex flex-col justify-center items-center group bg-white/20 backdrop-blur-sm px-3 py-3 rounded-lg active:scale-105 trans