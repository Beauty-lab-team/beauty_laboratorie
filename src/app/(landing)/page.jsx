import Reviews from '../../components/common/reviews/Reviews'
import Benefits from '../../components/screens/home/benefits/Benefits'
import Laser from '../../components/screens/home/laser/Laser'
import ServicesHome from '../../components/screens/home/services/ServicesHome'
import Welcome from '../../components/screens/home/welcome/Welcome'
import About from '../../components/screens/home/about/About'

export default function Home() {
   return (
      <>
         <ServicesHome />
         <Welcome />
         <About />
         <Laser />
         <Benefits />
         <Reviews />
      </>
   )
}
