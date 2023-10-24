import Section from '../../../UI/Section'
import Heading from '../../../UI/Heading'
import Slider from '../../../UI/slider/Slider'
import { SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import s from './Clinic.module.scss'
import useMediaQuery from '../../../../hooks/useMediaQuery'

export default function Clinic() {
   const isDesktop = useMediaQuery('(min-width: 1024px)')

   const images = ['/clinic/a.jpg', '/clinic/b.jpg', '/clinic/c.jpg', '/clinic/d.jpg', '/clinic/e.jpg', '/clinic/f.jpg', '/clinic/g.jpg']

   return (
      <Section>
         <Heading>Інтер'єр студії</Heading>
         <Slider slides={1}>
            {isDesktop ? (
               <>
                  <SwiperSlide>
                     <div className={s.photos}>
                        {images.slice(3, -1).map((el, i) => (
                           <div key={i} className={s.photo}>
                              <Image quality={100} width={1280} height={960} src={el} alt='' />
                           </div>
                        ))}
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className={s.photosGrid}>
                        {images.slice(0, 3).map((el, i) => (
                           <div key={i} className={s.photo}>
                              <Image quality={100} width={1280} height={960} src={el} alt='' />
                           </div>
                        ))}
                     </div>
                  </SwiperSlide>
               </>
            ) : (
               <>
                  {images.map((el, i) => (
                     <SwiperSlide key={i}>
                        <div className={s.photo}>
                           <Image quality={100} width={1280} height={960} src={el} alt='' />
                        </div>
                     </SwiperSlide>
                  ))}
               </>
            )}
         </Slider>
      </Section>
   )
}
