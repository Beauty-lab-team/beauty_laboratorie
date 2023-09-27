import Image from 'next/image'
import s from './Clinic.module.scss'

export default function ClinicCard({ src }) {
   const isImage = /\.(jpe?g|png|gif|bmp)$/i.test(src)
   const isVideo = /\.mp4$/i.test(src)

   return (
      <div className={s.clinic}>
         {isImage && <Image src={src} width={480} height={640} alt={name} />}
         {isVideo && <video width='480' height='640' src={src} autoPlay loop muted />}
      </div>
   )
}
