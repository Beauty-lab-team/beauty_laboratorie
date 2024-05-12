export default function Heading(props) {
   return (
      <h2
         aria-level={props.level}
         className={`${props.className} ${
            props.size == 'sm'
               ? 'font-nyght-italic text-heading-mobile-sm md:text-heading-desktop-sm'
               : 'font-nyght-italic text-heading-mobile md:text-heading-desktop mb-[20px] lg:mb-[44px]'
         }  text-text-1 leading-[62px] lg:leading-[78px]`}
      >
         {props.children}
      </h2>
   )
}
