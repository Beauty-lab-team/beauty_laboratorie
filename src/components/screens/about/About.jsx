import Bio from './bio/Bio'
import Certificates from './certificates/Certificates'
import Equipment from './equipment/Equipment'
import Team from './team/Team'
import Benefits from './benefits/Benefits'
import Appointment from '../../common/appointment/Appointment'
import Reviews from '../../common/reviews/Reviews'

export default function AboutPage() {
   return (
      <div>
         <Bio />
         <Team />
         <Certificates />
         <Equipment />
         <Benefits />
         <Reviews />
         <Appointment />
      </div>
   )
}
