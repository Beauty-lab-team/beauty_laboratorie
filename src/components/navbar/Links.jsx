import Link from 'next/link'
import s from './Navbar.module.scss'

const Links = ({ pathname, isMenuOpen }) => {
   const links = [
      { title: 'Новини', link: '/news' },
      { title: 'Про нас', link: '/about' },
      { title: 'Послуги', link: '/services' },
      { title: 'Контакти', link: '/contacts' },
   ]

   return (
      <ul className={`${s.navLinks} ${isMenuOpen ? s.show : ''}`}>
         {links.map(el => {
            return (
               <li key={el.title}>
                  <Link href={el.link} className={pathname === el.link ? s.active : ''}>
                     {el.title}
                  </Link>
               </li>
            )
         })}
      </ul>
   )
}

export default Links
