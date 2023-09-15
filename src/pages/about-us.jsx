import Layout from '../components/Layout'
import About from '../components/screens/about/About'
// import HeroPost from '../components/hero-post'
// import { getAllPostsForHome, getAllPostsFromServices } from '../lib/api'

export default function AboutUs({ preview }) {
   // const heroPost = nodes[0].posluga

   return (
      <Layout title='BEAUTY.LABORATORIE | Про нас' description='...'>
         <About />
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
