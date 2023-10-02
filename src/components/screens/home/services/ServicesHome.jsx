import Heading from '../../../UI/Heading'
import LinkToPage from '../../../UI/LinkToPage'
import Section from '../../../UI/Section'
import Services from '../../../common/services/Services'

export default function ServicesHome() {
   return (
      <Section id='services'>
         <div className='flex justify-between items-end'>
            <Heading>Послуги</Heading>
            <LinkToPage className='mb-5 lg:mb-[48px]' link='/services'>
               Всі послуги
            </LinkToPage>
         </div>
         <Services />
         {/* <LinkToPage className='md:hidden' link='/services'>
            Всі послуги
         </LinkToPage> */}
      </Section>
   )
}
