import s from './Services.module.scss'
import ServiceCard from './ServiceCard.jsx'
import getData from '../../../utils/getData.js'

export default async function ServicesListHome() {
   const { allData } = await getData('services')

   const homeTitles = ['Лазерна епіляція', 'Слімсфера в Дніпрі', 'Фітобочка', 'Пресотерапія', 'Мікроголковий РФ', 'Смас-ліфтинг']
   const filteredAllServices = allData.filter(service => homeTitles.includes(service.title))

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
