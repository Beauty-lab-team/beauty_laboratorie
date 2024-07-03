import Heading from '../../../UI/Heading'
import LinkToPage from '../../../UI/LinkToPage'
import Section from '../../../UI/Section'
import ServicesListHome from '../../../common/services/ServicesListHome'

export default function ServicesHome() {
   return (
      <Section id='services'>
         <div className='flex flex-col md:flex-row justify-between items-start md:items-end'>
            <Heading>Послуги</Heading>
            <LinkToPage link='/services'>Всi послуги</LinkToPage>
         </div>
         <ServicesListHome />
      </Section>
   )
}
