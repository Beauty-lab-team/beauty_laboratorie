import Section from '../../../UI/Section'
import Heading from '../../../UI/Heading'
import Image from 'next/image'
import Slider from '../../../UI/slider/Slider'
import { SwiperSlide } from 'swiper/react'

export default function Certificates() {
   return (
      <Section>
         <Heading>Дипломи</Heading>
         <Slider slides={3}>
            <SwiperSlide>
               <Image className='rounded-basic' src='/clinic/cert.jpg' width={1200} height={800} alt='' />
            </SwiperSlide>
         </Slider>
      </Section>
   )
}
