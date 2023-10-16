import Image from 'next/image'
import s from './Services.module.scss'
import CardHeading from '../../UI/CardHeading'
import Button from '../../UI/Button'
import LinkToPage from '../../UI/LinkToPage'

export default function ServiceCard({ categoryMain, id, formHandler }) {
   const handleOpen = () => {
      formHandler(true)
      document.body.style.overflow = 'hidden'
   }

   return (
      <div className={s.service}>
         <Image className={s.image} src={''} alt='' width={300} height={200} />
         <CardHeading className='flex-1'>{categoryMain}</CardHeading>
         <div className={s.buttons}>
            <Button onClick={handleOpen}>Запис на прийом</Button>
            <LinkToPage link={`/prices/#${id}`}>Цiни</LinkToPage>
         </div>
      </div>
   )
}
