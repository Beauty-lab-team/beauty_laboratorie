import Section from '../UI/Section'
import Heading from '../UI/Heading'
import Card from '../UI/Card'
import useMediaQuery from '../../hooks/useMediaQuery'
import { useRouter } from 'next/router'

export default function Features() {
   const { pathname } = useRouter()
   const isLargeScreen = useMediaQuery('(min-width: 768px)')
   const isHomePage = pathname == '/'
   const cardsView = isLargeScreen ? (isHomePage ? 3 : 6) : 3

   return (
      <Section>
         <Heading>{isHomePage ? 'Чому треба обрати нас?' : 'Особливості'}</Heading>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-3 justify-between items-center'>{Array(cardsView).fill(<Card />)}</div>
      </Section>
   )
}
