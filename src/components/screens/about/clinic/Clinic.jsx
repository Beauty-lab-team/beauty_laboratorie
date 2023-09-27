import React from 'react'
import Section from '../../../UI/Section'
import Heading from '../../../UI/Heading'
import Slider from '../../../UI/slider/Slider'
import ClinicCard from './ClinicCard'
import { SwiperSlide } from 'swiper/react'

export default function Clinic() {
   const clinicContent = [
      {
         src: '/clinic/1.mp4',
      },
      {
         src: '/clinic/2.mp4',
      },
      {
         src: '/clinic/3.mp4',
      },
   ]
   
   return (
      <Section>
         <Heading>Клініка всередині</Heading>
         <Slider slides={3}>
            {clinicContent.map((el, i) => (
               <SwiperSlide key={i}>
                  <ClinicCard src={el.src} />
               </SwiperSlide>
            ))}
         </Slider>
      </Section>
   )
}
