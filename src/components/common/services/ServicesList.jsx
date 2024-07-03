import s from './Services.module.scss'
import ServiceCard from './ServiceCard.jsx'
import Heading from '../../UI/Heading.jsx'
import { load } from 'outstatic/server'

export default async function ServicesList() {
   const { allServices } = await getData()

   const filteredServices = [
      {
         array: allServices.filter(el => el.tag == 'Косметологія тіла'),
         title: 'Косметологія тіла',
      },
      {
         array: allServices.filter(el => el.tag == 'Косметологія обличчя'),
         title: 'Косметологія обличчя',
      },
      {
         array: allServices.filter(el => el.tag == 'Інʼєкції'),
         title: 'Інʼєкції',
      },
   ]

   return (
      <div className={s.servicesList}>
         <div className='last:mb-0'>
            {filteredServices.map((el, i) => (
               <div key={i} className='mb-12'>
                  <Heading size='sm'>{el.title}</Heading>
                  <div className={s.servicesGridFullList}>
                     {el.array.map((service, i) => (
                        <ServiceCard key={i} {...service} />
                     ))}
                  </div>
               </div>
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
