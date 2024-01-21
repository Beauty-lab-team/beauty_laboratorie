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
            <Image className={s.photo} src='/clinic/hero.jpg' alt='' width={500} height={440} quality={100} priority />
            <div className={s.info}>
               <Heading>
                  Студiя краси <span className='text-accent-1 italic block'>Beauty .laboratorie</span>{' '}
                  <span className='text-[44px] lg:text-heading-desktop block'>Ти заслуговуєш на це…</span>
               </Heading>
               <Text>Догляд за тiлом та обличчям, лазерне видалення волосся</Text>
               <Link href='#appointment'>
                  <Button>Записатися на прийом</Button>
               </Link>
            </div>
         </div>
      </Section>
   )
}
