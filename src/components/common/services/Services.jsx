import { SwiperSlide } from 'swiper/react'
import Slider from '../../UI/slider/Slider'
import Service from './Service'
import s from './Services.module.scss'
import { useRouter } from 'next/router'

export default function Services() {
   const { pathname } = useRouter()
   const isHomePage = pathname == '/'

   const services = [
      {
         name: 'Послуга 1',
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur, quo esse quia ad dicta eum, facilis dolores',
         image: '',
      },
      {
         name: 'Послуга 2',
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur, quo esse quia ad dicta eum, facilis dolores',
         image: '',
      },
      {
         name: 'Послуга 3',
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur, quo esse quia ad dicta eum, facilis dolores',
         image: '',
      },
      {
         name: 'Послуга 4',
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur, quo esse quia ad dicta eum, facilis dolores',
         image: '',
      },
      {
         name: 'Послуга 5',
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur, quo esse quia ad dicta eum, facilis dolores',
         image: '',
      },
      {
         name: 'Послуга 6',
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur, quo esse quia ad dicta eum, facilis dolores',
         image: '',
      },
   ]

   return (
      <div className={s.servicesList}>
         {isHomePage && (
            <Slider slides={4} showArrows={false}>
               {services.splice(0, 4).map((el, i) => (
                  <SwiperSlide key={i}>
                     <Service {...el} />
                  </SwiperSlide>
               ))}
            </Slider>
         )}
      </div>
   )
}
