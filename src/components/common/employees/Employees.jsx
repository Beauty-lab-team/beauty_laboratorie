import Slider from '../../UI/slider/Slider'
import { SwiperSlide } from 'swiper/react'
import Employee from './Employee'
import { useRouter } from 'next/router'
import useMediaQuery from '../../../hooks/useMediaQuery'

export default function Employees() {
   const { pathname } = useRouter()
   const isDesktop = useMediaQuery('(min-width: 1024px)')
   const isHomePage = pathname == '/'

   const employees = [
      { name: 'Єва Лонгорія', position: "Косметолог-ін'єкціоніст", image: '' },
      { name: 'Олександра Червоненко', position: "Косметолог-ін'єкціоніст", image: '' },
      { name: 'Оксана Розбейко', position: "Косметолог-ін'єкціоніст", image: '' },
      { name: 'Єва Лонгорія', position: "Косметолог-ін'єкціоніст", image: '' },
      { name: 'Олександра Червоненко', position: "Косметолог-ін'єкціоніст", image: '' },
      { name: 'Оксана Розбейко', position: "Косметолог-ін'єкціоніст", image: '' },
   ]

   return (
      <Slider slides={isHomePage ? 2 : 4} showArrows={isDesktop}>
         {employees.map((el, i) => (
            <SwiperSlide key={i}>
               <Employee name={el.name} position={el.position} image={el.image} />
            </SwiperSlide>
         ))}
      </Slider>
   )
}
