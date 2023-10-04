import Heading from '../../UI/Heading'
import Section from '../../UI/Section'
import Appointment from '../../common/appointment/Appointment'
import Articles from '../../common/articles/Articles'

export default function ArticlesPage() {
   return (
      <Section className='pt-[140px] lg:pt-[160px]'>
         <Heading>Актуальнi статтi</Heading>
         <Articles />
         <Appointment />
      </Section>
   )
}
