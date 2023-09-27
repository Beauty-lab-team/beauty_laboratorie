import { SwiperSlide } from 'swiper/react'
import Slider from '../../UI/slider/Slider'
import s from './Services.module.scss'
import { useRouter } from 'next/router'
import Modal from '../../UI/modal/Modal'
import Form from '../form/Form'
import { useState } from 'react'
import ServiceCard from './ServiceCard'

export default function Services() {
   const [isOpen, setIsOpen] = useState(false)
   const { pathname } = useRouter()
   const isHomePage = pathname == '/'

   const handleClose = () => {
      setIsOpen(false)
      document.body.style.overflow = 'auto'
   }

   const data = [
      {
         id: 1,
         categoryMain: "Ін'єкції краси",
         subcategories: [
            {
               subName: 'Gana V',
               services: [
                  {
                     id: 1,
                     title: 'Полімолочна кислота',
                     img: '',
                     time: 120,
                     price: 21000,
                     description:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ipsam fugit. Molestias consectetur eum molestiae omnis dolores vero labore ipsa officia distinctio, alias laudantium numquam commodi excepturi pariatur ab! Inventore!',
                     slug: 'polimolochka-kislota',
                  },
               ],
            },
            {
               subName: 'Ботулотоксин',
               services: [
                  {
                     id: 2,
                     title: 'Ботулотоксин 1',
                     img: '',
                     time: 10,
                     price: 2200,
                     description:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ipsam fugit. Molestias consectetur eum molestiae omnis dolores vero labore ipsa officia distinctio, alias laudantium numquam commodi excepturi pariatur ab! Inventore!',
                     slug: 'botulotoksin-1',
                  },
                  {
                     id: 3,
                     title: 'Ботулотоксин 2',
                     img: '',
                     time: 30,
                     price: 1300,
                     description:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ipsam fugit. Molestias consectetur eum molestiae omnis dolores vero labore ipsa officia distinctio, alias laudantium numquam commodi excepturi pariatur ab! Inventore!',
                     slug: 'botulotoksin-2',
                  },
                  {
                     id: 4,
                     title: 'Ботулотоксин 3',
                     img: '',
                     time: 30,
                     price: 1600,
                     description:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ipsam fugit. Molestias consectetur eum molestiae omnis dolores vero labore ipsa officia distinctio, alias laudantium numquam commodi excepturi pariatur ab! Inventore!',
                     slug: 'botulotoksin-3',
                  },
               ],
            },
         ],
      },
      {
         id: 2,
         categoryMain: 'RF-ліфтинг',
         services: [
            {
               id: 5,
               title: 'RF-ліфтинг 1',
               img: '',
               time: 45,
               price: 1100,
               description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ipsam fugit. Molestias consectetur eum molestiae omnis dolores vero labore ipsa officia distinctio, alias laudantium numquam commodi excepturi pariatur ab! Inventore!',
               slug: 'rf-lifting-1',
            },
            {
               id: 6,
               title: 'RF-ліфтинг 2',
               img: '',
               time: 45,
               price: 1250,
               description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ipsam fugit. Molestias consectetur eum molestiae omnis dolores vero labore ipsa officia distinctio, alias laudantium numquam commodi excepturi pariatur ab! Inventore!',
               slug: 'rf-lifting-2',
            },
            {
               id: 7,
               title: 'RF-ліфтинг 3',
               img: '',
               time: 30,
               price: 950,
               description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ipsam fugit. Molestias consectetur eum molestiae omnis dolores vero labore ipsa officia distinctio, alias laudantium numquam commodi excepturi pariatur ab! Inventore!',
               slug: 'rf-lifting-3',
            },
         ],
      },
      {
         id: 3,
         categoryMain: 'Смас-ліфтинг',
         services: [
            {
               id: 8,
               title: 'Смас-ліфтинг 1',
               img: '',
               time: 45,
               price: 1100,
               description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ipsam fugit. Molestias consectetur eum molestiae omnis dolores vero labore ipsa officia distinctio, alias laudantium numquam commodi excepturi pariatur ab! Inventore!',
               slug: 'smas-lifting-1',
            },
            {
               id: 9,
               title: 'Смас-ліфтинг 2',
               img: '',
               time: 45,
               price: 1250,
               description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ipsam fugit. Molestias consectetur eum molestiae omnis dolores vero labore ipsa officia distinctio, alias laudantium numquam commodi excepturi pariatur ab! Inventore!',
               slug: 'smas-lifting-2',
            },
            {
               id: 10,
               title: 'Смас-ліфтинг 3',
               img: '',
               time: 30,
               price: 950,
               description:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ipsam fugit. Molestias consectetur eum molestiae omnis dolores vero labore ipsa officia distinctio, alias laudantium numquam commodi excepturi pariatur ab! Inventore!',
               slug: 'smas-lifting-3',
            },
         ],
      },
   ]

   return (
      <div className={s.servicesList}>
         <Modal open={isOpen} handleClose={handleClose}>
            <Form handleClose={handleClose} />
         </Modal>
         {isHomePage && (
            <Slider slides={4}>
               {data.splice(0, 4).map((el, i) => (
                  <SwiperSlide key={i}>
                     <ServiceCard {...el} formHandler={setIsOpen} />
                  </SwiperSlide>
               ))}
            </Slider>
         )}
         {!isHomePage && (
            <div className={s.servicesGrid}>
               {data.map((el, i) => (
                  <ServiceCard key={i} {...el} formHandler={setIsOpen} />
               ))}
            </div>
         )}
      </div>
   )
}
