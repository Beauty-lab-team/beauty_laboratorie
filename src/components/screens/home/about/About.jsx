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
               Студія краси Beauty.laboratorie надає широкий спектр послуг естетичної, апаратної, лазерної та інʼєкційної косметології.
               <br />
               <br />
               Ми працюємо на результат і маємо понад 100 задоволених клієнтів. Ми піклуємося про ваш комфорт і пропонуємо затишну атмосферу та
               чашечку кави чи чаю.
               <br />
               <br />
               Ми завжди раді вам.
               <br />
               Пн-Сб: 10:00 - 19:00, Нд: вихідний
            </Text>
         </div>
         <div className='lg:col-span-6'>
            <Employees />
         </div>
      </Section>
   )
}
