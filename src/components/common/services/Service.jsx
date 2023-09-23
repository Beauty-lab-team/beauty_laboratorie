import Image from 'next/image'
import s from './Services.module.scss'
import Text from '../../UI/Text'
import CardHeading from '../../UI/CardHeading'

export default function Service({ name, description, image, formHandler }) {
   return (
      <div className={s.service}>
         <Image className={s.image} src={image} alt='' width={300} height={200} />
         <div className={s.content}>
            <CardHeading>{name}</CardHeading>
            <Text>{description}</Text>
            <div className={s.buttons}>
               <button onClick={() => formHandler(true)}>Запис на прийом</button>
               <button>Ціни</button>
            </div>
         </div>
      </div>
   )
}
