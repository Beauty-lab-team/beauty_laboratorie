import s from './Articles.module.scss'
import getData from '../../../utils/getData.js'
import ArticleCard from './ArticleCard.jsx'

export default async function ArticlesList() {
   const { allData } = await getData('articles')

   return (
      <div className={s.articlesList}>
         <div className='last:mb-0'>
            <div className={s.articlesGrid}>
               {allData.map((el, i) => (
                  <div key={i} className='mb-12'>
                     <ArticleCard key={i} {...el} />
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}
