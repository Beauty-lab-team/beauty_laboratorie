import Footer from './footer/Footer'
import Meta from './meta'
import Navbar from './navbar/Navbar'

export default function Layout({ title, description, preview, children }) {
   return (
      <>
         <Meta title={title} description={description} />
         <div className='app flex flex-col min-h-screen overflow-hidden'>
            <Navbar />
            <div className='container mx-auto px-3 flex-1 mt-[140px] sm:mt-[160px]'>{children}</div>
            <Footer />
         </div>
      </>
   )
}
