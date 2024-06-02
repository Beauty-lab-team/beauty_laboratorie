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
                           {/* <span className='text-[44px] lg:text-heading-desktop hidden xl:block'>Ти заслуговуєш на це…</span> */}
                        </Heading>
                        {/* <Text>Догляд за тiлом та обличчям, лазерне видалення волосся</Text> */}
                        <div>
                           <Heading size='sm'>Пропонуємо професійний комплексний догляд</Heading>
                           <Text>за твоїм обличчям та/або тілом по кращим цінам Дніпра!</Text>
                        </div>
                        <div>
                           <Heading size='sm'>Уходові процедури на твій вибір</Heading>
                           <ul className={s.list}>
                              <li>
                                 <Text>Дві процедури по уходу за тілом</Text>
                              </li>
                              <li>
                                 <Text>Одна антівікова для обличча</Text>
                              </li>
                           </ul>
                        </div>
                        <div>
                           <Text className='mt-4'>
                              Обравши зручний час та потрібні процедури, ти не тільки отримаєш задоволення від процесу, але і від результату!
                           </Text>
                           <Text>
                              Ми гарантуємо гарний настрій та ще більшу твою любов до себе
                              <svg
                                 xmlns='http://www.w3.org/2000/svg'
                                 width='24'
                                 height='24'
                                 viewBox='0 0 24 24'
                                 fill='currentColor'
                                 stroke='currentColor'
                                 stroke-width='2'
                                 stroke-linecap='round'
                                 stroke-linejoin='round'
                                 class='lucide lucide-heart inline-block pl-1'
                              >
                                 <path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z'></path>
                              </svg>
                           </Text>
                        </div>
                        <Link rel='nofollow' href='#appointment'>
                           <Button>Записатися на прийом</Button>
                        </Link>
                     </div>
                  </div>
               </Section>
            </SwiperSlide>
            {/* <SwiperSlide>
               <Section>
                  <div className={s.welcome}>
                     
                  </div>
               </Section>
            </SwiperSlide> */}
         </HeroSlider>
         <Modal open={isOpen} handleClose={handleClose}>
            <Form handleClose={handleClose} />
         </Modal>
      </div>
   )
}
