import NewsCard from './NewsCard'
import s from './News.module.scss'

export default function News() {
   const news = [
      {
         id: 1,
         title: 'Новина 1',
         description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam consequatur labore dolorem! Animi obcaecati commodi corrupti minima, nam fugiat cupiditate doloribus soluta totam eligendi. Libero quibusdam fugiat debitis cupiditate neque.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam consequatur labore dolorem! Animi obcaecati commodi corrupti minima, nam fugiat cupiditate doloribus soluta totam eligendi. Libero quibusdam fugiat debitis cupiditate neque.',
         image: '',
      },
      {
         id: 2,
         title: 'Новина 2',
         description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam consequatur labore dolorem! Animi obcaecati commodi corrupti minima, nam fugiat cupiditate doloribus soluta totam eligendi. Libero quibusdam fugiat debitis cupiditate neque.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam consequatur labore dolorem! Animi obcaecati commodi corrupti minima, nam fugiat cupiditate doloribus soluta totam eligendi. Libero quibusdam fugiat debitis cupiditate neque.',
         image: '',
      },
      {
         id: 3,
         title: 'Новина 3',
         description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam consequatur labore dolorem! Animi obcaecati commodi corrupti minima, nam fugiat cupiditate doloribus soluta totam eligendi. Libero quibusdam fugiat debitis cupiditate neque.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam consequatur labore dolorem! Animi obcaecati commodi corrupti minima, nam fugiat cupiditate doloribus soluta totam eligendi. Libero quibusdam fugiat debitis cupiditate neque.',
         image: '',
      },
   ]

   return (
      <div className={s.news}>
         {news.map((el, i) => (
            <NewsCard key={i} link={el.id} title={el.title} description={el.description} image={el.image} />
         ))}
      </div>
   )
}
