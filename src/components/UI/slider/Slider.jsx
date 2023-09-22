import { Swiper } from 'swiper/react'
import { Keyboard, Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'

export default function Slider({ slides, children, showArrows, direction = 'horizontal' }) {
   const navigation = showArrows ? true : false

   return (
      <Swiper
         breakpoints={{
            320: {
               slidesPerView: 1,
               spaceBetween: 12,
            },
            640: {
               slidesPerView: 2,
               spaceBetween: 12,
            },
            768: {
               slidesPerView: 2,
               spaceBetween: 16,
            },
            1024: {
               spaceBetween: 16,
            },
         }}
         slidesPerView={slides}
         modules={[Keyboard, Navigation, Pagination, Autoplay]}
         autoplay={{
            delay: 6000,
            disableOnInteraction: false,
         }}
         direction={direction}
         pagination={{ clickable: true }}
         navigation={navigation}
         keyboard={{ enabled: true }}
      >
         {children}
      </Swiper>
   )
}
