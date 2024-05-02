export default function ThankyouLayout({ children }) {
   return (
      <div className='app flex flex-col min-h-screen overflow-hidden'>
         <div className='container px-3 md:px-12 flex-1 mx-auto mb-[100px] md:mb-[120px]'>{children}</div>
      </div>
   )
}
