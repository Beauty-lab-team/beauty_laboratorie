'use client'
import s from './Services.module.scss'
import { usePathname } from 'next/navigation'
import Modal from '../../UI/modal/Modal.jsx'
import Form from '../form/Form.jsx'
import { useState } from 'react'
import ServiceCard from './ServiceCard.jsx'
import { data } from '../../../data.js'
import Heading from '../../UI/Heading.jsx'

export default function ServicesList() {
   const [isOpen, setIsOpen] = useState(false)
   const pathname = usePathname()
   const isHomePage = pathname == '/'

   const filteredServices = [
      {
         array: data.services.filter(el => el.tag == 'Косметологія тіла'),
         title: 'Косметологія тіла',
      },
      {
         array: data.services.filter(el => el.tag == 'Косметологія обличчя'),
         title: 'Косметологія обличчя',
      },
      {
         array: data.services.filter(el => el.tag == 'Інʼєкції'),
         title: 'Інʼєкції',
      },
   ]

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
            <div className='last:mb-0'>
               {filteredServices.map((el, i) => (
                  <div key={i} className='mb-12'>
                     <Heading size='sm'>{el.title}</Heading>
                     <div className={s.servicesGridFullList}>
                        {el.array.map((service, i) => (
                           <ServiceCard key={i} {...service} formHandler={setIsOpen} />
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         )}
      </div>
   )
}
