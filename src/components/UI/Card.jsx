import CardHeading from './CardHeading'
import Text from './Text'

export default function Card() {
   return (
      <div className='mt-0 rounded-basic bg-accent-2 p-6'>
         <CardHeading>Lorem ipsum dolor sit amet</CardHeading>
         <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquam nemo error commodi vitae sint nisi exercitationem vel pariatur
            quia.
         </Text>
      </div>
   )
}
