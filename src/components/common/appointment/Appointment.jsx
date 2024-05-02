import Section from '../../UI/Section'
import Heading from '../../UI/Heading'
import Form from '../form/Form'

export default function Appointment() {
   return (
      <Section id='appointment' className='relative pb-16'>
         <Heading>Запис на прийом</Heading>
         <Form />
      </Section>
   )
}
