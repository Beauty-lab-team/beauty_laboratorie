import Link from 'next/link'
import Layout from '../components/seo/Layout'

export default function thankyou() {
   return (
      <Layout
         title='BEAUTY.LABORATORIE | Дякуємо'
         description="Косметична студія 'Beauty.laboratorie' - це ваш шлях до краси та здоров'я. Ми пропонуємо широкий спектр косметологічних послуг за доступними цінами. Наші фахівці допоможуть вам знайти те, що вам потрібно, щоб виглядати і відчувати себе найкращим чином."
      >
         <div className='flex flex-col items-center justify-center min-h-screen mb-[-100px] md:mb-[-120px]'>
            <svg
               className='h-12 w-12 text-green-500 dark:text-green-300'
               xmlns='http://www.w3.org/2000/svg'
               width='24'
               height='24'
               viewBox='0 0 24 24'
               fill='none'
               stroke='currentColor'
               strokeWidth='2'
               strokeLinecap='round'
               strokeLinejoin='round'
            >
               <polyline points='20 6 9 17 4 12' />
            </svg>
            <h1 className='text-3xl font-bold text-text-1 mt-4'>Дякую!</h1>
            <p className='text-text-2 mt-2'>Ваша заявка успішно відправлена.</p>
            <Link href='/' className='text-accent-1 hover:text-text-1 mt-4 font-semibold'>
               На головну
            </Link>
         </div>
      </Layout>
   )
}
