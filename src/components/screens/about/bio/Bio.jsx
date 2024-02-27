import Heading from '../../../UI/Heading'
import Section from '../../../UI/Section'
import Text from '../../../UI/Text'
import Filler from '../../../UI/Filler'

export default function Bio() {
   return (
      <Section className='mt-[40px] lg:mt-[60px] relative'>
         <Filler />
         <div className='relative z-20'>
            <Heading>Наша студія</Heading>
            <Text>
               Студія краси Beauty.laboratorie надає широкий спектр послуг естетичної, апаратної, лазерної та інʼєкційної косметології. Ми працюємо на
               результат і ніколи не обіцяємо неможливого
               <br />
               <br />
               Всі апарати нові і постійно проходять необхідні ТО. Інструменти проходять хірургічну стерилізацію
               <br />
               <br />
               На рахунку нашої студії уже понад 100 задоволених клієнтів. Ми піклуємося не тільки за вашу молодість і красу, але і за комфорт вашого
               перебування в нашій студії. У нас ви завжди зможете насолодитися затишною атмосферою і комфортом за чашечкою кави чи чаю
               <br />
               <br />
               Ми завжди вам нагадаємо про ваш візит. Раді бачити вас завжди в нашому просторі
               <br />
               <br />
               Пн-Сб: <span className='font-medium'>10:00 - 19:00</span> <br /> Нд: <span className='font-medium'>вихідний</span>
            </Text>
         </div>
      </Section>
   )
}
