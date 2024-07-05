import s from './Services.module.scss'
import ServiceCard from './ServiceCard.jsx'
import { getData } from './getData.js'

export default async function ServicesListHome() {
   const { allServices } = await getData()

   const homeTitles = ['Лазерна епіляція', 'Слімсфера в Дніпрі', 'Фітобочка', 'Пресотерапія', 'Мікроголковий РФ', 'Смас-ліфтинг']
   const filteredAllServices = allServices.filter(service => homeTitles.includes(service.title))

   return (
      <div className={s.servicesList}>
         <div className={s.servicesGrid}>
            {filteredAllServices.map((el, i) => {
               return <ServiceCard key={i} {...el} />
            })}
         </div>
      </div>
   )
}
