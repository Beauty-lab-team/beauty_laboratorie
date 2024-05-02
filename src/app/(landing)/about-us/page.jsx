import Reviews from '../../../components/common/reviews/Reviews'
import Benefits from '../../../components/screens/about/benefits/Benefits'
import Bio from '../../../components/screens/about/bio/Bio'
import Certificates from '../../../components/screens/about/certificates/Certificates'
import Equipment from '../../../components/screens/about/equipment/Equipment'
import Team from '../../../components/screens/about/team/Team'

export const metadata = {
   title: 'Про нас',
   description:
      "Косметична студія 'Beauty.laboratorie' - це команда професіоналів, які працюють для того, щоб ви були красивими та здоровими. Ми пропонуємо широкий спектр послуг, включаючи догляд за обличчям, тілом, волоссям та нігтями. Наші фахівці використовують тільки якісні препарати та обладнання, щоб забезпечити вам максимальний результат.",
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
      </div>
   )
}
