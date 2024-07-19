import Heading from '../../../UI/Heading'
import Section from '../../../UI/Section'
import Text from '../../../UI/Text'
import Filler from '../../../UI/Filler'

export default function Bio() {
   return (
      <Section className='mt-[40px] lg:mt-[60px] relative'>
         <Filler />
         <div className='relative z-20'>
            <Heading level='1'>Б'юті лабораторія у Дніпрі</Heading>
            <Heading level='2' size='sm'>
               Про нас
            </Heading>
            <Text>
               Студія краси Beauty.laboratorie надає широкий спектр послуг естетичної, апаратної, лазерної та ін’єкційної косметології. Ми працюємо на
               результат і ніколи не обіцяємо неможливого.
               <br />
               Наші фахівці знають все про вашу молодість та красу, і як саме можливо її зберегти та подовжити за допомогою наших процедур по догляду
               за обличчям і тілом. Всі апарати нові і постійно проходять необхідні ТО. Інструменти проходять хірургічну стерилізацію
               <br />
               Коли Ви приходите до нас, то отримуєте найкращі пропозиції, чудовий сервіс, всі наші працівники з медичною освітою, тому зможуть
               допомогти Вам, як у виборі процедури, так і зробити її максимально корисною і комфортною для Вас.
               <br />
               Всі апарати в лабораторії нові і постійно проходять необхідне технічне обслуговування. Інструменти проходять хірургічну стерилізацію.
               <br />
               <br />
               На рахунку нашої студії уже понад 100 задоволених клієнтів. Ми піклуємося не тільки за вашу молодість і красу, але і за комфорт вашого
               перебування в нашій студії. У нас ви завжди зможете насолодитися затишною атмосферою і комфортом за чашечкою кави або чаю.
               <br />
               <br />
               Із задоволенням оновимо та Ваше обличчя та/або тіло.
               <br />
               <br />
               Ми за день вам нагадаємо про ваш візит до нас.
               <br />
               <br />
               Раді бачити вас завжди в нашому просторі чи то на консультацію чи то на косметологічні процедури.
               <br />
               <br />
               Для вас ми працюємо за домовленістю, щоденно.
            </Text>
         </div>
      </Section>
   )
}
