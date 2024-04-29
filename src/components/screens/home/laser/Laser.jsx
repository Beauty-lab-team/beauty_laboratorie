import Section from '../../../UI/Section'
import Heading from '../../../UI/Heading'
import Text from '../../../UI/Text'
import Link from 'next/link'
import Form from '../../../common/form/Form'
import s from './Laser.module.scss'

export default function Laser() {
   return (
      <Section>
         <Heading level='1'>Лазерна єпіляція у Дніпрі</Heading>
         <div className='grid lg:grid-cols-2 gap-8'>
            <Text>
               В нашій BEAUTY LABORATORIE є, на вибір, відомі та дієві професійні препарати, професійного косметологічного обладнання для лазерної
               епіляції, для занурення у фітобочку або інших зазначених процедур та золоті ручки і досвід спеціалістів.
               <br />
               <br />
               Наші клієнти з нами вже багато років, але ми розширюємось та готові до нових знайомств і професійно догляду за твоїм тілом. Якість
               наданих послуг в нашому косметологічному кабінеті висока, ми свідомо не знижуємо планку якість-результат- вартість послуги. Також часто
               нам пишуть у відгуках наші красуні-жінки та дякують за якісну роботу. Але ми раді зустріти у нас і чоловіків, бо є кваліфіковані
               рішення проблем зі шкірою обличчя або тіла, які працюють дієво, незважаючи на стать.
               <br />
               <br />
               Також ми дослухалися до ваших побажань щодо можливості придбати Подарунковий сертифікат, та зробили це. І тепер жінки та чоловіки з
               радістю їх дарять своїм коханим, рідним та, навіть, колегам.
               <br />
               <br />В нашому бьюті-просторі ви зможете такий Подарунковий сертифікат на будь-яку суму або відразу на процедуру:
               <ul className={s.list}>
                  <li>слімсфера</li>
                  <li>лазерна епіляція сеанс або сет</li>
                  <li>видалення судин</li>
                  <li>пілінг та чистка обличчя</li>
                  <li>мікротоки</li>
                  <li>смас ліфтінг</li>
                  <li>рф ліфтинг</li>
                  <li>обгортання</li>
                  <li>фітобочка</li>
               </ul>
            </Text>
            <Text>
               Напишіть нашим спеціалістам, і ми залюбки допоможемо Вам обрати те, що буде кращим та корисним подарунком.
               <br />
               <br />
               Косметологи ведуть прийом у місті Дніпро на правому березі річки Дніпро, розташування дивіться за посиланням{' '}
               <Link rel='nofollow' href='/contacts'>
                  Контакти
               </Link>
               , або нижче Карта, де можна побачити наше розташування.
               <br />
               Щоб отримати якісну консультацію, домовитися на прийом та/або придбати Подарунковий сертифікат, будь-ласка, дзвоніть нам, по зазначених
               телефонах:{' '}
               <a className='underline' href='tel:+380672949525'>
                  +38(067)594-95-25
               </a>
               ;{' '}
               <a className='underline' href='tel:+380954863561'>
                  +38(095)486-35-61
               </a>
               , або заповніть форму
               <br />
               <br />
               <Form />
            </Text>
         </div>
      </Section>
   )
}
