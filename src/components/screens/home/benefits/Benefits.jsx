import Heading from '../../../UI/Heading'
import s from './Benefits.module.scss'
import Section from './Section'

export default function Benefits() {
   return (
      <div className={s.benefits}>
         <Heading>Чому треба обрати нас?</Heading>
         <div className={s.sections}>
            <Section />
            <Section />
            <Section />
         </div>
      </div>
   )
}
