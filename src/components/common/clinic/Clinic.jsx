import Section from '../../UI/Section'
import Heading from '../../UI/Heading'
import Slider from '../../UI/slider/Slider'
import { SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import s from './Clinic.module.scss'

export default function Clinic() {
   const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg']

   return (
      <Section className='pt-[140px] lg:pt-[160px]'>
         <Heading>Інтер'єр студії</Heading>
         <Slider slides={3}>
            {images.map((el, i) => (
               <SwiperSlide key={i}>
                  <div className={s.photo}>
                     <Image quality={100} width={1280} height={960} src={`/clinic/${el}`} alt='' />
                  </div>
               </SwiperSlide>
            ))}
         </Slider>
      </Section>
   )
}
