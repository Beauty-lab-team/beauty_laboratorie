export default function Heading(props) {
   return (
      <h2
         aria-level={props.level}
         className={`${props.className} ${
            props.size == 'sm'
               ? 'font-nyght-italic text-heading-mobile-sm md:text-heading-desktop-sm leading-[54px] lg:leading-[70px]'
               : 'font-nyght-italic text-heading-mobile md:text-heading-desktop mb-[20px] lg:mb-[44px] leading-[62px] lg:leading-[78px]'
         }  text-text-1`}
      >
         {props.children}
      </h2>
   )
}
