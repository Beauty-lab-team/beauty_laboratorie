export default function Heading(props) {
   return (
      <h2
         className={`${props.className} text-heading-mobile lg:text-heading-desktop text-text-1 font-bold leading-[64px] lg:leading-[68px] mb-[20px] lg:mb-[32px]`}
      >
         {props.children}
      </h2>
   )
}
