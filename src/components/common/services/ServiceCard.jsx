'use client'
import Image from 'next/image'
import s from './Services.module.scss'
import CardHeading from '../../UI/CardHeading'
import Button from '../../UI/Button'
import LinkToPage from '../../UI/LinkToPage'
import Modal from '../../UI/modal/Modal.jsx'
import Form from '../form/Form.jsx'
import { useState } from 'react'

export default function ServiceCard({ title, coverImage, slug, content }) {
   const isContent = content.length != 3 ? true : false
   const [isOpen, setIsOpen] = useState(false)

   const capitalizeSlug = slug => {
      if (slug == 'mikroholkovyy-rf-v-dnipri') return 'Mikroholkovyy-RF-v-Dnipri'
      let words = slug.split('-')
      if (words.length > 0) {
         words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1)
         if (words.length > 1) {
            words[words.length - 1] = words[words.length - 1].charAt(0).toUpperCase() + words[words.length - 1].slice(1)
         }
      }
      return words.join('-')
   }

   const handleClose = () => {
      setIsOpen(false)
      document.body.style.overflow = 'auto'
   }
   const handleOpen = () => {
      setIsOpen(true)
      document.body.style.overflow = 'hidden'
   }

   return (
      <>
         <Modal open={isOpen} handleClose={handleClose}>
            <Form handleClose={handleClose} />
         </Modal>
         <div className={s.service}>
            <Image className={s.image} src={coverImage} alt={title} width={300} height={200} />
            <CardHeading className='flex-1'>{title}</CardHeading>
            <div className={s.buttons}>
               <Button onClick={handleOpen}>Запис</Button>
               <LinkToPage link={`/prices/#${slug}`}>Цiни</LinkToPage>
               {isContent && (
                  <LinkToPage className='col-span-2' link={`/services/${capitalizeSlug(slug)}`}>
                     Детальніше
                  </LinkToPage>
               )}
            </div>
         </div>
      </>
   )
}
