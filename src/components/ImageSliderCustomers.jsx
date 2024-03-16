import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const ImageSliderCustomers = () => {
  const images = [
    './assets/img/customers/customer1.jpg',
    './assets/img/customers/customer2.jpg',
    './assets/img/customers/customer3.jpg',
    './assets/img/customers/customer4.jpg',
    './assets/img/customers/customer6.jpg',
    './assets/img/customers/customer7.jpg',
    './assets/img/customers/customer8.jpg'
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

export default ImageSliderCustomers;