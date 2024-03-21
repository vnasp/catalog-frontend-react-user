import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const ImageSliderShorts = () => {
  const images = [
    './assets/img/hoodies/hoodie-another1.webp',
    './assets/img/hoodies/hoodie-another2.webp',
    './assets/img/shorts/shorts5.webp', 
    './assets/img/shorts/shorts6.webp',  
    './assets/img/shorts/shorts1.webp',
    './assets/img/shorts/shorts2.webp',
    './assets/img/shorts/shorts3.webp',
    './assets/img/shorts/shorts4.webp'
  ];

  return (
    <Swiper
    modules={[Navigation]}
    slidesPerView={1}
    spaceBetween={10}
    navigation
    breakpoints={{
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }}
    className="mySwiper"
  >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={src} alt={`Slide ${index + 1}`} className="rounded-lg object-cover"/>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ImageSliderShorts;