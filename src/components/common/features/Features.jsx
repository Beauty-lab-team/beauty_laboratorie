'use client'
import Text from '../../UI/Text'
import Accordion from '../../UI/accordion/Accordion'
import s from './Features.module.scss'

export default function Features() {
   return (
      <div className={s.features}>
         <Accordion heading='Комплексний догляд'>
            <Text onClick={e => e.stopPropagation()}>
               Наша косметологiчна студiя спецiалiзується на доглядi за обличчям та тiлом, щоб забезпечити вам повний комплексний пiдхiд до краси i
               добробуту
            </Text>
         </Accordion>
         <Accordion heading='Сучаснi технологiї'>
            <Text onClick={e => e.stopPropagation()}>
               Ми використовуємо передовi апарати нового поколiння, щоб забезпечити вам найкращi результати в косметологiї
            </Text>
         </Accordion>
         <Accordion heading='Професiонали'>
            <Text onClick={e => e.stopPropagation()}>
               Нашi спецiалiсти мають медичну освiту i фахову пiдготовку в галузi косметологiї. Вони постiйно пiдвищують свою квалiфiкацiю та
               слiдкують за останнiми тенденцiями у свiтi краси
            </Text>
         </Accordion>
         <Accordion heading='Персональний пiдхiд'>
            <Text onClick={e => e.stopPropagation()}>
               Ми створюємо iндивiдуальнi програми для кожного клiєнта, об'єднуючи рiзнi процедури для досягнення оптимальних результатiв
            </Text>
         </Accordion>
      </div>
   )
}
