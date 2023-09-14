import s from './Benefits.module.scss'
import Text from '../../../UI/Text'
import CardHeading from '../../../UI/CardHeading'

export default function Section() {
   return (
      <div className={s.section}>
         <CardHeading>Lorem ipsum dolor sit amet</CardHeading>
         <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquam nemo error commodi vitae sint nisi exercitationem vel pariatur
            quia.
         </Text>
      </div>
   )
}
