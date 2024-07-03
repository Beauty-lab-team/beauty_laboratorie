export default function Text(props) {
   return (
      <p {...props} className={`${props.className} text-lg leading-[28px] overflow-hidden text-text-2`}>
         {props.children}
      </p>
   )
}
