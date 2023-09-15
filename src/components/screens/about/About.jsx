import Bio from './bio/Bio'
import Certificates from './certificates/Certificates'
import Equipment from './equipment/Equipment'
import Features from '../../common/Features'
import Photos from './photos/Photos'
import Team from './team/Team'

export default function About() {
   return (
      <div>
         <Bio />
         <Features />
         <Team />
         <Equipment />
         <Certificates />
         <Photos />
      </div>
   )
}
