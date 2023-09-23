export default function CardHeading(props) {
   return (
      <h4
         className={`text-cardHeading-mobile md:text-cardHeading-desktop text-text-1 font-semibold leading-[40px] md:leading-[44px] ${props.className}`}
      >
         {props.children}
      </h4>
   )
}
