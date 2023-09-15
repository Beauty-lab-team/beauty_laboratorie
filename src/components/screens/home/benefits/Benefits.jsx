import Heading from '../../../UI/Heading'
import Section from '../../../UI/Section'
import Card from '../../../UI/Card'

export default function Benefits() {
   return (
      <Section>
         <Heading>Чому треба обрати нас?</Heading>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-3 justify-between items-center'>
            <Card />
            <Card />
            <Card />
         </div>
      </Section>
   )
}
