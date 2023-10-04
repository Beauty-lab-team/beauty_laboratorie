import Heading from '../../UI/Heading'
import Section from '../../UI/Section'
import Services from '../../common/services/Services'
import Appointment from '../../common/appointment/Appointment'

export default function ServicesPage() {
   return (
      <Section className='pt-[140px] lg:pt-[160px]'>
         <Heading>Послуги</Heading>
         <Services />
         <Appointment />
      </Section>
   )
}
