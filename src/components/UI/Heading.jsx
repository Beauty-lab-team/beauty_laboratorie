export default function Heading(props) {
   return (
      <h2
         className={`${props.className} font-forum text-heading-mobile lg:text-heading-desktop text-text-1 font-semibold tracking-normal leading-[64px] lg:leading-[68px] mb-[20px] lg:mb-[48px]`}
      >
         {props.children}
      </h2>
   )
}
