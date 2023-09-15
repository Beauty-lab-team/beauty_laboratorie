import Bio from './bio/Bio'
import Certificates from './certificates/Certificates'
import Employees from './employees/Employees'
import Equipment from './equipment/Equipment'
import Features from './features/Features'
import Photos from './photos/Photos'

export default function About() {
   return (
      <div>
         <Bio />
         <Features />
         <Employees />
         <Equipment />
         <Certificates />
         <Photos />
      </div>
   )
}
