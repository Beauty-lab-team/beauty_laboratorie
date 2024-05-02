'use client'
import Slider from '../../UI/slider/Slider'
import { SwiperSlide } from 'swiper/react'
import Employee from './Employee'

export default function Employees() {
   const employees = [
      {
         name: 'Оксана Розбейко',
         about: 'косметолог - естетіст, з медичною освітою та стажем роботи у напрямку косметології з 2007 року',
         profile: [
            'Мікроголковий RF',
            'Смас ліфтінг / SMAS ліфтінг',
            'Біоревіталізація',
            'Догляд за обличчям',
            'Лікування акне',
            'Контурна пластика',
            'Чистка обличчя',
         ],
         image: '/employees/Оксана-Розбейко.jpg',
      },
      {
         name: 'Софія Чеснакова',
         about: 'апаратний косметолог, з медичною освітою',
         profile: ['Слімсфера', 'Смас ліфтінг / SMAS ліфтінг', 'Фітобочка', 'Прессотерапія', 'Обгортання'],
         image: '/employees/Софія-Чеснакова.jpg',
      },
      {
         name: 'Оксана Дащенко',
         about: 'косметолог - лазеротерапевт, з медичною освітою',
         profile: ['Лікування лазером судин', 'Лазерна епіляція', 'Лазерна депіляція'],
         image: '/employees/Оксана-Дащенко.jpg',
      },
   ]

   return (
      <Slider slides={3}>
         {employees.map((el, i) => (
            <SwiperSlide key={i}>
               <Employee name={el.name} about={el.about} profile={el.profile} image={el.image} />
            </SwiperSlide>
         ))}
      </Slider>
   )
}
