import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Pagination } from 'swiper/modules'
import s from './Slider.module.scss'
import 'swiper/scss'
import 'swiper/scss/pagination'
import Employee from './Employee'

export default function Slider() {
   return (
      <div className={s.slider}>
         <Swiper
            breakpoints={{
               320: {
                  slidesPerView: 1,
                  spaceBetween: 24,
               },
               1024: {
                  spaceBetween: 40,
               },
            }}
            spaceBetween={24}
            slidesPerView={2}
            modules={[Keyboard, Pagination]}
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
         >
            <SwiperSlide>
               <Employee name='John Doe' position='Косметолог' image='' />
            </SwiperSlide>
            <SwiperSlide>
               <Employee name='John Doe' position='Косметолог' image='' />
            </SwiperSlide>
            <SwiperSlide>
               <Employee name='John Doe' position='Косметолог' image='' />
            </SwiperSlide>
            <SwiperSlide>
               <Employee name='John Doe' position='Косметолог' image='' />
            </SwiperSlide>
         </Swiper>
      </div>
   )
}
