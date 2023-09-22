import Image from 'next/image'
import s from './Employee.module.scss'

export default function Employee({ name, position, image }) {
   return (
      <div className={s.employee}>
         <Image className={s.image} src={image} width={300} height={370} />
         <p className={s.name}>{name}</p>
         <p className={s.position}>{position}</p>
      </div>
   )
}
