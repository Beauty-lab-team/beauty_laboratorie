import Clinic from '../../../components/common/clinic/Clinic'
import Reviews from '../../../components/common/reviews/Reviews'
import Benefits from '../../../components/screens/about/benefits/Benefits'
import Bio from '../../../components/screens/about/bio/Bio'
import Certificates from '../../../components/screens/about/certificates/Certificates'
import Equipment from '../../../components/screens/about/equipment/Equipment'
import Team from '../../../components/screens/about/team/Team'

export const metadata = {
   title: "Про б'юті лабораторію",
   description: "У нас найкращі пропозиції, чудовий сервіс, та гарні результати наших старань - Б'юті лабораторія у Дніпрі чекає на тебе",
}
export default function About() {
   return (
      <div>
         <Bio />
         <Team />
         <Certificates />
         <Equipment />
         <Benefits />
         <Reviews />
         <Clinic />
      </div>
   )
}
