import Image from 'next/image'
import s from './Equipment.module.scss'
import CardHeading from '../../../UI/CardHeading'

export default function EquipmentCard({ name, src }) {
   const isImage = /\.(jpe?g|png|gif|bmp)$/i.test(src)
   const isVideo = /\.mp4$/i.test(src)

   return (
      <div className={s.equipment}>
         {isImage && <Image src={src} width={720} height={1280} alt={name} />}
         {isVideo && <video src={src} autoPlay loop playsInline muted loading='lazy' />}
         <CardHeading className='mt-3 text-center'>{name}</CardHeading>
      </div>
   )
}
