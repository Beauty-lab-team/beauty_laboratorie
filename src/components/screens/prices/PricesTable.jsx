import Table from './Table'
import s from './Prices.module.scss'
import { services } from '../../../data.js'

export default function PricesTable() {
   return (
      <div className={s.tables}>
         {services.map(el => (
            <Table key={el.id} data={el} />
         ))}
      </div>
   )
}
