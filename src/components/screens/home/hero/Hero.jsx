import Image from 'next/image'
import s from './Hero.module.scss'
import Link from 'next/link'
import Heading from '../../../UI/Heading'
import Text from '../../../UI/Text'
import Button from '../../../UI/Button'
import Section from '../../../UI/Section'

export default function Hero() {
   return (
      <Section>
         <div className={s.hero}>
            <Image className={s.photo} src='' alt='' width={500} height={440} quality={100} priority />
            <div className={s.info}>
               <Heading>Смас-лiфтiнг у Днiпрi</Heading>
               <Text>
                  Шукаєте квалiфiкованих косметологiв з вiдгуками? Нашi клiєнти вдячнi за ефективнi процедури. Переконайтеся в цьому, зв'язавшись з
                  нами безкоштовно для консультацiї.
                  <br />
                  <br />
                  Довiрте свою красу нам
               </Text>
               <Link href='#appointment'>
                  <Button>Записатися на прийом</Button>
               </Link>
            </div>
         </div>
      </Section>
   )
}
