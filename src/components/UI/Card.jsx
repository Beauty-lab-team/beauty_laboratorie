import { useState } from 'react'
import useMediaQuery from '../../hooks/useMediaQuery'
import CardHeading from './CardHeading'
import Text from './Text'

export default function Card({ heading, text }) {
   const isDesktop = useMediaQuery('(min-width: 768px)')
   const [isOpen, setIsOpen] = useState(false)
   const toggleAccordion = () => setIsOpen(!isOpen)

   return (
      <>
         {!isDesktop ? (
            <div onClick={toggleAccordion} className='rounded-basic bg-accent-2 p-6'>
               <CardHeading className={!isOpen ? 'mb-0' : 'mb-3'}>{heading}</CardHeading>
               {isOpen && <Text onClick={e => e.stopPropagation()}>{text}</Text>}
            </div>
         ) : (
            <div className='rounded-basic bg-accent-2 p-6'>
               <CardHeading className='mb-3'>{heading}</CardHeading>
               <Text>{text}</Text>
            </div>
         )}
      </>
   )
}
