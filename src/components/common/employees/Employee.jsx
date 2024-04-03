import Image from 'next/image'
import s from './Employee.module.scss'

export default function Employee({ name, about, profile, image }) {
   return (
      <div className={s.employee}>
         <Image className={s.image} alt={name} src={image} width={300} height={370} quality={100} />
         <p className={s.name}>{name}</p>
         <p className={s.about}>{about}</p>
         <p className={s.profileTitle}>Основна професійна спеціалізація:</p>
         <ul className={s.profile}>
            {profile.map((el, i) => (
               <li key={i}>{el}</li>
            ))}
         </ul>
      </div>
   )
}
