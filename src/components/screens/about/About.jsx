import Bio from './bio/Bio'
import Certificates from './certificates/Certificates'
import Equipment from './equipment/Equipment'
import Photos from './photos/Photos'
import Team from './team/Team'
import Benefits from './benefits/Benefits'

export default function AboutPage() {
   return (
      <div>
         <Bio />
         <Team />
         <Benefits />
         <Equipment />
         <Certificates />
         <Photos />
      </div>
   )
}
