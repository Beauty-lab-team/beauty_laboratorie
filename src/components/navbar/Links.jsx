import Link from 'next/link'
import s from './Navbar.module.scss'
import { data } from '../../data.js'
import DropdownLink from './DropdownLink.jsx'

const Links = ({ pathname, isMenuOpen, setMenu }) => {
   const links = [
      { title: 'Про нас', link: '/about-us' },
      { title: 'Iнтер`єр', link: '/interior' },
      { title: 'Послуги', link: '/services', type: 'dropdown' },
      { title: 'Цiни', link: '/prices' },
      { title: 'Контакти', link: '/contacts' },
      {
         title: (
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
               <path d='M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z' />
            </svg>
         ),
         link: 'tel:+380675949525',
      },
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
                           <DropdownLink setMenu={setMenu} link='/services' title='Всі послуги' />
                           {data.services.map(service => (
                              <DropdownLink setMenu={setMenu} link={`/services/${service.link}`} title={service.categoryMain} />
                           ))}
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
