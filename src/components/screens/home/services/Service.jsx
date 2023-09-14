import Image from 'next/image'
import s from './Services.module.scss'
import Text from '../../../UI/Text'
import CardHeading from '../../../UI/CardHeading'

export default function Service({ name, description, image, prices }) {
   return (
      <div className={s.service}>
         <Image className={s.image} src={image} alt='' width={300} height={200} />
         <div className={s.content}>
            <CardHeading>{name}</CardHeading>
            <Text>{description}</Text>
            <ul className='flex flex-col gap-1 mt-5'>
               {prices.split(';').map((price, i) => (
                  <li key={i} className=''>
                     <Text className='text-xl'>{price}</Text>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   )
}
