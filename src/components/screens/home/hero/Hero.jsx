import Image from 'next/image'
import s from './Hero.module.scss'
import Link from 'next/link'
import Heading from '../../../UI/Heading'
import Text from '../../../UI/Text'
import Button from '../../../UI/Button'

export default function Hero() {
   return (
      <div className={s.hero}>
         <Image className={s.photo} src='' alt='' width={600} height={480} />
         <div className={s.info}>
            <Heading>Смас-ліфтінг у Дніпрі</Heading>
            <Text>
               Шукаєте кваліфікованих косметологів з відгуками? Наші клієнти вдячні за ефективні процедури. Переконайтеся в цьому, зв'язавшись з нами
               безкоштовно для консультації.
               <br />
               <br />
               Довірте свою красу нам
            </Text>
            <Link href='#appointment'>
               <Button>Записатися на прийом</Button>
            </Link>
         </div>
      </div>
   )
}
