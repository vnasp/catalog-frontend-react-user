import { useEffect, useState } from 'react'
import { FaChevronUp } from 'react-icons/fa'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Función para desplazar hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Esto habilita el desplazamiento suave
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 bg-red-500 text-white p-3 rounded-full cursor-pointer hover:bg-blue-700 transition duration-200 ease-in-out shadow-lg"
      >
        <FaChevronUp />
      </button>
    )
  );
};

export default ScrollToTopButton;
