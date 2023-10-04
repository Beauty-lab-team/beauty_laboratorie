export default function Heading(props) {
   return (
      <h2
         className={`${props.className} font-praho text-heading-mobile lg:text-heading-desktop text-text-1 tracking-wide leading-[62px] lg:leading-[72px] mb-[20px] lg:mb-[44px]`}
      >
         {props.children}
      </h2>
   )
}
