'use client'
import Text from '../../UI/Text'
import Accordion from '../../UI/accordion/Accordion'
import s from './Prices.module.scss'

function TableContent({ el }) {
   return (
      <tr>
         {el.time && (
            <td>
               <Text className='text-base md:text-lg'>{el.time}хв</Text>
            </td>
         )}
         <td>
            <Text className='text-base md:text-lg'>{el.description}</Text>
         </td>
         <td>
            <Text className='text-base md:text-lg'>{el.price}грн</Text>
         </td>
      </tr>
   )
}

export default function Table({ data }) {
   return (
      <Accordion heading={data.categoryMain} sectionId={data.id} isClickable>
         <div className={s.tableMain} onClick={e => e.stopPropagation()}>
            {data.subcategories?.map((el, i) => (
               <div className={s.tableSub} key={i}>
                  <h4 className={s.subname}>{el.subName}</h4>
                  <table>
                     <thead>
                        <tr>
                           <th>Опис</th>
                           <th>Цiна</th>
                        </tr>
                     </thead>
                     <tbody>
                        {el.services.map((el, i) => (
                           <TableContent key={i} el={el} />
                        ))}
                     </tbody>
                  </table>
               </div>
            ))}
            {data.services && (
               <table onClick={e => e.stopPropagation()}>
                  <thead>
                     <tr>
                        <th>Опис</th>
                        <th>Цiна</th>
                     </tr>
                  </thead>
                  <tbody>
                     {data.services?.map((el, i) => (
                        <TableContent key={i} el={el} />
                     ))}
                  </tbody>
               </table>
            )}
         </div>
      </Accordion>
   )
}
