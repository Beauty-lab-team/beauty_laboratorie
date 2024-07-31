import s from './News.module.scss'
import getData from '../../../utils/getData.js'
import NewsCard from './NewsCard.jsx'

export default async function NewsList() {
   const { allData } = await getData('news')

   return (
      <div className={s.newsList}>
         <div className='last:mb-0'>
            <div className={s.newsGrid}>
               {allData.map((el, i) => (
                  <div key={i} className='mb-12'>
                     <NewsCard key={i} {...el} />
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}
