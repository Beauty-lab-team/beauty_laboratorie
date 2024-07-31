import s from './Promotions.module.scss'
import getData from '../../../utils/getData.js'
import PromotionCard from './PromotionCard.jsx'

export default async function PromotionsList() {
   const { allData } = await getData('promotions')

   return (
      <div className={s.promotionsList}>
         <div className='last:mb-0'>
            <div className={s.promotionsGrid}>
               {allData.map((el, i) => (
                  <div key={i} className='mb-12'>
                     <PromotionCard key={i} {...el} />
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}
