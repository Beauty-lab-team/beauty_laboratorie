'use client'
import { SwiperSlide } from 'swiper/react'
import Heading from '../../UI/Heading'
import Section from '../../UI/Section'
import Slider from '../../UI/slider/Slider'
import Image from 'next/image'
import s from './Reviews.module.scss'

export default function Reviews() {
   const reviews = [
      '/reviews/1.jpg',
      '/reviews/2.jpg',
      '/reviews/3.jpg',
      '/reviews/4.jpg',
      '/reviews/5.jpg',
      '/reviews/6.jpg',
      '/reviews/7.jpg',
      '/reviews/8.jpg',
      '/reviews/9.jpg',
      '/reviews/10.jpg',
   ]

   return (
      <Section>
         <Heading>Відгуки</Heading>
         <Slider className='scale-95 md:scale-100' slides={3} group={2}>
            {reviews.map((el, i) => (
               <SwiperSlide key={i}>
                  <div className={s.review}>
                     <Image src={el} width={1200} height={800} alt='' />
                  </div>
               </SwiperSlide>
            ))}
         </Slider>
      </Section>
   )
}
