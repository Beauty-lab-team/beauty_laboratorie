import Heading from '../../../UI/Heading'
import LinkToPage from '../../../UI/LinkToPage'
import Section from '../../../UI/Section'
import Services from '../../../common/services/Services'

export default function ServicesHome() {
   return (
      <Section id='services'>
         <div className='flex flex-col md:flex-row justify-between items-start md:items-end'>
            <Heading>Послуги</Heading>
            <LinkToPage className='mb-5 lg:mb-[44px]' link='/services'>
               Всi послуги
            </LinkToPage>
         </div>
         <Services />
      </Section>
   )
}
