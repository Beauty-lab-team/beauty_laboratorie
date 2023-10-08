import Table from './Table'
import s from './Prices.module.scss'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function PricesTable() {
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
                     img: '',
                     time: 120,
                     price: 21000,
                     description: 'description',
                     slug: 'polimolochna-kislota',
                  },
               ],
            },
            {
               subName: 'Ботулотоксин',
               services: [
                  {
                     id: 2,
                     img: '',
                     time: 10,
                     price: 2200,
                     description: 'description',
                     slug: 'botulotoksin-1',
                  },
                  {
                     id: 3,
                     img: '',
                     time: 30,
                     price: 1300,
                     description: 'description',
                     slug: 'botulotoksin-2',
                  },
                  {
                     id: 4,
                     img: '',
                     time: 30,
                     price: 1600,
                     description: 'description',
                     slug: 'botulotoksin-3',
                  },
               ],
            },
         ],
      },
      {
         id: 2,
         categoryMain: 'RF-лiфтинг',
         services: [
            {
               id: 5,
               img: '',
               time: 45,
               price: 1100,
               description: 'description',
               slug: 'rf-lifting-1',
            },
            {
               id: 6,
               img: '',
               time: 45,
               price: 1250,
               description: 'description',
               slug: 'rf-lifting-2',
            },
            {
               id: 7,
               img: '',
               time: 30,
               price: 950,
               description: 'description',
               slug: 'rf-lifting-3',
            },
         ],
      },
      {
         id: 3,
         categoryMain: 'Смас-лiфтинг',
         services: [
            {
               id: 8,
               img: '',
               time: 45,
               price: 1100,
               description: 'description',
               slug: 'smas-lifting-1',
            },
            {
               id: 9,
               img: '',
               time: 45,
               price: 1250,
               description: 'description',
               slug: 'smas-lifting-2',
            },
            {
               id: 10,
               img: '',
               time: 30,
               price: 950,
               description: 'description',
               slug: 'smas-lifting-3',
            },
         ],
      },
   ]

   return (
      <div className={s.tables}>
         {data.map(el => (
            <Table key={el.id} data={el} />
         ))}
      </div>
   )
}
