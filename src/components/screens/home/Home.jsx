import About from './about/About'
import Appointment from '../../common/appointment/Appointment'
import Benefits from './benefits/Benefits'
import ServicesHome from './services/ServicesHome'
import Reviews from '../../common/reviews/Reviews'
// import Instagram from '../../common/instagram/Instagram'

export default function HomePage() {
   return (
      <div>
         <ServicesHome />
         <About />
         {/* <Instagram /> */}
         <Benefits />
         <Reviews />
         <Appointment />
      </div>
   )
}
