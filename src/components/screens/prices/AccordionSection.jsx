import CardHeading from '../../UI/CardHeading'
import Text from '../../UI/Text'
import s from './Prices.module.scss'
import useMediaQuery from '../../../hooks/useMediaQuery'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function TableContent({ el, i }) {
   return (
      <tr key={i}>
         <td>
            <Text className='text-base md:text-lg'>{el.time}хв</Text>
         </td>
         <td>
            <Text className='text-base md:text-lg'>{el.description}</Text>
         </td>
         <td>
            <Text className='text-base md:text-lg'>{el.price}грн</Text>
         </td>
      </tr>
   )
}
function TableHead() {
   return (
      <thead>
         <tr>
            <th>Час</th>
            <th>Опис</th>
            <th>Цiна</th>
         </tr>
      </thead>
   )
}

export default function AccordionSection({ data }) {
   const router = useRouter()
   const id = router.asPath.split('#')[1]

   const isDesktop = useMediaQuery('(min-width: 768px)')
   const [isOpen, setIsOpen] = useState(false)
   const toggleAccordion = () => setIsOpen(!isOpen)

   useEffect(() => setIsOpen(isDesktop), [isDesktop])

   useEffect(() => {
      if (id) {
         const element = document.getElementById(id)
         if (element) element.click()
      }
   }, [id])

   return (
      <div className='pt-[110px] mt-[-110px]' id={data.id} onClick={!isDesktop ? toggleAccordion : null}>
         <div className={s.tableSection}>
            {!isDesktop ? (
               <div className={s.heading}>
                  <CardHeading className={!isOpen ? 'mb-0' : 'mb-4'}>{data.categoryMain}</CardHeading>
                  <svg className={isOpen && 'rotate-90 mb-4'} xmlns='http://www.w3.org/2000/svg' width='11' height='20' id='arrow'>
                     <path
                        fillRule='evenodd'
                        d='M.366 19.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827L1.768.292A1.063 1.063 0 0 0 .314.282a.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414L.366 18.295a.974.974 0 0 0 0 1.413'
                     ></path>
                  </svg>
               </div>
            ) : (
               <CardHeading className='mb-4'>{data.categoryMain}</CardHeading>
            )}
            {isOpen && (
               <div className={s.tableMain} onClick={e => e.stopPropagation()}>
                  {data.subcategories?.map(el => (
                     <div className={s.tableSub}>
                        <h4 className={s.subname}>{el.subName}</h4>
                        <table>
                           <TableHead />
                           <tbody>
                              {el.services.map((el, i) => (
                                 <TableContent el={el} i={i} />
                              ))}
                           </tbody>
                        </table>
                     </div>
                  ))}
                  {data.services && (
                     <table onClick={e => e.stopPropagation()}>
                        <TableHead />
                        <tbody>
                           {data.services?.map((el, i) => (
                              <TableContent el={el} i={i} />
                           ))}
                        </tbody>
                     </table>
                  )}
               </div>
            )}
         </div>
      </div>
   )
}
