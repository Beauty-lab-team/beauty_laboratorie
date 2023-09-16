import Link from 'next/link'

export default function LinkToPage({ link, children }) {
   return (
      <Link
         href={link}
         className='text-accent-1 uppercase px-8 py-3 border border-accent-1 rounded-basic hover:bg-accent-1 hover:text-accent-2 transition-colors'
      >
         {children}
      </Link>
   )
}
