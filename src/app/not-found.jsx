import { load } from 'outstatic/server'
import Navbar from '../components/navbar/Navbar'

export default async function notFound() {
   const { allServices } = await getData()

   return (
      <div>
         <Navbar servicesLinks={allServices} />
         <main className='container max-w-5xl pt-24 md:pt-44 px-3 md:px-12 flex-1 mx-auto text-text-1 text-3xl'>
            Будь ласка, скористайся пунктами меню для пошуку потрібної інформації. <br /> <br /> Дякуємо тобі за терпіння 🌸
         </main>
      </div>
   )
}

async function getData() {
   const db = await load()

   const allServices = await db.find({ collection: 'services' }, ['title', 'slug', 'content']).sort({ publishedAt: -1 }).toArray()

   return {
      allServices,
   }
}
