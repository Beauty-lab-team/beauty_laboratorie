import About from './about/About'
import Appointment from '../../common/appointment/Appointment'
import Benefits from './benefits/Benefits'
import Hero from './hero/Hero'
import ServicesHome from './services/ServicesHome'

export default function HomePage() {
   return (
      <div>
         <Hero />
         <ServicesHome />
         <About />
         <Benefits />
         <Appointment />
      </div>
   )
}
