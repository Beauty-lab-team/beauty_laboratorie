import CardHeading from '../../UI/CardHeading'
import LinkToPage from '../../UI/LinkToPage'
import Text from '../../UI/Text'
import s from './Articles.module.scss'

export default function ArticleCard({ link, title, description, image }) {
   return (
      <div className={s.newsCard}>
         <CardHeading className='mb-2'>{title}</CardHeading>
         <Text className='line-clamp-4'>{description}</Text>
         <img src={image} alt='' />
         <div>
            <LinkToPage link={`articles/${link.toString()}`} className='!px-4 !py-2'>
               Детальніше
            </LinkToPage>
            <span>18 вересня 2023</span>
         </div>
      </div>
   )
}
