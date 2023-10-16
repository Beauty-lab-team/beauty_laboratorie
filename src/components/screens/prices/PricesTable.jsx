import Table from './Table'
import s from './Prices.module.scss'
import { data } from '../../../data.js'

export default function PricesTable() {
   return (
      <div className={s.tables}>
         {data.services.map(el => (
            <Table key={el.id} data={el} />
         ))}
      </div>
   )
}
