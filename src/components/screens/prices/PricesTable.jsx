import Table from './Table'
import s from './Prices.module.scss'

export default function PricesTable() {
   const data = [
      {
         time: 60,
         description: 'Стрижка волосся',
         price: 200,
      },
      {
         time: 120,
         description: 'Фарбування волосся',
         price: 500,
      },
      {
         time: 30,
         description: 'Стрижка бороди',
         price: 100,
      },
   ]
   const data2 = [
      {
         time: 60,
         description: 'Стрижка волосся',
         price: 200,
      },
      {
         time: 120,
         description: 'Фарбування волосся',
         price: 500,
      },
      {
         time: 30,
         description: 'Стрижка бороди',
         price: 100,
      },
      {
         time: 60,
         description: 'Стрижка волосся',
         price: 200,
      },
      {
         time: 120,
         description: 'Фарбування волосся',
         price: 500,
      },
      {
         time: 30,
         description: 'Стрижка бороди',
         price: 100,
      },
   ]

   return (
      <div className={s.tables}>
         <Table title='Масаж 2' data={data2} />
         <Table title='Масаж' data={data} />
         <Table title='Масаж' data={data} />
         <Table title='Масаж' data={data} />
         <Table title='Масаж 2' data={data2} />
         <Table title='Масаж 2' data={data2} />
         <Table title='Масаж' data={data} />
      </div>
   )
}
