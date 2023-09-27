import CardHeading from '../../UI/CardHeading'
import LinkToPage from '../../UI/LinkToPage'
import Text from '../../UI/Text'
import s from './News.module.scss'

export default function NewsCard({ link, title, description, image }) {
   return (
      <div className={s.newsCard}>
         <CardHeading>{title}</CardHeading>
         <Text className='line-clamp-5'>{description}</Text>
         <img src={image} alt='' />
         <div>
            <LinkToPage link={`news/${link.toString()}`} className='!px-4 !py-2'>
               Детальніше
            </LinkToPage>
            <span>18 вересня 2023</span>
         </div>
      </div>
   )
}
