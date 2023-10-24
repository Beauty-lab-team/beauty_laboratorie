import { useRouter } from 'next/router'
import Links from './Links'
import s from './Navbar.module.scss'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useMediaQuery from '../../hooks/useMediaQuery'

const Navbar = () => {
   const { pathname } = useRouter()
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const menuClickHandler = () => setIsMenuOpen(!isMenuOpen)

   const logoWidth = useMediaQuery('(min-width: 768px)') ? 430 : 285

   return (
      <nav className={`${s.navbar} ${isMenuOpen ? s.open : ''}`}>
         <div className={s.content}>
            <Link className={s.logo} href='/'>
               <Image src='/logo.svg' alt='BEAUTY.LABORATORIE' width={logoWidth} height={22} />
            </Link>
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
