import Section from '../../../UI/Section'
import Heading from '../../../UI/Heading'
import Slider from '../../../UI/slider/Slider'
import { SwiperSlide } from 'swiper/react'
import EquipmentCard from './EquipmentCard'

export default function Equipment() {
   const equipmentContent = [
      {
         name: 'Карбоксiтерапiя',
         src: '/equipment/карбоксітерапія.jpg',
      },
      {
         name: 'Лазерна Депiляцiя',
         src: '/equipment/лазерна_депіляція.jpg',
      },
      {
         name: 'Мiкроголковий РФ',
         src: '/equipment/Мікроголковий_РФ.mp4',
      },
      {
         name: 'Слiм-сфера',
         src: '/equipment/слім-сфера.mp4',
      },
   ]

   return (
      <Section>
         <Heading>Наше обладнання</Heading>
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
