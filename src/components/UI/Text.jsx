export default function Text(props) {
   return <p className={`text-text-2 text-lg leading-[28px] ${props.className}`}>{props.children}</p>
}
