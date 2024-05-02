'use client'
import { usePathname } from 'next/navigation'
import Links from './Links'
import s from './Navbar.module.scss'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {
   const pathname = usePathname()
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const menuClickHandler = () => setIsMenuOpen(!isMenuOpen)

   useEffect(() => {
      const handleOutsideClick = event => {
         if (!event.target.closest(`.${s.navbar}`)) setIsMenuOpen(false)
      }
      document.addEventListener('mousedown', handleOutsideClick)

      return () => document.removeEventListener('mousedown', handleOutsideClick)
   }, [])

   return (
      <nav className={`${s.navbar} ${isMenuOpen ? s.open : ''}`}>
         <div className={s.content}>
            <Link onClick={() => setIsMenuOpen(false)} className={s.logo} rel='nofollow' href='/'>
               <h3>BEAUTY.LABORATORIE</h3>
            </Link>
            <button className={s.menuBtn} onClick={menuClickHandler}>
               <svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' id='menu'>
                  <path fill='none' d='M0 0h48v48H0z'></path>
                  <path d='M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z'></path>
               </svg>
            </button>
            <Links pathname={pathname} isMenuOpen={isMenuOpen} setMenu={setIsMenuOpen} />
         </div>
      </nav>
   )
}

export default Navbar
