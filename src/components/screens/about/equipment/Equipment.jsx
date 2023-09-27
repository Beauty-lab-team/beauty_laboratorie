import Section from '../../../UI/Section'
import Heading from '../../../UI/Heading'
import Slider from '../../../UI/slider/Slider'
import { SwiperSlide } from 'swiper/react'
import EquipmentCard from './EquipmentCard'

export default function Equipment() {
   const equipmentContent = [
      {
         name: 'Карбоксітерапія',
         src: '/equipment/карбоксітерапія.jpg',
      },
      {
         name: 'Лазерна Депіляція',
         src: '/equipment/лазерна_депіляція.jpg',
      },
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
         <Slider slides={3}>
            {equipmentContent.map((el, i) => (
               <SwiperSlide key={i}>
                  <EquipmentCard name={el.name} src={el.src} />
               </SwiperSlide>
            ))}
         </Slider>
      </Section>
   )
}
