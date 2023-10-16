import Section from '../../../UI/Section'
import Heading from '../../../UI/Heading'
import Text from '../../../UI/Text'
import Employees from '../../../common/employees/Employees'

export default function About() {
   return (
      <Section className='grid grid-cols-1 lg:grid-cols-10 gap-10 justify-between'>
         <div className='lg:col-span-4'>
            <Heading>Про нас</Heading>
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
               Ми завжди вам надаємо про ваш візит. Раді бачити вас завжди в нашому просторі
               <br />
               <br />
               Пн-Сб: <span className='font-medium'>10:00 - 19:00</span> <br /> Нд: <span className='font-medium'>вихідний</span>
            </Text>
         </div>
         <div className='lg:col-span-6'>
            <Employees />
         </div>
      </Section>
   )
}
