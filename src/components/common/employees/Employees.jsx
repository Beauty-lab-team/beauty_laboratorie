import Slider from '../../UI/slider/Slider'
import { SwiperSlide } from 'swiper/react'
import Employee from './Employee'
import { useRouter } from 'next/router'

export default function Employees() {
   const { pathname } = useRouter()
   const isHomePage = pathname == '/'

   const employees = [
      { name: 'Єва Лонгорiя', position: "Косметолог-iн'єкцiонiст", image: '' },
      { name: 'Олександра Червоненко', position: "Косметолог-iн'єкцiонiст", image: '' },
      { name: 'Оксана Розбейко', position: "Косметолог-iн'єкцiонiст", image: '' },
      { name: 'Єва Лонгорiя', position: "Косметолог-iн'єкцiонiст", image: '' },
      { name: 'Олександра Червоненко', position: "Косметолог-iн'єкцiонiст", image: '' },
      { name: 'Оксана Розбейко', position: "Косметолог-iн'єкцiонiст", image: '' },
   ]

   return (
      <Slider slides={isHomePage ? 2 : 4}>
         {employees.map((el, i) => (
            <SwiperSlide key={i}>
               <Employee name={el.name} position={el.position} image={el.image} />
            </SwiperSlide>
         ))}
      </Slider>
   )
}
