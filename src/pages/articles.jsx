import ArticlesPage from '../components/screens/articles/Articles'
import Layout from '../components/seo/Layout'

export default function articles() {
   return (
      <Layout
         title='BEAUTY.LABORATORIE |Актуальнi новини'
         description="Косметична студія 'Beauty.laboratorie' пропонує широкий спектр статей про красу та здоров'я. Читайте корисні поради та рекомендації, щоб завжди виглядати та почуватися найкращим чином. Зустрічайте нові статті щотижня!"
      >
         <ArticlesPage />
      </Layout>
   )
}
