'use client'
import s from './Services.module.scss'
import { usePathname } from 'next/navigation'
import Modal from '../../UI/modal/Modal.jsx'
import Form from '../form/Form.jsx'
import { useState } from 'react'
import ServiceCard from './ServiceCard.jsx'
import { data } from '../../../data.js'

export default function ServicesList() {
   const [isOpen, setIsOpen] = useState(false)
   const pathname = usePathname()
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
