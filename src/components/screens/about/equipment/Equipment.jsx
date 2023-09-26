import Section from '../../../UI/Section'
import Heading from '../../../UI/Heading'
import Slider from '../../../UI/slider/Slider'
import { SwiperSlide } from 'swiper/react'
import useMediaQuery from '../../../../hooks/useMediaQuery'
import EquipmentCard from './EquipmentCard'

export default function Equipment() {
   const isDesktop = useMediaQuery('(min-width: 1024px)')

   const equipment = [
      {
         name: 'Карбоксітерапія',
         src: '/equipment/карбоксітерапія.jpg',
      },
      {
         name: 'Лазерна Депіляція',
         src: '/equipment/лазерна_депіляція.jpg',
      },
      // {
      //    name: 'Смас-ліфтинг',
      //    src: '/equipment/смас-ліфтинг.jpg',
      // },
      {
         name: 'Мікроголковий РФ',
         src: '/equipment/Мікроголковий_РФ.mp4',
      },
      {
         name: 'Слім-сфера',
         src: '/equipment/слім-сфера.mp4',
      },
   ]

   return (
      <Section>
         <Heading>Обладнання</Heading>
         <Slider slides={3} showArrows={isDesktop}>
            {equipment.map((el, i) => (
               <SwiperSlide key={i}>
                  <EquipmentCard name={el.name} src={el.src} />
               </SwiperSlide>
            ))}
         </Slider>
      </Section>
   )
}
