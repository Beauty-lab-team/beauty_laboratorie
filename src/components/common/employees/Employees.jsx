import Slider from '../../UI/slider/Slider'
import { SwiperSlide } from 'swiper/react'
import Employee from './Employee'
import { useRouter } from 'next/router'

export default function Employees() {
   const { pathname } = useRouter()
   const isHomePage = pathname == '/'

   return (
      <Slider slides={isHomePage ? 2 : 4}>
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
      </Slider>
   )
}
