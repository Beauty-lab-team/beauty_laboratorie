import Section from '../../../UI/Section'
import Heading from '../../../UI/Heading'
import Slider from '../../../UI/slider/Slider'
import { SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import s from './Clinic.module.scss'
import useMediaQuery from '../../../../hooks/useMediaQuery'

export default function Clinic() {
   const isDesktop = useMediaQuery('(min-width: 1024px)')

   return (
      <Section>
         <Heading>Клiнiка всерединi</Heading>
         <Slider slides={1} tabletSlides={1}>
            <SwiperSlide>
               <div className={s.photos}>
                  <div className={s.photo}>
                     <Image quality={100} width={1280} height={960} src='/clinic/a.jpg' alt='' />
                  </div>
                  <div className={s.photo}>
                     <Image quality={100} width={1280} height={960} src='/clinic/b.jpg' alt='' />
                  </div>
                  <div className={s.photo}>
                     <Image quality={100} width={1280} height={960} src='/clinic/c.jpg' alt='' />
                  </div>
               </div>
            </SwiperSlide>
            {isDesktop && (
               <SwiperSlide>
                  <div className={s.videos}>
                     <div className={s.video}>
                        <video src='/clinic/1.mp4' autoPlay loop playsInline muted loading='lazy' />
                     </div>
                     <div className={s.video}>
                        <video src='/clinic/2.mp4' autoPlay loop playsInline muted loading='lazy' />
                     </div>
                     <div className={s.video}>
                        <video src='/clinic/3.mp4' autoPlay loop playsInline muted loading='lazy' />
                     </div>
                  </div>
               </SwiperSlide>
            )}
         </Slider>
      </Section>
   )
}
