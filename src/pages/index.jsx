import Layout from '../components/layout'
import Home from '../components/screens/home/Home'
// import HeroPost from '../components/hero-post'
// import { getAllPostsForHome, getAllPostsFromServices } from '../lib/api'

// export default function Index({ allPosts: { nodes }, preview }) {
export default function Index({ preview }) {
   // const heroPost = nodes[0].posluga

   return (
      <Layout title='BEAUTY.LABORATORIE' description='...'>
         <Home />
      </Layout>
   )
}

// export const getStaticProps = async ({ preview = false }) => {
//    const allPosts = await getAllPostsFromServices(preview)
//    return {
//       props: { allPosts, preview },
//       revalidate: 10,
//    }
// }
