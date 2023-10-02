export default function CardHeading(props) {
   return (
      <h4
         className={`text-cardHeading-mobile md:text-cardHeading-desktop text-text-1 font-medium tracking-[0.03em] leading-[30px] md:leading-[34px] ${props.className}`}
      >
         {props.children}
      </h4>
   )
}
