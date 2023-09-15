import Card from '../../../UI/Card'
import Heading from '../../../UI/Heading'
import Section from '../../../UI/Section'
import useMediaQuery from '../../../../hooks/useMediaQuery'

export default function Features() {
   const cardsView = useMediaQuery('(min-width: 768px)') ? 6 : 3
   return (
      <Section>
         <Heading>Особливості</Heading>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-3 justify-between items-center'>{Array(cardsView).fill(<Card />)}</div>
      </Section>
   )
}
