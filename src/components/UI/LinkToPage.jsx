import Link from 'next/link'
import Button from './Button'

export default function LinkToPage(props) {
   return (
      <Link rel='nofollow' href={props.link} {...props}>
         <Button>{props.children}</Button>
      </Link>
   )
}
