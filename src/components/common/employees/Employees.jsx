import Slider from '../../UI/slider/Slider'
import { SwiperSlide } from 'swiper/react'
import Employee from './Employee'
import { useRouter } from 'next/router'

export default function Employees() {
   const { pathname } = useRouter()
   const isHomePage = pathname == '/'

   const employees = [
      {
         name: 'Оксана Розбейко',
         about: 'Косметолог, вища медична освіта, стаж роботи 17 років',
         image: '/employees/Оксана-Розбейко.jpg',
      },
      {
         name: 'Софія Чеснакова',
         about: 'Косметолог, медична освіта, спеціаліст з апаратних технологій по догляду за обличчям та тілом',
         image: '/employees/Софія-Чеснакова.jpg',
      },
      {
         name: 'Оксана Дащенко',
         about: 'Косметолог, медична освіта, лазеротерапевт: видалення волосся, судин, стаж роботи 5 років',
         image: '/employees/Оксана-Дащенко.jpg',
      },
   ]

   return (
      <Slider slides={3}>
         {employees.map((el, i) => (
            <SwiperSlide key={i}>
               <Employee name={el.name} about={el.about} image={el.image} />
            </SwiperSlide>
         ))}
      </Slider>
   )
}
