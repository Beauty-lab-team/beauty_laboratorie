import Heading from '../../../components/UI/Heading'
import Section from '../../../components/UI/Section'
import PricesTable from '../../../components/screens/prices/PricesTable'

export const metadata = {
   title: 'Ціни',
   description:
      "Косметична студія 'Beauty.laboratorie' - це ваш шлях до краси та здоров'я. Ми пропонуємо широкий спектр косметологічних послуг за доступними цінами. Наші фахівці допоможуть вам знайти те, що вам потрібно, щоб виглядати і відчувати себе найкращим чином.",
}

export default function Prices() {
   return (
      <Section className='pt-[140px] lg:pt-[160px]'>
         <Heading>
            Цiни <span className='hidden lg:inline-block'>косметологiя</span>
         </Heading>
         <PricesTable />
      </Section>
   )
}
