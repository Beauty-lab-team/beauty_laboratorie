import Link from 'next/link'

export default function LinkToPage(props) {
   return (
      <Link
         href={props.link}
         className={`${props.className} text-accent-1 px-5 md:px-7 py-[6px] md:py-2 border border-accent-1 rounded-inner tracking-wide hover:bg-accent-1 active:bg-accent-1 hover:text-accent-2 active:text-accent-2 transition-colors`}
      >
         {props.children}
      </Link>
   )
}
