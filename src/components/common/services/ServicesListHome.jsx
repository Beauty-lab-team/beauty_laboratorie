import s from './Services.module.scss'
import ServiceCard from './ServiceCard.jsx'
import { load } from 'outstatic/server'

export default async function ServicesListHome() {
   const { allServices } = await getData()

   return (
      <div className={s.servicesList}>
         <div className={s.servicesGrid}>
            {allServices.slice(0, 6).map((el, i) => (
               <ServiceCard key={i} {...el} />
            ))}
         </div>
      </div>
   )
}

async function getData() {
   const db = await load()

   const allServices = await db
      .find({ collection: 'services' }, ['title', 'slug', 'content', 'coverImage', 'description', 'tag'])
      .sort({ publishedAt: -1 })
      .toArray()

   return {
      allServices,
   }
}
