'use client'
import Image from 'next/image'
import s from './Hero.module.scss'
import Link from 'next/link'
import Heading from '../../../UI/Heading'
import Text from '../../../UI/Text'
import Button from '../../../UI/Button'
import Section from '../../../UI/Section'
import HeroSlider from '../../../UI/slider/HeroSlider'
import { SwiperSlide } from 'swiper/react'
import Modal from '../../../UI/modal/Modal'
import Form from '../../../common/form/Form'
import { useState } from 'react'
import { data } from '../../../../data'
import { usePathname } from 'next/navigation'

export default function Hero() {
   const pathname = usePathname()
   const [isOpen, setIsOpen] = useState(false)
   const { categoryMain, cover, id, text } = data.services[0]

   const handleClose = () => {
      setIsOpen(false)
      document.body.style.overflow = 'auto'
   }

   return (
      <div className={`heroWrapper ${pathname == '/' ? '' : 'hidden'}`}>
         <HeroSlider>
            <SwiperSlide>
               <Section>
                  <div className={s.hero}>
                     <Image className={s.photo} src='/clinic/hero.jpg' alt='Hero image' width={500} height={440} quality={100} priority />
                     <div className={`${s.info} ${s.main}`}>
                        <Heading>
                           Студiя краси <span className='text-accent-1 italic block'>Beauty .laboratorie</span>
                           <span className='text-[44px] lg:text-heading-desktop hidden xl:block'>Ти заслуговуєш на це…</span>
                        </Heading>
                        <Text>Догляд за тiлом та обличчям, лазерне видалення волосся</Text>
                        <Link rel='nofollow' href='#appointment'>
                           <Button>Записатися на прийом</Button>
                        </Link>
                     </div>
                  </div>
               </Section>
            </SwiperSlide>
         </HeroSlider>
         <Modal open={isOpen} handleClose={handleClose}>
            <Form handleClose={handleClose} />
         </Modal>
      </div>
   )
}
