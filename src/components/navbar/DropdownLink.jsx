'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function DropdownLink({ link, title, setMenu }) {
   const pathname = usePathname()
   const isActive = pathname === link

   return (
      <li>
         <Link
            onClick={() => setMenu(false)}
            className={`py-2 px-3 text-base rounded-inner hover:bg-black/5 transition-all ${isActive ? 'bg-accent-2' : ''}`}
            rel='nofollow'
            href={link}
         >
            {title}
         </Link>
      </li>
   )
}
