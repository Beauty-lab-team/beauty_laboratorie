import Prices from '../components/screens/prices/Prices'
import Layout from '../components/seo/Layout'

export default function prices() {
   return (
      <Layout
         title='BEAUTY.LABORATORIE | Цiни'
         description="Косметична студія 'Beauty.laboratorie' - це ваш шлях до краси та здоров'я. Ми пропонуємо широкий спектр косметологічних послуг за доступними цінами. Наші фахівці допоможуть вам знайти те, що вам потрібно, щоб виглядати і відчувати себе найкращим чином."
      >
         <Prices />
      </Layout>
   )
}
