import { useRouter } from 'next/router'
import Layout from '../../components/seo/Layout'
import Heading from '../../components/UI/Heading'
import Text from '../../components/UI/Text'
import Image from 'next/image'

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

export default function Page() {
   const router = useRouter()
   const { slug } = router.query

   const newsItem = news.find(el => el.id == slug)

   if (!newsItem) {
      return (
         <Layout title='BEAUTY.LABORATORIE | Новина не знайдена' description='...'>
            <Heading>Такої новини не існує</Heading>
         </Layout>
      )
   }

   const { title, description, image } = newsItem

   return (
      <Layout title={`BEAUTY.LABORATORIE | ${title}`} description='...'>
         <Heading>{title}</Heading>
         <div className='lg:flex gap-4'>
            <Text className='lg:max-w-3xl'>{description}</Text>
            <Image className='flex-1 rounded-basic mt-5 border border-accent-1' src={image} width={500} height={500} alt='' />
         </div>
      </Layout>
   )
}
