import Features from '../../common/Features'
import About from './about/About'
import Hero from './hero/Hero'
import Services from './services/Services'

export default function HomePage() {
   return (
      <div>
         <Hero />
         <About />
         <Features />
         <Services />
      </div>
   )
}
