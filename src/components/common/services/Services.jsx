import { SwiperSlide } from 'swiper/react'
import Slider from '../../UI/slider/Slider'
import Service from './Service'
import s from './Services.module.scss'
import LinkToPage from '../../UI/LinkToPage'
import { useRouter } from 'next/router'

export default function Services() {
   const { pathname } = useRouter()
   const isHomePage = pathname == '/'

   return (
      <>
         <div className={s.servicesList}>
            <Slider slides={4}>
               <SwiperSlide>
                  <Service
                     name='Послуга 1'
                     description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur, quo esse quia ad dicta eum, facilis dolores'
                     image=''
                     prices={`
                     Обличчя - 100 грн;
                     Руки - 200 грн;
                     Ноги - 300 грн;
                  `}
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <Service
                     name='Послуга 2'
                     description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur, quo esse quia ad dicta eum, facilis dolores'
                     image=''
                     prices={`
                     Обличчя - 100 грн;
                     Руки - 200 грн;
                     Ноги - 300 грн;
                  `}
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <Service
                     name='Послуга 3'
                     description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur, quo esse quia ad dicta eum, facilis dolores'
                     image=''
                     prices={`
                     Обличчя - 100 грн;
                     Руки - 200 грн;
                     Ноги - 300 грн;
                  `}
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <Service
                     name='Послуга 4'
                     description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur, quo esse quia ad dicta eum, facilis dolores'
                     image=''
                     prices={`
                     Обличчя - 100 грн;
                     Руки - 200 грн;
                     Ноги - 300 грн;
                  `}
                  />
               </SwiperSlide>
            </Slider>
         </div>
         {isHomePage && <LinkToPage link='/services'>Всі послуги</LinkToPage>}
      </>
   )
}
