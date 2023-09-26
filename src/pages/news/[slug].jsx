import { useRouter } from 'next/router'
import Layout from '../../components/seo/Layout'

export default function Page() {
   const router = useRouter()
   return (
      <Layout title='BEAUTY.LABORATORIE | Контакти' description='...'>
         post {router.query.slug}
      </Layout>
   )
}
