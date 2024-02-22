import { useState, useContext } from "react"
import { DataContext } from "../context/DataContext"
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const { cart, setCart, setShowCart, actualQty,setShowConfirmationPopup } = useContext(DataContext)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: JSON.stringify(cart, null, 2),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const updatedFormData = {
    ...formData,
    message: JSON.stringify(cart, null, 2) // Asegura que cart está actualizado
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    // Reemplaza 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', y 'YOUR_USER_ID' con tus valores reales
    emailjs.send('service_sqdxv7s', 'template_kbsp1ei', updatedFormData, 'fjrMc5_WnIvQiV9Ic')
      .then((result) => {
        console.log(result.text);
        setShowConfirmationPopup(true)
        setShowCart(false)
        setCart([])
      }, (error) => {
        console.log(error.text);
        alert('Failed to send the message, please try again.');
      });
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700 text-sm font-bold mt-2" htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 mb-4"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
          <label className="block text-gray-700 text-sm font-bold mt-2" htmlFor="email">Your E-mail</label>
          <input
            type="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 mb-4"
            value={formData.email}
            onChange={handleChange}
            placeholder="yourmail@mail.com"
            required
          />
          <div>
            {
              actualQty >= 10 ?
                <button className="btn primary w-full" type="submit" href="./">Request a Quote</button>
                :
                <button className="btn primary w-full opacity-50 cursor-not-allowed" type="submit" href="./">Request a Quote</button>
            }
          </div>
        </form>
      </div>
    
    </>
  );
};

export default ContactForm;
