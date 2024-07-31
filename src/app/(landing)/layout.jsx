import Appointment from '../../components/common/appointment/Appointment'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import getData from '../../utils/getData.js'

export default async function LandingLayout({ children }) {
   const { allData } = await getData('services')

   return (
      <div className='app flex flex-col min-h-screen overflow-hidden'>
         <Navbar servicesLinks={allData} />
         <div className='container px-3 md:px-12 flex-1 mx-auto mb-[100px] md:mb-[120px]'>
            {children}
            <Appointment />
         </div>
         <Footer />
      </div>
   )
}
