import { Swiper } from 'swiper/react'
import { Keyboard, Pagination } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/pagination'

export default function Slider({ slides, children }) {
   return (
      <Swiper
         breakpoints={{
            320: {
               slidesPerView: 1,
               spaceBetween: 12,
            },
            768: {
               slidesPerView: 2,
            },
            1024: {
               spaceBetween: 36,
            },
         }}
         spaceBetween={12}
         slidesPerView={slides}
         modules={[Keyboard, Pagination]}
         pagination={{ clickable: true }}
         keyboard={{ enabled: true }}
      >
         {children}
      </Swiper>
   )
}
