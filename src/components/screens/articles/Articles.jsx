import Heading from '../../UI/Heading'
import Appointment from '../../common/appointment/Appointment'
import Articles from '../../common/articles/Articles'

export default function ArticlesPage() {
   return (
      <div>
         <Heading>Актуальні статті</Heading>
         <Articles />
         <Appointment />
      </div>
   )
}
