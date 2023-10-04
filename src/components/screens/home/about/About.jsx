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
               Привiт, я Оксана Розбейко, косметолог-iн'єкцiонiст з 22-рiчним досвiдом роботи, включаючи 13 рокiв у косметологiї. Використовую
               сертифiкованi препарати вiд вiдомих брендiв i постiйно пiдвищую свiй професiйний рiвень. Тренер по плазменному омолодженню
               Luxusplasmaliner та викладач медичних основ в мiжнароднiй школi Перманентного макiяжу iрини Вербової.
            </Text>
         </div>
         <div className='lg:col-span-6'>
            <Employees />
         </div>
      </Section>
   )
}
