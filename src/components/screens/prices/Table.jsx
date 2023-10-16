import Text from '../../UI/Text'
import Accordion from '../../UI/accordion/Accordion'
import s from './Prices.module.scss'

function TableHead({ el }) {
   return (
      <thead>
         <tr>
            {el.services[0].time && <th>Час</th>}
            <th>Опис</th>
            <th>Цiна</th>
         </tr>
      </thead>
   )
}
function TableContent({ el, i }) {
   return (
      <tr key={i}>
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
            {data.subcategories?.map(el => (
               <div className={s.tableSub}>
                  <h4 className={s.subname}>{el.subName}</h4>
                  <table>
                     <thead>
                        <tr>
                           {/* {el.services[0].time && <th>Час</th>} */}
                           <th>Опис</th>
                           <th>Цiна</th>
                        </tr>
                     </thead>
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
                  <thead>
                     <tr>
                        {/* {el.services[0].time && <th>Час</th>} */}
                        <th>Опис</th>
                        <th>Цiна</th>
                     </tr>
                  </thead>
                  <tbody>
                     {data.services?.map((el, i) => (
                        <TableContent el={el} i={i} />
                     ))}
                  </tbody>
               </table>
            )}
         </div>
      </Accordion>
   )
}
