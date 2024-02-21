import { FaWhatsapp } from 'react-icons/fa';

const ShareOnWhatsApp = ({ message, url }) => {
  const encodedMessage = encodeURIComponent(`${message} ${url}`);

  const whatsappURL = `https://wa.me/?text=${encodedMessage}`;

  return (
    <a href={whatsappURL} target="_blank" rel="noopener noreferrer" 
    className="flex items-center justify-center">
      <FaWhatsapp className=" text-green-500 p-2 text-5xl font-bold" /> Share with your team on WhatsApp
    </a>
  );
};

export default ShareOnWhatsApp;