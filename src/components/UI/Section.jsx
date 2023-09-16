export default function Section(props) {
   return (
      <div {...props} className={`mt-24 sm:mt-44 ${props.className}`}>
         {props.children}
      </div>
   )
}
