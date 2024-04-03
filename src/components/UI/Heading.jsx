export default function Heading(props) {
   return (
      <h2
         aria-level={props.level}
         className={`${props.className} font-nyght-italic text-heading-mobile md:text-heading-desktop text-text-1 leading-[62px] lg:leading-[78px] mb-[20px] lg:mb-[44px]`}
      >
         {props.children}
      </h2>
   )
}
