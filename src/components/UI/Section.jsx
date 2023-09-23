export default function Section(props) {
   return (
      <div {...props} className={`pt-24 md:pt-44 ${props.className}`}>
         {props.children}
      </div>
   )
}
