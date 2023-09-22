import s from './Footer.module.scss'

export default function Footer() {
   return (
      <footer className={s.footer}>
         <div className={s.content}>
            <div className={s.contacts}>
               <div className={s.location}>
                  <p>Ми знаходимося за адресою:</p>
                  <a href="https://www.google.com/maps/place/Dmytra+Yavornytskoho+Ave,+72%D0%B1,+Dnipro,+Dnipropetrovs'ka+oblast,+Ukraine,+49000/@48.4706639,35.0328847,17z/data=!3m1!4b1!4m6!3m5!1s0x40dbe2e555b23623:0x2469c4a31d693eae!8m2!3d48.4706639!4d35.0354596!16s%2Fg%2F11c4ntq5m1?entry=ttu">
                     пр. Д. Яворницького 72Б, Дніпро
                  </a>
               </div>
               <div className={s.tel}>
                  <p>Наш телефон:</p>
                  <a href='tel:+380934520891'>+38(093)452-08-91</a>
               </div>
            </div>
            <div className={s.social}>
               <p>Ми в соцмережах:</p>
               <div>
                  <a href='https://www.facebook.com/profile.php?id=100026693756002'>
                     <img src='/icons/facebook.svg' alt='facebook' />
                  </a>
                  <a href='https://instagram.com/beauty.laboratorie?igshid=MzRlODBiNWFlZA=='>
                     <img src='/icons/instagram.svg' alt='instagram' />
                  </a>
               </div>
            </div>
         </div>
         <div className={s.bottom}>
            <p>© {new Date().getFullYear()} Beauty Laboratorie</p>
         </div>
      </footer>
   )
}
