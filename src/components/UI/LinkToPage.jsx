import Link from 'next/link'

export default function LinkToPage(props) {
   return (
      <Link
         href={props.link}
         className={`${props.className} text-accent-1 lg:uppercase px-8 py-3 border border-accent-1 rounded-basic hover:bg-accent-1 active:bg-accent-1 hover:text-accent-2 active:text-accent-2 transition-colors`}
      >
         {props.children}
      </Link>
   )
}
