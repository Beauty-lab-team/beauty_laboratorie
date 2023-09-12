import { useRouter } from 'next/router'
import Links from './Links'
import s from './Navbar.module.scss'
import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
   const { pathname } = useRouter()
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const menuClickHandler = () => setIsMenuOpen(!isMenuOpen)

   return (
      <nav className={`${s.navbar} ${isMenuOpen ? s.expanded : ''}`}>
         <div className={s.content}>
            <h3 className={s.name}>
               <Link href='/'>
                  <img src='/logo.png' alt='logo' />
               </Link>
            </h3>
            <button className={s.menuBtn} onClick={menuClickHandler}>
               <svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' id='menu'>
                  <path fill='none' d='M0 0h48v48H0z'></path>
                  <path d='M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z'></path>
               </svg>
            </button>
            <Links pathname={pathname} isMenuOpen={isMenuOpen} />
         </div>
      </nav>
   )
}

export default Navbar
