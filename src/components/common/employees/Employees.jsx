'use client'
import Slider from '../../UI/slider/Slider'
import { SwiperSlide } from 'swiper/react'
import Employee from './Employee'

export default function Employees({ allEmployees }) {
   return (
      <Slider slides={3}>
         {allEmployees.map((el, i) => (
            <SwiperSlide key={i}>
               <Employee name={el.title} about={el.content} profile={el.skill} image={el.coverImage} />
            </SwiperSlide>
         ))}
      </Slider>
   )
}
