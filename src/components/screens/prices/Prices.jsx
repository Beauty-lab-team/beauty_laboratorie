import React from 'react'
import Heading from '../../UI/Heading'
import Appointment from '../../common/appointment/Appointment'
import PricesTable from './PricesTable'
import Section from '../../UI/Section'
import useMediaQuery from '../../../hooks/useMediaQuery'

export default function Prices() {
   const isDesktop = useMediaQuery('(min-width: 1024px)')

   return (
      <Section className='pt-[140px] lg:pt-[160px]'>
         <Heading>Цiни{isDesktop ? ', косметологiя' : ''}</Heading>
         <PricesTable />
         <Appointment />
      </Section>
   )
}
