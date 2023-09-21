import About from './about/About'
import Appointment from './appointment/Appointment'
import Benefits from './benefits/Benefits'
import Hero from './hero/Hero'
import Services from './services/Services'

export default function HomePage() {
   return (
      <div>
         <Hero />
         <About />
         <Services />
         <Benefits />
         <Appointment />
      </div>
   )
}
