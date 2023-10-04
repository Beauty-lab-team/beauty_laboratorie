export default function Heading(props) {
   return (
      <h2
         className={`${props.className} font-praho text-heading-mobile lg:text-heading-desktop text-text-1 font-medium tracking-normal leading-[60px] lg:leading-[68px] mb-[20px] lg:mb-[48px]`}
      >
         {props.children}
      </h2>
   )
}
