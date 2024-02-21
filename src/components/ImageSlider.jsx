import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const ImageSlider = () => {
  const images = [
    './assets/img/slide1.webp',
    './assets/img/slide2.webp',
    './assets/img/slide3.webp',
    './assets/img/slide4.webp',
    './assets/img/slide5.webp',
    './assets/img/slide6.webp',
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
          <img src={src} alt={`Slide ${index + 1}`} width={400} className="rounded-lg" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ImageSlider;