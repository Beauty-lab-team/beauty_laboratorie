import InteriorPage from '../components/screens/interior/Interior'
import Layout from '../components/seo/Layout'

export default function interior() {
   return (
      <Layout
         title='BEAUTY.LABORATORIE | Інтер`єр'
         description="Косметична студія 'Beauty.laboratorie' пропонує широкий спектр статей про красу та здоров'я. Читайте корисні поради та рекомендації, щоб завжди виглядати та почуватися найкращим чином. Зустрічайте нові статті щотижня!"
      >
         <InteriorPage />
      </Layout>
   )
}
