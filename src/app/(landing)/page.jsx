import Reviews from '../../components/common/reviews/Reviews'
import Benefits from '../../components/screens/home/benefits/Benefits'
import Laser from '../../components/screens/home/laser/Laser'
import ServicesHome from '../../components/screens/home/services/ServicesHome'
import Welcome from '../../components/screens/home/welcome/Welcome'
import About from './about-us/page'
import LandingLayout from './layout'

export default function Home() {
   return (
      <LandingLayout>
         <ServicesHome />
         <Welcome />
         <About />
         <Laser />
         <Benefits />
         <Reviews />
      </LandingLayout>
   )
}
