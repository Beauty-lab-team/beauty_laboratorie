import s from './Services.module.scss'
import ServiceCard from './ServiceCard.jsx'
import Heading from '../../UI/Heading.jsx'
import getData from '../../../utils/getData.js'

export default async function ServicesList() {
   const { allData } = await getData('services')

   const filteredServices = [
      {
         array: allData.filter(el => el.tag.toLowerCase() == 'косметологія тіла'),
         title: 'Косметологія тіла',
      },
      {
         array: allData.filter(el => el.tag.toLowerCase() == 'косметологія обличчя'),
         title: 'Косметологія обличчя',
      },
      {
         array: allData.filter(el => el.tag.toLowerCase() == 'інʼєкції'),
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
