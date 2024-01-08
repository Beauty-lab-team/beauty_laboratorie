import Bio from './bio/Bio'
import Certificates from './certificates/Certificates'
import Equipment from './equipment/Equipment'
import Team from './team/Team'
import Benefits from './benefits/Benefits'
import Clinic from './clinic/Clinic'
import Appointment from '../../common/appointment/Appointment'
import Reviews from '../../common/reviews/Reviews'

export default function AboutPage() {
   return (
      <div>
         <Bio />
         <Team />
         <Certificates />
         <Clinic />
         <Equipment />
         <Benefits />
         <Reviews />
         <Appointment />
      </div>
   )
}
