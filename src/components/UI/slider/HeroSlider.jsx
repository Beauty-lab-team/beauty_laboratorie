import { Swiper } from 'swiper/react'
import { Keyboard, Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'
import useMediaQuery from '../../../hooks/useMediaQuery'

export default function HeroSlider({ children }) {
   const isDesktop = useMediaQuery('(min-width: 1024px)')

   return (
      <Swiper
         slidesPerView={1}
         slidesPerGroup={1}
         modules={[Keyboard, Navigation, Pagination, Autoplay]}
         autoplay={{
            delay: 9000,
         }}
         loop
         allowTouchMove={!isDesktop}
         autoHeight
         pagination={{ clickable: true }}
         navigation={{
            prevEl: '.prev',
            nextEl: '.next',
         }}
         keyboard={{ enabled: true }}
         speed={450}
      >
         {children}
         <div className='absolute bottom-0 left-0 z-20 hidden xl:flex items-center justify-start container px-3 md:px-12 gap-3 mb-8'>
            <div className='prev text-accent-1 w-9 h-9 border border-accent-1 p-1 rounded-xl hover:bg-accent-1 hover:text-white transition-colors duration-200'>
               <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z' />
               </svg>
            </div>
            <div className='next text-accent-1 w-9 h-9 border border-accent-1 p-1 rounded-xl hover:bg-accent-1 hover:text-white transition-colors duration-200'>
               <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12l-4.58 4.59z' />
               </svg>
            </div>
         </div>
      </Swiper>
   )
}
