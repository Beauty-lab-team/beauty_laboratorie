import Section from '../../../UI/Section'
import Heading from '../../../UI/Heading'
import Text from '../../../UI/Text'
import Employees from '../../../common/employees/Employees'
import s from './About.module.scss'

export default function About() {
   return (
      <Section className='grid grid-cols-1 lg:grid-cols-10 gap-10 justify-between'>
         <div className={s.employees}>
            <Employees />
         </div>
         <div className={s.info}>
            <Heading>Про нас</Heading>
            <Text>
               Привіт, я Оксана Розбейко, косметолог-ін'єкціоніст з 22-річним досвідом роботи, включаючи 13 років у косметології. Використовую
               сертифіковані препарати від відомих брендів і постійно підвищую свій професійний рівень. Тренер по плазменному омолодженню
               Luxusplasmaliner та викладач медичних основ в міжнародній школі Перманентного макіяжу Ірини Вербової.
            </Text>
         </div>
      </Section>
   )
}
