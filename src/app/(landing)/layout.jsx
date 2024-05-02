import Appointment from '../../components/common/appointment/Appointment'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/screens/home/hero/Hero'

export default function LandingLayout({ children }) {
   return (
      <div className='app flex flex-col min-h-screen overflow-hidden'>
         <Navbar />
         <Hero />
         <div className='container px-3 md:px-12 flex-1 mx-auto mb-[100px] md:mb-[120px]'>
            {children}
            <Appointment />
         </div>
         <Footer />
      </div>
   )
}
