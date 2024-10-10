export default function Heading(props) {
   const isH1 = props.level === '1'

   if (isH1)
      return (
         <h1
            aria-level={props.level}
            className={`${props.className} ${
               props.size == 'sm'
                  ? 'font-nyght-italic tracking-wide font-light text-heading-mobile-sm md:text-heading-desktop-sm leading-tight lg:leading-snug mb-4'
                  : 'font-nyght-italic tracking-wide text-heading-mobile md:text-heading-desktop mb-[20px] lg:mb-[44px] leading-[62px] lg:leading-[78px]'
            }  text-text-1`}
         >
            {props.children}
         </h1>
      )
   else {
      return (
         <h2
            aria-level={props.level}
            className={`${props.className} ${
               props.size == 'sm'
                  ? 'font-nyght-italic tracking-wide font-light text-heading-mobile-sm md:text-heading-desktop-sm leading-tight lg:leading-snug mb-4'
                  : 'font-nyght-italic tracking-wide text-heading-mobile md:text-heading-desktop mb-[20px] lg:mb-[44px] leading-[62px] lg:leading-[78px]'
            }  text-text-1`}
         >
            {props.children}
         </h2>
      )
   }
}
