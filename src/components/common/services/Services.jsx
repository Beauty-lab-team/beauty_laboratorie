import { SwiperSlide } from 'swiper/react'
import Slider from '../../UI/slider/Slider'
import s from './Services.module.scss'
import { useRouter } from 'next/router'
import Modal from '../../UI/modal/Modal'
import Form from '../form/Form'
import { useState } from 'react'
import ServiceCard from './ServiceCard'
import { data } from '../../../data.js'

export default function Services() {
   const [isOpen, setIsOpen] = useState(false)
   const { pathname } = useRouter()
   const isHomePage = pathname == '/'

   const handleClose = () => {
      setIsOpen(false)
      document.body.style.overflow = 'auto'
   }

   return (
      <div className={s.servicesList}>
         <Modal open={isOpen} handleClose={handleClose}>
            <Form handleClose={handleClose} />
         </Modal>
         {isHomePage && (
            <div className={s.servicesGrid}>
               {data.services.slice(0, 6).map((el, i) => (
                  <ServiceCard key={i} {...el} formHandler={setIsOpen} />
               ))}
            </div>
         )}
         {!isHomePage && (
            <div className={s.servicesGrid}>
               {data.services.map((el, i) => (
                  <ServiceCard key={i} {...el} formHandler={setIsOpen} />
               ))}
            </div>
         )}
      </div>
   )
}
