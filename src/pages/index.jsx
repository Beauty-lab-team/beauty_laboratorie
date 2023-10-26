import Layout from '../components/seo/Layout'
import HomePage from '../components/screens/home/Home'

export default function Index() {
   return (
      <Layout
         title='BEAUTY.LABORATORIE'
         description="Косметична студія 'Beauty.laboratorie' - це центр краси та здоров'я у Дніпрі. Ми пропонуємо широкий спектр косметологічних послуг для чоловіків та жінок, включаючи догляд за обличчям, тілом, волоссям та нігтями. Наші фахівці з багаторічним досвідом роботи допоможуть вам зберегти молодість та красу"
      >
         <HomePage />
      </Layout>
   )
}
