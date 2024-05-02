import Heading from '../../../components/UI/Heading'
import Section from '../../../components/UI/Section'
import ServicesList from '../../../components/common/services/ServicesList'

export const metadata = {
   title: 'Послуги',
   description: `Косметична студія 'Beauty.laboratorie' пропонує широкий спектр послуг для чоловіків та жінок, включаючи:

    Косметологія обличчя: чистка, пілінги, масаж, ін'єкції, ліфтинг.
    Косметологія тіла: масаж, лімфодренаж, антицелюлітні програми, лазерна епіляція.
    Догляд за волоссям: стрижка, колорування, фарбування, біозавивка, кератинове випрямлення.
    Догляд за нігтями: манікюр, педикюр, нарощування, гель-лак.

Ми допоможемо вам зберегти молодість та красу, а також покращити ваше самопочуття.`,
}

export default function Services() {
   return (
      <Section className='pt-[140px] lg:pt-[160px]'>
         <Heading>Послуги</Heading>
         <ServicesList />
      </Section>
   )
}
