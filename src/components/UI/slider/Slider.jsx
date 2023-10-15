import { Swiper } from 'swiper/react'
import { Keyboard, Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'

export default function Slider({ slides, group, tabletSlides, children, className }) {
   return (
      <Swiper
         className={className}
         breakpoints={{
            320: {
               slidesPerGroup: 1,
               slidesPerView: 1,
               spaceBetween: 12,
            },
            640: {
               slidesPerGroup: 1,
               slidesPerView: tabletSlides || 2,
               spaceBetween: 12,
            },
            768: {
               slidesPerView: 2,
               spaceBetween: 16,
            },
            1024: {
               spaceBetween: 16,
            },
         }}
         slidesPerView={slides}
         slidesPerGroup={group}
         modules={[Keyboard, Navigation, Pagination, Autoplay]}
         autoplay={{
            delay: 6000,
         }}
         autoHeight
         pagination={{ clickable: true }}
         navigation={{
            prevEl: '.prev',
            nextEl: '.next',
         }}
         keyboard={{ enabled: true }}
         speed={450}
         effect=''
      >
         {children}
         <div className='hidden xl:flex items-center justify-center gap-3 pb-10'>
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
