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
import useMediaQuery from '../../../../hooks/useMediaQuery'
import ServiceCard from '../../../common/services/ServiceCard'
import Modal from '../../../UI/modal/Modal'
import Form from '../../../common/form/Form'
import { useState } from 'react'
import { data } from '../../../../data'
import { usePathname } from 'next/navigation'

export default function Hero() {
   const pathname = usePathname()
   const [isOpen, setIsOpen] = useState(false)
   const { categoryMain, cover, id } = data.services[5]

   const handleClose = () => {
      setIsOpen(false)
      document.body.style.overflow = 'auto'
   }

   return (
      <div className={`heroWrapper ${pathname == '/' ? '' : 'hidden'}`}>
         <HeroSlider>
            <SwiperSlide>
               <Section>
                  <div className={`${s.hero} ${s.heroServiceWrapper}`}>
                     <div className={s.heroService}>
                        <svg className={s.line1} width='52' height='41' viewBox='0 0 52 41' fill='none' xmlns='http://www.w3.org/2000/svg'>
                           <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M12.1224 1.24504C12.4896 0.249217 13.5722 -0.251851 14.5404 0.125876L50.7895 14.2679C51.7577 14.6456 52.2449 15.7591 51.8776 16.755C51.5104 17.7508 50.4278 18.2519 49.4596 17.8741L13.2105 3.73209C12.2423 3.35436 11.7551 2.24087 12.1224 1.24504Z'
                              fill='black'
                           />
                           <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M2.02826 18.5207C2.20784 17.5231 3.19397 16.8544 4.23084 17.0272C8.55888 17.7484 12.9198 18.4317 17.2945 19.1172C27.3668 20.6955 37.5123 22.2853 47.4991 24.3751C48.5274 24.5902 49.1797 25.5667 48.9561 26.556C48.7324 27.5453 47.7176 28.1729 46.6893 27.9577C36.804 25.8892 26.8214 24.3252 16.7962 22.7544C12.3976 22.0652 7.9909 21.3748 3.58053 20.6398C2.54366 20.4671 1.84868 19.5183 2.02826 18.5207Z'
                              fill='black'
                           />
                           <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M48.9993 36.7525C49.0275 37.7462 48.1847 38.5731 47.1168 38.5993C36.4053 38.8625 25.7258 39.5342 15.005 40.2085C10.6956 40.4796 6.37953 40.7511 2.05198 40.9966C0.985723 41.0571 0.0686547 40.3018 0.00364763 39.3095C-0.0613594 38.3172 0.750311 37.4638 1.81656 37.4033C6.08807 37.161 10.3715 36.8916 14.663 36.6216C25.4153 35.9454 36.2188 35.2658 47.0147 35.0006C48.0826 34.9744 48.9711 35.7587 48.9993 36.7525Z'
                              fill='black'
                           />
                        </svg>
                        <svg className={s.line2} width='1487' height='278' viewBox='0 0 1487 278' fill='none' xmlns='http://www.w3.org/2000/svg'>
                           <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M1179.89 0.435226C1018.07 4.7963 903.404 15.1995 743.907 39.9898C612.715 60.3812 525.768 76.95 377.314 109.849C290.019 129.194 255.829 138.14 186.389 159.801C131.699 176.861 97.5219 186.853 65.1537 195.246C16.9804 207.737 0 213.532 0 217.481C0 219.22 1.60492 219.644 2.9847 218.268C4.18138 217.076 10.7339 215.275 50.9774 205.078C84.6676 196.542 109.541 189.678 159.585 175.104C271.855 142.411 282.251 139.933 456.353 104.372C703.204 53.9502 903.667 27.1829 1096.07 18.9531C1278.77 11.1377 1429.22 14.3339 1467.81 26.8491C1474.19 28.9166 1474.22 28.739 1466.96 32.0832C1450.06 39.8674 1412.17 48.8493 1337.3 62.8203C1251.8 78.775 1205.42 86.1802 1066.38 106.073C960.504 121.222 957.958 121.634 818.132 146.357C671.668 172.254 607.17 184.688 519.58 203.912C488.648 210.7 486.045 211.209 447.974 217.918C372.221 231.269 307.169 245.792 243.295 263.614C222.5 269.416 218.749 272.031 224.186 276.935C228.562 280.883 264.888 274.101 355.046 252.504C466.317 225.85 481.984 222.608 545.971 212.995C637.707 199.213 714.175 190.278 778.133 185.868C842.217 181.45 949.377 175.823 1007.41 173.829C1039.82 172.715 1165.35 171.84 1171.61 172.684L1176.48 173.34L1171.94 174.433C1164.04 176.336 1024.03 203.411 962.46 214.94C943.182 218.55 915.347 223.577 900.605 226.11C852.547 234.37 749.442 253.722 731.262 257.894C719.906 260.501 715.925 265.8 721.299 271.156C724.96 274.805 749.525 275.12 802.875 272.205C815.576 271.511 838.957 270.368 854.833 269.665C870.709 268.962 894.437 267.473 907.563 266.355C920.688 265.237 940.358 263.924 951.273 263.439C962.189 262.954 975.944 262.268 981.841 261.915L992.563 261.272L983.078 261.143C970.664 260.975 941.448 259.653 916.688 258.14C887.65 256.365 824.051 256.765 794.631 258.908C791.305 259.15 790.136 259.017 791.06 258.501C792.863 257.496 867.807 243.52 903.079 237.612C1009.67 219.757 1191.9 184.253 1201.04 179.561C1209.14 175.399 1208.53 168.117 1199.77 164.47C1184.08 157.935 1039.34 159.151 909.677 166.907C898.564 167.572 872.585 169.054 851.946 170.201C774.328 174.513 698.049 180.73 669.268 185.09C667.454 185.364 666.182 185.365 666.443 185.092C667.491 183.991 868.334 148.496 946.243 135.644C963.86 132.737 1014.89 125.161 1059.64 118.806C1215.19 96.7216 1251.1 91.0222 1345.13 73.499C1461.24 51.8613 1492.79 41.0371 1486.17 25.1055C1480.65 11.8406 1449.07 5.79755 1361.22 1.20055C1340.2 0.100619 1212.33 -0.439454 1179.89 0.435226Z'
                              fill='black'
                           />
                        </svg>
                        <ServiceCard categoryMain={categoryMain} id={id} cover={cover} formHandler={setIsOpen} />
                     </div>
                     <div className={`${s.info} ${s.discount}`}>
                        <Heading className='2xl:max-w-[600px] 2xl:relative right-[80px]'>
                           Отримай знижку <span className='italic text-accent-1'>50%</span> на перший вiзит!
                        </Heading>
                     </div>
                  </div>
               </Section>
            </SwiperSlide>
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
