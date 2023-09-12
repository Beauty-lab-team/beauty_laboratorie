import s from './Footer.module.scss'

export default function Footer() {
   return (
      <footer className={s.footer}>
         <div className={s.content}>
            <div className={s.contacts}>
               <a className={s.location} href='#'>
                  пр. Дмитра Яворницького 50, Дніпро
               </a>
               <a className={s.tel} href='tel:+'>
                  +38(093)452-08-91
               </a>
            </div>
            <div className={s.social}>
               <a href='https://www.facebook.com/'>
                  <img src='/icons/facebook.svg' alt='facebook' />
               </a>
               <a href='https://www.instagram.com/'>
                  <img src='/icons/instagram.svg' alt='instagram' />
               </a>
            </div>
         </div>
      </footer>
   )
}
