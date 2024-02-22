import ScrollToTopButton from "./ScrollToTopButton"
import { BsInstagram } from "react-icons/bs"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'

const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-black text-white text-center py-8">
        <img src="./assets/img/logo_white.png" className="logo mt-8" alt="Delta Sport US | Custom Team Apparel" />
        <div className="my-4">Proud of shipping to all United States from Baltimore, US</div>
        <a href="/" className="inline-flex my-4"><BsInstagram className="icon" />Follow us on Instagram</a>
        <div>2024 Delta Sport US - All right reserved</div>
      </div>
      <ScrollToTopButton />
    </>


  )
}

export default Footer