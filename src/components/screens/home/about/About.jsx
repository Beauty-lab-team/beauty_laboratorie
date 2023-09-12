import Heading from '../../../UI/Heading'
import Text from '../../../UI/Text'
import s from './About.module.scss'
import Slider from './slider/Slider'

export default function About() {
   return (
      <div className={s.about}>
         <Slider />
         <div className={s.info}>
            <Heading>Про нас</Heading>
            <Text className='sm:max-w-sm'>
               Привіт, я Оксана Розбейко, косметолог-ін'єкціоніст з 22-річним досвідом роботи, включаючи 13 років у косметології. Використовую
               сертифіковані препарати від відомих брендів і постійно підвищую свій професійний рівень. Тренер по плазменному омолодженню
               Luxusplasmaliner та викладач медичних основ в міжнародній школі Перманентного макіяжу Ірини Вербової.
            </Text>
         </div>
      </div>
   )
}
