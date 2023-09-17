export default function Text(props) {
   return (
      <p {...props} className={`text-text-2 text-lg leading-[28px] overflow-hidden ${props.className}`}>
         {props.children}
      </p>
   )
}
