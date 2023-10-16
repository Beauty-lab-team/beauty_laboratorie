import CardHeading from '../../UI/CardHeading'
import ArticleCard from './ArticleCard'
import s from './Articles.module.scss'

export default function Articles() {
   const news = [
      // {
      //    id: 1,
      //    title: 'Новина 1',
      //    description:
      //       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam consequatur labore dolorem! Animi obcaecati commodi corrupti minima, nam fugiat cupiditate doloribus soluta totam eligendi. Libero quibusdam fugiat debitis cupiditate neque.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam consequatur labore dolorem! Animi obcaecati commodi corrupti minima, nam fugiat cupiditate doloribus soluta totam eligendi. Libero quibusdam fugiat debitis cupiditate neque.',
      //    image: '',
      // },
      // {
      //    id: 2,
      //    title: 'Новина 2',
      //    description:
      //       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam consequatur labore dolorem! Animi obcaecati commodi corrupti minima, nam fugiat cupiditate doloribus soluta totam eligendi. Libero quibusdam fugiat debitis cupiditate neque.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam consequatur labore dolorem! Animi obcaecati commodi corrupti minima, nam fugiat cupiditate doloribus soluta totam eligendi. Libero quibusdam fugiat debitis cupiditate neque.',
      //    image: '',
      // },
      // {
      //    id: 3,
      //    title: 'Новина 3',
      //    description:
      //       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam consequatur labore dolorem! Animi obcaecati commodi corrupti minima, nam fugiat cupiditate doloribus soluta totam eligendi. Libero quibusdam fugiat debitis cupiditate neque.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam consequatur labore dolorem! Animi obcaecati commodi corrupti minima, nam fugiat cupiditate doloribus soluta totam eligendi. Libero quibusdam fugiat debitis cupiditate neque.',
      //    image: '',
      // },
   ]

   return (
      <div className={s.news}>
         {news.length != 0 ? (
            news.map((el, i) => <ArticleCard key={i} link={el.id} title={el.title} description={el.description} image={el.image} />)
         ) : (
            <CardHeading>Зараз статей немає</CardHeading>
         )}
      </div>
   )
}
