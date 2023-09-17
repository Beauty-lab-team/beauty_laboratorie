export default function Heading({ children }) {
   return (
      <h2 className='text-heading-mobile sm:text-heading-desktop text-text-1 font-bold leading-[64px] sm:leading-[68px] mb-[20px] sm:mb-[32px]'>
         {children}
      </h2>
   )
}
