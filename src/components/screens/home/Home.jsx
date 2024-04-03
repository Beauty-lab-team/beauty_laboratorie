import About from './about/About'
import Appointment from '../../common/appointment/Appointment'
import Benefits from './benefits/Benefits'
import ServicesHome from './services/ServicesHome'
import Reviews from '../../common/reviews/Reviews'
import Welcome from './welcome/Welcome'
import Laser from './laser/Laser'

export default function HomePage() {
   return (
      <div>
         <ServicesHome />
         <Welcome />
         <About />
         <Laser />
         <Benefits />
         <Reviews />
         <Appointment />
      </div>
   )
}
