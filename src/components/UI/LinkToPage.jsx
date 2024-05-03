import Link from 'next/link'

export default function LinkToPage(props) {
   return (
      <Link
         rel='nofollow'
         href={props.link}
         className={`${props.className} text-accent-1 px-4 md:px-3 py-2 border border-accent-1 rounded-inner tracking-wide hover:bg-accent-1 active:bg-accent-1 hover:text-accent-2 active:text-accent-2 transition-colors`}
      >
         {props.children}
      </Link>
   )
}
