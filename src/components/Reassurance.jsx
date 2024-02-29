import { useState, useEffect } from 'react';
import { FaRocket, FaPencilAlt } from "react-icons/fa";
import { MdLocalShipping, MdPrint } from 'react-icons/md'

const Reassurance = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current === 3 ? 0 : current + 1));
      }, 4000); // Cambia el div activo cada 8 segundos en móviles

      return () => clearInterval(interval); // Limpieza al desmontar
    }
  }, []);
  return (
    <>      <div className="hidden lg:absolute bottom-0 left-0 right-0 transform lg:translate-y-1/2 text-black lg:grid grid-cols-4 gap-6 mx-16 text-center">
    <div className="reassurance lg:px-6"><MdLocalShipping className="icon" />Free Shipping Across the United States</div>
    <div className="reassurance lg:px-6"><FaRocket className="icon" />Swift Manufacturing & Shipping</div>
    <div className="reassurance lg:px-6"><MdPrint className="icon" />Advanced Sublimation Printing</div>
    <div className="reassurance lg:px-6"><FaPencilAlt className="icon" />Customize Your Team Gear</div>
  </div>
      <div className="lg:hidden absolute bottom-8 left-0 right-0 transform translate-y-1/2 text-black m-6 text-center">
        <div className={`reassurance absolute w-full ${activeIndex === 0 ? 'opacity-100' : 'opacity-0 transition-opacity duration-500'}`}><MdLocalShipping className="icon" />Shipping Across the United States</div>
        <div className={`reassurance absolute w-full ${activeIndex === 1 ? 'opacity-100' : 'opacity-0 transition-opacity duration-500'}`}><FaRocket className="icon" />Swift Manufacturing & Shipping</div>
        <div className={`reassurance absolute w-full ${activeIndex === 2 ? 'opacity-100' : 'opacity-0 transition-opacity duration-500'}`}><MdPrint className="icon" />Advanced Sublimation Printing</div>
        <div className={`reassurance absolute w-full ${activeIndex === 3 ? 'opacity-100' : 'opacity-0 transition-opacity duration-500'}`}><FaPencilAlt className="icon" />Customize Your Team Gear</div>
      </div>

    </>
  )
}

export default Reassurance


