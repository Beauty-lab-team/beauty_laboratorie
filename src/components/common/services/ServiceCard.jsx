import Image from 'next/image'
import s from './Services.module.scss'
import CardHeading from '../../UI/CardHeading'
import Button from '../../UI/Button'

export default function ServiceCard({ categoryMain, subcategories, services, formHandler }) {
   const handleOpen = () => {
      formHandler(true)
      document.body.style.overflow = 'hidden'
   }

   return (
      <div className={s.service}>
         <Image className={s.image} src={''} alt='' width={300} height={200} />
         <div className={s.content}>
            <CardHeading>{categoryMain}</CardHeading>
            <div className={s.buttons}>
               <Button onClick={handleOpen}>Запис на прийом</Button>
               <Button>Цiни</Button>
            </div>
         </div>
      </div>
   )
}
