import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

export default function notFound() {
   return (
      <div>
         <Navbar />
         <main className='container max-w-5xl pt-24 md:pt-44 px-3 md:px-12 flex-1 mx-auto text-text-1 text-3xl'>
            Будь ласка, скористайся пунктами меню для пошуку потрібної інформації. <br /> <br /> Дякуємо тобі за терпіння 🌸
         </main>
      </div>
   )
}
