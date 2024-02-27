import Section from '../../../UI/Section'
import Heading from '../../../UI/Heading'
import Image from 'next/image'
import Slider from '../../../UI/slider/Slider'
import { SwiperSlide } from 'swiper/react'
import Filler from '../../../UI/Filler'

export default function Certificates() {
   const certificates = ['/certificates/cert-1.jpg', '/certificates/cert-2.jpg', '/certificates/cert-3.jpg', '/certificates/cert-4.jpg']

   return (
      <Section className='relative'>
         <Filler />
         <div className='relative z-20'>
            <Heading>Дипломи</Heading>
            <Slider slides={3}>
               {certificates.map((el, i) => (
                  <SwiperSlide key={i}>
                     <Image className='rounded-basic mb-12 xl:mb-4' src={el} width={1200} height={800} alt='' />
                  </SwiperSlide>
               ))}
            </Slider>
         </div>
      </Section>
   )
}
