import About from './about/About'
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
      </div>
   )
}
