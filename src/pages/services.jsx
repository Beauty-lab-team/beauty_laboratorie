import ServicesPage from '../components/screens/services/Services'
import Layout from '../components/seo/Layout'

export default function Services() {
   return (
      <Layout
         title='BEAUTY.LABORATORIE | Нашi послуги'
         description="Косметична студія 'Beauty.laboratorie' пропонує широкий спектр послуг для чоловіків та жінок, включаючи:

    Косметологія обличчя: чистка, пілінги, масаж, ін'єкції, ліфтинг.
    Косметологія тіла: масаж, лімфодренаж, антицелюлітні програми, лазерна епіляція.
    Догляд за волоссям: стрижка, колорування, фарбування, біозавивка, кератинове випрямлення.
    Догляд за нігтями: манікюр, педикюр, нарощування, гель-лак.

Ми допоможемо вам зберегти молодість та красу, а також покращити ваше самопочуття."
      >
         <ServicesPage />
      </Layout>
   )
}
