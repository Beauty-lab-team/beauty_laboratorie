import Image from 'next/image'
import s from './Slider.module.scss'

export default function Employee({ name, position, image }) {
   return (
      <div className={s.employee}>
         <Image className={s.image} src={image} width={300} height={400} />
         <p className={s.name}>{name}</p>
         <p className={s.position}>{position}</p>
      </div>
   )
}
