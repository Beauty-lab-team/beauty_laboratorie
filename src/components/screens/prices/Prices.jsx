import React from 'react'
import Heading from '../../UI/Heading'
import Appointment from '../../common/appointment/Appointment'
import PricesTable from './PricesTable'

export default function Prices() {
   return (
      <div>
         <Heading>Ціни</Heading>
         <PricesTable />
         <Appointment />
      </div>
   )
}
