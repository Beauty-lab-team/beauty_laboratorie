import Bio from './bio/Bio'
import Certificates from './certificates/Certificates'
import Equipment from './equipment/Equipment'
import Team from './team/Team'
import Benefits from './benefits/Benefits'
import Clinic from './clinic/Clinic'

export default function AboutPage() {
   return (
      <div>
         <Bio />
         <Team />
         <Clinic />
         <Equipment />
         <Benefits />
         <Certificates />
      </div>
   )
}
