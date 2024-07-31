import Image from 'next/image'
import CardHeading from '../../UI/CardHeading'
import LinkToPage from '../../UI/LinkToPage'
import Text from '../../UI/Text'
import s from './Articles.module.scss'
import capitalizeSlug from '../../../utils/capitalizeSlug'
import { format } from 'date-fns'
import ukLocale from 'date-fns/locale/uk'

export default function ArticleCard({ title, coverImage, slug, content, publishedAt }) {
   const formattedDate = format(new Date(publishedAt), 'dd MMMM yyyy', { locale: ukLocale })

   return (
      <div className={s.article}>
         {/* {coverImage ? <Image className={s.image} src={coverImage} alt={title} width={300} height={200} /> : ''} */}
         <CardHeading>{title}</CardHeading>
         <Text className='mt-1 mb-4 line-clamp-3'>{content}</Text>
         <Text>{formattedDate}</Text>
         <div className={s.buttons}>
            <LinkToPage className='col-span-2' link={`/actual/articles/${capitalizeSlug(slug)}`}>
               Читати
            </LinkToPage>
         </div>
      </div>
   )
}
