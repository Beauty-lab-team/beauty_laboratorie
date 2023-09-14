export default function CardHeading({ children }) {
   return (
      <h4 className='text-cardHeading-mobile sm:text-cardHeading-desktop text-text-1 font-semibold leading-[40px] sm:leading-[44px] mb-3a'>
         {children}
      </h4>
   )
}
