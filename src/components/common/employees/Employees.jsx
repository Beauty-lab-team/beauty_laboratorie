import Slider from '../../UI/slider/Slider'
import { SwiperSlide } from 'swiper/react'
import Employee from './Employee'
import { useRouter } from 'next/router'

export default function Employees() {
   const { pathname } = useRouter()
   const isHomePage = pathname == '/'

   const employees = [
      { name: 'Оксана Розбейко', about: 'Вища медична освіта, косметолог, стаж роботи в косметології 17 років', image: '' },
      {
         name: 'Софія Чеснакова',
         about: 'Косметолог, медична освіта, спеціаліст з апаратних технологій по догляду за обличчям та тілом',
         image: '/employees/Софія-Чеснакова.png',
      },
   ]

   return (
      <Slider slides={isHomePage ? 2 : 4} group={isHomePage ? 2 : 3}>
         {employees.map((el, i) => (
            <SwiperSlide key={i}>
               <Employee name={el.name} about={el.about} image={el.image} />
            </SwiperSlide>
         ))}
      </Slider>
   )
}
