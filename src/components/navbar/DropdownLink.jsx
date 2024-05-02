import Link from 'next/link'
import { useRouter } from 'next/router'

export default function DropdownLink({ link, title }) {
   const { pathname } = useRouter()
   const isActive = pathname.includes(link)

   return (
      <li>
         <Link
            className={`py-2 px-3 text-base rounded-inner hover:bg-black/5 transition-all ${isActive ? 'bg-accent-2' : ''}`}
            rel='nofollow'
            href={link}
         >
            {title}
         </Link>
      </li>
   )
}
