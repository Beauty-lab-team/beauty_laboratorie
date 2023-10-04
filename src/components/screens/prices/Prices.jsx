import React from 'react'
import Heading from '../../UI/Heading'
import Appointment from '../../common/appointment/Appointment'
import PricesTable from './PricesTable'
import Section from '../../UI/Section'

export default function Prices() {
   return (
      <Section className='pt-[140px] lg:pt-[160px]'>
         <Heading>Цiни</Heading>
         <PricesTable />
         <Appointment />
      </Section>
   )
}
