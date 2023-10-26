import Layout from '../components/seo/Layout'
import AboutPage from '../components/screens/about/About'

export default function AboutUs() {
   return (
      <Layout
         title='BEAUTY.LABORATORIE | Про нас'
         description="Косметична студія 'Beauty.laboratorie' - це команда професіоналів, які працюють для того, щоб ви були красивими та здоровими. Ми пропонуємо широкий спектр послуг, включаючи догляд за обличчям, тілом, волоссям та нігтями. Наші фахівці використовують тільки якісні препарати та обладнання, щоб забезпечити вам максимальний результат."
      >
         <AboutPage />
      </Layout>
   )
}
