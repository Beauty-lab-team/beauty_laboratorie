import { useState } from 'react'
import useMediaQuery from '../../../hooks/useMediaQuery'
import CardHeading from '../../UI/CardHeading'
import Text from '../../UI/Text'
import s from './Features.module.scss'

export default function Feature({ heading, text }) {
   const isDesktop = useMediaQuery('(min-width: 768px)')
   const [isOpen, setIsOpen] = useState(false)
   const toggleAccordion = () => setIsOpen(!isOpen)

   return (
      <>
         {!isDesktop ? (
            <div onClick={toggleAccordion} className={s.feature}>
               <div className={s.heading}>
                  <CardHeading className={!isOpen ? 'mb-0' : 'mb-3'}>{heading}</CardHeading>
                  <svg className={isOpen && s.open} xmlns='http://www.w3.org/2000/svg' width='11' height='20' id='arrow'>
                     <path
                        fill-rule='evenodd'
                        d='M.366 19.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827L1.768.292A1.063 1.063 0 0 0 .314.282a.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414L.366 18.295a.974.974 0 0 0 0 1.413'
                     ></path>
                  </svg>
               </div>
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
