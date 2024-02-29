import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const ImageSliderShorts = () => {
  const images = [
    './assets/img/shorts1.webp',
    './assets/img/shorts2.webp',
    './assets/img/shorts3.webp',
    './assets/img/shorts4.webp',
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
          <img src={src} alt={`Slide ${index + 1}`} height={280} className="rounded-lg" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ImageSliderShorts;