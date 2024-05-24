import Link from 'next/link'
import s from './Navbar.module.scss'
import { data } from '../../data.js'
import DropdownLink from './DropdownLink.jsx'

const Links = ({ pathname, isMenuOpen, setMenu }) => {
   const links = [
      { title: 'Про Beauty студію', link: '/about-us' },
      { title: 'Лазерна епіляція', link: '/services/Lazerna-epilyatsiya-v-Dnipri' },
      { title: 'Послуги', link: '/services', type: 'dropdown' },
      { title: 'Актуальне', link: '/actual', type: 'dropdown' },
      { title: 'Цiни', link: '/prices' },
      { title: 'Контакти', link: '/contacts' },
   ]

   return (
      <ul className={`${s.navLinks} ${isMenuOpen ? s.show : ''}`}>
         {links.map(el => {
            return (
               <li key={el.title}>
                  {el.type === 'dropdown' ? (
                     <div className='dropdown dropdown-hover'>
                        <div tabIndex={0} role='button' className='flex gap-1 items-center'>
                           {el.title}
                           <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              stroke-width='2'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              class='lucide lucide-chevron-down'
                           >
                              <path d='m6 9 6 6 6-6' />
                           </svg>
                        </div>
                        <ul tabIndex={0} className='dropdown-content z-[1] menu p-2 shadow bg-white rounded-basic w-[250px]'>
                           {el.link == '/services' && (
                              <>
                                 <DropdownLink setMenu={setMenu} link='/services' title='Всі послуги' />
                                 {data.services.map(service => {
                                    return (
                                       service.text && (
                                          <DropdownLink setMenu={setMenu} link={`/services/${service.link}`} title={service.categoryMain} />
                                       )
                                    )
                                 })}
                              </>
                           )}
                           {el.link == '/actual' && (
                              <>
                                 <DropdownLink setMenu={setMenu} link={`${el.link}/news`} title='Новини' />
                                 <DropdownLink setMenu={setMenu} link={`${el.link}/promotions`} title='Акції' />
                                 <DropdownLink setMenu={setMenu} link={`${el.link}/articles`} title='Статті' />
                              </>
                           )}
                        </ul>
                     </div>
                  ) : (
                     <Link onClick={() => setMenu(false)} rel='nofollow' href={el.link} className={pathname === el.link ? s.active : ''}>
                        {el.title}
                     </Link>
                  )}
               </li>
            )
         })}
      </ul>
   )
}

export default Links
