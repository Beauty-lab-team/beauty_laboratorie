import Image from 'next/image'
import s from './Services.module.scss'
import CardHeading from '../../UI/CardHeading'
import Button from '../../UI/Button'
import LinkToPage from '../../UI/LinkToPage'

export default function ServiceCard({ categoryMain, cover, id, link, text, formHandler }) {
   const handleOpen = () => {
      formHandler(true)
      document.body.style.overflow = 'hidden'
   }

   return (
      <div className={s.service}>
         <Image className={s.image} src={cover} alt={categoryMain} width={300} height={200} />
         <CardHeading className='flex-1'>{categoryMain}</CardHeading>
         <div className={s.buttons}>
            <Button onClick={handleOpen}>Запис</Button>
            <LinkToPage link={`/prices/#${id}`}>Цiни</LinkToPage>
            {text && (
               <LinkToPage className='col-span-2' link={`/services/${link}`}>
                  Детальніше
               </LinkToPage>
            )}
         </div>
      </div>
   )
}
