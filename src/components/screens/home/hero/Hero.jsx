import Image from 'next/image'
import s from './Hero.module.scss'
import Link from 'next/link'
import Heading from '../../../UI/Heading'
import Text from '../../../UI/Text'

export default function Hero() {
   return (
      <div className={s.hero}>
         <div className={s.info}>
            <Heading>Смас-ліфтінг у Дніпрі</Heading>
            <Text>
               Шукаєте кваліфікованих косметологів з відгуками? Наші клієнти вдячні за ефективні процедури. Переконайтеся в цьому, зв'язавшись з нами
               безкоштовно для консультації.
               <br />
               <br />
               Довірте свою красу нам
            </Text>
            <Link href='#services'>
               <button>Переглянути послуги</button>
            </Link>
         </div>
         <Image className={s.photo} src='' alt='' width={600} height={480} />
      </div>
   )
}
