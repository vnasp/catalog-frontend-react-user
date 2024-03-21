import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const ImageSliderCatalog = ({ images }) => {
  const defaultImage = "./assets/img/short-sleeves/short-sleeve4.webp"
  const imagesToShow = images && images.length > 0 ? images : [defaultImage]

  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={1}
      spaceBetween={10}
      navigation
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
      }}
      className="mySwiper"
    >
      {imagesToShow.map((imageSrc, index) => (
        <SwiperSlide key={index}>
          <img src={imageSrc} alt={`Slide ${index + 1}`} className="rounded-lg w-screen" />
          <p className="text-center text-sm">Reference image. You can customize the entire design and colors.</p>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ImageSliderCatalog