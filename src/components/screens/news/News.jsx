import Heading from '../../UI/Heading'
import News from '../../common/news/News'
import Appointment from '../../common/appointment/Appointment'

export default function NewsPage() {
   return (
      <div>
         <Heading>Актуальні новини</Heading>
         <News />
         <Appointment />
      </div>
   )
}
